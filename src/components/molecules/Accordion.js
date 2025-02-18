'use client'

import React, { useState, useRef, useEffect } from 'react'
import { ListGrid } from '@components/components/atoms'

export function Accordion({ tabs }) {
  const [activeTab, setActiveTab] = useState(0)
  const [isMobile, setIsMobile] = useState(false) // Start with a default value
  const scrollRef = useRef(null)

  useEffect(() => {
    // This function now only runs on the client side
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768)
    }

    // Call it once to set the initial state
    handleResize()

    // Set up the event listener for subsequent resize events
    window.addEventListener('resize', handleResize)

    // Clean up the event listener when the component unmounts
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <div className="flex flex-col sm:flex-row border">
      <div className={`flex ${isMobile ? 'flex-row' : 'flex-col'} border border-b sm:border-r`}>
        <ul
          ref={scrollRef}
          className="flex overflow-x-auto sm:flex-col sm:overflow-visible w-full sm:w-48 py-4"
        >
          {tabs.map((tab, idx) => (
            <li key={idx} className={`mb-4 ${isMobile ? 'shrink-0' : ''}`}>
              <button
                onClick={() => setActiveTab(idx)}
                className={`px-4 py-2 ${
                  isMobile ? 'whitespace-nowrap' : 'w-full text-left'
                } ${activeTab === idx ? 'bg-blue-200' : ''}`}
              >
                {tab.title}
              </button>
            </li>
          ))}
        </ul>
      </div>

      {/* Content Panels */}
      <div className="flex-1 p-8">
        {tabs.map((tab, idx) => (
          <div
            key={idx}
            className={`transition-opacity duration-300 ${
              activeTab === idx ? 'opacity-100' : 'opacity-0 hidden'
            }`}
          >
            <h4 className="mb-4 font-bold">{tab.jobTitle}</h4>
            <h5 className="mb-4 text-gray-500">{tab.jobDetails}</h5>
            {/* Directly render the content component */}
            {activeTab === idx && tab.content}
          </div>
        ))}
      </div>
    </div>
  )
}

export function ContentPanel({ title, subtitle, contentLinks, list }) {
  return (
    <div role="tabpanel" tabIndex="0" className="relative w-full pt-3 pl-8">
      <h4 className="text-lg font-medium">
        <span>{title}</span>
        {subtitle && (
          <span className="text-green-400 ml-2">
            <span>@</span>
            <a href={contentLinks} target="_blank" rel="noopener noreferrer">
              {subtitle}
            </a>
          </span>
        )}
      </h4>

      <h5 className="font-mono text-sm text-gray-400 my-6">{subtitle}</h5>

      <div>
        <ListGrid items={list} columns={1} />
      </div>
    </div>
  )
}
