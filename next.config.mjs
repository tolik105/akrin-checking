/** @type {import('next').NextConfig} */
const nextConfig = {
  compress: true,
  async redirects() {
    return [
      // Normalize accidental double JA prefix
      {
        source: '/ja/ja/:path*',
        destination: '/ja/:path*',
        permanent: true,
      },
      // Fix audited service slugs to live destinations
      {
        source: '/services/it-security-services',
        destination: '/services/it-security',
        permanent: true,
      },
      {
        source: '/services/penetration-testing',
        destination: '/services/network-penetration-testing',
        permanent: true,
      },
      // Consolidate audited AI page to managed services (final 200)
      {
        source: '/services/ai-powered-automation',
        destination: '/services/it-managed-services',
        permanent: true,
      },
      {
        source: '/ja/services/ai-powered-automation',
        destination: '/ja/services/it-managed-services',
        permanent: true,
      },
    ]
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  async headers() {
    return [
      {
        source: '/_next/static/:path*',
        headers: [
          { key: 'Cache-Control', value: 'public, max-age=31536000, immutable' },
        ],
      },
      {
        source: '/_next/image',
        headers: [
          { key: 'Cache-Control', value: 'public, max-age=31536000, immutable' },
        ],
      },
    ]
  },
  images: {
    unoptimized: false, // Enable Next.js image optimization for better performance
    formats: ['image/avif', 'image/webp'], // Prefer modern formats for crispness
    deviceSizes: [
      360, 414, 640, 750, 828, 960, 1080, 1200, 1280, 1440, 1536, 1600, 1920, 2048, 2160, 2304, 2400, 2560, 2880, 3200, 3840
    ],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'assets.aceternity.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'img.logo.dev',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'logo.clearbit.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'cdn.worldvectorlogo.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
  // Enforce no trailing slashes for consistent URLs
  trailingSlash: false,
}

export default nextConfig
