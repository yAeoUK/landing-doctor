/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/landing/doctor', // Your subdirectory name
  assetPrefix: '/landing/doctor', // Needed if you're serving static assets

  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
}

export default nextConfig
