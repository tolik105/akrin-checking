/** @type {import('next').NextConfig} */
const nextConfig = {
  compress: true,
  productionBrowserSourceMaps: true,
  // Performance optimizations
  experimental: {
    // Removing 'framer-motion' here avoids Next 15 vendor-chunks resolution issues in production builds
    optimizePackageImports: ['@heroicons/react', 'lucide-react'],
  },
  // Turbopack config (Next.js 16 uses Turbopack by default)
  turbopack: {},
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
    deviceSizes: [360, 640, 750, 828, 1080, 1200, 1536, 1920, 2048],
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
