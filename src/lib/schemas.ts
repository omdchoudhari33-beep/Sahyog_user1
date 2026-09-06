import { z } from 'zod';

export const reportSchema = z.object({
  category: z.enum(['roads', 'water', 'sanitation', 'electricity', 'other']).default('other'),
  description: z.string().optional().default(''),
  voice_memo_url: z.string().nullable(),
  lat: z.number().nullable(),
  lng: z.number().nullable(),
  address: z.string().optional().default(''),
  media_urls: z.array(z.string()).default([]),
  phone_number: z
    .string()
    .min(10, 'Phone number must be at least 10 digits')
    .max(15, 'Phone number is too long'),
});

export type ReportFormValues = z.infer<typeof reportSchema>;

export const ticketLookupSchema = z.object({
  ticket_id: z.string().min(1, 'Ticket ID is required'),
  phone_number: z
    .string()
    .min(10, 'Phone number must be at least 10 digits')
    .max(15, 'Phone number is too long'),
});

export type TicketLookupValues = z.infer<typeof ticketLookupSchema>;
