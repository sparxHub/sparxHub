import React from "react";

// Avoid importing anything related to Sanity if in export mode
const isExportMode = process.env.NEXT_PUBLIC_EXPORT_MODE === "true";

let Head, NextStudio, metadata, config;

if (!isExportMode) {
  // Dynamically import only if not in export mode
  Head = require("next/head").default;
  NextStudio = require("next-sanity/studio").NextStudio;
  metadata = require("next-sanity/studio/metadata").metadata;
  config = require("../../../sanity.config").default;
}

export default function StudioPage() {
  if (isExportMode) {
    // Return null to avoid rendering the page in export mode
    return null;
  }

  return (
    <>
      <Head>
        {Object.entries(metadata).map(([key, value]) => (
          <meta key={key} name={key} content={value} />
        ))}
      </Head>
      <NextStudio config={config} />
    </>
  );
}
