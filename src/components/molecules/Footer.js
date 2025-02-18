import React from 'react'
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'

function Footer() {
  const obfuscatedEmail = 'nadavdaniel(at)hotmail(dot)com'

  return (
    <footer className="flex bg-white p-6 mt-8 relative text-greeny-900 md:hidden">
      <div className="container mx-auto text-center space-y-4">
        {/* Social Links */}
        <div className="flex justify-center space-x-4">
          <a
            href="https://github.com/sparxHub?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-yellow-500 transition"
            aria-label="GitHub"
          >
            <FaGithub size={24} />
          </a>
          <a
            href="https://www.linkedin.com/in/nadav-daniel-0a309150/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-yellow-500 transition"
            aria-label="LinkedIn"
          >
            <FaLinkedin size={24} />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-yellow-500 transition"
            aria-label="Twitter"
          >
            <FaTwitter size={24} />
          </a>
        </div>

        {/* Email */}
        <a
          href="mailto:nadavdaniel@hotmail.com"
          className="font-mono hover:text-yellow-500 transition"
          aria-label="Email Nadav Daniel"
        >
          {obfuscatedEmail}
        </a>

        {/* Copyright */}
        <p>&copy; {new Date().getFullYear()} DevSparx Website. All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer
