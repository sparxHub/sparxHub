const { config } = require("./package.json");

const nextConfig = (phase, { defaultConfig }) => {
  const isExport = process.env.NEXT_EXPORT === "true";
  const basePath = isExport && config.basePath !== "" ? `/${config.basePath}` : "";
  const assetPrefix = isExport && basePath !== "" ? `${basePath}/` : "";
  const publicApiUrl = config.publicApiUrl || "";

  // Detect if Astro is running and on which port
  const astroPort = process.env.ASTRO_PORT || "4322"; // Default to 4322 if Astro auto-selected a port

  console.log("Next.js Config Phase:", phase);
  console.log("NEXT_EXPORT Environment Variable:", process.env.NEXT_EXPORT);
  console.log("isExport Value:", isExport);
  console.log("Base Path:", basePath);
  console.log("Asset Prefix:", assetPrefix);
  console.log("Astro Port:", astroPort);

  return {
    reactStrictMode: false,
    output: isExport ? "export" : "standalone",
    basePath,
    assetPrefix,
    async rewrites() {
      return [
        {
          source: "/blog/:path*",
          destination: `http://localhost:${astroPort}/:path*`,
        },
      ];
    },
    images: {
      loader: isExport ? "custom" : "default",
      path: isExport ? "/" : undefined,
      unoptimized: isExport,
    },
    env: {
      NEXT_PUBLIC_EXPORT_MODE: isExport.toString(),
      NEXT_PUBLIC_ASSET_PREFIX: assetPrefix,
      NEXT_PUBLIC_API_URL: publicApiUrl,
      NEXT_PUBLIC_ASTRO_PORT: astroPort, // Make Astro port available in env
    },
  };
};

module.exports = nextConfig;
