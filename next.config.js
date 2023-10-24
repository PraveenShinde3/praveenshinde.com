const withMDX = require("@next/mdx")();

/** @type {import('rehype-pretty-code').Options} */
const nextConfig = {
  // Configure `pageExtensions`` to include MDX files
  pageExtensions: ["js", "jsx", "mdx", "ts", "tsx"],
  reactStrictMode: false,
  images: {
    domains: ["media.graphassets.com"],
  },
  experimental: {
    mdxRs: false,
  },
  // Optionally, add any other Next.js config below
};

module.exports = withMDX(nextConfig);
