import React from 'react';
import yogaImage from '../../assets/Benifits.jpg'; // make sure the path is correct

const WhatIsYoga = () => {
  return (
    <div className="flex flex-col items-center min-h-screen px-4 py-12 gap-8 bg-fixed bg-cover bg-center">
      
      {/* Text Section */}
      <div className="text-center max-w-2xl">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-gray-800 drop-shadow-sm">
          What is <span className="highlight underline">Yoga?</span> ✨
        </h1>
        <p className="text-base sm:text-lg md:text-xl text-gray-700">
          ✨ Yoga helps you stay fit, calm your mind, and improve focus through breathing,
          stretching, and meditation 🌿 🌸 🧘 — more than just a workout, it's a journey inward
          that brings balance, clarity, and a deeper connection to your true self. ✨
        </p>
      </div>

      {/* Main Content Section */}
      <div className="flex flex-col md:flex-row items-start justify-center gap-8 w-full">

        {/* Image Section */}
        <div className="flex justify-center md:justify-start w-full md:w-1/2">
          <img
            src={yogaImage}
            alt="Yoga Pose"
            className="w-full max-w-md sm:max-w-lg md:max-w-xl h-auto rounded-lg shadow-lg
                       transition-transform duration-700 transform hover:scale-105 hover:shadow-2xl hover:brightness-110"
          />
        </div>

        {/* Benefits Section */}
        <div className="flex flex-col gap-6 w-full md:w-1/2">
          
          {/* Physical Health */}
          <div className="rounded-lg shadow p-5 sm:p-6 flex gap-4 w-full bg-white transition-all duration-500 transform hover:scale-105 hover:shadow-xl hover:bg-gradient-to-r hover:from-pink-200 hover:via-purple-200 hover:via-blue-200 hover:via-green-200 hover:via-yellow-200 hover:to-orange-200 hover:text-gray-800">
            <span className="text-purple-500 text-2xl">⭐</span>
            <div>
              <h3 className="font-bold text-lg sm:text-xl">Physical Health</h3>
              <p className="text-sm sm:text-base">🌿 Enhances flexibility, builds core strength, and improves posture.</p>
            </div>
          </div>

          {/* Mental Wellbeing */}
          <div className="rounded-lg shadow p-5 sm:p-6 flex gap-4 w-full bg-gray-50 transition-all duration-500 transform hover:scale-105 hover:shadow-xl hover:bg-gradient-to-r hover:from-blue-200 hover:via-teal-200 hover:via-green-200 hover:via-yellow-200 hover:via-pink-200 hover:to-purple-200 hover:text-gray-800">
            <span className="text-purple-500 text-2xl">🧠</span>
            <div>
              <h3 className="font-bold text-lg sm:text-xl">Mental Wellbeing</h3>
              <p className="text-sm sm:text-base">🍂 Brightens the mind with stillness, uplifting your mood and mental clarity.</p>
            </div>
          </div>

          {/* Spiritual Growth */}
          <div className="rounded-lg shadow p-5 sm:p-6 flex gap-4 w-full bg-gray-50 transition-all duration-500 transform hover:scale-105 hover:shadow-xl hover:bg-gradient-to-r hover:from-green-200 hover:via-lime-200 hover:via-yellow-200 hover:via-orange-200 hover:via-pink-200 hover:to-purple-200 hover:text-gray-800">
            <span className="text-purple-500 text-2xl">🌸</span>
            <div>
              <h3 className="font-bold text-lg sm:text-xl">Spiritual Growth</h3>
              <p className="text-sm sm:text-base">🌟 Greater self-awareness, connection to inner wisdom, and peace.</p>
            </div>
          </div>

          {/* Stress Relief */}
          <div className="rounded-lg shadow p-5 sm:p-6 flex gap-4 w-full bg-gray-50 transition-all duration-500 transform hover:scale-105 hover:shadow-xl hover:bg-gradient-to-r hover:from-yellow-200 hover:via-orange-200 hover:via-pink-200 hover:via-purple-200 hover:via-blue-200 hover:to-green-200 hover:text-gray-800">
            <span className="text-purple-500 text-2xl">🌿</span>
            <div>
              <h3 className="font-bold text-lg sm:text-xl">Stress Relief</h3>
              <p className="text-sm sm:text-base">🌼 Calms the nervous system, reduces anxiety, and promotes relaxation.</p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default WhatIsYoga;
