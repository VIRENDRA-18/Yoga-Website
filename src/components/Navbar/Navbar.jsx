import React from 'react'
import { IoMdMenu } from "react-icons/io";
import { motion } from "framer-motion";
import logo from '../../assets/Yoga-Website-Logo.png';


import './Navbar.css'


const NavbarMenu = [
  {
    id: 1,
    title: "Home",
    path: "/",
  },
  {
    id: 2,
    title: "About Us",
    link: "#",
  },
  {
    id: 3,
    title: "Yoga",
    link: "#",
  },
  {
    id: 4,
    title: "Services",
    link: "#",
  },
  {
    id: 5,
    title: "Contact",
    link: "#",
  },
];
const Navbar = () => {
  return (
    <header>
    <nav className="relative z-20">
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        className="container py-10 flex justify-between items-center -mt-[3%] "
      >
        {/* Logo section */}
        <div>
            <img src={logo} alt = "One Jeet Yoga" className="h-[170px] w-[210px]"/>
          {/* <h1 className="font-bold text-2xl">The Coding Journey</h1> */}
        </div>
        {/* Menu section */}
          <div className="hidden lg:block">
  <ul className="flex items-center gap-3">
    {NavbarMenu.map((menu) => (
      <li key={menu.id}>
        <a
          href={menu.path}
          className="text-gray-900 text-lg inline-block py-2 px-3 relative group text-gray-400 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r from-pink-500 via-purple-500 via-blue-500 via-green-400 to-yellow-400 transition-all duration-500"
        >
          {menu.title}
          {/* Gradient underline */}
          <span className="absolute left-1/2 -translate-x-1/2 -bottom-1 w-0 h-[2px] rounded-full bg-gradient-to-r from-pink-500 via-purple-500 via-blue-500 via-green-400 to-yellow-400 transition-all duration-500 group-hover:w-full"></span>
        </a>
      </li>
    ))}
    {/* <button className="primary-btn">Sign In</button> */}
      <button className="flex items-center gap-2 px-6 py-3 text-white font-semibold rounded-lg bg-gradient-to-r from-purple-500 to-blue-500 hover:from-pink-500 hover:to-purple-500 transition-all duration-300">
          Join Demo Class
          <span className="inline-block transform transition-transform group-hover:translate-x-1">
             ➜
         </span>
     </button>

  </ul>
</div>

        {/* Mobile Hamburger menu section */}
        <div className="lg:hidden">
          <IoMdMenu className="text-4xl" />
        </div>
      </motion.div>
    </nav>
    </header>
  );
};

export default Navbar;
