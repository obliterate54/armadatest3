'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Smartphone, Download, QrCode, Apple, Play } from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';

interface AppDownloadModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const AppDownloadModal = ({ isOpen, onClose }: AppDownloadModalProps) => {
  const [activeTab, setActiveTab] = useState<'download' | 'qr'>('download');

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-md">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-3 text-2xl font-sora">
            <Smartphone className="h-6 w-6 text-electric-cyan" />
            Get the App
          </DialogTitle>
          <DialogDescription className="text-text-muted">
            Download Armada to start creating and joining convoys with car enthusiasts worldwide.
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-6">
          {/* Tab Toggle */}
          <div className="flex gap-2">
            <button
              onClick={() => setActiveTab('download')}
              className={`flex-1 py-2 px-4 rounded-xl text-sm font-medium transition-all duration-300 ${
                activeTab === 'download'
                  ? 'glass-chip-active'
                  : 'glass-chip text-text-muted hover:text-white'
              }`}
            >
              <Download className="h-4 w-4 inline mr-2" />
              Download
            </button>
            <button
              onClick={() => setActiveTab('qr')}
              className={`flex-1 py-2 px-4 rounded-xl text-sm font-medium transition-all duration-300 ${
                activeTab === 'qr'
                  ? 'glass-chip-active'
                  : 'glass-chip text-text-muted hover:text-white'
              }`}
            >
              <QrCode className="h-4 w-4 inline mr-2" />
              QR Code
            </button>
          </div>

          {/* Content */}
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            {activeTab === 'download' ? (
              <div className="space-y-4">
                <div className="space-y-3">
                  <Button
                    onClick={() => {
                      // Create coming soon modal for App Store
                      const modal = document.createElement('div');
                      modal.className = 'fixed inset-0 bg-black/50 flex items-center justify-center z-50';
                      modal.innerHTML = `
                        <div class="glass-modal max-w-md mx-4">
                          <div class="text-center">
                            <div class="text-6xl mb-4">🚧</div>
                            <h3 class="text-xl font-sora font-semibold mb-4">Coming Soon!</h3>
                            <p class="text-text-muted mb-6">Armada is currently in development. Join our waitlist to be notified when it's available on the App Store!</p>
                            <button onclick="this.closest('.fixed').remove()" class="glass-btn-primary w-full">Join Waitlist</button>
                          </div>
                        </div>
                      `;
                      document.body.appendChild(modal);
                    }}
                    className="w-full glass-btn justify-start text-left h-auto p-4"
                  >
                    <Apple className="h-8 w-8 mr-4" />
                    <div>
                      <div className="font-semibold">Download on the</div>
                      <div className="text-lg font-bold">App Store</div>
                    </div>
                  </Button>
                  
                  <Button
                    onClick={() => {
                      // Create coming soon modal for Google Play
                      const modal = document.createElement('div');
                      modal.className = 'fixed inset-0 bg-black/50 flex items-center justify-center z-50';
                      modal.innerHTML = `
                        <div class="glass-modal max-w-md mx-4">
                          <div class="text-center">
                            <div class="text-6xl mb-4">🚧</div>
                            <h3 class="text-xl font-sora font-semibold mb-4">Coming Soon!</h3>
                            <p class="text-text-muted mb-6">Armada is currently in development. Join our waitlist to be notified when it's available on Google Play!</p>
                            <button onclick="this.closest('.fixed').remove()" class="glass-btn-primary w-full">Join Waitlist</button>
                          </div>
                        </div>
                      `;
                      document.body.appendChild(modal);
                    }}
                    className="w-full glass-btn justify-start text-left h-auto p-4"
                  >
                    <Play className="h-8 w-8 mr-4" />
                    <div>
                      <div className="font-semibold">Get it on</div>
                      <div className="text-lg font-bold">Google Play</div>
                    </div>
                  </Button>
                </div>
                
                <div className="glass p-4 text-center text-sm text-text-muted">
                  <p>🚧 App is currently in development</p>
                  <p>Join our waitlist to be notified when it's ready!</p>
                </div>
              </div>
            ) : (
              <div className="text-center space-y-4">
                <div className="w-48 h-48 mx-auto glass flex items-center justify-center">
                  <div className="text-center">
                    <QrCode className="h-16 w-16 mx-auto mb-4 text-electric-cyan" />
                    <p className="text-sm text-text-muted">QR Code Placeholder</p>
                    <p className="text-xs text-text-muted mt-2">
                      Scan with your phone camera
                    </p>
                  </div>
                </div>
                <p className="text-sm text-text-muted">
                  Point your camera at the QR code to download the app directly to your device.
                </p>
              </div>
            )}
          </motion.div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default AppDownloadModal;