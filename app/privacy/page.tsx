'use client';

import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';

export default function PrivacyPolicy() {
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
          <h1 className="text-4xl font-sora font-bold mb-6 tracking-tight">Privacy Policy</h1>
          
          <div className="space-y-6 text-text-muted leading-relaxed">
            <p className="text-sm text-text-muted">Last updated: December 2024</p>
            
            <section>
              <h2 className="text-2xl font-sora font-semibold text-white mb-4">Introduction</h2>
              <p>
                Armada ("we," "our," "us") is committed to protecting your privacy. This Privacy Policy explains
                what information we collect, how we use it, how it is shared, and the choices you have. It applies
                to our website, mobile apps, and related services (the "Services").
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-sora font-semibold text-white mb-4">What We Collect</h2>
              <ul className="list-disc pl-5 space-y-2">
                <li><b>Account & Contact Info (if you create an account).</b> Name, email, username, profile photo.</li>
                <li><b>Location Data (with permission).</b> Precise location to show your position on the map,
                    suggest nearby convoys/meet points, and generate routes. You can disable location in device settings.</li>
                <li><b>Usage & Device Info.</b> App interactions, pages viewed, device type/OS, performance and crash diagnostics.</li>
                <li><b>Content You Provide.</b> Posts, convoy names, messages or photos you choose to share.</li>
              </ul>
              <p className="mt-3"><b>We do not collect</b> contacts, camera, microphone, or photo library content
                unless you choose a feature that needs them and approve the OS permission.</p>
            </section>

            <section>
              <h2 className="text-2xl font-sora font-semibold text-white mb-4">How We Use Information</h2>
              <ul className="list-disc pl-5 space-y-2">
                <li>Provide core features: live map, convoys, navigation links, and notifications.</li>
                <li>Maintain safety, reliability, and performance; prevent abuse and fraud.</li>
                <li>Communicate about updates, new features, and support.</li>
                <li>Comply with legal obligations and enforce our terms.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-sora font-semibold text-white mb-4">Sharing</h2>
              <p>We do not sell your personal data. We share data only with:</p>
              <ul className="list-disc pl-5 space-y-2 mt-2">
                <li><b>Service providers</b> (hosting, analytics, crash reports) under confidentiality and security obligations.</li>
                <li><b>Map/tiles providers</b> to render maps and routing.</li>
                <li><b>Legal reasons</b> when required by law or to protect rights, safety, or integrity of the Services.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-sora font-semibold text-white mb-4">Tracking & Advertising</h2>
              <p>
                We do not use third-party advertising SDKs and do not track you across apps or websites for advertising.
                If we ever introduce tracking that requires App Tracking Transparency (ATT), we will show Apple's system
                prompt first and honor your choice.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-sora font-semibold text-white mb-4">Your Choices</h2>
              <ul className="list-disc pl-5 space-y-2">
                <li><b>Location controls:</b> Enable/disable location in system settings.</li>
                <li><b>Access / correction / deletion:</b> Contact us to request a copy of your data or deletion of your
                    account and associated data, subject to legal retention needs.</li>
                <li><b>Communications:</b> Opt out of non-essential emails at any time.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-sora font-semibold text-white mb-4">Data Retention</h2>
              <p>We keep personal data only as long as necessary for the purposes above or as required by law, then delete or anonymize it.</p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">Security</h2>
              <p>We use reasonable administrative, technical, and physical safeguards. No system is 100% secure; we act promptly
                 and notify you as required if a risk is detected.</p>
            </section>

            <section>
              <h2 className="text-2xl font-sora font-semibold text-white mb-4">Children</h2>
              <p>The Services are not directed to children under 13 (or the minimum age in your country). If we learn we collected
                 data from a child without proper consent, we will delete it.</p>
            </section>

            <section>
              <h2 className="text-2xl font-sora font-semibold text-white mb-4">International Transfers</h2>
              <p>We may process data in countries other than where you live and will protect it consistent with applicable laws.</p>
            </section>

            <section>
              <h2 className="text-2xl font-sora font-semibold text-white mb-4">Contact Us</h2>
              <p>Questions or requests? Email <a className="text-electric-cyan underline" href="mailto:ride.armada@gmail.com">ride.armada@gmail.com</a>.</p>
            </section>

            <p className="mt-8 text-xs text-text-muted">
              This policy is designed to meet Apple App Store Review Guideline 5.1. If our data practices change, we will update this page.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}