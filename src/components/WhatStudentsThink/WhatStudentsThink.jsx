
import React from "react";

import BgImage from "../../assets/StudentsThink-Img.png"; // Yoga-Website\src\assets\StudentsThink-Img.png
import { motion } from "framer-motion";

const bgStyle = {
  backgroundImage: `url(${BgImage})`,
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  backgroundPosition: "center",
};

const WhatStudentsThink =() => {
  return (
    <section className="bg-[#f7f7f7]">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        style={bgStyle}
        className="container py-24 md:py-48"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className="flex flex-col justify-center"
        >
          <div className="text-center space-y-4 lg:max-w-[430px] mx-auto">
            <h1 className="text-4xl font-bold !leading-snug">
              <span className="bg-gradient-to-r from-pink-400 via-orange-300 to-yellow-400 
               bg-clip-text text-transparent transition-all duration-500 
               hover:from-purple-400 hover:via-pink-400 hover:to-red-400">300K</span> Students are Loving One Jeet Yoga 🧘‍♀️
            </h1>
            <p>
             🌱 As a beginner, I was nervous at first, but the welcoming environment at One Jeet Yoga 🧘‍♂️ helped me grow with confidence 💪. The way they combine breathing 💨, mindfulness 🧘, and movement 🌀 is amazing.

            </p>
            
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default WhatStudentsThink;
