/** @type {import('next').NextConfig} */

const nextConfig = {
    i18n: {
      locales: ["en"],
      defaultLocale: "en",
    },
    reactStrictMode: true,
}

const withPWA = require('next-pwa')({
  dest: 'public'
})

module.exports = withPWA({
  nextConfig
})  