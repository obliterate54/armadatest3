'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { testimonials } from '@/content/mockData';

const TestimonialCarousel = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const next = () => setCurrent((prev) => (prev + 1) % testimonials.length);
  const prev = () => setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  return (
    <section id="community" className="py-20 bg-gradient-to-b from-dark-canvas/95 to-dark-canvas">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-sora font-bold mb-6 tracking-tight">
            What Drivers <span className="gradient-text">Are Saying</span>
          </h2>
          <p className="text-xl text-text-muted max-w-3xl mx-auto">
            Real feedback from our community of car enthusiasts
          </p>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          <div className="glass-card text-center relative overflow-hidden">
            {/* Quote Icon */}
            <div className="absolute top-8 left-8">
              <Quote className="h-12 w-12 text-electric-cyan/30" />
            </div>

            {/* Arrow Controls */}
            <button
              aria-label="Previous testimonial"
              onClick={prev}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 ring-1 ring-white/20 hover:bg-white/20 flex items-center justify-center transition-all duration-300 z-10"
            >
              <ChevronLeft className="h-6 w-6 text-text-muted" />
            </button>
            <button
              aria-label="Next testimonial"
              onClick={next}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 ring-1 ring-white/20 hover:bg-white/20 flex items-center justify-center transition-all duration-300 z-10"
            >
              <ChevronRight className="h-6 w-6 text-text-muted" />
            </button>

            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.5 }}
                className="space-y-6"
              >
                <blockquote className="text-2xl md:text-3xl font-sora font-medium leading-relaxed">
                  "{testimonials[current].quote}"
                </blockquote>
                <div className="space-y-2">
                  <p className="text-electric-cyan font-semibold text-lg">
                    {testimonials[current].author}
                  </p>
                  <p className="text-text-muted">
                    {testimonials[current].role}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Pagination Dots */}
          <div className="flex justify-center gap-3 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                aria-label={`Go to testimonial ${index + 1}`}
                onClick={() => setCurrent(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === current
                    ? 'bg-electric-cyan'
                    : 'bg-gray-600 hover:bg-gray-500'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialCarousel;