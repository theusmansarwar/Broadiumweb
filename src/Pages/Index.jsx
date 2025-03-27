import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import HeroSection from "../Components/HeroSection/HeroSection";

const Index = () => {
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to top when component mounts
  }, []);
  return (
    <div>
      <div className="heading-area">
        <p>Get Connected!</p>
              <p>Find Cable <span>TV & Internet</span> Providers Nearby</p> 
      </div>
      
      <HeroSection/>
    </div>
  );
};

export default Index;
