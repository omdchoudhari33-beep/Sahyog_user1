import { createClient, type SupabaseClient } from '@supabase/supabase-js';
import type { ReportPayload, TicketStatus } from '@/types';

let _client: SupabaseClient | null = null;

function getSupabase(): SupabaseClient {
  if (_client) return _client;
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL || '';
  const key = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '';
  if (!url || !key) {
    throw new Error('Supabase environment variables are not configured.');
  }
  _client = createClient(url, key);
  return _client;
}

export const supabase = new Proxy({} as SupabaseClient, {
  get(_t, prop) {
    return Reflect.get(getSupabase(), prop);
  },
});

function generateTicketId(): string {
  const year = new Date().getFullYear();
  const random = Math.random().toString(36).substring(2, 8).toUpperCase();
  return `TC-${year}-${random}`;
}

export async function submitReport(
  payload: ReportPayload
): Promise<{ ticket_id: string } | { error: string }> {
  try {
    const ticketId = generateTicketId();
    const { data, error } = await supabase
      .from('reports')
      .insert({
        ticket_id: ticketId,
        category: payload.category,
        description: payload.description,
        voice_memo_url: payload.voice_memo_url,
        lat: payload.lat,
        lng: payload.lng,
        address: payload.address || '',
        media_urls: payload.media_urls,
        phone_number: payload.phone_number,
        status: 'submitted',
      })
      .select('id, ticket_id')
      .maybeSingle();

    if (error) {
      return { error: error.message };
    }

    if (!data) {
      return { error: 'Report could not be created' };
    }

    const { error: eventError } = await supabase.from('report_events').insert({
      report_id: data.id,
      status: 'submitted',
      note: 'Report submitted by citizen',
    });

    if (eventError) {
      return { error: eventError.message };
    }

    return { ticket_id: data.ticket_id };
  } catch (err) {
    return { error: err instanceof Error ? err.message : 'Unknown error' };
  }
}

export async function lookupTicket(
  ticketId: string,
  phoneNumber: string
): Promise<TicketStatus | { error: string }> {
  try {
    const { data, error } = await supabase
      .from('reports')
      .select(
        'id, ticket_id, category, description, lat, lng, address, media_urls, phone_number, status, created_at, updated_at'
      )
      .eq('ticket_id', ticketId)
      .maybeSingle();

    if (error) {
      return { error: error.message };
    }

    if (!data) {
      return { error: 'Ticket not found' };
    }

    if ((data as { phone_number: string }).phone_number !== phoneNumber) {
      return { error: 'Phone number does not match this ticket' };
    }

    const { data: events, error: eventsError } = await supabase
      .from('report_events')
      .select('id, status, note, created_at')
      .eq('report_id', (data as { id: string }).id)
      .order('created_at', { ascending: true });

    if (eventsError) {
      return { error: eventsError.message };
    }

    return {
      ...(data as Omit<TicketStatus, 'events'>),
      events: (events as TicketStatus['events']) || [],
    } as TicketStatus;
  } catch (err) {
    return { error: err instanceof Error ? err.message : 'Unknown error' };
  }
}
