import React from "react";

const theme = {
  textTheme: {
    bodyFont: "font-poppins-regular",
    bodyText: "text-greeny-900",
    h1Font: "font-poppins-bold",
    h1Text: "text-greeny-900",
    h2Font: "font-poppins-bold",
    h2Text: "text-greeny-900",
    h3Font: "font-poppins-bold",
    h3Text: "text-greeny-900",
  },
  colorSets: {
    primary: {
      bg: "bg-greeny-900", // Matches the primary tone of the text
      text: "text-greeny-900", // Text tone
      border: "border-greeny-500", // Border tone
      hoverBg: "bg-greeny-700", // Darker shade for hover
      hoverText: "text-white", // Contrast on hover
      focusRing: "ring-greeny-400", // Focus ring to match tones
      onBackground: {
        text: "text-white", // Text on primary background
      },
    },
    secondary: {
      bg: "bg-yellow-500",
      text: "text-yellow-900",
      border: "border-greeny-500",
      hoverBg: "bg-yellow-600",
      hoverText: "text-yellow-900",
      focusRing: "ring-blue-500",
      onBackground: {
        text: "text-yellow-900",
      },
    },
  },
};

export { theme };
