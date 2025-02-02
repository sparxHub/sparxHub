const { config } = require("./package.json");

const assetPrefix = process.env.NEXT_PUBLIC_ASSET_PREFIX || ""; // Use correct prefix

module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
    "postcss-url": {
      url: (asset) => {
        return `${assetPrefix}${asset.url}`;
      },
    },
  },
};
