import React from 'react';
import { FaYoutube, FaInstagram, FaTwitter, FaFacebook } from 'react-icons/fa';

const SocialsSection = () => {
  return (
    <section id="socials" className="py-16 px-6 max-w-4xl mx-auto text-center">
      <h2 className="text-3xl font-bold text-yellow-400 mb-6">Follow Carry</h2>
      <div className="flex justify-center gap-6 text-yellow-500 text-3xl">
        <a href="https://www.youtube.com/channel/UCj22tfcQrWG7EMEKS0qLeEg" target="_blank" rel="noopener noreferrer"><FaYoutube /></a>
        <a href=" https://www.instagram.com/carryminati/" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
        <a href="https://twitter.com/CarryMinati" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
        <a href="https://www.facebook.com/CarryDeol/" target="_blank" rel="noopener noreferrer"><FaFacebook /></a>
      </div>
    </section>
  );
};

export default SocialsSection;
