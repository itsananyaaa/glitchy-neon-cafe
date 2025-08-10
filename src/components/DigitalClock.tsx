import { useState, useEffect } from "react";

const DigitalClock = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString('en-US', {
      hour12: false,
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit'
    });
  };

  return (
    <div className="neon-border p-4 bg-cyber-dark/50 backdrop-blur-sm rounded-lg">
      <div className="text-center">
        <h3 className="text-sm font-orbitron text-neon-green mb-2">BREW CLOCK</h3>
        <div className="text-2xl font-orbitron font-bold text-neon-cyan glitch" data-text={formatTime(time)}>
          {formatTime(time)}
        </div>
        <div className="text-xs text-muted-foreground font-rajdhani mt-1">
          {time.toLocaleDateString()}
        </div>
      </div>
    </div>
  );
};

export default DigitalClock;