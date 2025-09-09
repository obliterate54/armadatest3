/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: { 
    unoptimized: true,
    domains: ['images.unsplash.com']
  },
  webpack: (config, { dev }) => {
    // In CI/sandboxes the persistent file cache can fail; use memory or disable.
    config.cache = dev ? { type: 'memory' } : false;
    return config;
  },
};

module.exports = nextConfig;