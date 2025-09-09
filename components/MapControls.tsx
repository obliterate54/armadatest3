'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Car, User, Bike, MapPin, Share2, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { TransportProfile } from '@/lib/geo';

interface MapControlsProps {
  profile: TransportProfile;
  onProfileChange: (profile: TransportProfile) => void;
  onLocateMe: () => void;
  onShare: () => void;
  isLocating?: boolean;
  userLocation?: { lat: number; lon: number } | null;
}

const MapControls = ({
  profile,
  onProfileChange,
  onLocateMe,
  onShare,
  isLocating,
  userLocation,
}: MapControlsProps) => {
  const [shareSuccess, setShareSuccess] = useState(false);

  const transportModes = [
    { id: 'driving' as TransportProfile, icon: Car, label: 'Drive' },
    { id: 'walking' as TransportProfile, icon: User, label: 'Walk' },
    { id: 'cycling' as TransportProfile, icon: Bike, label: 'Cycle' },
  ];

  const handleShare = async () => {
    try {
      await onShare();
      setShareSuccess(true);
      setTimeout(() => setShareSuccess(false), 2000);
    } catch (error) {
      console.error('Share failed:', error);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="fixed bottom-6 left-4 right-4 z-50"
    >
      <div className="max-w-md mx-auto">
        <div className="glass-strong p-4">
          <div className="flex items-center justify-between gap-4">
            {/* Transport Mode Toggle */}
            <div className="flex gap-2">
              {transportModes.map((mode) => (
                <button
                  key={mode.id}
                  onClick={() => onProfileChange(mode.id)}
                  className={`w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300 ${
                    profile === mode.id
                      ? 'bg-electric-cyan/20 text-electric-cyan border border-electric-cyan/30'
                      : 'text-text-muted hover:text-white hover:bg-white/10'
                  }`}
                  aria-label={mode.label}
                >
                  <mode.icon className="h-5 w-5" />
                </button>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="flex gap-2">
              <Button
                onClick={onLocateMe}
                disabled={isLocating}
                size="sm"
                className="glass-btn w-12 h-12 p-0"
                aria-label="Locate me"
              >
                <MapPin className={`h-5 w-5 ${isLocating ? 'animate-pulse' : ''}`} />
              </Button>

              <Button
                onClick={handleShare}
                disabled={!userLocation}
                size="sm"
                className="glass-btn w-12 h-12 p-0"
                aria-label="Share location"
              >
                {shareSuccess ? (
                  <Check className="h-5 w-5 text-green-400" />
                ) : (
                  <Share2 className="h-5 w-5" />
                )}
              </Button>
            </div>
          </div>

          {/* Transport Mode Labels */}
          <div className="flex gap-2 mt-3">
            {transportModes.map((mode) => (
              <div
                key={`${mode.id}-label`}
                className={`flex-1 text-center text-xs transition-colors duration-300 ${
                  profile === mode.id ? 'text-electric-cyan' : 'text-text-muted'
                }`}
              >
                {mode.label}
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default MapControls;