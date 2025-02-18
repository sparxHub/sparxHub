import React from 'react'
import { useTheme } from './ThemeContext'

export default function Paragraph({ children, markDefs = [], className = '', boldClassName = '' }) {
  const theme = useTheme()
  // Determine the color set to use
  const textTheme = theme?.textTheme

  // Function to extract and style bold text
  const extractBoldText = (text, boldClass) => {
    // Split the text by asterisks (bold indicator)
    const parts = text.split('**')

    return parts.map((part, index) => {
      // Alternate parts are bold, others are regular
      if (index % 2 === 0) {
        return (
          <span
            key={index}
            className={`text-lg font-poppins-semi-bold ${textTheme.bodyFont} ${textTheme.bodyText} ${boldClass}`}
          >
            {part}
          </span>
        )
      } else {
        return part // Return plain text
      }
    })
  }

  // Function to extract and style italic text
  const extractItalicText = (text) => {
    return (
      <i key={text} className={`italic`}>
        {text}
      </i>
    )
  }

  // Function to extract and style linked text
  const extractLinkText = (text, marks, markDefs) => {
    if (marks && marks.length > 0) {
      for (const mark of marks) {
        const linkDef = markDefs.find((def) => def._key === mark)
        if (linkDef && linkDef._type === 'link') {
          const href = linkDef.href
          if (href.startsWith('http') || href.startsWith('www')) {
            // Handle web links
            return (
              <a
                key={text}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className={`text-blue-500 hover:text-blue-700`}
              >
                {text}
              </a>
            )
          } else {
            // Handle email links
            return (
              <a key={text} href={`mailto:${href}`} className={`text-blue-500 hover:text-blue-700`}>
                {text}
              </a>
            )
          }
        }
      }
    }

    return text // Return plain text if no link definition
  }

  const renderChildren = (children) => {
    return children && Array.isArray(children)
      ? children.map((child, index) => {
          if (typeof child === 'string') {
            // If it's a string, render it as plain text
            return <React.Fragment key={index}>{child}</React.Fragment>
          } else if (React.isValidElement(child)) {
            // If it's a React element, render it as is
            return <React.Fragment key={index}>{child}</React.Fragment>
          } else if (Array.isArray(child)) {
            // If it's an array, recursively render its children
            return <React.Fragment key={index}>{renderChildren(child)}</React.Fragment>
          } else if (child != null) {
            if (child.marks) {
              // Handle marks (e.g., "strong", "italic", "link")
              if (child.marks.includes('strong')) {
                return extractBoldText(child.text, boldClassName)
              } else if (child.marks.includes('em')) {
                return extractItalicText(child.text)
              } else if (child.marks.length > 0 && markDefs && markDefs.length > 0) {
                // Check for links
                return extractLinkText(child.text, child.marks, markDefs)
              }
            }
            return child.text
          }
        })
      : children
  }

  return (
    <p className={`mb-4 ${textTheme.bodyFont} ${textTheme.bodyText} ${className}`}>
      {renderChildren(children)}
    </p>
  )
}
