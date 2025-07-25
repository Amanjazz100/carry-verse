import React, { useState, useEffect } from 'react';
import Loader from './components/Loader';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import ContentSection from './components/ContentSection';
import SocialsSection from './components/SocialsSection';
import Footer from './components/Footer';

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 4500);
    return () => clearTimeout(timer);
  }, []);

  return isLoading ? (
    <Loader />
  ) : (
    <div className="font-inter bg-gray-900 text-gray-100 min-h-screen">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ContentSection />
      <SocialsSection />
      <Footer />
    </div>
  );
};

export default App;