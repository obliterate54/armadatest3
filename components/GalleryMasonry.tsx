'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Play } from 'lucide-react';
import { galleryImages } from '@/content/mockData';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';

const GalleryMasonry = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [showVideoModal, setShowVideoModal] = useState(false);

  const handleImageClick = (image: string, index: number) => {
    if (index === 0) {
      // Create a proper video showreel modal
      const modal = document.createElement('div');
      modal.className = 'fixed inset-0 bg-black/80 flex items-center justify-center z-50';
      modal.innerHTML = `
        <div class="glass-modal max-w-2xl mx-4">
          <div class="flex items-center justify-between mb-4">
            <h3 class="text-2xl font-sora font-semibold">🎬 Community Showreel</h3>
            <button onclick="this.closest('.fixed').remove()" class="text-text-muted hover:text-white">✕</button>
          </div>
          <div class="aspect-video glass flex items-center justify-center mb-4">
            <div class="text-center">
              <div class="w-20 h-20 mx-auto mb-4 glass-shine flex items-center justify-center border border-electric-cyan/30 bg-electric-cyan/10">
                <svg class="h-10 w-10 text-electric-cyan" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z"/>
                </svg>
              </div>
              <p class="text-lg font-semibold mb-2">Coming Soon</p>
              <p class="text-text-muted">We're creating an epic showreel featuring the best moments from our community drives.</p>
            </div>
          </div>
          <button onclick="this.closest('.fixed').remove()" class="glass-btn-primary w-full">Close</button>
        </div>
      `;
      document.body.appendChild(modal);
    } else {
      setSelectedImage(image);
    }
  };

  return (
    <section id="gallery" className="py-20 bg-gradient-to-b from-dark-canvas to-dark-canvas/95">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-sora font-bold mb-6 tracking-tight">
            Community <span className="gradient-text">Gallery</span>
          </h2>
          <p className="text-xl text-text-muted max-w-3xl mx-auto">
            Stunning captures from our global community of car enthusiasts
          </p>
        </motion.div>

        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          {galleryImages.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="break-inside-avoid group cursor-pointer"
              onClick={() => handleImageClick(image, index)}
            >
              <div className="relative glass border border-white/10 overflow-hidden">
                <Image
                  src={image}
                  alt={`Gallery image ${index + 1}`}
                  width={400}
                  height={index % 3 === 0 ? 600 : index % 3 === 1 ? 400 : 500}
                  className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
                
                {/* Video Play Button (for first image as example) */}
                {index === 0 && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.5 }}
                    className="absolute inset-0 flex items-center justify-center"
                  >
                    <div className="w-16 h-16 glass-shine flex items-center justify-center group-hover:bg-white/30 transition-colors duration-300">
                      <Play className="h-8 w-8 text-white ml-1" fill="currentColor" />
                    </div>
                    <div className="absolute -bottom-4 left-4 right-4">
                      <div className="glass-chip text-xs text-center">
                        Play showreel
                      </div>
                    </div>
                  </motion.div>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* View More Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-center mt-12"
        >
          <button 
            onClick={() => alert('More photos coming soon! Follow us on social media for the latest community shots.')}
            className="glass-btn font-medium"
          >
            View More Photos
          </button>
        </motion.div>
      </div>

      {/* Image Modal */}
      <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
        <DialogContent className="max-w-4xl p-0 bg-transparent border-none">
          {selectedImage && (
            <div className="relative">
              <Image
                src={selectedImage}
                alt="Gallery image"
                width={800}
                height={600}
                className="w-full h-auto rounded-2xl"
                sizes="(max-width: 768px) 100vw, 80vw"
              />
            </div>
          )}
        </DialogContent>
      </Dialog>

      {/* Video Modal */}
      <Dialog open={showVideoModal} onOpenChange={setShowVideoModal}>
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <DialogTitle className="text-2xl font-sora">Community Showreel</DialogTitle>
          </DialogHeader>
          <div className="aspect-video glass flex items-center justify-center">
            <div className="text-center">
              <Play className="h-16 w-16 mx-auto mb-4 text-electric-cyan" />
              <p className="text-lg font-semibold mb-2">Coming Soon</p>
              <p className="text-text-muted">
                We're creating an epic showreel featuring the best moments from our community drives.
              </p>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default GalleryMasonry;