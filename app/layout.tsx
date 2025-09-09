import './globals.css';
import 'leaflet/dist/leaflet.css';
import type { Metadata } from 'next';
import { Inter, Sora } from 'next/font/google';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const sora = Sora({ subsets: ['latin'], variable: '--font-sora' });

export const metadata: Metadata = {
  title: 'Armada — Drive Together',
  description: 'Drive as one. Create convoys, invite the crew, and roll out without group-chat chaos. Built for car crews worldwide.',
  keywords: 'car convoy, automotive, meets, drives, car community, road trips',
  authors: [{ name: 'Armada' }],
  openGraph: {
    title: 'Armada — Drive Together',
    description: 'Drive as one. Create convoys, invite the crew, and roll out without group-chat chaos.',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Armada — Drive Together',
    description: 'Drive as one. Create convoys, invite the crew, and roll out without group-chat chaos.',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} ${sora.variable} bg-dark-canvas text-text-primary antialiased`}>
        {children}
      </body>
    </html>
  );
}