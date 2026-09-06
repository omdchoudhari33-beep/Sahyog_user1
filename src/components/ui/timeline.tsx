'use client';

import { cn } from '@/lib/utils';
import { Check, Circle, Clock, X } from 'lucide-react';
import type { ReportEvent, ReportStatus } from '@/types';

interface TimelineProps {
  events: ReportEvent[];
  currentStatus: ReportStatus;
}

const statusOrder: ReportStatus[] = [
  'submitted',
  'under_review',
  'in_progress',
  'resolved',
];

const statusConfig: Record<ReportStatus, { color: string; bg: string; icon: typeof Check }> = {
  submitted: { color: 'text-blue-600', bg: 'bg-blue-100', icon: Check },
  under_review: { color: 'text-amber-600', bg: 'bg-amber-100', icon: Clock },
  in_progress: { color: 'text-purple-600', bg: 'bg-purple-100', icon: Clock },
  resolved: { color: 'text-green-600', bg: 'bg-green-100', icon: Check },
  rejected: { color: 'text-red-600', bg: 'bg-red-100', icon: X },
};

export function Timeline({ events, currentStatus }: TimelineProps) {
  const currentIndex = statusOrder.indexOf(currentStatus);
  const isRejected = currentStatus === 'rejected';

  return (
    <div className="space-y-0">
      {statusOrder.map((status, index) => {
        const isComplete = !isRejected && index <= currentIndex;
        const isCurrent = !isRejected && index === currentIndex;
        const config = statusConfig[status];
        const Icon = isComplete ? config.icon : Circle;
        const event = events.find((e) => e.status === status);

        return (
          <div key={status} className="flex gap-4">
            <div className="flex flex-col items-center">
              <div
                className={cn(
                  'flex h-10 w-10 shrink-0 items-center justify-center rounded-full border-2 transition-colors',
                  isComplete
                    ? cn(config.bg, config.color, 'border-transparent')
                    : 'border-slate-200 bg-slate-50 text-slate-400'
                )}
              >
                <Icon className={cn('h-5 w-5', isComplete ? '' : 'opacity-40')} />
              </div>
              {index < statusOrder.length - 1 && (
                <div
                  className={cn(
                    'w-0.5 flex-1 min-h-[2rem]',
                    !isRejected && index < currentIndex ? 'bg-blue-300' : 'bg-slate-200'
                  )}
                />
              )}
            </div>
            <div className="flex-1 pb-6">
              <p
                className={cn(
                  'text-sm font-semibold',
                  isComplete ? 'text-slate-900' : 'text-slate-400'
                )}
              >
                {status.replace('_', ' ').replace(/\b\w/g, (c) => c.toUpperCase())}
              </p>
              {event && (
                <>
                  <p className="mt-0.5 text-xs text-slate-500">
                    {new Date(event.created_at).toLocaleDateString(undefined, {
                      year: 'numeric',
                      month: 'short',
                      day: 'numeric',
                      hour: '2-digit',
                      minute: '2-digit',
                    })}
                  </p>
                  {event.note && (
                    <p className="mt-1 text-xs text-slate-600">{event.note}</p>
                  )}
                </>
              )}
              {isCurrent && !event && (
                <p className="mt-0.5 text-xs text-blue-600 font-medium">Current status</p>
              )}
            </div>
          </div>
        );
      })}

      {isRejected && (
        <div className="flex gap-4">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border-2 border-transparent bg-red-100 text-red-600">
            <X className="h-5 w-5" />
          </div>
          <div className="flex-1 pb-2">
            <p className="text-sm font-semibold text-red-600">Rejected</p>
            {events.find((e) => e.status === 'rejected')?.note && (
              <p className="mt-1 text-xs text-slate-600">
                {events.find((e) => e.status === 'rejected')?.note}
              </p>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
