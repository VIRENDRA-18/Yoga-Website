import React from 'react';
import heroImage from '../../assets/hero-yoga.png';
import { motion } from "framer-motion";

export const FadeUp = (delay) => {
  return {
    initial: { opacity: 0, y: 50 },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        duration: 0.5,
        delay: delay,
        ease: "easeInOut",
      },
    },
  };
};

const HeroSection = () => {
  return (
    <section
      className="w-full"
      style={{
        background: `linear-gradient(
          120deg,
          #E3F2E1, #D9F6F0, #E0F7FA, #FFFDE7, #FFEDE7, #F3E5F5, #FFF0F5
        )`
      }}
    >
      <div className="flex flex-col md:flex-row items-center justify-between py-16 px-4 sm:px-6 md:px-16 gap-8">

        {/* Left Side - Text */}
        <div className="md:w-1/2 text-center md:text-left">
          <motion.h1
            variants={FadeUp(0.6)}
            initial="initial"
            animate="animate"
            className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-snug"
          >
            The Focus On <br /> Strength, Balance & <br /> Flexibility.
          </motion.h1>

          <p className="text-lg sm:text-xl font-bold mt-4 sm:mt-6">
            Join our community and start your journey to a <br className="hidden sm:block" /> healthier, happier you.
          </p>

          <button className="relative group overflow-hidden mt-6 sm:mt-8 h-12 w-40 sm:w-44 rounded-md bg-neutral-800 p-2 font-extrabold text-gray-50 hover:bg-sky-700 duration-300">
            <div className="absolute group-hover:-top-1 group-hover:-right-2 z-10 w-10 sm:w-14 h-10 sm:h-14 rounded-full group-hover:scale-150 duration-700 right-12 top-12 bg-yellow-500"></div>
            <div className="absolute group-hover:-top-1 group-hover:-right-2 z-10 w-8 sm:w-10 h-8 sm:h-10 rounded-full group-hover:scale-150 duration-700 right-20 -top-6 bg-orange-500"></div>
            <div className="absolute group-hover:-top-1 group-hover:-right-2 z-10 w-6 sm:w-6 h-6 rounded-full group-hover:scale-150 duration-700 right-32 top-6 bg-pink-500"></div>
            <div className="absolute group-hover:-top-1 group-hover:-right-2 z-10 w-3 h-3 sm:w-3 sm:h-3 rounded-full group-hover:scale-150 duration-700 right-2 top-12 bg-red-600"></div>
            <p className="z-10 absolute bottom-2 left-2 text-sm sm:text-base">JOIN NOW</p>
          </button>
        </div>

        {/* Right Side - Image */}
        <div className="md:w-1/2 flex justify-center mt-6 md:mt-0">
          <motion.img
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4, ease: "easeInOut" }}
            src={heroImage}
            alt="Yoga Pose"
            className="w-full max-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl h-auto object-cover rounded-lg"
          />
        </div>

      </div>
    </section>
  );
};

export default HeroSection;
