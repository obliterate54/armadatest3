'use client';

import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';

export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-dark-canvas text-text-primary py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <Link href="/" className="inline-flex items-center gap-2 text-electric-cyan hover:underline">
            <ArrowLeft className="h-4 w-4" />
            Back to Home
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="glass-card"
        >
          <h1 className="text-4xl font-sora font-bold mb-6 tracking-tight">Terms of Service</h1>
          
          <div className="space-y-6 text-text-muted leading-relaxed">
            <p className="text-sm text-text-muted">Last updated: December 2024</p>
            
            <section>
              <h2 className="text-2xl font-sora font-semibold text-white mb-4">Acceptance of Terms</h2>
              <p>
                By accessing and using Armada, you accept and agree to be bound by the terms and provision of this agreement.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-sora font-semibold text-white mb-4">Use License</h2>
              <p>
                Permission is granted to temporarily download one copy of Armada for personal, non-commercial transitory viewing only.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-sora font-semibold text-white mb-4">Disclaimer</h2>
              <p>
                The materials on Armada are provided on an 'as is' basis. Armada makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-sora font-semibold text-white mb-4">Contact Information</h2>
              <p>
                If you have any questions about these Terms of Service, please contact us at{' '}
                <a href="mailto:legal@armada.com" className="text-electric-cyan hover:underline">
                  legal@armada.com
                </a>
              </p>
            </section>

            <div className="mt-8 p-4 bg-electric-cyan/10 rounded-2xl border border-electric-cyan/30">
              <p className="text-sm text-electric-cyan">
                TODO: Replace with actual terms of service content when legal documentation is finalized.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}