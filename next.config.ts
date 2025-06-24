import type { NextConfig } from "next";

const nextConfig: NextConfig = {
   images: {
    remotePatterns: [new URL('https://res.cloudinary.com/**')],
  },
};

if (process.env.NODE_ENV === "development") {
  // Dynamically import to avoid issues in production
  (async () => {
    const { setupDevPlatform } = await import("@cloudflare/next-on-pages/next-dev");
    await setupDevPlatform();
  })();
}

export default nextConfig;
