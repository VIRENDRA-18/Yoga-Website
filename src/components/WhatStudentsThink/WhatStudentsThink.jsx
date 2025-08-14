import React from "react";
import BgImage from "../../assets/StudentsThink-Img.png";
import { motion } from "framer-motion";

const WhatStudentsThink = () => {
  return (
    <section className="bg-[#f7f7f7]">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        style={{
          backgroundImage: `url(${BgImage})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className="container mx-auto py-16 sm:py-24 md:py-48 px-4 sm:px-6"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className="flex flex-col justify-center items-center text-center"
        >
          <div className="space-y-4 max-w-xl sm:max-w-2xl lg:max-w-3xl mx-auto">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-snug">
              <span className="bg-gradient-to-r from-pink-400 via-orange-300 to-yellow-400 
                bg-clip-text text-transparent transition-all duration-500 
                hover:from-purple-400 hover:via-pink-400 hover:to-red-400">
                300K
              </span> Students are Loving One Jeet Yoga 🧘‍♀️
            </h1>
            <p className="text-sm sm:text-base md:text-lg text-gray-700">
              🌱 As a beginner, I was nervous at first, but the welcoming environment at One Jeet Yoga 🧘‍♂️ helped me grow with confidence 💪. The way they combine breathing 💨, mindfulness 🧘, and movement 🌀 is amazing.
            </p>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default WhatStudentsThink;
