import React from 'react';
import { FaFacebook, FaInstagram, FaYoutube, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const FooterPart = () => {
  return (
    <footer className="bg-gradient-to-b from-gray-900 to-black text-gray-300 pt-16 pb-8">
      <div className="container mx-auto grid md:grid-cols-4 gap-12 px-6">

        {/* Logo & About */}
        <div>
          <h2 className="text-3xl font-bold bg-gradient-to-r from-pink-400 to-purple-500 bg-clip-text text-transparent">
            One Jeet Yoga
          </h2>
          <p className="mt-4 text-gray-400 leading-relaxed">
            🌿💪🔥 Discover inner peace, build strength, and ignite your energy with our modern yoga practice
          </p>
          {/* Social Icons */}
          <div className="flex gap-4 mt-6">
            {[{ Icon: FaFacebook, link: "#" }, { Icon: FaInstagram, link: "#" }, { Icon: FaYoutube, link: "#" }].map(({ Icon, link }, i) => (
              <a
                key={i}
                href={link}
                className="p-3 bg-gray-800 rounded-full text-pink-400 hover:bg-gradient-to-r hover:from-pink-500 hover:to-purple-500 hover:text-white transition transform hover:scale-110"
              >
                <Icon size={18} />
              </a>
            ))}
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-4">Quick Links</h3>
          <ul className="space-y-3 text-gray-400">
            {["Home", "About", "Yoga", "Services", "Contact"].map((item, i) => (
              <li key={i}>
                <a
                  href="#"
                  className="hover:text-pink-400 transition relative group"
                >
                  {item}
                  <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-gradient-to-r from-pink-500 to-purple-500 group-hover:w-full transition-all duration-300"></span>
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-4">Contact Info</h3>
          <ul className="space-y-4 text-gray-400">
            <li className="flex items-center gap-3 hover:text-pink-400 transition">
              <FaEnvelope className="text-pink-400" />
              <a href="mailto:onejeetyoga@gmail.com">onejeetyoga@gmail.com</a>
            </li>
            <li className="flex items-center gap-3 hover:text-pink-400 transition">
              <FaPhoneAlt className="text-pink-400" />
              <a href="tel:+917980000000">+91-838-493-4907</a>
            </li>
            <li className="flex items-center gap-3 hover:text-pink-400 transition">
              <FaMapMarkerAlt className="text-pink-400" />
              Jodhpur, India
            </li>
          </ul>
        </div>

        {/* Newsletter Signup */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-4">Stay Updated</h3>
          <p className="text-gray-400 mb-4">Subscribe to get the latest yoga tips, offers, and events.</p>
          <form className="flex gap-2">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-4 py-2 rounded-lg bg-gray-800 border border-gray-700 text-sm w-full focus:outline-none focus:ring-2 focus:ring-pink-400 transition"
            />
            <button className="bg-gradient-to-r from-pink-500 to-purple-500 px-5 py-2 rounded-lg text-white font-medium hover:opacity-90 transition">
              Join
            </button>
          </form>
        </div>

      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700 mt-10 pt-6 text-center text-gray-500 text-sm flex flex-col md:flex-row items-center justify-center gap-2">
        <span>© {new Date().getFullYear()} One Jeet Yoga. All rights reserved.</span>
        <span className="text-pink-400">Crafted with ❤️ by VIRU</span>
      </div>
    </footer>
  )
}

export default FooterPart;
