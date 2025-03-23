'use client'

import React, { useState } from 'react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid'
import Image from 'next/image'
import { getImageSrc, customLoader, isExportMode } from '@utils/imageUtils'

const AppBar = ({ children }) => {
  return (
    <header className="bg-white px-6 sm:px-20 h-16 fixed top-0 w-full flex items-center justify-between z-50 shadow-md">
      {children}
    </header>
  )
}

// ✅ Logo Component
AppBar.Logo = ({ imgSrc, ...props }) => (
  <div>
    <Image
      src={imgSrc}
      loader={isExportMode ? customLoader : undefined}
      priority
      alt="Dev Sparx Logo"
      width={150}
      height={40}
      {...props}
    />
  </div>
)
AppBar.Logo.displayName = 'AppBar.Logo'

// ✅ Desktop Menu (Items in a Horizontal Row)
AppBar.Menu = ({ children }) => (
  <nav className="flex flex-row items-center space-x-6">{children}</nav>
)
AppBar.Menu.displayName = 'AppBar.Menu'

// ✅ Menu Item (Common for Desktop & Mobile)
AppBar.MenuItem = ({ href, children }) => (
  <a
    href={href}
    className="text-gray-700 font-poppins cursor-pointer py-2 px-4 flex items-center hover:text-yellow-500"
  >
    {children}
  </a>
)
AppBar.MenuItem.displayName = 'AppBar.MenuItem'

// ✅ Mobile Menu Toggle (Hamburger + Dropdown)
const MenuToggle = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  return (
    <div>
      <MenuToggle.Button onClick={() => setIsMenuOpen(!isMenuOpen)} isOpen={isMenuOpen} />
      {isMenuOpen && <MenuToggle.Menu closeMenu={closeMenu}>{children}</MenuToggle.Menu>}
    </div>
  )
}
MenuToggle.displayName = 'AppBar.MenuToggle'

// ✅ Mobile Hamburger Button
MenuToggle.Button = ({ onClick, isOpen }) => (
  <button onClick={onClick} className="text-gray-800">
    {isOpen ? (
      <XMarkIcon className="h-6 w-6" />
    ) : (
      <Bars3Icon className="h-8 w-8 text-yellow-500 font-poppins-semi-bold" />
    )}
  </button>
)
MenuToggle.Button.displayName = 'AppBar.MenuToggle.Button'

// ✅ Mobile Dropdown Menu (Stacked Items)
const Menu = ({ children, closeMenu }) => {
  // Clone children and pass closeMenu to each child
  const childrenWithProps = React.Children.map(children, (child) => {
    if (React.isValidElement(child)) {
      return React.cloneElement(child, { closeMenu })
    }
    return child
  })

  return (
    <div className="absolute top-16 right-0 bg-white w-full sm:hidden transition-all ease-in-out duration-300 shadow-md">
      <nav className="flex flex-col items-center p-4">{childrenWithProps}</nav>
    </div>
  )
}
Menu.displayName = 'AppBar.MenuToggle.Menu'
MenuToggle.Menu = Menu

// ✅ Mobile Menu Items
const MenuItem = ({ href, children, closeMenu }) => (
  <a
    href={href}
    className="text-gray-700 font-poppins cursor-pointer py-2 px-4 flex items-center hover:text-yellow-500"
    onClick={(e) => {
      if (closeMenu) {
        // Close the menu before navigation
        closeMenu()
      }
    }}
  >
    {children}
  </a>
)
MenuItem.displayName = 'AppBar.MenuToggle.MenuItem'
MenuToggle.MenuItem = MenuItem
// Attach `MenuToggle` to `AppBar`
AppBar.MenuToggle = MenuToggle

export default AppBar
