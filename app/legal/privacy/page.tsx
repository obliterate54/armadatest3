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
            <p className="text-sm text-text-muted">Last updated: September 2025</p>

            {/* Intro */}
            <section>
              <h2 className="text-2xl font-sora font-semibold text-white mb-4">Introduction</h2>
              <p>
                Armada (“we,” “our,” “us”) is committed to protecting your privacy. This Privacy Policy explains
                what information we collect, how we use it, how we share it, and the choices you have when you use
                our website, mobile app, and related services (the “Services”). By using the Services, you agree to
                the practices described here.
              </p>
            </section>

            {/* Data Controllers */}
            <section>
              <h2 className="text-2xl font-sora font-semibold text-white mb-4">Who Controls Your Data</h2>
              <p>
                For users in the EEA/UK, Armada is the data controller for personal data processed in connection
                with the Services. Contact details are in <a href="#contact" className="text-electric-cyan underline">Contact Us</a>.
              </p>
            </section>

            {/* What We Collect */}
            <section id="collection">
              <h2 className="text-2xl font-sora font-semibold text-white mb-4">Information We Collect</h2>
              <ul className="list-disc pl-5 space-y-2">
                <li>
                  <b>Account & Contact Information.</b> Name, email, username, profile photo, and any details you add to your profile.
                </li>
                <li>
                  <b>Location Data (with permission).</b> Precise location to show you on the map, surface nearby convoys/meet points,
                  and generate routes. You can disable location in device settings at any time.
                </li>
                <li>
                  <b>Usage & Device Information.</b> App interactions, viewed screens, feature usage, device identifiers, device type/OS,
                  language, time zone, IP address, performance metrics, and crash diagnostics.
                </li>
                <li>
                  <b>Content You Provide.</b> Convoy names, messages/chats, posts, photos or media you upload, and support requests.
                </li>
                <li>
                  <b>Log & Transactional Data.</b> Basic server logs (e.g., request timestamps, response codes) and records of in-app purchases (if applicable).
                </li>
              </ul>
              <p className="mt-3">
                <b>We do not collect</b> your contacts, camera, microphone, or photo library content unless you choose a feature that
                needs them and you approve the operating system permission prompt.
              </p>
            </section>

            {/* How We Use Info */}
            <section id="use">
              <h2 className="text-2xl font-sora font-semibold text-white mb-4">How We Use Your Information</h2>
              <ul className="list-disc pl-5 space-y-2">
                <li>Provide and improve core features: live map, convoys, routing/navigation links, and notifications.</li>
                <li>Operate, maintain, and secure the Services; troubleshoot, debug, and prevent fraud or abuse.</li>
                <li>Communicate with you about updates, features, service notices, and support.</li>
                <li>Personalize certain in-app experiences (e.g., showing nearby activity when you enable location).</li>
                <li>Comply with legal obligations and enforce our terms, including investigating violations.</li>
              </ul>
            </section>

            {/* Legal Bases */}
            <section>
              <h2 className="text-2xl font-sora font-semibold text-white mb-4">Legal Bases (EEA/UK)</h2>
              <p className="mb-2">Where GDPR/UK GDPR applies, we process your data on these bases:</p>
              <ul className="list-disc pl-5 space-y-2">
                <li><b>Contract necessity</b> to provide the Services you request.</li>
                <li><b>Legitimate interests</b> such as app security, fraud prevention, analytics, and service improvement (balanced with your rights).</li>
                <li><b>Consent</b> for specific features like precise location or notifications where required.</li>
                <li><b>Legal obligation</b> when we must retain or disclose data under applicable law.</li>
              </ul>
            </section>

            {/* Sharing */}
            <section id="sharing">
              <h2 className="text-2xl font-sora font-semibold text-white mb-4">How We Share Information</h2>
              <p>We do not sell your personal data. We share data only with:</p>
              <ul className="list-disc pl-5 space-y-2 mt-2">
                <li>
                  <b>Service Providers</b> that host our infrastructure, provide analytics and crash reporting, or help us deliver
                  the Services, under confidentiality and security obligations.
                </li>
                <li>
                  <b>Map & Routing Providers</b> to render maps/tiles and compute routes (e.g., OpenStreetMap-based tiles, Mapbox, or similar).
                </li>
                <li>
                  <b>Legal & Safety</b> when required by law or to protect rights, safety, and the integrity of the Services.
                </li>
                <li>
                  <b>Business Transfers</b> in connection with a merger, acquisition, or asset sale (your information will remain protected
                  under this policy or a policy of equal or greater protection).
                </li>
              </ul>
              <p className="mt-3">
                We may share <i>aggregated or de-identified</i> information that cannot reasonably be used to identify you.
              </p>
            </section>

            {/* Tracking & Ads */}
            <section>
              <h2 className="text-2xl font-sora font-semibold text-white mb-4">Tracking & Advertising</h2>
              <p className="mb-2">
                We do not use third-party advertising SDKs and do not track you across other companies’ apps or websites for targeted ads.
                If we introduce features that require Apple’s App Tracking Transparency (“ATT”), you will see the system prompt first,
                and we will honor your choice.
              </p>
            </section>

            {/* Your Choices & Rights */}
            <section id="choices">
              <h2 className="text-2xl font-sora font-semibold text-white mb-4">Your Choices</h2>
              <ul className="list-disc pl-5 space-y-2">
                <li>
                  <b>Location Controls:</b> Enable or disable precise location at any time via your device settings. Some features
                  may not work without location.
                </li>
                <li>
                  <b>Notifications:</b> You can turn push notifications on or off in your device settings.
                </li>
                <li>
                  <b>Access / Correction / Deletion:</b> Contact us to request a copy of your data, to correct inaccuracies, or to
                  delete your account and associated data (subject to legal retention obligations).
                </li>
                <li>
                  <b>Email Preferences:</b> You may opt out of non-essential emails at any time by following the unsubscribe link.
                </li>
              </ul>
            </section>

            {/* Data Retention */}
            <section>
              <h2 className="text-2xl font-sora font-semibold text-white mb-4">Data Retention</h2>
              <p>
                We retain personal data only as long as necessary for the purposes described above or as required by law. When we no
                longer need it, we will delete or de-identify it. Typical retention periods depend on account status, legal requirements,
                and operational needs (e.g., security logs kept for a limited time).
              </p>
            </section>

            {/* Security */}
            <section>
              <h2 className="text-2xl font-sora font-semibold text-white mb-4">Security</h2>
              <p>
                We use reasonable administrative, technical, and physical safeguards to protect your information. No system is 100% secure.
                If we detect a breach that poses a risk to you, we will act promptly and notify you and/or regulators where required by law.
              </p>
            </section>

            {/* Children */}
            <section>
              <h2 className="text-2xl font-sora font-semibold text-white mb-4">Children</h2>
              <p>
                The Services are not directed to children under 13 (or the minimum age in your country). We do not knowingly collect
                personal data from children. If we learn we have collected such data without appropriate consent, we will delete it.
              </p>
            </section>

            {/* International Transfers */}
            <section>
              <h2 className="text-2xl font-sora font-semibold text-white mb-4">International Data Transfers</h2>
              <p>
                We may process and store information in countries other than where you live. Where required, we use appropriate safeguards
                (such as standard contractual clauses) to protect personal data transferred internationally.
              </p>
            </section>

            {/* Regional Rights */}
            <section>
              <h2 className="text-2xl font-sora font-semibold text-white mb-4">Region-Specific Rights</h2>
              <h3 className="text-lg text-white font-sora mb-2">EEA/UK (GDPR/UK GDPR)</h3>
              <p className="mb-2">
                You may have the right to request access, correction, deletion, restriction, portability, and to object to certain processing.
                Where processing is based on consent, you can withdraw consent at any time. You also have the right to lodge a complaint with
                your local data protection authority.
              </p>

              <h3 className="text-lg text-white font-sora mb-2">California (CCPA/CPRA)</h3>
              <p className="mb-2">
                California residents may have rights to know/access specific pieces and categories of personal information, correct inaccuracies,
                delete personal information, and limit the use of sensitive personal information. We do not “sell” personal information as defined
                by the CCPA/CPRA, nor do we engage in “sharing” for cross-context behavioral advertising.
              </p>

              <h3 className="text-lg text-white font-sora mb-2">Canada (PIPEDA & provincial laws)</h3>
              <p>
                Canadian residents may request access to and correction of personal information, and may withdraw consent subject to legal or
                contractual restrictions and reasonable notice. You may also contact the Office of the Privacy Commissioner of Canada about our practices.
              </p>
            </section>

            {/* Third-Party Providers Disclosure */}
            <section>
              <h2 className="text-2xl font-sora font-semibold text-white mb-4">Third-Party Services We Rely On</h2>
              <p className="mb-2">
                To deliver the Services, we may use providers for hosting, performance, error/crash reporting, and maps/tiles/routing.
                Examples include cloud infrastructure hosts and mapping providers (e.g., OpenStreetMap-based tiles, Mapbox, or similar) and
                crash/diagnostics tools. The specific providers may change over time; when they do, we will update this policy or in-app notices
                where required.
              </p>
            </section>

            {/* Changes */}
            <section>
              <h2 className="text-2xl font-sora font-semibold text-white mb-4">Changes to This Policy</h2>
              <p>
                We may update this Privacy Policy from time to time. If we make material changes, we will notify you through the app or by other
                reasonable means before the changes take effect.
              </p>
            </section>

            {/* Contact */}
            <section id="contact">
              <h2 className="text-2xl font-sora font-semibold text-white mb-4">Contact Us</h2>
              <p>
                Questions or requests about your privacy? Email{" "}
                <a className="text-electric-cyan underline" href="mailto:ride.armada@gmail.com">ride.armada@gmail.com</a>.
              </p>
            </section>

            <p className="mt-8 text-xs text-text-muted">
              Designed to satisfy Apple App Store Review Guideline 5.1 (Data Collection and Storage, Data Use and Sharing, and App Tracking Transparency).
              If our data practices change, we will update this page.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
