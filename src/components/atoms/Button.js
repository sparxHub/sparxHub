"use client";

import React from "react";
import PropTypes from "prop-types";
import Icon from "./Icon";

function Button({
  variant = "normal",
  onClick,
  className = "",
  children,
  disabled = false,
  icon = null,
  fullWidth = false,
}) {
  let buttonStyles =
    "inline-flex items-center px-4 py-2 rounded font-semibold transition-colors duration-200 transform focus:outline-none focus:ring-2 focus:ring-offset-2";

  if (fullWidth) {
    buttonStyles += " w-full justify-center"; // adding justify-center if it's full width to center content
  }

  if (disabled) {
    buttonStyles += " opacity-50 cursor-not-allowed";
  }

  switch (variant) {
    case "outline":
      buttonStyles +=
        " border border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white focus:ring-blue-500";
      break;
    case "text":
      buttonStyles += " text-blue-500 hover:bg-blue-100 focus:ring-blue-500";
      break;
    case "normal":
    default:
      buttonStyles +=
        " bg-blue-500 text-white hover:bg-blue-600 focus:ring-blue-500";
      break;
  }

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

Button.propTypes = {
  variant: PropTypes.oneOf(["outline", "text", "normal"]),
  onClick: PropTypes.func,
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
  disabled: PropTypes.bool,
  icon: PropTypes.string,
  fullWidth: PropTypes.bool,
};

export default React.memo(Button);
