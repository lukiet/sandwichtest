import React, { useState, useEffect } from 'react';
import { image1,image2,image3,image4 } from '../Assets/assets';

const Timer = () => {
  const initialTime = 48 * 60 * 60; // 48 hours in seconds
  const [timeLeft, setTimeLeft] = useState(initialTime);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    
    return () => clearInterval(timer);
  }, []);

  // Calculate days, hours, minutes, seconds
  const days = Math.floor(timeLeft / (24 * 60 * 60));
  const hours = Math.floor((timeLeft % (24 * 60 * 60)) / (60 * 60));
  const minutes = Math.floor((timeLeft % (60 * 60)) / 60);
  const seconds = timeLeft % 60;

  const boxStyle = {
    width: '175px',
    height: '180px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#25276da2',
    boxShadow: '0px 0px 30px #25276d45',
    borderRadius: '10px',
    fontSize: '75px',
    margin: '0px 15px',
    position: 'relative',
    color: '#ffffff',
    fontWeight: 'bold',
  };

  const labelStyle = {
    position: 'absolute',
    fontSize: '18px',
    bottom: '15px',
  };

  const colonStyle = {
    fontSize: '95px',
    color: '#25276d',
    fontWeight: 'bold',
  };

  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      width: '100%',
      height: '100vh',
      fontFamily: "'Roboto', sans-serif",
      margin: 0,
      padding: 0,
    }}>
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
        <div style={boxStyle}>
          {days}
          <div style={labelStyle}>Days</div>
        </div>
        <div style={colonStyle}>:</div>
        
        <div style={boxStyle}>
          {hours}
          <div style={labelStyle}>Hours</div>
        </div>
        <div style={colonStyle}>:</div>
        
        <div style={boxStyle}>
          {minutes}
          <div style={labelStyle}>Minutes</div>
        </div>
        <div style={colonStyle}>:</div>
        
        <div style={boxStyle}>
          {seconds}
          <div style={labelStyle}>Seconds</div>
        </div>
      </div>
    </div>
  );
}

export default Timer;