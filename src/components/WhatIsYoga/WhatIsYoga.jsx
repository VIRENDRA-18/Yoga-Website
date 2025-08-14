import React from 'react';
import yogaImage from '../../assets/Benifits.jpg';
import { motion } from "framer-motion";

const WhatIsYoga = () => {
  return (
    <div
      className="flex flex-col items-center min-h-screen px-4 py-12 gap-8 bg-fixed bg-cover bg-center"
    >
      {/* Text Section */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center max-w-2xl"
      >
        <h1 className="text-4xl font-bold mb-4 text-gray-800 drop-shadow-sm">
          What is <span className="highlight underline">Yoga?</span> ✨
        </h1>
        <p className="text-lg text-gray-700">
          ✨ Yoga helps you stay fit, calm your mind, and improve focus through breathing,
          stretching, and meditation 🌿 🌸 🧘 — more than just a workout, it's a journey inward
          that brings balance, clarity, and a deeper connection to your true self. ✨
        </p>
      </motion.div>

      {/* Main Content Section */}
      <div className="flex flex-col md:flex-row items-start justify-center gap-8 w-full">

        {/* Image Section */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex justify-center md:justify-start w-full md:w-1/2"
        >
          <img
            src={yogaImage}
            alt="Yoga Pose"
            className="w-[500px] h-[440px] rounded-lg shadow-lg mt-[2%] ml-[5%]
              transition-all duration-700 transform hover:scale-105 hover:shadow-2xl hover:brightness-110"
          />
        </motion.div>

        {/* Benefits Section */}
        <div className="flex flex-col gap-6 w-full md:w-1/2 ml-[-3%]">
          {[
            { icon: '⭐', title: 'Physical Health', desc: '🌿 Enhances flexibility, builds core strength, and improves posture.', bg: 'bg-white', gradient: 'hover:from-pink-200 hover:via-purple-200 hover:via-blue-200 hover:via-green-200 hover:via-yellow-200 hover:to-orange-200' },
            { icon: '🧠', title: 'Mental Wellbeing', desc: '🍂 Brightens the mind with stillness, uplifting your mood and mental clarity.', bg: 'bg-gray-50', gradient: 'hover:from-blue-200 hover:via-teal-200 hover:via-green-200 hover:via-yellow-200 hover:via-pink-200 hover:to-purple-200' },
            { icon: '🌸', title: 'Spiritual Growth', desc: '🌟 Greater self-awareness, connection to inner wisdom, and peace.', bg: 'bg-gray-50', gradient: 'hover:from-green-200 hover:via-lime-200 hover:via-yellow-200 hover:via-orange-200 hover:via-pink-200 hover:to-purple-200' },
            { icon: '🌿', title: 'Stress Relief', desc: '🌼 Calms the nervous system, reduces anxiety, and promotes relaxation.', bg: 'bg-gray-50', gradient: 'hover:from-yellow-200 hover:via-orange-200 hover:via-pink-200 hover:via-purple-200 hover:via-blue-200 hover:to-green-200' },
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className={`rounded-lg shadow p-6 flex gap-4 w-full ${item.bg} transition-all duration-500 transform hover:scale-105 hover:shadow-xl ${item.gradient} hover:text-gray-800`}
            >
              <span className="text-purple-500 text-2xl">{item.icon}</span>
              <div>
                <h3 className="font-bold text-xl">{item.title}</h3>
                <p>{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhatIsYoga;
