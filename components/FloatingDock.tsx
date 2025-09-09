'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Home, Plus, Zap, User } from 'lucide-react';
import CreateConvoyModal from '@/components/CreateConvoyModal';

const FloatingDock = () => {
  const [showConvoyModal, setShowConvoyModal] = useState(false);

  const handleDockAction = (action: string) => {
    switch (action) {
      case 'home':
        document.getElementById('home')?.scrollIntoView({ behavior: 'smooth' });
        break;
      case 'create':
        setShowConvoyModal(true);
        break;
      case 'boost':
        // Create a proper boost modal or redirect
        const boostModal = document.createElement('div');
        boostModal.className = 'fixed inset-0 bg-black/50 flex items-center justify-center z-50';
        boostModal.innerHTML = `
          <div class="glass-modal max-w-md mx-4">
            <h3 class="text-xl font-sora font-semibold mb-4">⚡ Boost Your Convoy</h3>
            <p class="text-text-muted mb-6">Boost feature coming soon! This will highlight your convoys to more drivers in your area.</p>
            <button onclick="this.closest('.fixed').remove()" class="glass-btn-primary w-full">Got it</button>
          </div>
        `;
        document.body.appendChild(boostModal);
        setTimeout(() => boostModal.remove(), 5000);
        break;
      case 'profile':
        // Create a proper profile modal
        const profileModal = document.createElement('div');
        profileModal.className = 'fixed inset-0 bg-black/50 flex items-center justify-center z-50';
        profileModal.innerHTML = `
          <div class="glass-modal max-w-md mx-4">
            <h3 class="text-xl font-sora font-semibold mb-4">👤 Driver Profile</h3>
            <p class="text-text-muted mb-6">Create your driver profile in the mobile app to connect with other car enthusiasts and showcase your rides.</p>
            <button onclick="this.closest('.fixed').remove()" class="glass-btn-primary w-full">Download App</button>
          </div>
        `;
        document.body.appendChild(profileModal);
        setTimeout(() => profileModal.remove(), 5000);
        break;
    }
  };

  const dockItems = [
    { icon: Home, label: 'Home', action: 'home', active: true },
    { icon: Plus, label: 'Create', action: 'create' },
    { icon: Zap, label: 'Boost', action: 'boost' },
    { icon: User, label: 'Profile', action: 'profile' },
  ];

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.5 }}
        className="glass-dock flex items-center gap-4 md:hidden"
      >
        {dockItems.map((item, index) => (
          <motion.button
            key={item.label}
            onClick={() => handleDockAction(item.action)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className={`w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 ${
              item.active
                ? 'bg-electric-cyan/20 text-electric-cyan border border-electric-cyan/30'
                : 'text-text-muted hover:text-white hover:bg-white/10'
            }`}
            aria-label={item.label}
          >
            <item.icon className="h-6 w-6" />
          </motion.button>
        ))}
      </motion.div>

      {/* Modal */}
      <CreateConvoyModal isOpen={showConvoyModal} onClose={() => setShowConvoyModal(false)} />
    </>
  );
};

export default FloatingDock;