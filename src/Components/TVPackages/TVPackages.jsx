import React from "react";
import "./TVPackages.css";
const TVPackages = () => {
  return (
    <div className="tv-container">
      <div className="tv-grid">
        
        <div
          className="box1"
        ></div>
        <div className="box2"></div>
        <div className="box3"></div>
        <div className="box4"></div>
      </div>
      <div className="tv-content">
        <p className="title">
          Discover top <span>TV packages</span>
        </p>
        <p className="description">
          We evaluate top TV providers across the U.S. to help you find a plan
          that fits your budget and preferences. Whether you're looking for
          premium channels, on-demand content, or affordable bundles, we’ve got
          you covered.
        </p>
        <p className="description">
          Compare packages, explore exclusive deals, and choose a plan that
          delivers exceptional value.
        </p>
      </div>
    </div>
  );
};
export default TVPackages;