/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  optimizeCss: false,
  enableBabelRuntime: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'beta-dashboardsiganteng.bengkelkutakkatik.id',
        port: '',
        pathname: '/api/jdih/news'
      }
    ]
    // domains: [
    //   "images.unsplash.com",
    //   "upload.wikimedia.org",
    //   "www.perumdatirtabenteng.co.id",
    //   "jdih.tangerangkota.go.id",
    //   "beta-mobilepdam.bengkelkutakkatik.id",
    //   "beta-dashboardsiganteng.bengkelkutakkatik.id"
    // ],
  },
};

module.exports = nextConfig;
