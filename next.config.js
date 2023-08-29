/** @type {import('next').NextConfig} */

const withPWA = require('next-pwa')({
  dest: 'public'
})

module.exports = withPWA({
  experimental: {
    serverActions: true,
    serverComponentsExternalPackages:['mongoose','@typegoose/typegoose']
  },
  i18n: {
    locales: ["en"],
    defaultLocale: "en",
  },
  reactStrictMode: true,
  async rewrites() {
    return [
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