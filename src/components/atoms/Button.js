"use client";

import React from "react";
import PropTypes from "prop-types";

import { useTheme } from "./ThemeContext";

import Icon from "./Icon";

function Button({
  variant = "normal",
  onClick,
  className = "",
  children,
  disabled = false,
  icon = null,
  fullWidth = false,
  colorSet,
}) {
  const theme = useTheme();

  // Determine the color set to use
  const selectedColorSet =
    theme?.colorSets[colorSet] || theme?.colorSets.primary;

  let buttonStyles =
    "inline-flex items-center px-4 py-2 rounded font-semibold transition-colors duration-200 transform focus:outline-none focus:ring-2 focus:ring-offset-2";

  if (fullWidth) {
    buttonStyles += " w-full justify-center";
  }

  if (disabled) {
    buttonStyles += " opacity-50 cursor-not-allowed";
  }

  switch (variant) {
    case "outline":
      buttonStyles += ` border ${selectedColorSet.border} ${selectedColorSet.text} hover:${selectedColorSet.hoverBg} focus:${selectedColorSet.focusRing}`;
      break;
    case "text":
      buttonStyles += ` ${selectedColorSet.text} hover:${selectedColorSet.hoverBg} focus:${selectedColorSet.focusRing}`;
      break;
    case "normal":
    default:
      // buttonStyles += " bg-blue-500 text-white hover:bg-blue-600";
      buttonStyles += ` ${selectedColorSet.bg} hover:${selectedColorSet.hoverBg} focus:${selectedColorSet.focusRing} ${selectedColorSet.onBackground.text}`;
      break;
  }


  // buttonStyles =
  //   "inline-flex items-center px-4 py-2 rounded font-semibold transition-colors duration-200 transform focus:outline-none focus:ring-2 focus:ring-offset-2 w-full justify-center bg-greeny-500 hover:bg-greeny-600 focus:ring-blue-500 text-white";
  return (
    <button
      onClick={onClick}
      className={`${buttonStyles} ${className}`}
      disabled={disabled}
    >
      {icon && <Icon name={icon} className="mr-2 mt-[-2px] w-5 h-5" />}
      <span className="align-middle mt-[2px]">{children}</span>
    </button>
  );
}

export default React.memo(Button);
