import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion'; // Import AnimatePresence for exit animations
import { FaBars, FaTimes } from 'react-icons/fa'; // Import icons for mobile menu

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false); // State to control mobile menu visibility

  // Variants for the main header (Navbar) animation on load - NO CHANGE
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

  // Variants for individual list items (links) - NO CHANGE
  const listItemVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0 },
  };

  // Variants for the mobile menu overlay itself
  const mobileMenuVariants = {
    hidden: { opacity: 0, height: 0 },
    visible: {
      opacity: 1,
      height: "auto", // Animates height to auto
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
        when: "beforeChildren", // Animates parent before children
        staggerChildren: 0.1, // Stagger children links
      },
    },
    exit: {
      opacity: 0,
      height: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
        when: "afterChildren", // Animates parent after children
        staggerChildren: 0.05, // Stagger children links
        staggerDirection: -1, // Stagger in reverse order on exit
      },
    },
  };

  // Variants for mobile menu links (children of mobile menu overlay)
  const mobileLinkVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
    exit: { opacity: 0, y: -20, transition: { duration: 0.2 } },
  };

  return (
    <motion.header
      className="bg-gray-950 shadow-lg sticky top-0 z-40 transition-shadow duration-300"
      variants={headerVariants} // Apply animation variants
      initial="hidden"          // Start from 'hidden' state
      animate="visible"         // Animate to 'visible' state when component mounts
    >
      <nav className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo/Title */}
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

        {/* Desktop Navigation Links */}
        <ul className="hidden md:flex space-x-8 text-base md:text-lg items-center">
          {['Home', 'About', 'Content', 'Socials', 'Contact'].map((item, index) => (
            <motion.li
              key={item}
              className="relative group"
              whileHover={{
                scale: 1.05,
                y: -2,
              }}
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

        {/* Mobile Menu Button - Now Functional */}
        <div className="md:hidden">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="text-yellow-400 text-3xl focus:outline-none hover:text-yellow-300 transition-colors duration-200"
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"} // Accessibility
          >
            {mobileMenuOpen ? <FaTimes /> : <FaBars />} {/* Toggle icon */}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay - Now Functional with Framer Motion */}
      {/* AnimatePresence is needed around conditionally rendered motion components for exit animations */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            className="md:hidden bg-gray-900 pb-4 overflow-hidden" // overflow-hidden crucial for height animation
            variants={mobileMenuVariants}
            initial="hidden"
            animate="visible"
            exit="exit" // Apply exit variant
          >
            <ul className="flex flex-col items-center space-y-4 text-base py-4"> {/* Added py-4 for internal spacing */}
              {['Home', 'About', 'Content', 'Socials', 'Contact'].map((item) => (
                <motion.li key={item} variants={mobileLinkVariants}>
                  <a
                    href={`#${item.toLowerCase() === 'contact' ? 'footer' : item.toLowerCase()}`}
                    className="hover:text-yellow-400 text-gray-200 text-lg block py-2" // Larger text, block for better tap area
                    onClick={() => setMobileMenuOpen(false)} // Close menu on link click
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