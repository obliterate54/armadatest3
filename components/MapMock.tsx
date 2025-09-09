'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Navigation } from 'lucide-react';
import { Button } from '@/components/ui/button';
import CreateConvoyModal from '@/components/CreateConvoyModal';

const MapMock = () => {
  const [showConvoyModal, setShowConvoyModal] = useState(false);

  return (
    <section className="py-20 bg-gradient-to-b from-dark-canvas to-dark-canvas/95">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-sora font-bold mb-6 tracking-tight">
            Plan Your <span className="gradient-text">Route</span>
          </h2>
          <p className="text-xl text-text-muted max-w-3xl mx-auto">
            Intelligent routing keeps your convoy together
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative max-w-4xl mx-auto"
        >
          {/* Map Container */}
          <div className="glass-card aspect-[16/10] relative overflow-hidden">
            {/* Stylized Map Background */}
            <div className="absolute inset-0 opacity-30">
              <svg
                width="100%"
                height="100%"
                viewBox="0 0 800 500"
                className="w-full h-full"
              >
                {/* Grid lines */}
                <defs>
                  <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                    <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgb(34, 227, 227)" strokeWidth="0.5" opacity="0.3"/>
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#grid)" />
                
                {/* Route Path */}
                <path
                  d="M 100 400 Q 200 300 300 350 Q 400 400 500 300 Q 600 200 700 250"
                  fill="none"
                  stroke="rgb(34, 227, 227)"
                  strokeWidth="3"
                  strokeDasharray="10,5"
                  className="animate-pulse"
                />
              </svg>
            </div>

            {/* Start Pin */}
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ delay: 0.5 }}
              className="absolute bottom-20 left-24"
            >
              <div className="relative">
                <MapPin className="h-8 w-8 text-green-500 drop-shadow-lg" fill="currentColor" />
                <div className="absolute -top-8 left-1/2 transform -translate-x-1/2">
                  <div className="glass-chip px-3 py-1 text-xs whitespace-nowrap">
                    Start
                  </div>
                </div>
              </div>
            </motion.div>

            {/* End Pin */}
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ delay: 0.7 }}
              className="absolute top-16 right-24"
            >
              <div className="relative">
                <MapPin className="h-8 w-8 text-red-500 drop-shadow-lg" fill="currentColor" />
                <div className="absolute -top-8 left-1/2 transform -translate-x-1/2">
                  <div className="glass-chip px-3 py-1 text-xs whitespace-nowrap">
                    Destination
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Route Info Overlay */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9 }}
              className="absolute top-8 left-8 right-8"
            >
              <div className="glass-strong p-6 text-center">
                <h3 className="font-sora font-semibold text-xl mb-2">Create Convoy</h3>
                <p className="text-electric-cyan font-medium text-lg">
                  691.9 mi • ETA 7:19 AM
                </p>
              </div>
            </motion.div>

            {/* Navigation Icon */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 1.1 }}
              className="absolute bottom-8 right-8"
            >
              <div className="w-12 h-12 glass-shine flex items-center justify-center border border-electric-cyan/30 bg-electric-cyan/10">
                <Navigation className="h-6 w-6 text-electric-cyan" />
              </div>
            </motion.div>
          </div>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.3 }}
            className="text-center mt-8"
          >
            <div className="flex gap-4 justify-center">
              <Button 
                size="lg" 
                onClick={() => window.open('/map', '_blank')}
                className="glass-btn-primary text-lg px-8 py-6"
              >
                Open Live Map
              </Button>
              <Button 
                size="lg" 
                onClick={() => setShowConvoyModal(true)}
                variant="outline"
                className="glass-btn border-white/30 text-white hover:bg-white/10 text-lg px-8 py-6"
              >
                Plan a Route
              </Button>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Modal */}
      <CreateConvoyModal isOpen={showConvoyModal} onClose={() => setShowConvoyModal(false)} />
    </section>
  );
};

export default MapMock;