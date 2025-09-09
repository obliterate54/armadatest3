'use client';

import { useEffect, useState, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import dynamic from 'next/dynamic';
import { motion } from 'framer-motion';
import { MapPin } from 'lucide-react';
import { parseMapParams } from '@/lib/geo';

// Disable SSR for the map component
const LiveMap = dynamic(() => import('@/components/LiveMap'), {
  ssr: false,
  loading: () => (
    <div className="h-screen w-full bg-dark-canvas flex items-center justify-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="text-center"
      >
        <div className="w-16 h-16 mx-auto mb-4 glass-shine flex items-center justify-center border border-electric-cyan/30 bg-electric-cyan/10">
          <MapPin className="h-8 w-8 text-electric-cyan animate-pulse" />
        </div>
        <h2 className="text-xl font-sora font-semibold mb-2">Loading Map...</h2>
        <p className="text-text-muted">Preparing your navigation experience</p>
      </motion.div>
    </div>
  ),
});

function MapPageContent() {
  const searchParams = useSearchParams();
  const [initialParams, setInitialParams] = useState<any>(null);

  useEffect(() => {
    const params = parseMapParams(searchParams);
    setInitialParams(params);
  }, [searchParams]);

  return <LiveMap initialParams={initialParams} />;
}

export default function MapPage() {
  return (
    <div className="min-h-screen bg-dark-canvas">
      <Suspense fallback={
        <div className="h-screen w-full bg-dark-canvas flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center"
          >
            <div className="w-16 h-16 mx-auto mb-4 glass-shine flex items-center justify-center border border-electric-cyan/30 bg-electric-cyan/10">
              <MapPin className="h-8 w-8 text-electric-cyan animate-pulse" />
            </div>
            <h2 className="text-xl font-sora font-semibold mb-2">Loading Map...</h2>
            <p className="text-text-muted">Preparing your navigation experience</p>
          </motion.div>
        </div>
      }>
        <MapPageContent />
      </Suspense>
    </div>
  );
}