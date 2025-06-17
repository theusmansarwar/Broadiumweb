import React from "react";
import "./SolutionsSection.css";
import { FaApple } from "react-icons/fa";
import { FiDownload } from "react-icons/fi";
import { BsAndroid2 } from "react-icons/bs";
import { ImWindows } from "react-icons/im";
const SolutionsSection = () => {
  return (
    <div className="solutions-container">
      <div className="solutions-left">
        <h2>Why Choose IPTV Stream Player for your OTT Business</h2>
        <p>
          IPTV Stream Player is a leading global software company. Develops,
          markets, and supports OTT App, Middleware software, Applications
          software, Design & Develops Websites. We have IPTV Stream Player app
          for cross-platform.
        </p>
      </div>
      <div className="solutions-right">
        <div>
<h2>We provide software solutions for your Business!</h2>
        <p>
          Explore a wide range of TV packages designed to fit your entertainment
          needs. Enjoy premium channels, on-demand content, and crystal-clear HD
          quality.
        </p>
        </div>
        
        <div className="platforms">
          <div className="platform-card">
            <FiDownload className="download-icon" />
            <BsAndroid2 className="platform-icon" />
          </div>
          <div className="platform-card">
            <FiDownload className="download-icon" />
            <ImWindows className="platform-icon" />
          </div>
          <div className="platform-card">
            <FiDownload className="download-icon" />
            <FaApple className="platform-icon" />
          </div>
        </div>
      </div>
    </div>
  );
};
export default SolutionsSection;