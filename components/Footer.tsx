'use client';

import { motion } from 'framer-motion';
import { Car, Instagram, Youtube, Twitter, MessageCircle } from 'lucide-react';

const Footer = () => {
  const footerLinks = {
    website: [
      { name: 'Home', href: '#home' },
      { name: 'Features', href: '#features' },
      { name: 'Gallery', href: '#gallery' },
      { name: 'FAQ', href: '#faq' },
    ],
    company: [
      { name: 'About', href: '#about' },
      { name: 'Contact', href: '#contact' },
      { name: 'Careers', href: '#careers' },
      { name: 'Press', href: '#press' },
    ],
    legal: [
      { name: 'Privacy Policy', href: '/legal/privacy' },
      { name: 'Terms of Service', href: '/legal/terms' },
      { name: 'Cookie Policy', href: '#cookies' },
    ],
    social: [
      { name: 'Instagram', href: '#', icon: Instagram },
      { name: 'YouTube', href: '#', icon: Youtube },
      { name: 'Twitter', href: '#', icon: Twitter },
    ],
  };

  return (
    <footer className="bg-dark-canvas border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12">
            {/* Brand */}
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="space-y-6"
              >
                <div className="flex items-center space-x-2">
                  <Car className="h-8 w-8 text-electric-cyan" />
                  <span className="text-2xl font-sora font-bold">Armada</span>
                </div>
                <p className="text-text-muted max-w-md leading-relaxed">
                  Drive together. Drive as one. The ultimate app for car convoys, meets, and automotive adventures worldwide.
                </p>
                <div className="space-y-3">
                  {/* TODO: Replace with actual store badges */}
                  <button 
                    onClick={() => window.open('https://apps.apple.com/app/armada', '_blank')}
                    className="glass-chip text-sm text-text-muted text-center hover:text-electric-cyan transition-colors block w-full mb-2"
                  >
                    App Store
                  </button>
                  <button 
                    onClick={() => window.open('https://play.google.com/store/apps/details?id=com.armada', '_blank')}
                    className="glass-chip text-sm text-text-muted text-center hover:text-electric-cyan transition-colors block w-full"
                  >
                    Google Play
                  </button>
                </div>
              </motion.div>
              
            </div>

            {/* Other Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <h3 className="font-sora font-semibold text-lg mb-4">Website</h3>
              <ul className="space-y-3">
                {footerLinks.website.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-text-muted hover:text-electric-cyan transition-colors duration-200"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Company Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <h3 className="font-sora font-semibold text-lg mb-4">Company</h3>
              <ul className="space-y-3">
                {footerLinks.company.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-text-muted hover:text-electric-cyan transition-colors duration-200"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Legal Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <h3 className="font-sora font-semibold text-lg mb-4">Legal</h3>
              <ul className="space-y-3">
                {footerLinks.legal.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-text-muted hover:text-electric-cyan transition-colors duration-200"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="flex justify-center lg:justify-start gap-4 mt-8 pt-8 border-t border-white/10 opacity-60"
          >
            {footerLinks.social.map((social) => (
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                title={`Follow us on ${social.name}`}
                className="w-12 h-12 glass-btn flex items-center justify-center group"
                aria-label={`Follow us on ${social.name}`}
              >
                <social.icon className="h-6 w-6 text-text-muted group-hover:text-electric-cyan transition-colors duration-300" />
              </a>
            ))}
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-text-muted text-sm">
              © 2024 Armada. All rights reserved.
            </p>
            <p className="text-text-muted text-sm">
              Built for car enthusiasts, by car enthusiasts.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;