'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Users, MapPin, Clock, Lock, Globe, Car } from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

interface CreateConvoyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const CreateConvoyModal = ({ isOpen, onClose }: CreateConvoyModalProps) => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    destination: '',
    date: '',
    time: '',
    isPublic: true,
  });

  const handleNext = () => {
    if (step < 3) setStep(step + 1);
  };

  const handleBack = () => {
    if (step > 1) setStep(step - 1);
  };

  const handleSubmit = () => {
    // Create convoy success modal
    console.log('Creating convoy:', formData);
    const modal = document.createElement('div');
    modal.className = 'fixed inset-0 bg-black/50 flex items-center justify-center z-50';
    modal.innerHTML = `
      <div class="glass-modal max-w-md mx-4">
        <div class="text-center">
          <div class="w-16 h-16 mx-auto mb-4 glass-shine flex items-center justify-center border border-electric-cyan/30 bg-electric-cyan/10">
            <svg class="h-8 w-8 text-electric-cyan" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
            </svg>
          </div>
          <h3 class="text-xl font-sora font-semibold mb-4">🎉 Convoy Created!</h3>
          <p class="text-text-muted mb-2"><strong>${formData.title}</strong></p>
          <p class="text-text-muted mb-6">Your convoy "${formData.title}" has been created! You'll be able to manage it in the mobile app when it launches.</p>
          <button onclick="this.closest('.fixed').remove()" class="glass-btn-primary w-full">Awesome!</button>
        </div>
      </div>
    `;
    document.body.appendChild(modal);
    setTimeout(() => modal.remove(), 8000);
    
    onClose();
    setStep(1);
    setFormData({
      title: '',
      description: '',
      destination: '',
      date: '',
      time: '',
      isPublic: true,
    });
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-lg">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-3 text-2xl font-sora">
            <Car className="h-6 w-6 text-electric-cyan" />
            Create a Convoy
          </DialogTitle>
          <DialogDescription className="text-text-muted">
            Step {step} of 3 - Set up your convoy details
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-6">
          {/* Progress Bar */}
          <div className="flex gap-2">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className={`flex-1 h-2 rounded-full transition-all duration-300 ${
                  i <= step ? 'bg-electric-cyan' : 'bg-white/20'
                }`}
              />
            ))}
          </div>

          <motion.div
            key={step}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3 }}
          >
            {step === 1 && (
              <div className="space-y-4">
                <h3 className="text-lg font-sora font-semibold mb-4">Basic Details</h3>
                <div>
                  <label className="block text-sm font-medium mb-2">Convoy Title</label>
                  <Input
                    placeholder="e.g., Weekend Canyon Run"
                    value={formData.title}
                    onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                    className="glass border-white/20 text-white placeholder:text-text-muted"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Description (Optional)</label>
                  <Textarea
                    placeholder="Tell others what this convoy is about..."
                    value={formData.description}
                    onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                    className="glass border-white/20 text-white placeholder:text-text-muted"
                  />
                </div>
              </div>
            )}

            {step === 2 && (
              <div className="space-y-4">
                <h3 className="text-lg font-sora font-semibold mb-4">Route & Timing</h3>
                <div>
                  <label className="block text-sm font-medium mb-2 flex items-center gap-2">
                    <MapPin className="h-4 w-4" />
                    Destination
                  </label>
                  <Input
                    placeholder="Enter destination address"
                    value={formData.destination}
                    onChange={(e) => setFormData({ ...formData, destination: e.target.value })}
                    className="glass border-white/20 text-white placeholder:text-text-muted"
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Date</label>
                    <Input
                      type="date"
                      value={formData.date}
                      onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                      className="glass border-white/20 text-white"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Time</label>
                    <Input
                      type="time"
                      value={formData.time}
                      onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                      className="glass border-white/20 text-white"
                    />
                  </div>
                </div>
              </div>
            )}

            {step === 3 && (
              <div className="space-y-4">
                <h3 className="text-lg font-sora font-semibold mb-4">Privacy Settings</h3>
                <div className="space-y-4">
                  <div
                    onClick={() => setFormData({ ...formData, isPublic: true })}
                    className={`glass p-4 cursor-pointer transition-all duration-300 ${
                      formData.isPublic ? 'border-electric-cyan/50 bg-electric-cyan/10' : 'hover:bg-white/5'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <Globe className="h-5 w-5 text-electric-cyan" />
                      <div>
                        <div className="font-semibold">Public Convoy</div>
                        <div className="text-sm text-text-muted">Anyone can discover and join</div>
                      </div>
                    </div>
                  </div>
                  
                  <div
                    onClick={() => setFormData({ ...formData, isPublic: false })}
                    className={`glass p-4 cursor-pointer transition-all duration-300 ${
                      !formData.isPublic ? 'border-electric-cyan/50 bg-electric-cyan/10' : 'hover:bg-white/5'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <Lock className="h-5 w-5 text-electric-cyan" />
                      <div>
                        <div className="font-semibold">Private Convoy</div>
                        <div className="text-sm text-text-muted">Invite-only access</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </motion.div>

          {/* Navigation Buttons */}
          <div className="flex gap-3">
            {step > 1 && (
              <Button
                onClick={handleBack}
                variant="outline"
                className="flex-1 glass-btn border-white/30"
              >
                Back
              </Button>
            )}
            <Button
              onClick={step === 3 ? handleSubmit : handleNext}
              disabled={
                (step === 1 && !formData.title) ||
                (step === 2 && (!formData.destination || !formData.date || !formData.time))
              }
              className="flex-1 glass-btn-primary"
            >
              {step === 3 ? 'Create Convoy' : 'Next'}
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default CreateConvoyModal;