/** @type {import('next').NextConfig} */
module.exports = {
  swcMinify: true,
  reactStrictMode: true,
  images: {
    domains: [
      'storage.opensea.io',
      'assets.poap.xyz',
      'lh3.googleusercontent.com',
      'openseauserdata.com'
    ]
  },
  experimental: {
    legacyBrowsers: false,
    browsersListForSwc: true
  }
};
