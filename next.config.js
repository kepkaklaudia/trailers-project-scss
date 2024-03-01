/** @type {import('next').NextConfig} */

// const nextConfig = {}

// module.exports = nextConfig

const withNextIntl = require("next-intl/plugin")(

  // This is the default (also the `src` folder is supported out of the box)
  "./src/lib/i18n/i18n.ts"
);

module.exports = withNextIntl({
  webpack(config) {
    config.resolve.extensions.push(".ts", ".tsx");
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });
    return config;
  },
  // Other Next.js configuration ...
});