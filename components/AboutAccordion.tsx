'use client';

import { motion } from 'framer-motion';

const AboutAccordion = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-dark-canvas to-dark-canvas/95">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-card"
        >
          <details className="group">
            <summary className="list-none cursor-pointer select-none">
              <div className="flex items-center justify-between">
                <h2 className="text-3xl md:text-4xl font-sora font-bold tracking-tight text-white">
                  🔧 About Armada
                </h2>
                <span className="ml-3 rounded-xl bg-white/10 px-3 py-1 text-sm text-white/80 group-open:rotate-180 transition-transform duration-300">
                  ▼
                </span>
              </div>
            </summary>

            <div className="mt-6 space-y-6 text-lg text-text-muted leading-relaxed">
              <p>
                Armada started with a simple truth:<br />
                <strong>Driving is better when you're not doing it alone.</strong> And Networking is pretty hard when you don't know where to look
              </p>
              
              <p>
                We're car people, Text threads didn't cut it. Location sharing was messy. And always needing to scavenge social media gets annoying, So we built what we wished existed—a real-time app that brings drivers together the way car culture was meant to be felt: live, moving, and united.
              </p>
              
              <p>
                <strong>Armada isn't just a tool.</strong> It's a platform built for the community, from solo riders to full-blown car clubs. Every tap, feature, and animation was designed with purpose: to make driving feel shared again.
              </p>

              <div className="mt-8">
                <h3 className="text-2xl font-sora font-semibold mb-4 text-white">
                  What We Believe
                </h3>
                
                <ul className="list-none space-y-3">
                  <li>🚗 <strong>Car culture is connection.</strong></li>
                  <li>🛠 Tools should feel like they were built from inside the scene, not from the outside looking in.</li>
                  <li>🤝 You shouldn't have to be an influencer or a business to host a meet, build a brand, or bring your people together.</li>
                  <li>💬 Communication on the road should be effortless, safe, and in sync with the drive.</li>
                </ul>
              </div>

              <div className="mt-8">
                <h3 className="text-2xl font-sora font-semibold mb-4 text-white">
                  Where We're Going
                </h3>
                
                <div className="space-y-4">
                  <p>The core of Armada will always be free for drivers.</p>
                  <p>We believe car culture isn't just about machines. it's about motion, people, and shared energy.</p>
                  <p>With Armada, you're never just driving. You're building something.</p>
                </div>
              </div>
            </div>
          </details>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutAccordion;