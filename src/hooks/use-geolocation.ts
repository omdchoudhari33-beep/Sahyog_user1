'use client';

import { useState, useCallback } from 'react';
import type { GeoLocation } from '@/types';

interface UseGeolocationReturn {
  location: GeoLocation | null;
  error: string | null;
  loading: boolean;
  getLocation: () => Promise<void>;
}

export function useGeolocation(): UseGeolocationReturn {
  const [location, setLocation] = useState<GeoLocation | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const getLocation = useCallback(async () => {
    if (!navigator.geolocation) {
      setError('Geolocation is not supported by your device.');
      return;
    }

    setLoading(true);
    setError(null);

    navigator.geolocation.getCurrentPosition(
      (position) => {
        setLocation({
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        });
        setLoading(false);
      },
      (err) => {
        let message = 'Could not access your location.';
        if (err.code === err.PERMISSION_DENIED) {
          message = 'Location permission denied. Please enable it in your browser settings.';
        } else if (err.code === err.POSITION_UNAVAILABLE) {
          message = 'Location information is unavailable. Try moving to an open area.';
        } else if (err.code === err.TIMEOUT) {
          message = 'Location request timed out. Please try again.';
        }
        setError(message);
        setLoading(false);
      },
      { enableHighAccuracy: true, timeout: 15000, maximumAge: 60000 }
    );
  }, []);

  return { location, error, loading, getLocation };
}
