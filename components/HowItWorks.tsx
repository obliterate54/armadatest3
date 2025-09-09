'use client';

import { motion } from 'framer-motion';
import { MapPin, Users, Navigation } from 'lucide-react';

const HowItWorks = () => {
  const steps = [
    {
      icon: MapPin,
      title: 'Set the meet or destination',
      description: 'Choose your destination, set waypoints, and plan the perfect route for your convoy.',
      mockup: 'route-planning',
    },
    {
      icon: Users,
      title: 'Invite your convoy',
      description: 'Share public invites or keep it private. Build your crew and manage participants.',
      mockup: 'invite-system',
    },
    {
      icon: Navigation,
      title: 'Navigate together',
      description: 'Track live ETAs, coordinate stops, and keep everyone in formation.',
      mockup: 'live-navigation',
    },
  ];

  return (
    <section id="how-it-works" className="py-20 bg-gradient-to-b from-dark-canvas/95 to-dark-canvas">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-sora font-bold mb-6 tracking-tight">
            How <span className="gradient-text">It Works</span>
          </h2>
          <p className="text-xl text-text-muted max-w-3xl mx-auto">
            Three simple steps to organize the perfect convoy
          </p>
        </motion.div>

        <div className="space-y-20">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className={`flex flex-col ${
                index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
              } items-center gap-12 lg:gap-20`}
            >
              {/* Content */}
              <div className="flex-1 max-w-lg">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 glass-shine flex items-center justify-center border border-electric-cyan/30 bg-electric-cyan/10">
                    <step.icon className="h-8 w-8 text-electric-cyan" />
                  </div>
                  <span className="text-6xl font-sora font-bold text-white/20">
                    0{index + 1}
                  </span>
                </div>
                <h3 className="text-3xl font-sora font-bold mb-4 tracking-tight">{step.title}</h3>
                <p className="text-lg text-text-muted leading-relaxed">
                  {step.description}
                </p>
              </div>

              {/* Mockup Placeholder */}
              <div className="flex-1 max-w-lg">
                <div className="glass-card aspect-[4/3] flex items-center justify-center">
                  {/* TODO: Replace with actual app screenshots */}
                  <div className="text-center">
                    <div className="w-20 h-20 mx-auto mb-4 glass-shine flex items-center justify-center border border-electric-cyan/30 bg-electric-cyan/10">
                      <step.icon className="h-10 w-10 text-electric-cyan" />
                    </div>
                    <p className="text-text-muted text-sm">
                      App Screenshot Placeholder
                      <br />
                      <span className="text-xs">({step.mockup})</span>
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;