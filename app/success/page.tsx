'use client';

import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { Suspense } from 'react';
import { CheckCircle2, Copy, ArrowRight, Plus } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/lib/language-context';

function SuccessContent() {
  const { t } = useLanguage();
  const searchParams = useSearchParams();
  const ticketId = searchParams.get('ticket') || '';

  const copyTicket = () => {
    if (ticketId) {
      navigator.clipboard.writeText(ticketId);
    }
  };

  return (
    <div className="mx-auto max-w-lg px-4 py-10 sm:py-16">
      <div className="text-center">
        <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
          <CheckCircle2 className="h-9 w-9 text-green-600" />
        </div>
        <h1 className="text-2xl font-bold text-slate-900">{t('successTitle')}</h1>
        <p className="mt-2 text-sm text-slate-600">{t('successSubtitle')}</p>
      </div>

      {ticketId && (
        <div className="mt-8 rounded-xl border border-slate-200 bg-slate-50 p-5">
          <p className="text-center text-xs font-medium text-slate-500">{t('yourTicketId')}</p>
          <div className="mt-2 flex items-center justify-center gap-2">
            <span className="text-xl font-bold tracking-wide text-slate-900">{ticketId}</span>
            <button onClick={copyTicket} className="rounded-md p-1.5 text-slate-500 hover:bg-slate-200" aria-label="Copy ticket ID">
              <Copy className="h-4 w-4" />
            </button>
          </div>
          <p className="mt-2 text-center text-xs text-slate-500">{t('saveTicketId')}</p>
        </div>
      )}

      <div className="mt-8 space-y-3">
        <Link href="/status">
          <Button className="w-full gap-2"><ArrowRight className="h-4 w-4" />{t('trackYourReport')}</Button>
        </Link>
        <Link href="/report">
          <Button variant="outline" className="w-full gap-2"><Plus className="h-4 w-4" />{t('reportAnother')}</Button>
        </Link>
        <Link href="/">
          <Button variant="ghost" className="w-full">{t('home')}</Button>
        </Link>
      </div>
    </div>
  );
}

export default function SuccessPage() {
  return (
    <Suspense fallback={<div className="flex items-center justify-center py-20"><div className="h-8 w-8 animate-spin rounded-full border-4 border-slate-200 border-t-blue-600" /></div>}>
      <SuccessContent />
    </Suspense>
  );
}
