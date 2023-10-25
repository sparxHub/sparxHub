import Link from "next/link";

function AppBar() {
  return (
    <header className="bg-white p-4 h-16 fixed top-0 w-full flex items-center justify-between z-50">
      <div>
        {/* Logo */}
        <Link href="/">
          <div className="text-xl font-bold">My Website</div>
        </Link>
      </div>
      <nav className="flex items-center space-x-4">
        {/* Links */}
        <Link href="/about">
          <div className="text-[#COLOR] font-semibold">01. About</div>
        </Link>
        <Link href="/experience">
          <div className="text-[#COLOR] font-semibold">02. Experience</div>
        </Link>
        <Link href="/projects">
          <div className="text-[#COLOR] font-semibold">03. Projects</div>
        </Link>
        <Link href="/contact">
          <div className="text-[#COLOR] font-semibold">04. Contact</div>
        </Link>

        {/* Resume Button */}
        <button className="border border-[#COLOR] text-[#COLOR] py-1 px-4 rounded hover:bg-[#COLOR] hover:text-white transition">
          Resume
        </button>
      </nav>
    </header>
  );
}

export default AppBar;
