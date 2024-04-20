/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.NEXT_PUBLIC_CANONICAL_BASE_URL || 'https://www.pixel-shredder.com',
  generateRobotsTxt: true,
  generateIndexSitemap: false,
}