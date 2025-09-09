'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Users, Route, Shield, Settings } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import AppDownloadModal from '@/components/AppDownloadModal';
import CreateConvoyModal from '@/components/CreateConvoyModal';

export default function HostTools() {
  const [showAppModal, setShowAppModal] = useState(false);
  const [showConvoyModal, setShowConvoyModal] = useState(false);

  const hostFeatures = [
    {
      icon: Users,
      title: 'Convoy Management',
      description: 'Organize large groups, assign roles, and manage participants with advanced moderation tools.',
    },
    {
      icon: Route,
      title: 'Route Planning',
      description: 'Set complex routes with multiple waypoints, stops, and alternative paths for optimal convoy flow.',
    },
    {
      icon: Shield,
      title: 'Safety Controls',
      description: 'Implement safety measures, emergency protocols, and real-time monitoring for large convoys.',
    },
    {
      icon: Settings,
      title: 'Advanced Settings',
      description: 'Customize convoy behavior, set permissions, and configure automated responses.',
    },
  ];

  return (
    <div className="min-h-screen bg-dark-canvas text-text-primary py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <Link href="/" className="inline-flex items-center gap-2 text-electric-cyan hover:underline">
            <ArrowLeft className="h-4 w-4" />
            Back to Home
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-6xl font-sora font-bold mb-6 tracking-tight">
            Host <span className="gradient-text">Tools</span>
          </h1>
          <p className="text-xl text-text-muted max-w-3xl mx-auto">
            Advanced tools for convoy organizers and community leaders to manage large-scale automotive events.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {hostFeatures.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + index * 0.1 }}
              className="glass-card"
            >
              <div className="w-16 h-16 glass-shine flex items-center justify-center border border-electric-cyan/30 bg-electric-cyan/10 mb-6">
                <feature.icon className="h-8 w-8 text-electric-cyan" />
              </div>
              <h3 className="text-2xl font-sora font-semibold mb-4">{feature.title}</h3>
              <p className="text-text-muted leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="glass-card text-center"
        >
          <h2 className="text-3xl font-sora font-bold mb-6 tracking-tight">
            Ready to Lead a Convoy?
          </h2>
          <p className="text-xl text-text-muted mb-8 max-w-2xl mx-auto">
            Host tools are included free with every Armada account. Start organizing your first convoy today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
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
              Learn More
            </Button>
          </div>

          <div className="mt-8 p-4 bg-neon-yellow/10 rounded-2xl border border-neon-yellow/30">
            <p className="text-sm text-neon-yellow">
              TODO: Add authentication and actual host dashboard when user accounts are implemented.
            </p>
          </div>
        </motion.div>
      </div>

      {/* Modals */}
      <AppDownloadModal isOpen={showAppModal} onClose={() => setShowAppModal(false)} />
      <CreateConvoyModal isOpen={showConvoyModal} onClose={() => setShowConvoyModal(false)} />
    </div>
  );
}