'use client'

import React from 'react'
import { useTheme } from './ThemeContext'

export default function H2({ children, className }) {
  const theme = useTheme()
  const textTheme = theme?.textTheme

  return (
    <h2
      className={`text-3xl font-semibold leading-snug mb-3 ${textTheme.h2Font} ${textTheme.h2Text} ${className}`}
    >
      {children}
    </h2>
  )
}
