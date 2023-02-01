const publicRuntimeConfig = require("./configs/env");

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  publicRuntimeConfig,
  compiler: {
    styledComponents: {
      ssr: true,
    },
  },
};

module.exports = nextConfig;
