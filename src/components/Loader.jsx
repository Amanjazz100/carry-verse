import React, { useState, useEffect, useRef } from 'react';

const Loader = () => {
  const loadingText = 'Toh Kaise Hain Aap Sab';
  const [displayedTextChars, setDisplayedTextChars] = useState([]);
  const [typingComplete, setTypingComplete] = useState(false);
  const [loaderActive, setLoaderActive] = useState(false);
  const [loadingScreenFullyHidden, setLoadingScreenFullyHidden] = useState(false);

  const intervalRef = useRef(null);
  const charIndexRef = useRef(0);
  const initialDelayRef = useRef(null); // Ref for initial delay timeout

  useEffect(() => {
    // Introduce a small initial delay BEFORE typing starts
    // This gives React ample time to settle the initial state
    initialDelayRef.current = setTimeout(() => {
      intervalRef.current = setInterval(() => {
        if (charIndexRef.current < loadingText.length) {
          setDisplayedTextChars((prevChars) => [
            ...prevChars,
            loadingText[charIndexRef.current]
          ]);
          charIndexRef.current++;
        } else {
          clearInterval(intervalRef.current);
          setTypingComplete(true);

          setTimeout(() => {
            setLoaderActive(true);

            setTimeout(() => {
              setLoadingScreenFullyHidden(true);
            }, 1500);
          }, 1000);
        }
      }, 100); // Typing speed per character
    }, 50); // Small initial delay before starting the typing interval

    return () => {
      // Cleanup both interval and initial delay timeout
      if (initialDelayRef.current) {
        clearTimeout(initialDelayRef.current);
      }
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, []); // Runs only once on mount

  return (
    <div
      className={`fixed inset-0 bg-gray-900 flex flex-col items-center justify-center z-50 transition-opacity duration-500
      ${loadingScreenFullyHidden ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}
    >
      <h1
        className={`text-4xl md:text-6xl font-extrabold text-red-500 transition-all duration-1000 ease-in-out`}
      >
        {/* Safest Render Check: Only render if displayedTextChars is an array */}
        {Array.isArray(displayedTextChars) && displayedTextChars.map((char, index) => (
          <span
            key={index}
            style={{
              animation: `
                charPopIn 0.3s ease-out forwards ${index * 0.05}s,
                ${typingComplete ? `charGrowFadeOut 1s ease-in forwards ${loadingText.length * 0.05 + 0.5 + index * 0.02}s` : ''}
              `,
              opacity: 0,
            }}
            className="inline-block"
          >
            {/* Even safer check for char, though char should never be undefined here */}
            {char === ' ' ? '\u00A0' : (char || '')}
          </span>
        ))}
      </h1>

      {loaderActive && (
        <div className="flex flex-col items-center justify-center mt-12 transition-opacity duration-500">
          <div className="relative w-20 h-20 flex items-center justify-center">
            <div className="w-full h-full border-8 border-white/20 border-t-red-500 rounded-full animate-spin"></div>
            <div className="absolute w-4 h-4 bg-red-500 rounded-full animate-ping"></div>
          </div>
        </div>
      )}

      <style>{`
        @keyframes charPopIn {
          from { opacity: 0; transform: translateY(20px) scale(0.5); }
          to { opacity: 1; transform: translateY(0) scale(1); }
        }

        @keyframes charGrowFadeOut {
          from { opacity: 1; transform: scale(1); }
          to { opacity: 0; transform: scale(1.5) translateY(-20px); }
        }
      `}</style>
    </div>
  );
};

export default Loader;