/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  // Enable experimental features for performance
  experimental: {
    // Optimize package imports to reduce bundle size
    optimizePackageImports: [
      '@radix-ui/react-dialog',
      '@radix-ui/react-dropdown-menu',
      '@radix-ui/react-popover',
      'lucide-react',
    ],
  },
  // Use Turbopack for faster builds (Next.js 16+)
  turbopack: {},
}

export default nextConfig
