import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const headerVariants = {
    hidden: { y: -100, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 80,
        damping: 15,
        delay: 0.5,
      },
    },
  };

  const listItemVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0 },
  };

  const mobileMenuVariants = {
    hidden: { opacity: 0, height: 0 },
    visible: {
      opacity: 1,
      height: "auto",
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
        when: "beforeChildren",
        staggerChildren: 0.1,
      },
    },
    exit: {
      opacity: 0,
      height: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
        when: "afterChildren",
        staggerChildren: 0.05,
        staggerDirection: -1,
      },
    },
  };

  const mobileLinkVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
    exit: { opacity: 0, y: -20, transition: { duration: 0.2 } },
  };

  return (
    <motion.header
      className="bg-gray-950 shadow-lg sticky top-0 z-40 transition-shadow duration-300"
      variants={headerVariants}
      initial="hidden"
      animate="visible"
    >
      <nav className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <motion.h1
          className="text-2xl md:text-3xl font-extrabold text-yellow-400 cursor-pointer select-none"
          whileHover={{
            scale: 1.05,
            color: "#FDE047",
            textShadow: "0px 0px 12px rgba(253, 224, 71, 0.8)",
          }}
          transition={{ type: "spring", stiffness: 400, damping: 20 }}
        >
          CarryMinati
        </motion.h1>

        <ul className="hidden md:flex space-x-8 text-base md:text-lg items-center">
          {['Home', 'About', 'Content', 'Socials', 'Contact'].map((item) => (
            <motion.li
              key={item}
              className="relative group"
              whileHover={{ scale: 1.05, y: -2 }}
              transition={{ type: "spring", stiffness: 400, damping: 20 }}
            >
              <a
                href={`#${item.toLowerCase() === 'contact' ? 'footer' : item.toLowerCase()}`}
                className="text-gray-300 hover:text-yellow-400 transition-colors duration-200 block py-1"
              >
                {item}
                <span className="absolute left-0 bottom-0 h-[2px] bg-yellow-400 w-0 group-hover:w-full transition-all duration-300"></span>
              </a>
            </motion.li>
          ))}
        </ul>

        <div className="md:hidden">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="text-yellow-400 text-3xl focus:outline-none hover:text-yellow-300 transition-colors duration-200"
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          >
            {mobileMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            className="md:hidden bg-gray-900 pb-4 overflow-hidden"
            variants={mobileMenuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <ul className="flex flex-col items-center space-y-4 text-base py-4">
              {['Home', 'About', 'Content', 'Socials', 'Contact'].map((item) => (
                <motion.li key={item} variants={mobileLinkVariants}>
                  <a
                    href={`#${item.toLowerCase() === 'contact' ? 'footer' : item.toLowerCase()}`}
                    className="hover:text-yellow-400 text-gray-200 text-lg block py-2"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Navbar;