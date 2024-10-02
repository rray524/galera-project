/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "img.icons8.com",
      },
      {
        protocol: "http",
        hostname: "104.237.141.171",
      },
      {
        protocol: "https",
        hostname: "st4.depositphotos.com",
      },
    ],
  },
};

module.exports = nextConfig;
