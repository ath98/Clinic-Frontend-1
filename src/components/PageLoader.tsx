import React, { useEffect, useState } from 'react';
import logo from '../assets/logo.png';
interface PageLoaderProps {
  minDisplayTime?: number; // Minimum time to display loader in ms
}
export const PageLoader: React.FC<PageLoaderProps> = ({
  minDisplayTime = 1500
}) => {
  const [isVisible, setIsVisible] = useState(true);
  const [progress, setProgress] = useState(0);
  const [isExiting, setIsExiting] = useState(false);
  useEffect(() => {
    const startTime = Date.now();
    // Simulate loading progress
    const progressInterval = setInterval(() => {
      setProgress(prev => {
        // Accelerate progress as it gets closer to 100
        const increment = Math.max(1, 10 * (1 - prev / 100));
        return Math.min(prev + increment, 99);
      });
    }, 100);
    // Check if document is loaded
    const checkLoaded = () => {
      if (document.readyState === 'complete') {
        const elapsedTime = Date.now() - startTime;
        // If min display time hasn't passed, wait before hiding
        if (elapsedTime < minDisplayTime) {
          setTimeout(hideLoader, minDisplayTime - elapsedTime);
        } else {
          hideLoader();
        }
        clearInterval(progressInterval);
        setProgress(100);
      } else {
        requestAnimationFrame(checkLoaded);
      }
    };
    const hideLoader = () => {
      setIsExiting(true);
      setTimeout(() => {
        setIsVisible(false);
      }, 500); // Match this with the exit animation duration
    };
    checkLoaded();
    return () => {
      clearInterval(progressInterval);
    };
  }, [minDisplayTime]);
  if (!isVisible) return null;
  return <div className={`fixed inset-0 z-50 flex flex-col items-center justify-center bg-white transition-opacity duration-500 ${isExiting ? 'opacity-0' : 'opacity-100'}`}>
      <div className="flex flex-col items-center">
        {/* Logo animation */}
        <div className="mb-8">
          <div className="flex items-center gap-3">
            <img src={logo} alt="Smile OS Logo" className="h-12 w-auto" />
            <div className="text-4xl font-bold text-blue-600 relative">
              Smile OS
              <span className="absolute -top-1 -right-2 w-2 h-2 bg-blue-600 rounded-full animate-ping"></span>
            </div>
          </div>
        </div>
        {/* Progress bar */}
        <div className="w-64 h-1.5 bg-gray-200 rounded-full overflow-hidden">
          <div className="h-full bg-blue-600 transition-all duration-300 ease-out" style={{
          width: `${progress}%`
        }} />
        </div>
        {/* Loading text */}
        <p className="mt-4 text-gray-600 animate-pulse">
          {progress < 100 ? 'Loading...' : 'Ready!'}
        </p>
      </div>
      {/* Animated dots in background */}
      <div className="absolute inset-0 overflow-hidden -z-10">
        {[...Array(20)].map((_, i) => <div key={i} className="absolute w-2 h-2 rounded-full bg-blue-200" style={{
        top: `${Math.random() * 100}%`,
        left: `${Math.random() * 100}%`,
        opacity: Math.random() * 0.5 + 0.2,
        animation: `float ${Math.random() * 5 + 5}s infinite ease-in-out ${Math.random() * 5}s`
      }} />)}
      </div>
      <style jsx="true">{`
        @keyframes float {
          0%,
          100% {
            transform: translate(0, 0);
          }
          50% {
            transform: translate(
              ${Math.random() * 30 - 15}px,
              ${Math.random() * 30 - 15}px
            );
          }
        }
      `}</style>
    </div>;
};