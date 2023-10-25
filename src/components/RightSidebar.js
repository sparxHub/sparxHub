function RightSidebar() {
  return (
    <aside className="fixed bottom-0 right-0 h-auto w-10 bg-white flex flex-col items-center space-y-4 p-4">
      {/* Email with specific styles */}
      <div className="h-[250px] w-full flex items-center justify-center">
        <div className="font-mono text-sm tracking-wider transform rotate-90">
          daniel.nadav@gmail.com
        </div>
      </div>

      {/* Line */}
      <div className="h-24 w-px bg-[#A8B2D1]"></div>
    </aside>
  );
}

export default RightSidebar;
