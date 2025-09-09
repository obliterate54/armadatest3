'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X, Car, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import AppDownloadModal from '@/components/AppDownloadModal';
import CreateConvoyModal from '@/components/CreateConvoyModal';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showAppModal, setShowAppModal] = useState(false);
  const [showConvoyModal, setShowConvoyModal] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'Map', href: '/map' },
    { name: 'Features', href: '#features' },
    { name: 'How It Works', href: '#how-it-works' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Community', href: '#community' },
    { name: 'FAQ', href: '#faq' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`glass-nav transition-all duration-300 ${
        isScrolled ? 'py-3' : 'py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center space-x-2"
          >
            <Car className="h-8 w-8 text-electric-cyan" />
            <span className="text-2xl font-sora font-bold tracking-tight">
              Armada
            </span>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map((item, index) => (
              <motion.a
                key={item.name}
                href={item.href}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="text-text-muted hover:text-electric-cyan transition-colors duration-200 font-medium"
              >
                {item.name}
              </motion.a>
            ))}
          </div>

          {/* Desktop CTA Buttons */}
          <div className="hidden lg:flex items-center space-x-4">
            <Button 
              variant="outline" 
              onClick={() => setShowAppModal(true)}
              className="glass-btn border-electric-cyan/30 text-electric-cyan hover:bg-electric-cyan/10"
            >
              Get the App
            </Button>
            <Button 
              onClick={() => setShowConvoyModal(true)}
              className="glass-btn-primary"
            >
              Create a Convoy
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 text-text-muted hover:text-electric-cyan glass-btn"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            className="lg:hidden fixed inset-x-4 top-20 z-50 bg-black/30 backdrop-blur-2xl rounded-3xl shadow-2xl ring-1 ring-white/20 p-6"
            style={{
              backdropFilter: 'blur(40px) saturate(180%)',
              WebkitBackdropFilter: 'blur(40px) saturate(180%)',
              background: 'rgba(0, 0, 0, 0.4)',
            }}
          >
            <div className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="block rounded-xl px-4 py-3 text-white font-bold text-lg hover:bg-white/20 focus:outline-none focus:ring-2 focus:ring-electric-cyan/50 transition-all duration-200 backdrop-blur-sm"
                  style={{
                    textShadow: '0 1px 3px rgba(0, 0, 0, 0.8), 0 0 10px rgba(255, 255, 255, 0.1)',
                  }}
                >
                  {item.name}
                </a>
              ))}
              <div className="flex flex-col space-y-3 pt-4 border-t border-white/20">
                <Button 
                  variant="outline" 
                  onClick={() => {
                    setShowAppModal(true);
                    setIsMobileMenuOpen(false);
                  }}
                  className="glass-btn border-electric-cyan/50 text-electric-cyan font-bold hover:bg-electric-cyan/20 backdrop-blur-sm"
                >
                  Get the App
                </Button>
                <Button 
                  onClick={() => {
                    setShowConvoyModal(true);
                    setIsMobileMenuOpen(false);
                  }}
                  className="glass-btn-primary font-bold backdrop-blur-sm"
                >
                  Create a Convoy
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </div>

      {/* Modals */}
      <AppDownloadModal isOpen={showAppModal} onClose={() => setShowAppModal(false)} />
      <CreateConvoyModal isOpen={showConvoyModal} onClose={() => setShowConvoyModal(false)} />
    </motion.nav>
  );
};

export default Navbar;