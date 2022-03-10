/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  // Enables the styled-components SWC transform
  styledComponents: true,
  webpack: function (config, options) {
    config.module.rules.push({
      test: /\.mp4$/,
      use: [
        {
          loader: "file-loader",
          options: {
            name: "[name].[ext]",
            outputPath: "static/media",
          },
        },
      ],
    });
    return config;
  },
  i18n: {
    locales: ["hr"],
    defaultLocale: "hr",
  },
};

module.exports = nextConfig;
