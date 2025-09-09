'use client';

import { motion } from 'framer-motion';
import { MapPin, AlertCircle, RefreshCw } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface LocationBannerProps {
  type: 'loading' | 'error' | 'denied' | 'success';
  message: string;
  onRetry?: () => void;
  isRetrying?: boolean;
}

const LocationBanner = ({ type, message, onRetry, isRetrying }: LocationBannerProps) => {
  const getIcon = () => {
    switch (type) {
      case 'loading':
        return <MapPin className="h-5 w-5 text-electric-cyan animate-pulse" />;
      case 'error':
      case 'denied':
        return <AlertCircle className="h-5 w-5 text-red-400" />;
      case 'success':
        return <MapPin className="h-5 w-5 text-green-400" />;
      default:
        return <MapPin className="h-5 w-5 text-text-muted" />;
    }
  };

  const getBgColor = () => {
    switch (type) {
      case 'error':
      case 'denied':
        return 'bg-red-500/10 border-red-500/30';
      case 'success':
        return 'bg-green-500/10 border-green-500/30';
      default:
        return 'bg-electric-cyan/10 border-electric-cyan/30';
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className={`fixed top-20 left-4 right-4 z-50 mx-auto max-w-md`}
    >
      <div className={`glass-strong p-4 ${getBgColor()}`}>
        <div className="flex items-center gap-3">
          {getIcon()}
          <div className="flex-1">
            <p className="text-sm font-medium text-white">{message}</p>
          </div>
          {onRetry && (type === 'error' || type === 'denied') && (
            <Button
              onClick={onRetry}
              disabled={isRetrying}
              size="sm"
              className="glass-btn-primary text-xs px-3 py-1"
            >
              {isRetrying ? (
                <RefreshCw className="h-3 w-3 animate-spin" />
              ) : (
                'Retry'
              )}
            </Button>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default LocationBanner;