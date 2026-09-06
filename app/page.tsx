'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/lib/language-context';
import {
  MapPin,
  Camera,
  FileText,
  Search,
  ArrowRight,
  CheckCircle2,
  Shield,
} from 'lucide-react';

export default function Home() {
  const { t } = useLanguage();

  const steps = [
    { icon: MapPin, text: t('howItWorksStep1') },
    { icon: FileText, text: t('howItWorksStep2') },
    { icon: Shield, text: t('howItWorksStep3') },
    { icon: CheckCircle2, text: t('howItWorksStep4') },
  ];

  return (
    <div className="mx-auto max-w-2xl px-4">
      {/* Hero Section */}
      <section className="pt-8 pb-10 sm:pt-12">
        <div className="text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-blue-50 px-3 py-1 text-xs font-medium text-blue-700">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-blue-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-blue-600" />
            </span>
            {t('tagline')}
          </div>

          <h1 className="text-3xl font-bold tracking-tight text-slate-900 text-balance sm:text-4xl">
            {t('heroTitle')}
          </h1>

          <p className="mx-auto mt-4 max-w-md text-base text-slate-600 text-balance">
            {t('heroSubtitle')}
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center">
            <Link href="/report">
              <Button size="lg" className="w-full gap-2 sm:w-auto">
                <Camera className="h-5 w-5" />
                {t('startReport')}
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
            <Link href="/status">
              <Button size="lg" variant="outline" className="w-full gap-2 sm:w-auto">
                <Search className="h-5 w-5" />
                {t('trackStatus')}
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="border-t border-slate-100 py-8">
        <h2 className="mb-6 text-center text-lg font-semibold text-slate-900">
          {t('howItWorks')}
        </h2>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div
                key={index}
                className="flex items-start gap-3 rounded-xl border border-slate-200 bg-white p-4 transition-colors hover:border-blue-200 hover:bg-blue-50/50"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-blue-100 text-blue-600">
                  <Icon className="h-5 w-5" />
                </div>
                <div className="flex-1">
                  <span className="text-xs font-medium text-blue-600">
                    Step {index + 1}
                  </span>
                  <p className="mt-0.5 text-sm text-slate-700">{step.text}</p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Quick Stats */}
      <section className="border-t border-slate-100 py-8">
        <div className="grid grid-cols-2 gap-3">
          <div className="rounded-xl bg-green-50 p-4 text-center">
            <p className="text-2xl font-bold text-green-700">24/7</p>
            <p className="mt-0.5 text-xs text-slate-600">Available</p>
          </div>
          <div className="rounded-xl bg-amber-50 p-4 text-center">
            <p className="text-2xl font-bold text-amber-700">5</p>
            <p className="mt-0.5 text-xs text-slate-600">Languages</p>
          </div>
        </div>
      </section>
    </div>
  );
}
