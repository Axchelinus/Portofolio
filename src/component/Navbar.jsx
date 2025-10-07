import { useState } from "react";

function Navbar() {
  const [isClosed, isOpen] = useState(false);

  return (
    <nav className="bg-gray-900 shadow-md fixed top-0 left-0 w-full flex justify-between items-center px-8 py-4 z-10">
      
      {/* LOGO NAMA */}
      <div className="text-xl font-bold">My Portofolio</div>

      {/* MENU */}
      <ul className="flex gap-12 m-0 p-0 items-center">
        {/* MENU-1 */}
        <li className="hover:text-blue-400"><a href="#home">Home</a></li>
        
        {/* MENU-2 */}
        <li className="hover:text-blue-400"><a href="#about">About Me</a></li>
        
        {/* MENU-3 */}
        <li className="hover:text-blue-400"><a href="#contact">Contact</a></li>

        {/* MENU DROP-DOWN-LIST */}
        <li className="relative">
          <button onClick={() => (isOpen(!isClosed))} className="hover:text-blue-400 flex items-center gap-1">
            Project <strong>▾</strong>
          </button>

          {/* SAKLAR */}
          {isClosed && (
            <ul className="absolute bg-gray-800 rounded-md mt-2 shadow-lg">
              <li><a href="#uiux" className="block px-4 py-2 hover:bg-gray-700">UI/UX</a></li>
              <li><a href="#frontend" className="block px-4 py-2 hover:bg-gray-700">Frontend</a></li>
            </ul>
          )}
        </li>
      </ul>

    </nav>
  );
}

export default Navbar;