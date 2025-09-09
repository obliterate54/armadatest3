'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import AppDownloadModal from '@/components/AppDownloadModal';
import CreateConvoyModal from '@/components/CreateConvoyModal';

const CTABanner = () => {
  const [showAppModal, setShowAppModal] = useState(false);
  const [showConvoyModal, setShowConvoyModal] = useState(false);

  return (
    <section className="py-20 bg-dark-canvas">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-card text-center relative overflow-hidden"
        >
          {/* Background Gradient */}
          <div className="absolute inset-0 bg-gradient-to-r from-electric-cyan/10 via-transparent to-neon-yellow/10" />
          
          <div className="relative z-10">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-4xl md:text-6xl font-sora font-bold mb-6 tracking-tight"
            >
              Ready to <span className="gradient-text">Roll?</span>
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="text-xl text-text-muted mb-10 max-w-2xl mx-auto"
            >
              Join thousands of drivers already using Armada to organize epic convoys and unforgettable road trips.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Button 
                size="lg" 
                onClick={() => setShowAppModal(true)}
                className="glass-btn-primary text-lg px-8 py-6"
              >
                Get the App
              </Button>
              <Button 
                size="lg" 
                onClick={() => setShowConvoyModal(true)}
                variant="outline" 
                className="glass-btn border-white/30 text-white hover:bg-white/10 text-lg px-8 py-6"
              >
                Create a Convoy
              </Button>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Modals */}
      <AppDownloadModal isOpen={showAppModal} onClose={() => setShowAppModal(false)} />
      <CreateConvoyModal isOpen={showConvoyModal} onClose={() => setShowConvoyModal(false)} />
    </section>
  );
};

export default CTABanner;