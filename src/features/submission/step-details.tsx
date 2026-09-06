'use client';

import { useEffect } from 'react';
import { Mic, Square, Trash2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useAudioRecorder } from '@/hooks/use-audio-recorder';
import { useWizardStore } from './wizard-store';
import { useLanguage } from '@/lib/language-context';
export function StepDetails() {
  const { t } = useLanguage();
  const { description, phoneNumber, voiceMemoUrl, setVoiceMemo, setDescription, setPhoneNumber } =
    useWizardStore();
  const { isRecording, audioUrl, error, startRecording, stopRecording, reset } =
    useAudioRecorder();

  useEffect(() => {
    setVoiceMemo(audioUrl);
  }, [audioUrl, setVoiceMemo]);

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-xl font-bold text-slate-900">{t('stepDetails')}</h2>
      </div>

      <div>
        <label
          htmlFor="description"
          className="mb-1.5 block text-sm font-medium text-slate-700"
        >
          {t('addDescription')}
        </label>
        <textarea
          id="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder={t('descriptionPlaceholder')}
          rows={4}
          className="flex min-h-[100px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
        />
      </div>

      <div>
        <label className="mb-1.5 block text-sm font-medium text-slate-700">
          Voice Memo (required)
        </label>
        <div className="flex items-center gap-3">
          {!isRecording && !audioUrl && (
            <Button
              type="button"
              variant="outline"
              onClick={startRecording}
              className="gap-2"
            >
              <Mic className="h-4 w-4 text-red-500" />
              Record Voice
            </Button>
          )}

          {isRecording && (
            <Button
              type="button"
              variant="destructive"
              onClick={stopRecording}
              className="gap-2"
            >
              <Square className="h-4 w-4" />
              Stop Recording
            </Button>
          )}

          {audioUrl && !isRecording && (
            <div className="flex items-center gap-2">
              <audio src={audioUrl} controls className="h-9 max-w-[200px]" />
              <Button
                type="button"
                variant="ghost"
                size="icon"
                onClick={reset}
                aria-label="Delete voice memo"
              >
                <Trash2 className="h-4 w-4 text-red-500" />
              </Button>
            </div>
          )}
        </div>

        {error && <p className="mt-2 text-sm text-red-600">{error}</p>}
        {!isRecording && !audioUrl && !error && (
          <p className="mt-2 text-xs text-amber-700">Please record a voice memo before continuing.</p>
        )}
      </div>

      <div>
        <label
          htmlFor="phone"
          className="mb-1.5 block text-sm font-medium text-slate-700"
        >
          {t('phoneNumber')}
        </label>
        <Input
          id="phone"
          type="tel"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
          placeholder="9876543210"
          className="max-w-xs"
        />
        <p className="mt-1 text-xs text-slate-500">{t('phoneNumberHint')}</p>
      </div>
    </div>
  );
}
