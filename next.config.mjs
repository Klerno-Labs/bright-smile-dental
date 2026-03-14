/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: "/bright-smile-dental",
  output: "export",
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
};

export default nextConfig;