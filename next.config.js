const UnoCSS = require("@unocss/webpack").default;
const presetUno = require("@unocss/preset-uno").default;
const isGithubActions = process.env.GITHUB_ACTIONS || false;

let assetPrefix = "/";
let basePath = "";

if (isGithubActions || process.env.NODE_ENV != "development") {
  // trim off `<owner>/`
  // const repo = process.env.GITHUB_REPOSITORY.replace(/.*?\//, "");

  assetPrefix = `./`;
  // basePath = `/${repo}`;
  basePath = ``;
}

/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  assetPrefix: assetPrefix,
  basePath: basePath,
  // reactStrictMode: true,

  webpack: (config, context) => {
    config.plugins.push(UnoCSS());

    // config.optimization = {
      // realContentHash: true,
    // }


    // if (context.buildId !== "development") {
    //   // * disable filesystem cache for build
    //   // * https://github.com/unocss/unocss/issues/419
    //   // * https://webpack.js.org/configuration/cache/
    // }

    return config;
  },
};

module.exports = nextConfig;
