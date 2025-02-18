function RightSidebar() {
  return (
    <aside className="hidden md:flex fixed bottom-0 right-0 h-auto w-10 bg-white flex flex-col items-center space-y-4 p-4">
      {/* Email with specific styles */}
      <div className="h-[250px] w-full flex items-center justify-center">
        <a
          href="mailto:nadavdaniel@hotmail.com"
          className="font-mono text-sm tracking-wider transform rotate-90 text-gray-700 hover:text-yellow-500 transition"
          aria-label="Email Nadav Daniel"
        >
          nadavdaniel(at)hotmail.com
        </a>
      </div>

      {/* Line */}
      <div className="h-24 w-px bg-[#A8B2D1]"></div>
    </aside>
  )
}

export default RightSidebar
