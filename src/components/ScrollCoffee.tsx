import { useState, useEffect } from "react";

const ScrollCoffee = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrolled = (scrollTop / docHeight) * 100;
      setScrollProgress(Math.min(scrolled, 100));
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="fixed right-8 top-1/2 -translate-y-1/2 z-40">
      <div className="relative w-16 h-24 neon-border rounded-lg bg-cyber-dark/80 backdrop-blur-sm overflow-hidden">
        {/* Coffee fill */}
        <div 
          className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-neon-yellow to-neon-cyan transition-all duration-300 ease-out"
          style={{ height: `${scrollProgress}%` }}
        >
          <div className="absolute inset-0 bg-gradient-to-t from-transparent via-white/10 to-white/20"></div>
        </div>
        
        {/* Handle */}
        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-8 border-2 border-neon-cyan rounded-r-lg"></div>
        
        {/* Steam effect */}
        {scrollProgress > 90 && (
          <div className="absolute -top-2 left-1/2 -translate-x-1/2">
            <div className="w-1 h-4 bg-neon-cyan/30 rounded-full animate-pulse"></div>
          </div>
        )}
      </div>
      
      <div className="text-center mt-2">
        <span className="text-xs font-rajdhani text-neon-cyan">
          {Math.round(scrollProgress)}%
        </span>
      </div>
    </div>
  );
};

export default ScrollCoffee;