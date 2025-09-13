import React, { useState, useEffect } from 'react';


const Timer = () => {
  const initialSeconds = 48 * 60 * 60;
  const [secondsLeft, setSecondsLeft] = useState(initialSeconds);

  useEffect(() => {
    if (secondsLeft <= 0) return;
    const timer = setInterval(() => {
      setSecondsLeft((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(timer);
  }, [secondsLeft]);

  const formatTime = (secs) => {
    const hours = Math.floor(secs / 3600);
    const minutes = Math.floor((secs % 3600) / 60);
    const seconds = secs % 60;
    return `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
  };

  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100vw',
      height: '100vh',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      background: 'linear-gradient(135deg, #e0eafc 0%, #cfdef3 100%)',
      zIndex: 9999,
    }}>
      <div style={{
        perspective: '800px',
      }}>
        <div style={{
          fontSize: '6rem',
          fontWeight: 'bold',
          color: '#222',
          background: 'linear-gradient(135deg, #f6d365 0%, #fda085 100%)',
          borderRadius: '30px',
          boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
          padding: '60px 120px',
          transform: 'rotateY(20deg) rotateX(10deg)',
          textShadow: '2px 2px 16px #fff, 0 0 40px #fda085',
        }}>
          {formatTime(secondsLeft)}
        </div>
      </div>
    </div>
  );
}

export default Timer;