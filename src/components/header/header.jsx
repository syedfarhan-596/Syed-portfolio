import React, { useState } from "react";
import { FaSun, FaMoon } from "react-icons/fa";
import { CiMenuFries } from "react-icons/ci";
import { useTheme } from "../../Theme";

const links = [
  {
    text: "About",
    href: "#about",
  },
  {
    text: "Projects",
    href: "#projects",
  },
  {
    text: "Skills",
    href: "#skills",
  },
  {
    text: "Contact",
    href: "#contact",
  },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { isDarkMode, toggleTheme } = useTheme();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header
      className={`py-4 ${
        isDarkMode
          ? "bg-gradient-to-r from-gray-800 to-gray-900 text-white"
          : "bg-gradient-to-r from-blue-400 to-blue-600"
      }`}
    >
      <div className="container mx-auto flex justify-between items-center px-4">
        <div className="text-2xl font-bold">Syed Farhan</div>
        <div className="md:hidden">
          <button onClick={toggleMenu} className="focus:outline-none">
            <CiMenuFries />
          </button>
        </div>
        <nav
          className={`md:flex md:items-center absolute top-16 left-0 w-full ${
            isOpen
              ? isDarkMode
                ? "block bg-gradient-to-r from-gray-800 to-gray-900"
                : "block bg-gradient-to-r from-blue-400 to-blue-600"
              : "hidden"
          } md:bg-transparent md:relative md:top-0 md:left-auto md:w-auto`}
        >
          <ul className="flex flex-col md:flex-row md:space-x-4 space-y-4 md:space-y-0 mt-4 md:mt-0 md:ml-4">
            {links.map((link, index) => (
              <li key={index}>
                <a
                  href={link.href}
                  className="block py-2 px-4 hover:text-yellow-300"
                  onClick={() => setIsOpen(false)}
                >
                  {link.text}
                </a>
              </li>
            ))}
            <button
              onClick={toggleTheme}
              className="px-3 py-1 rounded-md text-sm font-medium focus:outline-none"
            >
              {isDarkMode ? <FaSun /> : <FaMoon />}
            </button>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
