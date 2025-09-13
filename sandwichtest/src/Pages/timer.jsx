import React, { useState, useEffect } from "react";
import { image1, image2, image3, image4, mobileImage1, mobileImage2, mobileImage3, mobileImage4} from "../Assets/assets";

const Timer = () => {
  const initialTime = 48 * 60 * 60; // 48 hours in seconds
  const [timeLeft, setTimeLeft] = useState(initialTime);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const images = [image1, image2, image3, image4];
  const mobileImages = [mobileImage1, mobileImage2, mobileImage3, mobileImage4];
  
  // Responsive dimensions based on screen size
  const isMobile = window.innerWidth <= 768;
  const isSmallMobile = window.innerWidth <= 480;
  
  // Choose image array based on screen size
  const currentImages = isMobile ? mobileImages : images;

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    
    return () => clearInterval(timer);
  }, []);

  // Alternate background images every 3 seconds
  useEffect(() => {
    const imageTimer = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % currentImages.length);
    }, 3000);

    return () => clearInterval(imageTimer);
  }, [currentImages.length]);

  // Calculate days, hours, minutes, seconds
  const days = Math.floor(timeLeft / (24 * 60 * 60));
  const hours = Math.floor((timeLeft % (24 * 60 * 60)) / (60 * 60));
  const minutes = Math.floor((timeLeft % (60 * 60)) / 60);
  const seconds = timeLeft % 60;

  const boxStyle = {
    width: isSmallMobile ? "70px" : isMobile ? "100px" : "250px",
    height: isSmallMobile ? "80px" : isMobile ? "120px" : "300px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#25276dd3",
    boxShadow: "0px 0px 30px #25276d45",
    borderRadius: "10px",
    fontSize: isSmallMobile ? "24px" : isMobile ? "36px" : "75px",
    margin: isSmallMobile ? "0px 3px" : isMobile ? "0px 8px" : "0px 15px",
    position: "relative",
    color: "#ffffff",
    fontWeight: "bold",
  };
  
  const boxStyle1 = {
    width: isSmallMobile ? "70px" : isMobile ? "100px" : "250px",
    height: isSmallMobile ? "80px" : isMobile ? "120px" : "300px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#25276dff",
    boxShadow: "0px 0px 30px #25276d45",
    borderRadius: "10px",
    fontSize: isSmallMobile ? "24px" : isMobile ? "36px" : "75px",
    margin: isSmallMobile ? "0px 3px" : isMobile ? "0px 8px" : "0px 15px",
    position: "relative",
    color: "#ffffff",
    fontWeight: "bold",
  };

  const labelStyle = {
    position: "absolute",
    fontSize: isSmallMobile ? "8px" : isMobile ? "12px" : "18px",
    bottom: isSmallMobile ? "8px" : isMobile ? "12px" : "15px",
  };

  const colonStyle = {
    fontSize: isSmallMobile ? "30px" : isMobile ? "50px" : "95px",
    color: "#25276d",
    fontWeight: "bold",
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100vw",
        height: "100vh",
        fontFamily: "'Roboto', sans-serif",
        margin: 0,
        padding: 0,
        backgroundImage: `url(${currentImages[currentImageIndex]})`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: isSmallMobile ? "contain" : isMobile ? "cover" : "cover",
        backgroundAttachment: isMobile ? "scroll" : "fixed",
        transition: "background-image 0.5s ease-in-out",
        position: "fixed",
        top: 0,
        left: 0,
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          gap: isSmallMobile ? "20px" : isMobile ? "30px" : "40px",
        }}
      >
        <h1
          style={{
            fontSize: isSmallMobile ? "1.5rem" : isMobile ? "2.5rem" : "4rem",
            fontWeight: "bold",
            color: "#ffffff",
            textAlign: "center",
            textShadow: "2px 2px 8px rgba(0,0,0,0.7)",
            margin: 0,
            fontFamily: "'Roboto', sans-serif",
            padding: "0 20px",
          }}
        >
          COMING SOON
        </h1>
        
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
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

        <div style={boxStyle1}>
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
    </div>
  );
};

export default Timer;
