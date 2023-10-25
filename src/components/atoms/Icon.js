"use client";

import React from "react";
import * as solidIcons from "@heroicons/react/24/solid";
import * as outlineIcons from "@heroicons/react/24/outline";

export default function Icon({
  name,
  variant = "outline",
  className = "",
  ...props
}) {
  // Choose the appropriate set based on the variant
  const iconsSet = variant === "solid" ? solidIcons : outlineIcons;

  // Convert the name to its actual component name, e.g., "Beaker" to "BeakerIcon"
  const iconName = `${name}Icon`;

  // Find the icon component from the chosen set
  const IconComponent = iconsSet[iconName];

  // If the icon isn't found, log a warning and don't render anything
  if (!IconComponent) {
    console.warn(`Icon with name "${name}" not found in "${variant}" set.`);
    return null;
  }

  return <IconComponent className={`h-6 w-6 ${className}`} {...props} />;
}
