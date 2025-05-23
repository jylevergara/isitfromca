import type { NextConfig } from "next";

const nextConfig: () => Promise<NextConfig> = async () => {
  // Here we use the @cloudflare/next-on-pages next-dev module to allow us to use bindings during local development
  // (when running the application with `next dev`), for more information see:
  // https://github.com/cloudflare/next-on-pages/blob/main/internal-packages/next-dev/README.md
  if (process.env.NODE_ENV === "development") {
    const { setupDevPlatform } = await import(
      "@cloudflare/next-on-pages/next-dev"
    );
    await setupDevPlatform();
  }

  return {
    /* config options here */
  };
};

export default nextConfig;