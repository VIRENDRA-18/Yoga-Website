import React from "react";
import { motion } from "framer-motion";
import {
  FaMusic,
  FaDumbbell,
  FaSpa,
  FaSun,
  FaBolt,
  FaLeaf,
  FaYinYang,
  FaHeart,
  FaChild,
} from "react-icons/fa";

const services = [
  {
    icon: <FaMusic className="text-pink-300 text-4xl sm:text-5xl mb-4" />,
    title: "Music Workout",
    description:
      "Energizing yoga sequences 🎶🧘‍♀️💃 set to rhythmic music 🎵✨ to boost your mood 😊🌟 and motivation 🚀🔥.",
    base: "from-pink-50 to-pink-100",
    hover: "from-pink-50 via-rose-50 via-purple-50 via-indigo-50 to-blue-50",
  },
  {
    icon: <FaDumbbell className="text-purple-300 text-4xl sm:text-5xl mb-4" />,
    title: "Dumbbells Workout",
    description:
      "Build strength and stability with yoga-inspired dumbbell exercises.",
    base: "from-purple-50 to-purple-100",
    hover: "from-purple-50 via-indigo-50 via-sky-50 via-green-50 to-lime-50",
  },
  {
    icon: <FaSpa className="text-green-300 text-4xl sm:text-5xl mb-4" />,
    title: "Meditations",
    description:
      "Calm your mind and reduce stress through guided meditation sessions.",
    base: "from-green-50 to-green-100",
    hover: "from-green-50 via-emerald-50 via-cyan-50 via-blue-50 to-indigo-50",
  },
  {
    icon: <FaSun className="text-yellow-300 text-4xl sm:text-5xl mb-4" />,
    title: "Surya Namaskar",
    description:
      "Traditional sun salutation flow to awaken and energize your entire body.",
    base: "from-yellow-50 to-yellow-100",
    hover: "from-yellow-50 via-orange-50 via-rose-50 via-pink-50 to-purple-50",
  },
  {
    icon: <FaBolt className="text-orange-300 text-4xl sm:text-5xl mb-4" />,
    title: "Warrior Energy",
    description:
      "Power-packed yoga poses 🧘‍♂️💪 to strengthen your core 🔥⚡ and ignite inner energy 🌟.",
    base: "from-orange-50 to-orange-100",
    hover: "from-orange-50 via-amber-50 via-yellow-50 via-lime-50 to-green-50",
  },
  {
    icon: <FaLeaf className="text-teal-300 text-4xl sm:text-5xl mb-4" />,
    title: "Glow & Flow",
    description:
      "Gentle vinyasa flow designed to leave you refreshed and glowing.",
    base: "from-teal-50 to-teal-100",
    hover: "from-teal-50 via-sky-50 via-indigo-50 via-violet-50 to-purple-50",
  },
  {
    icon: <FaYinYang className="text-indigo-300 text-4xl sm:text-5xl mb-4" />,
    title: "Zen & Tonic",
    description:
      "Mindful movements paired with breathing to find your inner balance.",
    base: "from-indigo-50 to-indigo-100",
    hover: "from-indigo-50 via-purple-50 via-pink-50 via-rose-50 to-red-50",
  },
  {
    icon: <FaHeart className="text-red-300 text-4xl sm:text-5xl mb-4" />,
    title: "Kegel Exercise",
    description:
      "Improve pelvic floor strength and overall wellness through targeted poses.",
    base: "from-red-50 to-red-100",
    hover: "from-red-50 via-rose-50 via-pink-50 via-purple-50 to-indigo-50",
  },
  {
    icon: <FaChild className="text-pink-200 text-4xl sm:text-5xl mb-4" />,
    title: "Yoga Asanas",
    description:
      "Classic yoga postures 🧘‍♀️🤸‍♂️ for flexibility 🌀, strength 💪, and inner peace ☮️🌿.",
    base: "from-rose-50 to-rose-100",
    hover: "from-rose-50 via-pink-50 via-amber-50 via-yellow-50 to-green-50",
  },
];

const Services = () => {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen text-center px-4 sm:px-6 lg:px-8 py-12">
      
      {/* Heading */}
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 bg-clip-text text-transparent drop-shadow-md"
      >
        🌿 Our Yoga & Wellness Programs 🌸
      </motion.h1>

      {/* Paragraph */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="text-sm sm:text-base md:text-lg max-w-xl md:max-w-2xl text-gray-700 mb-10"
      >
        Discover our diverse range of yoga practices and wellness activities to rejuvenate your mind, body, and soul.
      </motion.p>

      {/* Services Grid */}
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {services.map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.15 }}
            className={`
              bg-gradient-to-br ${service.base} 
              rounded-2xl shadow-lg p-5 sm:p-6 
              transition-all duration-500 ease-in-out 
              border border-gray-100 
              hover:bg-gradient-to-br hover:${service.hover} 
              hover:scale-105 hover:shadow-2xl
            `}
          >
            {service.icon}
            <h3 className="text-lg sm:text-xl font-semibold mb-2">{service.title}</h3>
            <p className="text-sm sm:text-base text-gray-600">{service.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Services;
