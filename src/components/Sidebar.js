import React from "react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

function Sidebar() {
  return (
    <aside className="hidden md:flex fixed bottom-0 left-0 h-auto w-10 bg-white flex-col items-center space-y-4 p-4">
      {/* GitHub */}
      <a
        href="https://github.com/sparxHub"
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-700 hover:text-yellow-500 transition"
        aria-label="GitHub"
      >
        <FaGithub size={24} />
      </a>
      {/* LinkedIn */}
      <a
        href="https://www.linkedin.com/in/nadav-daniel-0a309150/"
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-700 hover:text-yellow-500 transition"
        aria-label="LinkedIn"
      >
        <FaLinkedin size={24} />
      </a>
      {/* Twitter */}
      <a
        href="https://twitter.com"
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-700 hover:text-yellow-500 transition"
        aria-label="Twitter"
      >
        <FaTwitter size={24} />
      </a>
      {/* Line */}
      <div className="h-24 w-px bg-[#A8B2D1]"></div>
    </aside>
  );
}

export default Sidebar;
