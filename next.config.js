/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ["js", "jsx", "ts", "tsx", "mdx"],
  // typescript: { ignoreBuildErrors: true },
};

const withMDX = require("@next/mdx")();

module.exports = withMDX(nextConfig);
