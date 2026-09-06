'use client';

import { create } from 'zustand';
import type { ReportCategory, GeoLocation } from '@/types';

export interface WizardState {
  step: number;
  category: ReportCategory | '';
  voiceMemoUrl: string | null;
  lat: number | null;
  lng: number | null;
  address: string;
  mediaUrls: string[];
  description: string;
  phoneNumber: string;
  setStep: (step: number) => void;
  setCategory: (category: ReportCategory) => void;
  setVoiceMemo: (url: string | null) => void;
  setLocation: (location: GeoLocation) => void;
  setAddress: (address: string) => void;
  addMedia: (url: string) => void;
  removeMedia: (index: number) => void;
  setDescription: (description: string) => void;
  setPhoneNumber: (phone: string) => void;
  reset: () => void;
}

const initialState = {
  step: 0,
  category: 'other' as ReportCategory,
  voiceMemoUrl: null as string | null,
  lat: null as number | null,
  lng: null as number | null,
  address: '',
  mediaUrls: [] as string[],
  description: '',
  phoneNumber: '',
};

export const useWizardStore = create<WizardState>((set) => ({
  ...initialState,
  setStep: (step) => set({ step }),
  setCategory: (category) => set({ category }),
  setVoiceMemo: (voiceMemoUrl) => set({ voiceMemoUrl }),
  setLocation: (location) => set({ lat: location.lat, lng: location.lng }),
  setAddress: (address) => set({ address }),
  addMedia: (url) => set((state) => ({ mediaUrls: [...state.mediaUrls, url] })),
  removeMedia: (index) =>
    set((state) => ({
      mediaUrls: state.mediaUrls.filter((_, i) => i !== index),
    })),
  setDescription: (description) => set({ description }),
  setPhoneNumber: (phoneNumber) => set({ phoneNumber }),
  reset: () => set({ ...initialState }),
}));
