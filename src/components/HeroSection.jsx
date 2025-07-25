import React, { useState, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import carryImg2 from '../assets/carry2.jpg';

const HeroSection = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });
  const [scrolled, setScrolled] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50);
      setScrollY(window.scrollY);
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0, scale: 0.8 },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: {
        type: 'spring',
        damping: 10,
        stiffness: 100,
      },
    },
  };

  return (
    <section
      id="home"
      ref={ref}
      className="relative min-h-screen flex items-center justify-center text-center px-4 bg-gray-900 overflow-hidden"
    >
      <motion.div
        className="relative z-10 p-6 md:p-10 lg:p-16"
        variants={containerVariants}
        initial="hidden"
        animate={controls}
      >
        
        <motion.div
          className={`
            mx-auto rounded-full border-4 border-yellow-500 shadow-xl
            ${scrolled ? 'w-32 md:w-48 lg:w-60' : 'w-48 md:w-72 lg:w-96'}
            transition-all duration-700 ease-in-out 

            flex items-center justify-center overflow-hidden 
          `}
          variants={itemVariants}
          initial="hidden"
          animate="visible"
          
          whileHover={{
            scale: 1.1, // Increased scale for a more noticeable "pop" (from 1.07 to 1.1)
            boxShadow: "0 0 30px rgba(252, 211, 38, 0.8)", 
            transition: { 
              type: 'spring',
              stiffness: 400,
              damping: 10
            }
          }}
          whileTap={{ scale: 0.95 }}
        >
          
          <motion.img 
            src={carryImg2}
            alt="CarryMinati"
            className="w-full h-full object-cover rounded-full"
            
          />
        </motion.div>


        <motion.h1
          className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-yellow-400 mt-4 md:mt-6 drop-shadow-lg"
          variants={itemVariants}
        >
          Welcome to CarryMinati's World
        </motion.h1>

        <motion.p
          className="text-gray-300 mt-2 md:mt-4 max-w-xl mx-auto text-lg leading-relaxed"
          variants={itemVariants}
        >
          India’s biggest content creator: Roasting, Comedy, Gaming & Vibes!
        </motion.p>

        <motion.a
          href="#content"
          className="mt-4 md:mt-6 inline-block px-6 py-3 md:px-8 md:py-4 bg-yellow-500 text-black font-bold text-lg rounded-full shadow-lg
                      hover:bg-yellow-400 hover:scale-105 transition-all duration-300 transform"
          variants={itemVariants}
          whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(252, 211, 38, 0.7)" }}
          whileTap={{ scale: 0.95 }}
        >
          Explore Videos
        </motion.a>
      </motion.div>
    </section>
  );
};

export default HeroSection;