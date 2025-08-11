
import React from 'react'
import heroImage from '../../assets/hero-yoga.png';
import { animate, motion } from "framer-motion";

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
          #E3F2E1,  /* light green */
          #D9F6F0,  /* mint */
          #E0F7FA,  /* sky blue */
          #FFFDE7,  /* pastel yellow */
          #FFEDE7,  /* soft peach */
          #F3E5F5,  /* lavender */
          #FFF0F5   /* light pink */
        )`
      }}
    >
      {/* Hero content */}
      <div className="flex flex-col md:flex-row items-center justify-between py-16 px-4 md:px-16 gap-8">
        
        {/* Left Side - Text */}
        <div className="md:w-1/2">
          <motion.h1
            variants={FadeUp(0.6)}
            initial="initial"
            animate="animate" 
            className="text-3xl lg:text-5xl font-bold text-left -mt-[37%] !leading-snug"
          >
            The Focuse On <br/> Strength, Balance & <br/> Flexibility.
          </motion.h1>
          
          <p className="text-xl font-bold mt-[3%]">
            Join Our community And Start Your Journey To a <br/> Healthier, Happier You.
          </p>
              
          <button className="border text-gray-50 duration-300 relative group cursor-pointer overflow-hidden h-12 w-40 rounded-md bg-neutral-800 p-2 font-extrabold hover:bg-sky-700 mt-[3%]">
            <div className="absolute group-hover:-top-1 group-hover:-right-2 z-10 w-14 h-14 rounded-full group-hover:scale-150 duration-700 right-12 top-12 bg-yellow-500"></div>
            <div className="absolute group-hover:-top-1 group-hover:-right-2 z-10 w-10 h-10 rounded-full group-hover:scale-150 duration-700 right-20 -top-6 bg-orange-500"></div>
            <div className="absolute group-hover:-top-1 group-hover:-right-2 z-10 w-6 h-6 rounded-full group-hover:scale-150 duration-700 right-32 top-6 bg-pink-500"></div>
            <div className="absolute group-hover:-top-1 group-hover:-right-2 z-10 w-3 h-3 rounded-full group-hover:scale-150 duration-700 right-2 top-12 bg-red-600"></div>
            <p className="z-10 absolute bottom-2 left-2">JOIN NOW</p>
          </button>
        </div>

        {/* Right Side - Image */}
        <div className="md:w-1/2 flex justify-center">
          <motion.img
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4, ease: "easeInOut" }}
            src={heroImage}
            alt="Yoga Pose"
            className="w-150 h-90 object-cover rounded-lg -mt-[17%]"
          />
        </div>

      </div>
    </section>
  )
}

export default HeroSection; 