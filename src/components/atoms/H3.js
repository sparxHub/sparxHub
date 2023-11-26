"use client";

import React from "react";
import { useTheme } from "./ThemeContext";

export default function H3({ children, className }) {
  const theme = useTheme();
  const textTheme = theme?.textTheme;

  return (
    <h3
      className={`text-2xl  mb-4  leading-relaxed ${textTheme.h3Font} ${textTheme.h3Text} ${className}`}
    >
      {children}
    </h3>
  );
}
