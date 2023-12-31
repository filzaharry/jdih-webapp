/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  optimizeCss: false,
  enableBabelRuntime: true,
  eslint: { ignoreDuringBuilds: true },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'beta-dashboardsiganteng.bengkelkutakkatik.id',
        port: '',
        pathname: '/api/**'
      }
    ],
    domains: [
      "images.unsplash.com",
      "upload.wikimedia.org",
      "www.perumdatirtabenteng.co.id",
      "jdih.tangerangkota.go.id",
      "beta-mobilepdam.bengkelkutakkatik.id",
      "beta-dashboardsiganteng.bengkelkutakkatik.id"
    ],
  },
};

module.exports = nextConfig;
