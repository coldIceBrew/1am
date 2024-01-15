/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["localhost", "lh3.googleusercontent.com", "picsum.photos"],
  },
  experimental: {
    serverActions: true,
  },
};

module.exports = nextConfig;
