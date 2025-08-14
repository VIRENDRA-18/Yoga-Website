import React, { useState } from "react";
import { IoMdMenu, IoMdClose } from "react-icons/io";
import { motion } from "framer-motion";
// If image is in public folder, no import is needed
// <img src="/One-Jeet-Logo.png" ... />

const NavbarMenu = [
  { id: 1, title: "Home", path: "/" },
  { id: 2, title: "About Us", path: "#" },
  { id: 3, title: "Yoga", path: "#" },
  { id: 4, title: "Services", path: "#" },
  { id: 5, title: "Contact", path: "#" },
];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-30 bg-white/90 backdrop-blur-md shadow-md">
      <motion.nav
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="container max-w-screen-xl mx-auto flex justify-between items-center py-4 px-6"
      >
        {/* Logo */}
        <div>
          <img
            src="/One-Jeet-Logo.png"
            alt="One Jeet Yoga"
            className="h-24 w-auto md:h-28"
          />
        </div>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center gap-6">
          <ul className="flex items-center gap-6">
            {NavbarMenu.map((menu) => (
              <li key={menu.id}>
                <a
                  href={menu.path}
                  className="text-gray-700 font-medium relative group hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 transition-all duration-500"
                >
                  {menu.title}
                  <span className="absolute left-1/2 -translate-x-1/2 -bottom-1 w-0 h-[2px] bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 group-hover:w-full transition-all duration-500 rounded-full"></span>
                </a>
              </li>
            ))}
          </ul>

          <button className="group ml-6 flex items-center gap-2 px-6 py-3 text-white font-semibold rounded-lg bg-gradient-to-r from-purple-500 to-blue-500 hover:from-pink-500 hover:to-purple-500 shadow-lg transition-all duration-300">
            Join Demo Class
            <span className="inline-block transform transition-transform group-hover:translate-x-1">
              ➜
            </span>
          </button>
        </div>

        {/* Mobile Hamburger */}
        <div className="lg:hidden">
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle Menu"
          >
            {mobileOpen ? (
              <IoMdClose className="text-3xl text-gray-700 hover:text-purple-500 transition-all duration-300" />
            ) : (
              <IoMdMenu className="text-3xl text-gray-700 hover:text-purple-500 transition-all duration-300" />
            )}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      {mobileOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="lg:hidden bg-white/90 backdrop-blur-md shadow-md absolute w-full left-0 top-full px-6 py-6 z-20"
        >
          <ul className="flex flex-col gap-4">
            {NavbarMenu.map((menu) => (
              <li key={menu.id}>
                <a
                  href={menu.path}
                  className="text-gray-700 font-medium py-2 px-4 block rounded hover:bg-purple-100 transition-all"
                  onClick={() => setMobileOpen(false)}
                >
                  {menu.title}
                </a>
              </li>
            ))}
          </ul>

          <button
            className="mt-4 w-full flex justify-center items-center gap-2 px-6 py-3 text-white font-semibold rounded-lg bg-gradient-to-r from-purple-500 to-blue-500 hover:from-pink-500 hover:to-purple-500 shadow-lg transition-all duration-300"
            onClick={() => setMobileOpen(false)}
          >
            Join Demo Class
            <span className="inline-block transform transition-transform group-hover:translate-x-1">
              ➜
            </span>
          </button>
        </motion.div>
      )}
    </header>
  );
};

export default Navbar;
