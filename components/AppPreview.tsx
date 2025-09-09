'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { MapPin, TrendingUp } from 'lucide-react';
import { drivers, meets } from '@/content/mockData';

const AppPreview = () => {
  const [activeTab, setActiveTab] = useState('all');

  const handleDriverClick = (driver: any) => {
    // Create a proper driver connection modal
    const modal = document.createElement('div');
    modal.className = 'fixed inset-0 bg-black/50 flex items-center justify-center z-50';
    modal.innerHTML = `
      <div class="glass-modal max-w-md mx-4">
        <div class="flex items-center gap-4 mb-4">
          <img src="${driver.avatar}" alt="${driver.name}" class="w-16 h-16 rounded-full">
          <div>
            <h3 class="text-xl font-sora font-semibold">${driver.name}</h3>
            <p class="text-text-muted">${driver.car} • ${driver.distance}</p>
          </div>
        </div>
        <p class="text-text-muted mb-6">Connect with ${driver.name} to join convoys and car meets together!</p>
        <div class="flex gap-3">
          <button onclick="this.closest('.fixed').remove()" class="glass-btn flex-1">Maybe Later</button>
          <button onclick="this.closest('.fixed').remove()" class="glass-btn-primary flex-1">Send Request</button>
        </div>
      </div>
    `;
    document.body.appendChild(modal);
  };

  const handleMeetClick = (meet: any) => {
    // Create a proper meet RSVP modal
    const modal = document.createElement('div');
    modal.className = 'fixed inset-0 bg-black/50 flex items-center justify-center z-50';
    modal.innerHTML = `
      <div class="glass-modal max-w-md mx-4">
        <div class="relative h-40 mb-4 rounded-xl overflow-hidden">
          <img src="${meet.image}" alt="${meet.title}" class="w-full h-full object-cover">
          <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
        </div>
        <h3 class="text-xl font-sora font-semibold mb-2">${meet.title}</h3>
        <div class="flex items-center gap-4 text-text-muted text-sm mb-6">
          <span>📅 ${meet.date}</span>
          <span>👥 ${meet.attendees} attending</span>
        </div>
        <p class="text-text-muted mb-6">Join this epic car meet and connect with fellow enthusiasts!</p>
        <div class="flex gap-3">
          <button onclick="this.closest('.fixed').remove()" class="glass-btn flex-1">Not Interested</button>
          <button onclick="this.closest('.fixed').remove()" class="glass-btn-primary flex-1">RSVP Now</button>
        </div>
      </div>
    `;
    document.body.appendChild(modal);
  };

  const tabs = [
    { id: 'all', label: 'All' },
    { id: 'nearby', label: 'Nearby' },
    { id: 'trending', label: 'Trending' },
    { id: 'meets', label: 'Car Meets' },
    { id: 'scenic', label: 'Scenic Drives' },
  ];

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
            Discover Your <span className="gradient-text">Community</span>
          </h2>
          <p className="text-xl text-text-muted max-w-3xl mx-auto">
            Connect with nearby drivers and trending meets in your area
          </p>
        </motion.div>

        {/* Toggle Chips */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`${
                activeTab === tab.id
                  ? 'glass-chip-active'
                  : 'glass-chip text-text-muted hover:text-white'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {/* Nearby Drivers */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass-card"
          >
            <div className="flex items-center gap-3 mb-6">
              <MapPin className="h-6 w-6 text-electric-cyan" />
              <h3 className="text-2xl font-sora font-semibold">Nearby Drivers</h3>
            </div>

            <div className="space-y-4">
              <AnimatePresence mode="wait">
                {drivers.map((driver, index) => (
                  <motion.div
                    key={driver.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    onClick={() => handleDriverClick(driver)}
                    className="flex items-center justify-between p-4 glass rounded-2xl hover:bg-white/10 transition-colors duration-300 cursor-pointer"
                  >
                    <div className="flex items-center gap-4">
                      <div className="relative">
                        <Image
                          src={driver.avatar}
                          alt={driver.name}
                          width={50}
                          height={50}
                          className="rounded-full"
                        />
                        <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-dark-canvas" />
                      </div>
                      <div>
                        <p className="font-semibold text-white">{driver.name}</p>
                        <p className="text-text-muted text-sm">{driver.car}</p>
                      </div>
                    </div>
                    <span className="text-electric-cyan font-medium">{driver.distance}</span>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          </motion.div>

          {/* Trending Car Meets */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass-card"
          >
            <div className="flex items-center gap-3 mb-6">
              <TrendingUp className="h-6 w-6 text-electric-cyan" />
              <h3 className="text-2xl font-sora font-semibold">Trending Car Meets</h3>
            </div>

            <div className="space-y-4">
              <AnimatePresence mode="wait">
                {meets.map((meet, index) => (
                  <motion.div
                    key={meet.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    onClick={() => handleMeetClick(meet)}
                    className="glass rounded-2xl overflow-hidden hover:bg-white/5 transition-colors duration-300 cursor-pointer group"
                  >
                    <div className="relative h-40">
                      <Image
                        src={meet.image}
                        alt={meet.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                        sizes="(max-width: 768px) 100vw, 50vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    </div>
                    <div className="p-6">
                      <h4 className="text-xl font-sora font-semibold mb-2">{meet.title}</h4>
                      <div className="flex items-center gap-4 text-text-muted text-sm">
                        <span>📅 {meet.date}</span>
                        <span>👥 {meet.attendees}</span>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AppPreview;