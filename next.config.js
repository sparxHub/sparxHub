const { config } = require("./package.json");

const nextConfig = (phase, { defaultConfig }) => {
  const isExport = process.env.NEXT_EXPORT === "true";
  const basePath = isExport && config.basePath != "" ? `/${config.basePath}` : ""; // Set basePath only in export mode
  const assetPrefix = isExport && basePath != "" ? `${basePath}/` : ""; // Apply asset prefix only in export

  // Debugging output
  console.log("Next.js Config Phase:", phase);
  console.log("NEXT_EXPORT Environment Variable:", process.env.NEXT_EXPORT);
  console.log("isExport Value:", isExport);
  console.log("Base Path:", basePath);
  console.log("Asset Prefix:", assetPrefix);

  return {
    reactStrictMode: false,
    output: isExport ? "export" : "standalone",
    basePath,
    assetPrefix,
    images: {
      loader: isExport ? "custom" : "default",
      path: isExport ? "/" : undefined,
      unoptimized: isExport,
    },
    env: {
      NEXT_PUBLIC_EXPORT_MODE: isExport.toString(),
      NEXT_PUBLIC_ASSET_PREFIX: assetPrefix, // Ensure asset prefix is available globally
    },
  };
};

module.exports = nextConfig;
