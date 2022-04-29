/** @type {import('next').NextConfig} */
const { withContentlayer } = require("next-contentlayer");
const nextConfig = withContentlayer({
  reactStrictMode: true,
  swcMinify: true,
});

module.exports = nextConfig;
