'use client'

import React, { useState, useEffect, useContext, createContext } from 'react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid'
import Image from 'next/image'
import { getImageSrc, customLoader, isExportMode } from '@utils/imageUtils'

// ✅ Create Responsive Context
const ResponsiveContext = createContext(false)

export const useIsMobile = () => useContext(ResponsiveContext)

const AppBar = ({ children }) => {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 640)
    }

    checkIfMobile()
    window.addEventListener('resize', checkIfMobile)
    return () => window.removeEventListener('resize', checkIfMobile)
  }, [])

  return (
    <ResponsiveContext.Provider value={isMobile}>
      <header className="bg-white px-6 sm:px-20 h-16 fixed top-0 w-full flex items-center justify-between z-50 shadow-md">
        {children}
      </header>
    </ResponsiveContext.Provider>
  )
}

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

AppBar.MenuDesktop = ({ children }) => (
  <nav className="flex flex-row items-center space-x-6">{children}</nav>
)
AppBar.MenuDesktop.displayName = 'AppBar.MenuDesktop'

AppBar.MenuDesktopItem = ({ href, children }) => (
  <a
    href={href}
    className="text-gray-700 font-poppins cursor-pointer py-2 px-4 flex items-center hover:text-yellow-500"
  >
    {children}
  </a>
)
AppBar.MenuDesktopItem.displayName = 'AppBar.MenuDesktopItem'

const MenuToggle = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  return (
    <div>
      <MenuToggle.Button onClick={() => setIsMenuOpen(!isMenuOpen)} isOpen={isMenuOpen} />
      {isMenuOpen && (
        <MenuToggle.MenuMobile closeMenu={closeMenu}>{children}</MenuToggle.MenuMobile>
      )}
    </div>
  )
}
MenuToggle.displayName = 'AppBar.MenuToggle'

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

const MenuMobile = ({ children, closeMenu }) => {
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
MenuMobile.displayName = 'AppBar.MenuToggle.MenuMobile'
MenuToggle.MenuMobile = MenuMobile

const MenuMobileItem = ({ href, children, closeMenu }) => (
  <a
    href={href}
    className="text-gray-700 font-poppins cursor-pointer py-2 px-4 flex items-center hover:text-yellow-500"
    onClick={(e) => {
      if (closeMenu) closeMenu()
    }}
  >
    {children}
  </a>
)
MenuMobileItem.displayName = 'AppBar.MenuToggle.MenuMobileItem'
MenuToggle.MenuMobileItem = MenuMobileItem
AppBar.MenuToggle = MenuToggle

const AppBarMenu = ({ children }) => {
  const isMobile = useIsMobile()
  return isMobile ? (
    <AppBar.MenuToggle>{children}</AppBar.MenuToggle>
  ) : (
    <AppBar.MenuDesktop>{children}</AppBar.MenuDesktop>
  )
}
AppBar.Menu = AppBarMenu
AppBar.Menu.displayName = 'AppBar.Menu'

const AppBarMenuItem = (props) => {
  const isMobile = useIsMobile()
  const Component = isMobile ? AppBar.MenuToggle.MenuMobileItem : AppBar.MenuDesktopItem
  return <Component {...props} />
}
AppBar.MenuItem = AppBarMenuItem
AppBar.MenuItem.displayName = 'AppBar.MenuItem'

export default AppBar
