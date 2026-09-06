'use client';

import { useEffect } from 'react';
import { MapPin, Loader2, CheckCircle, AlertCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useGeolocation } from '@/hooks/use-geolocation';
import { useWizardStore } from './wizard-store';
import { useLanguage } from '@/lib/language-context';

export function StepLocation() {
  const { t } = useLanguage();
  const { lat, lng, address, setLocation, setAddress } = useWizardStore();
  const { location, error, loading, getLocation } = useGeolocation();

  useEffect(() => {
    if (location) {
      setLocation(location);
    }
  }, [location, setLocation]);

  const handleGetLocation = async () => {
    await getLocation();
  };

  const hasLocation = lat !== null && lng !== null;

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-xl font-bold text-slate-900">{t('stepLocation')}</h2>
        <p className="mt-1 text-sm text-slate-500">
          {t('captureLocation')}
        </p>
      </div>

      <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
        {hasLocation ? (
          <div className="flex items-start gap-3">
            <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-green-600" />
            <div className="flex-1">
              <p className="text-sm font-medium text-green-700">
                {t('locationCaptured')}
              </p>
              <p className="mt-1 text-xs text-slate-500">
                Lat: {lat?.toFixed(6)}, Lng: {lng?.toFixed(6)}
              </p>
            </div>
          </div>
        ) : (
          <div className="flex flex-col items-center gap-3 py-4">
            <MapPin className="h-10 w-10 text-slate-300" />
            <Button
              type="button"
              onClick={handleGetLocation}
              disabled={loading}
              className="gap-2"
            >
              {loading ? (
                <>
                  <Loader2 className="h-4 w-4 animate-spin" />
                  {t('getLocation')}...
                </>
              ) : (
                <>
                  <MapPin className="h-4 w-4" />
                  {t('getLocation')}
                </>
              )}
            </Button>
          </div>
        )}

        {error && (
          <div className="mt-3 flex items-start gap-2 rounded-lg bg-red-50 p-3">
            <AlertCircle className="mt-0.5 h-4 w-4 shrink-0 text-red-600" />
            <p className="text-sm text-red-600">{error}</p>
          </div>
        )}
      </div>

      <div>
        <label
          htmlFor="address"
          className="mb-1.5 block text-sm font-medium text-slate-700"
        >
          {t('addressHint')}
        </label>
        <Input
          id="address"
          type="text"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          placeholder="e.g. Near Central Park, Sector 4"
          className="max-w-md"
        />
      </div>


    </div>
  );
}
