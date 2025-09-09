'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import AppDownloadModal from '@/components/AppDownloadModal';
import CreateConvoyModal from '@/components/CreateConvoyModal';
import SocialLinks from '@/components/SocialLinks';

const Hero = () => {
  const [showAppModal, setShowAppModal] = useState(false);
  const [showConvoyModal, setShowConvoyModal] = useState(false);

  return (
    <section id="home" className="relative h-screen overflow-hidden">
      {/* Background Image with Vignette */}
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=1920&h=1080&fit=crop"
          alt="Luxury sports car on scenic road"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-dark-canvas/60 via-dark-canvas/40 to-dark-canvas/80" />
        <div className="absolute inset-0 bg-gradient-radial from-transparent via-transparent to-dark-canvas/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="mb-8"
            >
              <div className="glass-chip inline-flex items-center px-4 py-2 text-sm font-medium text-neon-yellow border-neon-yellow/30 bg-neon-yellow/10">
                Built for car crews worldwide
              </div>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="text-6xl md:text-8xl font-sora font-bold tracking-tighter mb-6"
              style={{ letterSpacing: '-0.02em' }}
            >
              Drive <span className="gradient-text">together</span>.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-xl md:text-2xl font-sora font-medium mb-4 text-text-primary"
            >
              Drive as one.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="text-lg md:text-xl mb-12 text-text-muted max-w-2xl leading-relaxed"
            >
              Create convoys, invite the crew, and roll out without group-chat chaos.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="flex justify-center items-center"
            >
              <div className="flex w-full flex-col items-center justify-center gap-3 sm:flex-row max-w-lg mx-auto">
                <Button 
                  size="lg" 
                  onClick={() => setShowAppModal(true)}
                  className="glass-btn-primary text-lg px-8 py-6 w-full sm:w-auto text-center min-w-[200px]"
                >
                  Get the App
                </Button>
                <Button 
                  size="lg" 
                  onClick={() => setShowConvoyModal(true)}
                  variant="outline" 
                  className="glass-btn border-white/30 text-white hover:bg-white/10 text-lg px-8 py-6 w-full sm:w-auto text-center min-w-[200px]"
                >
                  Create a Convoy
                </Button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.0, duration: 0.8 }}
            >
              <SocialLinks />
            </motion.div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="w-1 h-3 bg-white/50 rounded-full mt-2"
          />
        </motion.div>
      </motion.div>

      {/* Modals */}
      <AppDownloadModal isOpen={showAppModal} onClose={() => setShowAppModal(false)} />
      <CreateConvoyModal isOpen={showConvoyModal} onClose={() => setShowConvoyModal(false)} />
    </section>
  );
};

export default Hero;