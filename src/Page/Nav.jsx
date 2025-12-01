// Hooks
import { useState } from "react";
import { Menu, X } from "lucide-react";

// Naviagtion Bar
function Nav() {
    const [open, setOpen] = useState(false);

    const menus = ["home", "about", "project", "contact"];

    return (
        <nav className="flex justify-between items-center sticky top-0 z-20 p-5 shadow-md bg-white">

            {/* Logo */}
            <h3 className="font-bold text-lg text-blue-700">
                My Portfolio
            </h3>

            {/* Desktop Menu */}
            <ul className="hidden md:flex justify-between md:gap-10 font-bold text-base text-gray-800">
                {menus.map((id, index) => (
                    <li 
                        key={index} 
                        className="list-none p-2 rounded-full hover:text-white hover:bg-blue-700 hover:shadow-md transition-all"
                    >
                        <a href={`#${id}`}>
                            {id.charAt(0).toUpperCase() + id.slice(1)}
                        </a>
                    </li>
                ))}
            </ul>

            {/* Hamburger Button (Mobile Only) */}
            <button 
                className="md:hidden p-2 rounded-full hover:bg-gray-100"
                onClick={() => setOpen(!open)}
            >
                {open ? <X size={28} /> : <Menu size={28} />}
            </button>

            {/* Mobile Menu */}
            {open && (
                <ul className="absolute left-0 top-full w-full bg-white shadow-lg flex flex-col p-5 gap-3 md:hidden font-bold text-gray-800">
                    {menus.map((id, index) => (
                        <li 
                            key={index}
                            className="p-3 rounded-xl hover:bg-blue-700 hover:text-white transition-all"
                            onClick={() => setOpen(false)}
                        >
                            <a href={`#${id}`}>
                                {id.charAt(0).toUpperCase() + id.slice(1)}
                            </a>
                        </li>
                    ))}
                </ul>
            )}
        </nav>
    );
}

export default Nav;
