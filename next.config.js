const { config } = require("./package.json");

const nextConfig = (phase, { defaultConfig }) => {
  const isExport = process.env.NEXT_EXPORT === "true";
  const basePath = isExport && config.basePath !== "" ? `/${config.basePath}` : "";
  const assetPrefix = isExport && basePath !== "" ? `${basePath}/` : "";
  const publicApiUrl = config.publicApiUrl || "";
  const astroPort = process.env.ASTRO_PORT || "4322";

  console.log("Next.js Config Phase:", phase);
  console.log("NEXT_EXPORT Environment Variable:", process.env.NEXT_EXPORT);
  console.log("isExport Value:", isExport);
  console.log("Base Path:", basePath);
  console.log("Asset Prefix:", assetPrefix);
  console.log("Astro Port:", astroPort);

  const commonConfig = {
    reactStrictMode: false,
    basePath,
    assetPrefix,
    images: {
      loader: isExport ? "custom" : "default",
      path: isExport ? "/" : undefined,
      unoptimized: isExport,
    },
    env: {
      NEXT_PUBLIC_EXPORT_MODE: isExport.toString(),
      NEXT_PUBLIC_ASSET_PREFIX: assetPrefix,
      NEXT_PUBLIC_API_URL: publicApiUrl,
      NEXT_PUBLIC_ASTRO_PORT: astroPort,
    },
  };

  if (isExport) {
    return {
      ...commonConfig,
      output: "export",
    };
  }

  return {
    ...commonConfig,
    output: "standalone",
    async rewrites() {
      return [
        {
          source: "/blog/:path*",
          destination: `http://localhost:${astroPort}/:path*`,
        },
      ];
    },
  };
};

module.exports = nextConfig;