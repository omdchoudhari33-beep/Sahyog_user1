'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { ArrowLeft, ArrowRight, Check, Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/lib/language-context';
import { useWizardStore } from '@/features/submission/wizard-store';
import { StepLocation } from '@/features/submission/step-location';
import { StepMedia } from '@/features/submission/step-media';
import { StepDetails } from '@/features/submission/step-details';
import { submitReport } from '@/src/lib/api';
import { reportSchema } from '@/src/lib/schemas';

export default function ReportPage() {
  const { t } = useLanguage();
  const router = useRouter();
  const [error, setError] = useState<string | null>(null);
  const [submitting, setSubmitting] = useState(false);
  const { step, setStep, lat, lng, address, mediaUrls, description, phoneNumber, voiceMemoUrl, reset } = useWizardStore();

  const steps = [t('stepLocation'), t('stepMedia'), t('stepDetails'), t('stepReview')];
  const canContinue = step === 0 || step === 1 || (!!voiceMemoUrl && phoneNumber.length >= 10);

  const handleSubmit = async () => {
    const result = reportSchema.safeParse({ category: 'other', description, voice_memo_url: voiceMemoUrl, lat, lng, address, media_urls: mediaUrls, phone_number: phoneNumber });
    if (!result.success) {
      setError(result.error.issues[0]?.message || t('submitError'));
      return;
    }
    setSubmitting(true);
    setError(null);
    const response = await submitReport(result.data);
    setSubmitting(false);
    if ('error' in response) {
      setError(response.error);
      return;
    }
    reset();
    router.push(`/success?ticket=${encodeURIComponent(response.ticket_id)}`);
  };

  return (
    <div className="mx-auto max-w-2xl px-4 py-6 sm:py-10">
      <div className="mb-6 flex items-center justify-between">
        <Link href="/" className="inline-flex items-center gap-1 text-sm text-slate-600 hover:text-blue-600">
          <ArrowLeft className="h-4 w-4" /> {t('home')}
        </Link>
        <span className="text-sm font-medium text-slate-500">{step + 1} / {steps.length}</span>
      </div>

      <div className="mb-8 flex items-center justify-between">
        {steps.map((label, index) => (
          <div key={label} className="flex flex-1 items-center last:flex-none">
            <div className="flex flex-col items-center gap-2">
              <div className={`flex h-9 w-9 items-center justify-center rounded-full text-sm font-semibold ${index <= step ? 'bg-blue-600 text-white' : 'bg-slate-100 text-slate-400'}`}>
                {index < step ? <Check className="h-4 w-4" /> : index + 1}
              </div>
              <span className={`hidden text-xs sm:block ${index === step ? 'font-semibold text-blue-700' : 'text-slate-500'}`}>{label}</span>
            </div>
            {index < steps.length - 1 && <div className={`mx-2 h-0.5 flex-1 ${index < step ? 'bg-blue-600' : 'bg-slate-200'}`} />}
          </div>
        ))}
      </div>

      <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-7">
        {step === 0 && <StepLocation />}
        {step === 1 && <StepMedia />}
        {step === 2 && <StepDetails />}
        {step === 3 && (
          <div className="space-y-5">
            <div><h2 className="text-xl font-bold text-slate-900">{t('reviewSubmit')}</h2><p className="mt-1 text-sm text-slate-500">Check your details before sending.</p></div>
            <div className="space-y-3 rounded-xl bg-slate-50 p-4 text-sm">
              {description && <p><span className="font-medium text-slate-500">Description:</span> {description}</p>}
              <p><span className="font-medium text-slate-500">Voice Memo:</span> {voiceMemoUrl ? 'Recorded' : 'Not recorded'}</p>
              <p><span className="font-medium text-slate-500">Phone:</span> {phoneNumber}</p>
              <p><span className="font-medium text-slate-500">Photos:</span> {mediaUrls.length}</p>
              <p><span className="font-medium text-slate-500">Location:</span> {lat !== null && lng !== null ? `${lat.toFixed(5)}, ${lng.toFixed(5)}` : 'Not captured'}</p>
            </div>
          </div>
        )}

        {error && <p className="mt-5 rounded-lg bg-red-50 p-3 text-sm text-red-700" role="alert">{error}</p>}

        <div className="mt-8 flex justify-between gap-3 border-t border-slate-100 pt-5">
          <Button type="button" variant="outline" onClick={() => setStep(step - 1)} disabled={step === 0 || submitting}>{t('back')}</Button>
          {step < 3 ? (
            <Button type="button" onClick={() => setStep(step + 1)} disabled={!canContinue} className="gap-2">{t('next')} <ArrowRight className="h-4 w-4" /></Button>
          ) : (
            <Button type="button" onClick={handleSubmit} disabled={submitting} className="gap-2">{submitting ? <Loader2 className="h-4 w-4 animate-spin" /> : <Check className="h-4 w-4" />}{submitting ? t('submitting') : t('submit')}</Button>
          )}
        </div>
      </div>
    </div>
  );
}
