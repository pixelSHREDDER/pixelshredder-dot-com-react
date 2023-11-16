/** @type {import('next').NextConfig} */

const withPWA = require('next-pwa')({
  dest: 'public'
})

module.exports = withPWA({
  experimental: {
    serverActions: true,
    serverComponentsExternalPackages:['mongoose','@typegoose/typegoose']
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'pixel-shredder.com',
        port: '',
        pathname: '/article-files/**',
      },
      {
        protocol: 'https',
        hostname: 'pixel-shredder.com',
        port: '',
        pathname: '/project-files/**',
      },
    ],
  },
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: '/about-this-site',
        destination: '/projects/mikeintosh',
      },
      {
        source: '/mikearcade/:path*',
        destination: 'https://pixel-shredder.com/mikearcade/:path*',
      },
      {
        source: '/mikebox/:path*',
        destination: 'https://pixel-shredder.com/mikebox/:path*',
      },
      {
        source: '/port/:path*',
        destination: 'https://pixel-shredder.com/port/:path*',
      },
    ]
  },
})  