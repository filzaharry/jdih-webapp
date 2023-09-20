/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  optimizeCss: false,
  enableBabelRuntime: true,
  images: {
    domains: [
      "images.unsplash.com",
      "upload.wikimedia.org",
      "www.perumdatirtabenteng.co.id",
      "jdih.tangerangkota.go.id",
      "beta-mobilepdam.bengkelkutakkatik.id"
    ],
  },
};

module.exports = nextConfig;
