const withPWA = require("next-pwa");

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  ...withPWA({
    pwa: {
      dest: "public", // Menyimpan service worker di folder public
      register: true, // Auto register service worker
      skipWaiting: true, // Langsung aktifkan service worker
    },
  }),
};

module.exports = nextConfig;