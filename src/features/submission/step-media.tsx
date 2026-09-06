'use client';

import { FileUpload } from '@/components/ui/file-upload';
import { useWizardStore } from './wizard-store';
import { useLanguage } from '@/lib/language-context';

export function StepMedia() {
  const { t } = useLanguage();
  const { mediaUrls, addMedia, removeMedia } = useWizardStore();

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-xl font-bold text-slate-900">{t('stepMedia')}</h2>
        <p className="mt-1 text-sm text-slate-500">{t('uploadHint')}</p>
      </div>

      <FileUpload
        mediaUrls={mediaUrls}
        onAdd={addMedia}
        onRemove={removeMedia}
        maxFiles={5}
      />
    </div>
  );
}
