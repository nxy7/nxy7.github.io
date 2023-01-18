const isGithubActions = process.env.GITHUB_ACTIONS || false;

let assetPrefix = "./";
let basePath = "";

if (isGithubActions) {
  // trim off `<owner>/`
  const repo = process.env.GITHUB_REPOSITORY.replace(/.*?\//, "");

  assetPrefix = `./${repo}/`;
<<<<<<< HEAD
  basePath = `./${repo}`;
=======
  basePath = `/${repo}`;
>>>>>>> 8e07d0829d35c9b7e84ff5b7eac3b4dfdf7d1f22
}

/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  assetPrefix: assetPrefix,
  basePath: basePath,
};

module.exports = nextConfig;
