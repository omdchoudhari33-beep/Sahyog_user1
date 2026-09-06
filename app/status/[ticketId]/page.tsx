'use client';

import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft, MapPin, Phone, Calendar, AlertCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Timeline } from '@/components/ui/timeline';
import { useLanguage } from '@/lib/language-context';
import { lookupTicket } from '@/src/lib/api';
import type { TicketStatus, ReportEvent } from '@/types';
import { useState, useEffect } from 'react';
import { Skeleton } from '@/components/ui/skeleton';

export default function TicketDetailPage({ params }: { params: { ticketId: string } }) {
  const { ticketId } = params;
  const router = useRouter();
  const { t } = useLanguage();
  const [data, setData] = useState<TicketStatus | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const stored = typeof window !== 'undefined' ? sessionStorage.getItem('lookup-phone') : null;
    if (!stored) {
      router.push('/status');
      return;
    }
    let active = true;
    (async () => {
      const result = await lookupTicket(ticketId, stored);
      if (!active) return;
      if ('error' in result) {
        setError(result.error);
      } else {
        setData(result);
      }
      setLoading(false);
    })();
    return () => { active = false; };
  }, [ticketId, router]);

  if (loading) {
    return (
      <div className="mx-auto max-w-lg space-y-4 px-4 py-8">
        <Skeleton className="h-8 w-32" />
        <Skeleton className="h-48 w-full rounded-xl" />
        <Skeleton className="h-64 w-full rounded-xl" />
      </div>
    );
  }

  if (error || !data) {
    return (
      <div className="mx-auto max-w-lg px-4 py-12 text-center">
        <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-red-100">
          <AlertCircle className="h-7 w-7 text-red-600" />
        </div>
        <h1 className="text-xl font-bold text-slate-900">{t('ticketNotFound')}</h1>
        <p className="mt-2 text-sm text-slate-600">{error || t('lookupError')}</p>
        <Link href="/status" className="mt-6 inline-block">
          <Button variant="outline" className="gap-2"><ArrowLeft className="h-4 w-4" />{t('trackStatus')}</Button>
        </Link>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-lg px-4 py-6 sm:py-10">
      <Link href="/status" className="mb-6 inline-flex items-center gap-1 text-sm text-slate-600 hover:text-blue-600">
        <ArrowLeft className="h-4 w-4" /> {t('trackStatus')}
      </Link>

      <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-7">
        <div className="mb-4 flex items-center justify-between">
          <h1 className="text-lg font-bold text-slate-900">{t('statusTimeline')}</h1>
          <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-700">{data.ticket_id}</span>
        </div>

        <div className="mb-5 space-y-2 rounded-xl bg-slate-50 p-4 text-sm">
          {data.lat !== null && data.lng !== null && (
            <p className="flex items-center gap-2 text-slate-700"><MapPin className="h-4 w-4 text-slate-400" /> {data.lat.toFixed(5)}, {data.lng.toFixed(5)}</p>
          )}
          {data.address && <p className="flex items-center gap-2 text-slate-700"><MapPin className="h-4 w-4 text-slate-400" /> {data.address}</p>}
          <p className="flex items-center gap-2 text-slate-700"><Phone className="h-4 w-4 text-slate-400" /> {data.phone_number}</p>
          <p className="flex items-center gap-2 text-slate-700"><Calendar className="h-4 w-4 text-slate-400" /> {new Date(data.created_at).toLocaleDateString(undefined, { year: 'numeric', month: 'short', day: 'numeric' })}</p>
        </div>

        {data.description && (
          <div className="mb-5 rounded-xl border border-slate-100 p-4">
            <p className="mb-1 text-xs font-medium text-slate-500">Description</p>
            <p className="text-sm text-slate-700">{data.description}</p>
          </div>
        )}

        <Timeline events={data.events as ReportEvent[]} currentStatus={data.status} />
      </div>
    </div>
  );
}
