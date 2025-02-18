'use client'

import React from 'react'
import { useTheme } from './ThemeContext'

export default function H1({ children, className }) {
  const theme = useTheme()
  // Determine the color set to use
  const textTheme = theme?.textTheme

  return (
    <h1
      className={`text-4xl sm:text-5xl leading-tight mb-4 ${textTheme.h1Font} ${textTheme.h1Text} ${className}`}
    >
      {children}
    </h1>
  )
}
