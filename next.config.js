/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  trailingSlash: true, // Ensure trailing slashes for all paths
  // Custom Webpack configuration
  webpack(config) {
    // Add support for SVG files
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });

    return config;
  },

  // For Build
  // assetPrefix: "http://localhost/insight-new-assets",
  // basePath: "/insight-new",
  // assetPrefix: "https://assets.insight.co.id",
  // basePath: "/insight-new",

  // images: {
  //   domains: ["localhost"], // Allow images from localhost
  //   loader: "default",
  //   path: "http://localhost/insight-new-assets",
  // },
  // images: {
  //   remotePatterns: [
  //     {
  //       protocol: "http",
  //       hostname: "localhost",
  //       port: "",
  //       pathname: "/insight-new-assets/**",
  //       search: "",
  //     },
  //   ],
  // },
};

module.exports = nextConfig;
