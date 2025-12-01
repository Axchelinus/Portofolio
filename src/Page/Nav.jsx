// Navigation Bar
function Nav() {
    return (
        <nav className="flex justify-between items-center sticky top-0 z-10 p-5 shadow-md bg-white">
            {/* Menu Introduction */}
            <h3 className="font-bold text-lg text-blue-700">
                My Portfolio
            </h3>

            {/* Menu Option */}
            <ul className="flex justify-between md:gap-10 font-bold text-base text-gray-800">
                {["home", "about", "project", "contact"].map((id, index) => (
                    <li key={index} 
                        className="list-none p-2 rounded-full hover:text-white hover:bg-blue-700 hover:shadow-md transition-all">
                        <a href={`#${id}`}>
                            {id.charAt(0).toUpperCase() + id.slice(1)}
                        </a>
                    </li>
                ))}
            </ul>
        </nav>
    );
}

export default Nav;