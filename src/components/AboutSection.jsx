import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const AboutSection = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

  const textVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  return (
    <section id="about" ref={ref} className="py-20 px-6 bg-gray-900 text-gray-100">
      <div className="max-w-4xl mx-auto flex flex-col items-center text-center">
        <motion.h2
          className="text-4xl md:text-5xl font-extrabold text-yellow-400 mb-6 leading-tight"
          variants={textVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          About CarryMinati: India's Digital Voice
        </motion.h2>

        <motion.p
          className="text-lg md:text-xl text-gray-300 mb-4 leading-relaxed"
          variants={textVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          transition={{ delay: 0.2, duration: 0.8, ease: "easeOut" }}
        >
          Ajey Nagar, known globally as CarryMinati, is a leading Indian content creator, celebrated for his unique blend of roasting, comedic commentary, and immersive gaming. From his early days, he quickly rose to prominence by fearlessly expressing his authentic self, establishing a deep connection with millions worldwide.
        </motion.p>

        <motion.p
          className="text-lg md:text-xl text-gray-300 mb-4 leading-relaxed"
          variants={textVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          transition={{ delay: 0.4, duration: 0.8, ease: "easeOut" }}
        >
          CarryMinati's journey showcases his versatility, from viral videos and rap tracks to engaging live streams. He stands as a true pioneer in India's digital entertainment space, continuously delivering entertainment with unmatched energy and influencing a generation through his genuine voice.
        </motion.p>

       
        <motion.a
          href="#content"
          className="mt-6 inline-block px-8 py-4 bg-yellow-500 text-black font-bold text-lg rounded-full shadow-lg hover:bg-yellow-400 hover:scale-105 transition-all duration-300 transform"
          variants={textVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          transition={{ delay: 0.6, duration: 0.8, ease: "easeOut" }}
          whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(252, 211, 38, 0.7)" }}
          whileTap={{ scale: 0.95 }}
        >
          Explore His Content
        </motion.a>
      </div>
    </section>
  );
};

export default AboutSection;