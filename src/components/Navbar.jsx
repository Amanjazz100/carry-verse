import React from 'react';

const Navbar = () => {
  return (
    <header className="bg-gray-950 shadow-md sticky top-0 z-40">
      <nav className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <h1 className="text-xl md:text-2xl font-bold text-yellow-400">CarryMinati</h1>
        <ul className="hidden md:flex space-x-8 text-sm md:text-base">
          <li><a href="#home" className="hover:text-yellow-400">Home</a></li>
          <li><a href="#about" className="hover:text-yellow-400">About</a></li>
          <li><a href="#content" className="hover:text-yellow-400">Content</a></li>
          <li><a href="#socials" className="hover:text-yellow-400">Socials</a></li>
          <li><a href="#footer" className="hover:text-yellow-400">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;