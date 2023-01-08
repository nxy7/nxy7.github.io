const isProd = process.env.NODE_ENV === "production";
/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  // basePath: "/www",
  distDir: "/www",
  assetPrefix: isProd ? "/nxy7.github.io/" : "",
  /* config options here */
};

module.exports = nextConfig;
