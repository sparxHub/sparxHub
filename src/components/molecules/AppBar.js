"use client";

import { useState } from "react";
import Link from "next/link";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";

function AppBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-white p-4 h-16 fixed top-0 w-full flex items-center justify-between z-50 shadow-md">
      <div className="flex items-center">
        {" "}
        {/* Logo */}
        <svg
          width="170"
          height="40"
          viewBox="0 0 880 160"
          xmlns="http://www.w3.org/2000/svg"
          className="mr-2"
        >
          <rect
            width="880"
            height="160"
            rx="8"
            fill="none"
            stroke="#264653"
            strokeWidth="15"
          />
          <text
            x="10"
            y="125"
            fontSize="160"
            fontFamily="'Poppins SemiBold', sans-serif"
            fill="#2a9d8f"
          >
            DEV{"*"}
            <tspan fill="#264653" fontFamily="'Poppins', sans-serif">
              sparx
            </tspan>
          </text>
        </svg>
      </div>

      {/* Hamburger Icon */}
      <div className="sm:hidden">
        <button onClick={toggleMenu} className="text-gray-800">
          {isMenuOpen ? (
            <XMarkIcon className="h-6 w-6" />
          ) : (
            <Bars3Icon className="h-6 w-6" />
          )}
        </button>
      </div>
      {/* Mobile Menu */}
      <div
        className={`absolute sm:static sm:bg-transparent top-16 right-0 bg-white w-full sm:w-auto transition-all ease-in-out duration-300 ${
          isMenuOpen ? "block" : "hidden"
        } sm:block`}
      >
        <nav className="flex flex-col sm:flex-row items-center sm:space-x-4 p-4 sm:p-0">
          {/* Links */}
          {["/about", "/experience", "/now", "/contact"].map((path, index) => (
            <Link key={path} href={path} passHref>
              <span className="text-gray-700 font-semibold cursor-pointer hover:text-gray-900 py-1 sm:py-0">
                {`0${index + 1}. ${
                  path.slice(1).charAt(0).toUpperCase() + path.slice(2)
                }`}
              </span>
            </Link>
          ))}
          {/* Resume Button */}
          <button className="border border-gray-700 text-gray-700 py-1 px-4 rounded hover:bg-gray-700 hover:text-white transition mt-4 sm:mt-0">
            Resume
          </button>
        </nav>
      </div>
    </header>
  );
}

export default AppBar;
