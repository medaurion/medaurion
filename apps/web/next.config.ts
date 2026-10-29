import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Workspace packages are TypeScript source, so Next.js compiles them.
  transpilePackages: ["@medaurion/db", "@medaurion/ui"],
  /* config options here */
  experimental: {
    agentFeedback: true,
  },
  cacheComponents: true,
  partialPrefetching: true,
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
