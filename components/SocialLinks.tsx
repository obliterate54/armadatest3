'use client';
import { FaDiscord, FaTiktok } from 'react-icons/fa';

const base =
  'inline-flex items-center justify-center rounded-2xl border border-white/10 bg-white/5 backdrop-blur px-3 py-2 transition hover:bg-white/10 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-white/30';

export default function SocialLinks() {
  return (
    <div className="mt-6 flex items-center justify-center gap-3">
      <a
        href="https://discord.gg/7yNx5yFk"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Join us on Discord"
        className={`${base} icon-wiggle text-[#5865F2] hover:text-[#4752C4]`}
      >
        <FaDiscord className="h-6 w-6" />
      </a>
      <a
        href="https://www.tiktok.com/@armada.app?_t=ZT-8zW15s8sFOo&_r=1"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Follow us on TikTok"
        className={`${base} icon-wiggle text-white hover:text-electric-cyan`}
      >
        <FaTiktok className="h-6 w-6" />
      </a>
    </div>
  );
}