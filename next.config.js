const isProd = process.env.NODE_ENV === "production";
/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  assetPrefix: isProd ? "/nxy7.github.io/" : "",
};

module.exports = nextConfig;
