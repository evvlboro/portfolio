import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      {
        source: "/demo/citrusmall",
        destination: "/demo/citrusmall/index.html",
      },
      {
        source: "/demo/citrusmall/",
        destination: "/demo/citrusmall/index.html",
      },
      {
        source: "/demo/nsv",
        destination: "/demo/nsv/index.html",
      },
      {
        source: "/demo/nsv/",
        destination: "/demo/nsv/index.html",
      },
      {
        source: "/demo/nsv/product/:path*",
        destination: "/demo/nsv/index.html",
      },
      {
        source: "/demo/nsv/quiz/:path*",
        destination: "/demo/nsv/index.html",
      },
    ];
  },
};

export default nextConfig;
