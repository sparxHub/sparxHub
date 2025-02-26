'use client'

import { useState } from 'react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid'

// images
import Image from 'next/image'
import { getImageSrc, customLoader, isExportMode } from '@utils/imageUtils'

const AppBar = ({ sections }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const handleMenuItemClick = () => {
    setIsMenuOpen(false) // Close menu after clicking an item
  }

  // Use public folder path instead of import
  const logoImageSrc = getImageSrc('/img/dev_sparx_logo.png', '/img/dev_sparx_logo.png')

  return (
    <header className="bg-white px-6 sm:px-20 h-16 fixed top-0 w-full flex items-center justify-between z-50 shadow-md">
      {/* Logo */}
      <div className="flex items-center">
        <Image
          src={logoImageSrc}
          loader={isExportMode ? customLoader : undefined}
          priority
          alt="Dev Sparx Logo"
          width={150} // Adjusted size for smaller logo
          height={40}
        />
      </div>

      {/* Hamburger Icon */}
      <div className="sm:hidden">
        <button onClick={toggleMenu} className="text-gray-800">
          {isMenuOpen ? (
            <XMarkIcon className="h-6 w-6" />
          ) : (
            <Bars3Icon className="h-8 w-8 text-yellow-500 font-poppins-semi-bold" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`absolute sm:static sm:bg-transparent top-16 right-0 bg-white w-full sm:w-auto transition-all ease-in-out duration-300 ${isMenuOpen ? 'block' : 'hidden'
          } sm:block`}
      >
        <nav className="flex flex-col sm:flex-row items-center sm:space-x-6 p-4 sm:p-0">
          {/* Dynamic Links */}
          {sections.map((section, index) => (
            <a
              key={`app-bar-link-${section.id}`}
              href={`#${section.id}`}
              onClick={handleMenuItemClick} // Close menu after clicking
              className="text-gray-700 font-poppins cursor-pointer py-1 sm:py-0 flex items-center hover:text-yellow-500"
            >
              <span className="font-poppins-semi-bold text-yellow-500">{`0${index + 1}.`}</span>
              <span className="ml-2">{section.title}</span>
            </a>
          ))}

          {/* Resume Button */}
          <a
            href="Nadav_CV_2025_Dev_and_Ent.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-gray-700 font-poppins-semi-bold text-gray-700 py-1 px-4 rounded hover:bg-gray-700 hover:text-white transition mt-4 sm:mt-0"
          >
            Resume
          </a>
        </nav>
      </div>
    </header>
  )
}

export default AppBar
