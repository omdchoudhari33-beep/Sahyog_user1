'use client';

import { FormEvent, useState } from 'react';
import Link from 'next/link';
import { ArrowLeft, ArrowRight, Loader2, Search } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useLanguage } from '@/lib/language-context';
import { lookupTicket } from '@/src/lib/api';

export default function StatusPage() {
  const { t } = useLanguage();
  const [ticketId, setTicketId] = useState('');
  const [phone, setPhone] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError('');
    setLoading(true);
    const result = await lookupTicket(ticketId.trim().toUpperCase(), phone.trim());
    setLoading(false);
    if ('error' in result) {
      setError(result.error);
      return;
    }
    sessionStorage.setItem('lookup-phone', phone.trim());
    window.location.href = `/status/${encodeURIComponent(result.ticket_id)}`;
  };

  return (
    <div className="mx-auto max-w-lg px-4 py-8 sm:py-12">
      <Link href="/" className="mb-8 inline-flex items-center gap-1 text-sm text-slate-600 hover:text-blue-600"><ArrowLeft className="h-4 w-4" /> {t('home')}</Link>
      <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
        <div className="mb-7 flex h-12 w-12 items-center justify-center rounded-xl bg-blue-100 text-blue-700"><Search className="h-6 w-6" /></div>
        <h1 className="text-2xl font-bold text-slate-900">{t('trackStatus')}</h1>
        <p className="mt-2 text-sm text-slate-600">Enter your ticket ID and registered phone number to view the latest update.</p>
        <form onSubmit={handleSubmit} className="mt-7 space-y-5">
          <div><label htmlFor="ticket" className="mb-1.5 block text-sm font-medium text-slate-700">{t('enterTicketId')}</label><Input id="ticket" value={ticketId} onChange={(e) => setTicketId(e.target.value)} placeholder="TC-2026-ABC123" required /><p className="mt-1 text-xs text-slate-500">{t('enterTicketIdHint')}</p></div>
          <div><label htmlFor="status-phone" className="mb-1.5 block text-sm font-medium text-slate-700">{t('enterPhone')}</label><Input id="status-phone" type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="9876543210" required /></div>
          {error && <p className="rounded-lg bg-red-50 p-3 text-sm text-red-700" role="alert">{error}</p>}
          <Button type="submit" className="w-full gap-2" disabled={loading}>{loading ? <Loader2 className="h-4 w-4 animate-spin" /> : <Search className="h-4 w-4" />}{loading ? 'Finding...' : t('lookupTicket')}<ArrowRight className="ml-auto h-4 w-4" /></Button>
        </form>
      </div>
    </div>
  );
}
