import React, { useState } from "react";
import { FaNewspaper, FaBars, FaTimes } from "react-icons/fa";

const Navbar = ({ setCategory }) => {
    const [isOpen, setIsOpen] = useState(false);

    const handleNavItemClick = (category) => {
        setCategory(category);
        setIsOpen(false); 
        window.scrollTo(0, 0);
    };

    const navItems = [
        { label: "Top", category: "top" },
        { label: "Technology", category: "technology" },
        { label: "Entertainment", category: "entertainment" },
        { label: "Health", category: "health" },
    ];

    return (
        <nav className="bg-gray-900 h-20 text-white p-4 shadow-md">
            <div className="container mx-auto flex justify-between items-center relative">
                
                
                <div 
                    className="text-xl font-semibold cursor-pointer flex items-center gap-2"
                    onClick={() => handleNavItemClick("general")}
                >
                    <FaNewspaper className="text-2xl" />
                    Epic<span className="text-red-500">News</span>
                </div>

                
                <button
                    className="lg:hidden text-white focus:outline-none"
                    onClick={() => setIsOpen(!isOpen)}
                    aria-expanded={isOpen}
                >
                    {isOpen ? <FaTimes className="text-2xl" /> : <FaBars className="text-2xl" />}
                </button>

                
                <div
                    className={`lg:flex lg:items-center lg:gap-6 absolute lg:static top-20 left-0 right-0 bg-gray-800 lg:bg-transparent transition-all duration-300 z-50 ${
                        isOpen ? "block" : "hidden"
                    }`}
                >
                    <ul className="flex flex-col lg:flex-row items-center lg:gap-6 p-6 lg:p-0">
                        {navItems.map((item) => (
                            <li key={item.category} className="w-full text-center lg:w-auto">
                                <button
                                    className="cursor-pointer text-white hover:text-red-400 px-4 py-2 transition"
                                    onClick={() => handleNavItemClick(item.category)}
                                >
                                    {item.label}
                                </button>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
