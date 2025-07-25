import React, { useState, useEffect } from 'react';

const Loader = () => {
  const loadingText = 'Toh Kaise Hain Aap Sab';
  const [displayedText, setDisplayedText] = useState('');
  const [textVisible, setTextVisible] = useState(true);
  const [loaderActive, setLoaderActive] = useState(false);
  const [loadingScreenFullyHidden, setLoadingScreenFullyHidden] = useState(false);

  useEffect(() => {
    let charIndex = 0;
    const typingInterval = setInterval(() => {
      if (charIndex < loadingText.length) {
        setDisplayedText((prev) => prev + loadingText[charIndex]);
        charIndex++;
      } else {
        clearInterval(typingInterval);
        setTimeout(() => {
          setTextVisible(false);
          setTimeout(() => {
            setLoaderActive(true);
            setTimeout(() => {
              setLoadingScreenFullyHidden(true);
            }, 1500);
          }, 1000);
        }, 500);
      }
    }, 100);
    return () => clearInterval(typingInterval);
  }, []);

  return (
    <div className={`fixed inset-0 bg-gray-900 flex flex-col items-center justify-center z-50 transition-opacity duration-500 ${loadingScreenFullyHidden ? 'opacity-0' : 'opacity-100'}`}>
      <h1 className={`text-4xl md:text-6xl font-extrabold text-red-500 transition-all duration-1000 ease-in-out ${textVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'}`}>
        {displayedText.split('').map((char, index) => (
          <span key={index} style={{ animationDelay: `${index * 0.05}s` }} className="inline-block animate-char-fade-in">
            {char === ' ' ? '\u00A0' : char}
          </span>
        ))}
      </h1>
      {loaderActive && (
        <div className="relative w-20 h-20 flex items-center justify-center mt-12 transition-opacity duration-500">
          <div className="w-full h-full border-8 border-white/20 border-t-red-500 rounded-full animate-spin"></div>
          <div className="absolute w-4 h-4 bg-red-500 rounded-full animate-ping"></div>
        </div>
      )}      {loaderActive && (
        <div className="absolute inset-0 flex items-center justify-center">
          <img 
            src="/path/to/your/image.png" // Replace with your image path
            alt="Room" 
            className={`transition-all duration-1000 ease-out ${loaderActive ? 'scale-100 opacity-100' : 'scale-50 opacity-0'}`} 
            style={{ width: '80%', maxWidth: '800px', height: 'auto' }}
          />
        </div>
      )}

      <style>{`
        @keyframes charFadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-char-fade-in {
          animation: charFadeIn 0.6s ease-out forwards;
          opacity: 0;
        }
      `}</style>
    </div>
  );
};

export default Loader;
