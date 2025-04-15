import React, { useState, useEffect } from 'react';

const PageLoader = () => {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    // Simulate page loading with progress
    let interval;
    if (loading) {
      interval = setInterval(() => {
        setProgress(prev => {
          const newProgress = prev + Math.floor(Math.random() * 8);
          return newProgress > 100 ? 100 : newProgress;
        });
      }, 150);
    }

    // Complete loading after 2.5 seconds
    const timer = setTimeout(() => {
      clearInterval(interval);
      setProgress(100);
      
      // Add fade out animation before unmounting
      setTimeout(() => {
        setFadeOut(true);
        setTimeout(() => setLoading(false), 800);
      }, 500);
    }, 2500);

    return () => {
      clearTimeout(timer);
      clearInterval(interval);
    };
  }, [loading]);

  if (!loading) return null;

  return (
    <div 
      className={`fixed top-0 left-0 right-0 bottom-0 w-full h-full bg-white dark:bg-gray-900 z-[9999] flex items-center justify-center transition-opacity duration-800 ${fadeOut ? 'opacity-0' : 'opacity-100'}`}
      role="alert"
      aria-live="assertive"
      aria-label="Page loading"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-[10%] left-[10%] w-64 h-64 bg-indigo-500/10 dark:bg-indigo-500/5 rounded-full filter blur-3xl animate-float-slow"></div>
        <div className="absolute bottom-[10%] right-[10%] w-64 h-64 bg-indigo-500/10 dark:bg-indigo-500/5 rounded-full filter blur-3xl animate-float-slow-reverse"></div>
      </div>
      
      <div className="text-center w-11/12 max-w-sm relative z-10 animate-fade-in">
        <div className="relative mb-8">
          <img 
            src="/img/logo.png" 
            alt="Generation of Miracles Logo" 
            className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 mx-auto animate-float"
          />
          <div className="absolute -inset-1 bg-indigo-500/20 dark:bg-indigo-500/10 rounded-full filter blur-xl opacity-70 animate-pulse-slow"></div>
        </div>

        <div className="relative w-full h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden mx-auto mb-3 sm:mb-4 shadow-inner">
          <div 
            className="absolute top-0 left-0 h-full bg-gradient-to-r from-indigo-600 to-indigo-400 dark:from-indigo-500 dark:to-indigo-300 rounded-full transition-all duration-300 ease-out"
            style={{ width: `${progress}%` }}
            aria-hidden="true"
          ></div>
        </div>
        
        <h3 className="text-lg sm:text-xl text-gray-800 dark:text-gray-200 font-medium mb-1 animate-fade-in-up">
          Generation of Miracles
        </h3>
        <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
          Loading incredible experiences...
        </p>
        <p className="text-xs text-gray-500 dark:text-gray-500 inline-block px-3 py-1 rounded-full bg-gray-100 dark:bg-gray-800">
          {progress}% Complete
        </p>
      </div>

      {/* Custom animation keyframes */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        
        @keyframes float-slow {
          0%, 100% { transform: translate(0, 0); }
          50% { transform: translate(30px, 20px); }
        }
        
        @keyframes float-slow-reverse {
          0%, 100% { transform: translate(0, 0); }
          50% { transform: translate(-30px, -20px); }
        }
        
        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        
        @keyframes fade-in-up {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.7; }
          50% { opacity: 0.3; }
        }
        
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        
        .animate-float-slow {
          animation: float-slow 15s ease-in-out infinite;
        }
        
        .animate-float-slow-reverse {
          animation: float-slow-reverse 12s ease-in-out infinite;
        }
        
        .animate-fade-in {
          animation: fade-in 0.8s ease-out forwards;
        }
        
        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out 0.3s both;
        }
        
        .animate-pulse-slow {
          animation: pulse-slow 3s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default PageLoader;