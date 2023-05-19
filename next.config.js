/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  distDir: 'dist',
  images: {
    unoptimized: true,
    domains: ['ergast.com'],
  },
}

module.exports = nextConfig
 
  
