import React from "react";
import { FaWhatsapp } from "react-icons/fa";
import { MdEmail, MdCall } from "react-icons/md";
import thankYouImage from "../../assets/thankyou.jpg"; // your Thank You image

const ContactSection = () => {
  return (
    <div className="relative py-20 bg-gradient-to-br from-pink-100 via-purple-100 to-blue-100 overflow-hidden">
      
      {/* Floating Yoga Emojis */}
      <div className="absolute top-10 left-10 text-purple-200 text-6xl animate-bounce select-none">🧘‍♀️</div>
      <div className="absolute bottom-16 right-20 text-pink-200 text-5xl animate-pulse select-none">🌿</div>
      <div className="absolute top-1/3 right-1/4 text-blue-200 text-6xl animate-spin-slow select-none">✨</div>

      {/* Contact Card */}
      <div className="max-w-4xl mx-auto relative z-10 bg-white/80 backdrop-blur-lg shadow-2xl rounded-3xl p-10 text-center border border-white/50">
        
        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
          Join One Jeet Yoga 🪷
        </h2>
        
        {/* Description */}
        <p className="text-gray-700 mt-4 text-lg leading-relaxed max-w-2xl mx-auto">
          Step into the world of <span className="font-semibold text-purple-600">One Jeet Yoga</span> — where each breath renews your mind, strengthens your body, and awakens your spirit.  
          Your transformation begins here.
        </p>

        {/* Buttons */}
        <div className="flex flex-wrap justify-center gap-5 mt-10">
          <a
            href="https://wa.me/918384934907"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3 rounded-full text-white bg-gradient-to-r from-green-400 to-green-600 hover:scale-105 transform transition-all shadow-lg"
          >
            <FaWhatsapp /> WhatsApp
          </a>
          <a
            href="mailto:virusingh0125@gmail.com"
            className="flex items-center gap-2 px-6 py-3 rounded-full text-white bg-gradient-to-r from-purple-500 to-purple-700 hover:scale-105 transform transition-all shadow-lg"
          >
            <MdEmail /> Email Us
          </a>
          <a
            href="tel:+918384934907"
            className="flex items-center gap-2 px-6 py-3 rounded-full text-white bg-gradient-to-r from-blue-500 to-blue-700 hover:scale-105 transform transition-all shadow-lg"
          >
            <MdCall /> Call Now
          </a>
        </div>

        {/* Contact Info */}
        <div className="mt-8 text-sm text-gray-600">
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
        </div>

        {/* Thank You Image */}
        <div className="mt-10 flex justify-center">
          <img
            src={thankYouImage}
            alt="Thank You"
            className="w-60 h-auto drop-shadow-lg hover:scale-105 transition-all duration-300"
          />
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
