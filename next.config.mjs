/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/bright-smile-dental',
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },
};

export default nextConfig;