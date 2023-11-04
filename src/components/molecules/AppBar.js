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
    <header className="bg-white p-4 h-16 fixed top-0 w-full flex items-center justify-between z-50">
      <div>
        {/* Logo */}
        <Link href="/" passHref>
          <span className="text-xl font-bold cursor-pointer">My Website</span>
        </Link>
      </div>
      <nav
        className={`flex items-center space-x-4 ${
          isMenuOpen ? "block" : "hidden"
        } sm:flex`}
      >
        {/* Links */}
        <Link href="/about" passHref>
          <span className="text-[#COLOR] font-semibold cursor-pointer">
            01. About
          </span>
        </Link>
        <Link href="/experience" passHref>
          <span className="text-[#COLOR] font-semibold cursor-pointer">
            02. Experience
          </span>
        </Link>
        <Link href="/projects" passHref>
          <span className="text-[#COLOR] font-semibold cursor-pointer">
            03. Projects
          </span>
        </Link>
        <Link href="/contact" passHref>
          <span className="text-[#COLOR] font-semibold cursor-pointer">
            04. Contact
          </span>
        </Link>

        {/* Resume Button */}
        <button className="border border-[#COLOR] text-[#COLOR] py-1 px-4 rounded hover:bg-[#COLOR] hover:text-white transition">
          Resume
        </button>
      </nav>
      {/* Hamburger Icon */}
      <div className="sm:hidden">
        <button onClick={toggleMenu} className="text-gray-800">
          {isMenuOpen ? (
            <XMarkIcon className="h-6 w-6" />
          ) : (
            <Bars3Icon className="h-6 w-6" />
          )}
        </button>
      </div>{" "}
    </header>
  );
}

export default AppBar;
