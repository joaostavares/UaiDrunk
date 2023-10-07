/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  async rewrites() {
    return [
      {
        source: "/web",
        destination: process.env.HOST,
      },
    ];
  },
};
module.exports = nextConfig