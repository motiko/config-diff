import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Search Console verification file: keep it reachable, keep it out of the index.
  async headers() {
    return [
      {
        source: "/google4a8c0376cc0771be.html",
        headers: [{ key: "X-Robots-Tag", value: "noindex" }],
      },
    ];
  },
};

export default nextConfig;
