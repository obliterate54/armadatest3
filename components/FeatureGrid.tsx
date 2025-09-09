'use client';

import { motion } from 'framer-motion';
import * as Icons from 'lucide-react';
import { features } from '@/content/mockData';

const FeatureGrid = () => {
  return (
    <section id="features" className="py-20 bg-dark-canvas">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-sora font-bold mb-6 tracking-tight">
            Built for <span className="gradient-text">Car Enthusiasts</span>
          </h2>
          <p className="text-xl text-text-muted max-w-3xl mx-auto">
            Everything you need to organize and manage perfect convoys
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const IconComponent = Icons[feature.icon as keyof typeof Icons] as React.ComponentType<any>;
            
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="glass-card group cursor-pointer"
                onClick={() => {
                  // Create feature detail modal
                  const modal = document.createElement('div');
                  modal.className = 'fixed inset-0 bg-black/50 flex items-center justify-center z-50';
                  modal.innerHTML = `
                    <div class="glass-modal max-w-lg mx-4">
                      <div class="w-16 h-16 glass-shine flex items-center justify-center border border-electric-cyan/30 bg-electric-cyan/10 mb-6 mx-auto">
                        <svg class="h-8 w-8 text-electric-cyan" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"/>
                        </svg>
                      </div>
                      <h3 class="text-2xl font-sora font-semibold mb-4 text-center">${feature.title}</h3>
                      <p class="text-text-muted mb-6 text-center leading-relaxed">${feature.description}</p>
                      <p class="text-sm text-electric-cyan mb-6 text-center">Available in the mobile app</p>
                      <button onclick="this.closest('.fixed').remove()" class="glass-btn-primary w-full">Got it</button>
                    </div>
                  `;
                  document.body.appendChild(modal);
                }}
              >
                <div className="w-16 h-16 glass-shine flex items-center justify-center border border-electric-cyan/30 bg-electric-cyan/10 mb-6 group-hover:scale-110 transition-transform duration-300">
                  <IconComponent className="h-8 w-8 text-electric-cyan" />
                </div>
                <h3 className="text-xl font-sora font-semibold mb-4 group-hover:text-electric-cyan transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="text-text-muted leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FeatureGrid;