/** @type {import('next').NextConfig} */
const nextConfig = {
  // output: "export",
  // assetPrefix: "./",

  // images: {
  //   loader: "imgix",
  //   path: "/",
  // },
  // images: {
  //   unoptimized: true,
  // },
  // trailingSlash: true,
  // exportPathMap: async function (
  //   defaultPathMap,
  //   { dev, dir, outDir, distDir, buildId }
  // ) {
  //   return {
  //     "/": { page: "/" },
  //     "/solutions/internal-audit": { page: "/solutions/internal-audit" },
  //   };
  // },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });

    return config;
  },
};

module.exports = nextConfig;
