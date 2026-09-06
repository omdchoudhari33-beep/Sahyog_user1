export type ReportStatus =
  | 'submitted'
  | 'under_review'
  | 'in_progress'
  | 'resolved'
  | 'rejected';

export type ReportCategory =
  | 'roads'
  | 'water'
  | 'sanitation'
  | 'electricity'
  | 'other';

export interface GeoLocation {
  lat: number;
  lng: number;
}

export interface ReportEvent {
  id: string;
  status: ReportStatus;
  note: string;
  created_at: string;
}

export interface TicketStatus {
  ticket_id: string;
  category: ReportCategory;
  description: string;
  lat: number | null;
  lng: number | null;
  address: string;
  media_urls: string[];
  phone_number: string;
  status: ReportStatus;
  created_at: string;
  updated_at: string;
  events: ReportEvent[];
}

export interface ReportPayload {
  category: ReportCategory;
  description: string;
  voice_memo_url: string | null;
  lat: number | null;
  lng: number | null;
  address: string;
  media_urls: string[];
  phone_number: string;
}

export type Language = 'en' | 'hi' | 'sa' | 'bn' | 'or';
