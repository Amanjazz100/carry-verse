import React from 'react';
import carryImg from '../assets/carryminati.jpg';

const HeroSection = () => {
  return (
    <section id="home" className="min-h-screen flex flex-col items-center justify-center text-center px-4">
      <img
        src={carryImg}
        alt="CarryMinati"
        className="w-40 md:w-56 rounded-full border-4 border-yellow-400 shadow-lg mb-6"
      />
      <h1 className="text-3xl md:text-5xl font-bold text-yellow-400">Welcome to CarryMinati's World</h1>
      <p className="text-gray-300 mt-4 max-w-xl">
        India's most iconic content creator - roasting, gaming, comedy & entertainment all in one place!
      </p>
      <a
        href="#content"
        className="mt-6 px-6 py-3 bg-yellow-500 text-black font-semibold rounded-full hover:bg-yellow-400 transition"
      >
        Watch Now
      </a>
    </section>
  );
};

export default HeroSection;