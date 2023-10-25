function Sidebar() {
  return (
    <aside className="fixed bottom-0 left-0 h-auto w-10 bg-white flex flex-col items-center space-y-4 p-4">
      {/* Social Media Icons */}
      <div className="text-[#COLOR]">G</div> {/* Replace with GitHub icon */}
      <div className="text-[#COLOR]">L</div> {/* Replace with LinkedIn icon */}
      <div className="text-[#COLOR]">I</div> {/* Replace with Instagram icon */}
      <div className="text-[#COLOR]">T</div> {/* Replace with Twitter icon */}
      {/* Line */}
      <div className="h-24 w-px bg-[#A8B2D1]"></div>
    </aside>
  );
}

export default Sidebar;
