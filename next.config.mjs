/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: { ignoreBuildErrors: true },
  eslint: { ignoreDuringBuilds: true },
  basePath: "/bright-smile-dental",
  output: "export",
  images: { unoptimized: true },
  transpilePackages: ["framer-motion"],
};

export default nextConfig;
