import React from "react";
import { motion } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";
import { MdEmail, MdCall } from "react-icons/md";

const ContactSection = () => {
  return (
    <div className="relative py-16 sm:py-20 bg-gradient-to-br from-pink-100 via-purple-100 to-blue-100 overflow-hidden">
      
      {/* Floating Yoga Emojis */}
      <motion.div
        className="absolute top-10 left-5 sm:left-10 text-purple-200 text-4xl sm:text-6xl select-none"
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 3, repeat: Infinity }}
      >
        🧘‍♀️
      </motion.div>
      <motion.div
        className="absolute bottom-12 right-5 sm:right-20 text-pink-200 text-4xl sm:text-5xl select-none"
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 2.5, repeat: Infinity }}
      >
        🌿
      </motion.div>
      <motion.div
        className="absolute top-1/3 right-10 sm:right-1/4 text-blue-200 text-4xl sm:text-6xl select-none"
        animate={{ rotate: [0, 360] }}
        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
      >
        ✨
      </motion.div>

      {/* Contact Card */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl mx-auto relative z-10 bg-white/80 backdrop-blur-lg shadow-2xl rounded-3xl p-6 sm:p-10 text-center border border-white/50"
      >
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900"
        >
          Join One Jeet Yoga 🪷
        </motion.h2>
        
        {/* Description */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-sm sm:text-base md:text-lg text-gray-700 mt-4 leading-relaxed max-w-xl sm:max-w-2xl mx-auto"
        >
          Step into the world of <span className="font-semibold text-purple-600">One Jeet Yoga</span> — where each breath renews your mind, strengthens your body, and awakens your spirit.  
          Your transformation begins here.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-wrap justify-center gap-4 sm:gap-5 mt-10"
        >
          <motion.a
            whileHover={{ scale: 1.05 }}
            href="https://wa.me/918384934907"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 sm:px-6 py-2 sm:py-3 rounded-full text-white bg-gradient-to-r from-green-400 to-green-600 transform transition-all shadow-lg text-sm sm:text-base"
          >
            <FaWhatsapp /> WhatsApp
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.05 }}
            href="mailto:virusingh0125@gmail.com"
            className="flex items-center gap-2 px-4 sm:px-6 py-2 sm:py-3 rounded-full text-white bg-gradient-to-r from-purple-500 to-purple-700 transform transition-all shadow-lg text-sm sm:text-base"
          >
            <MdEmail /> Email Us
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.05 }}
            href="tel:+918384934907"
            className="flex items-center gap-2 px-4 sm:px-6 py-2 sm:py-3 rounded-full text-white bg-gradient-to-r from-blue-500 to-blue-700 transform transition-all shadow-lg text-sm sm:text-base"
          >
            <MdCall /> Call Now
          </motion.a>
        </motion.div>

        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-6 sm:mt-8 text-xs sm:text-sm text-gray-600"
        >
          <p>
            📧 Email:{" "}
            <a
              href="mailto:virusingh0125@gmail.com"
              className="text-purple-600 hover:underline"
            >
              virusingh0125@gmail.com
            </a>
          </p>
          <p>
            📞 Phone:{" "}
            <a
              href="tel:+918384934907"
              className="text-purple-600 hover:underline"
            >
              +91-838-4934-907
            </a>
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default ContactSection;
