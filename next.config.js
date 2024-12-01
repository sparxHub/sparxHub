/** @type {import('next').NextConfig} */
const nextConfig = (phase, { defaultConfig }) => {
  const isExport = process.env.NEXT_EXPORT === "true";

  return {
    reactStrictMode: false,
    output: isExport ? "export" : "standalone",
    images: {
      loader: isExport ? "custom" : "default", // Use custom loader for export
      path: isExport ? "/" : undefined,  // Use default path in dynamic mode
      unoptimized: isExport, // Disable optimization for export
    },
    env: {
      NEXT_PUBLIC_EXPORT_MODE: isExport.toString(), // Expose export mode to the client
    },
  };
};

module.exports = nextConfig;
