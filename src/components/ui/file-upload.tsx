'use client';

import { useRef, useState, useCallback } from 'react';
import { Camera, X, Loader2 } from 'lucide-react';
import { cn } from '@/lib/utils';

interface FileUploadProps {
  mediaUrls: string[];
  onAdd: (url: string) => void;
  onRemove: (index: number) => void;
  maxFiles?: number;
}

async function compressImage(file: File, maxWidth: number = 1024, quality: number = 0.7): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = (e) => {
      const img = new Image();
      img.onload = () => {
        const canvas = document.createElement('canvas');
        let width = img.width;
        let height = img.height;

        if (width > maxWidth) {
          height = Math.round((height * maxWidth) / width);
          width = maxWidth;
        }

        canvas.width = width;
        canvas.height = height;
        const ctx = canvas.getContext('2d');
        if (!ctx) {
          reject(new Error('Could not get canvas context'));
          return;
        }
        ctx.drawImage(img, 0, 0, width, height);
        const dataUrl = canvas.toDataURL('image/jpeg', quality);
        resolve(dataUrl);
      };
      img.onerror = () => reject(new Error('Could not load image'));
      img.src = e.target?.result as string;
    };
    reader.onerror = () => reject(new Error('Could not read file'));
    reader.readAsDataURL(file);
  });
}

export function FileUpload({ mediaUrls, onAdd, onRemove, maxFiles = 5 }: FileUploadProps) {
  const inputRef = useRef<HTMLInputElement>(null);
  const [compressing, setCompressing] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleFiles = useCallback(
    async (files: FileList) => {
      if (mediaUrls.length + files.length > maxFiles) {
        setError(`You can upload a maximum of ${maxFiles} photos.`);
        return;
      }

      setCompressing(true);
      setError(null);

      for (const file of Array.from(files)) {
        if (!file.type.startsWith('image/')) {
          setError('Only image files are supported.');
          continue;
        }
        try {
          const compressed = await compressImage(file);
          onAdd(compressed);
        } catch {
          setError('Could not process one of your photos. Please try a different one.');
        }
      }

      setCompressing(false);
      if (inputRef.current) {
        inputRef.current.value = '';
      }
    },
    [mediaUrls.length, maxFiles, onAdd]
  );

  return (
    <div className="space-y-3">
      <input
        ref={inputRef}
        type="file"
        accept="image/*"
        capture="environment"
        multiple
        className="sr-only"
        onChange={(e) => {
          if (e.target.files && e.target.files.length > 0) {
            handleFiles(e.target.files);
          }
        }}
      />

      <button
        type="button"
        onClick={() => inputRef.current?.click()}
        disabled={compressing || mediaUrls.length >= maxFiles}
        className={cn(
          'flex w-full flex-col items-center justify-center gap-2 rounded-xl border-2 border-dashed border-slate-300 bg-slate-50 px-4 py-8 text-slate-600 transition-colors hover:border-blue-400 hover:bg-blue-50 disabled:cursor-not-allowed disabled:opacity-50',
          'focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2'
        )}
        aria-label="Upload photos"
      >
        {compressing ? (
          <>
            <Loader2 className="h-8 w-8 animate-spin text-blue-600" />
            <span className="text-sm font-medium">Processing...</span>
          </>
        ) : (
          <>
            <Camera className="h-8 w-8 text-blue-600" />
            <span className="text-sm font-medium">Tap to take or upload photos</span>
          </>
        )}
      </button>

      {error && (
        <p className="text-sm text-red-600" role="alert">
          {error}
        </p>
      )}

      {mediaUrls.length > 0 && (
        <div className="grid grid-cols-3 gap-2 sm:grid-cols-4">
          {mediaUrls.map((url, index) => (
            <div
              key={index}
              className="group relative aspect-square overflow-hidden rounded-lg border border-slate-200"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={url}
                alt={`Upload ${index + 1}`}
                className="h-full w-full object-cover"
              />
              <button
                type="button"
                onClick={() => onRemove(index)}
                className="absolute right-1 top-1 rounded-full bg-black/60 p-1 text-white opacity-0 transition-opacity group-hover:opacity-100 focus:opacity-100"
                aria-label={`Remove photo ${index + 1}`}
              >
                <X className="h-4 w-4" />
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
