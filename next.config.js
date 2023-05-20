/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  // distDir: 'dist',
  images: {
    unoptimized: true,
    domains: ['http://ergast.com'],
  },
}

module.exports = nextConfig
