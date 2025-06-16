import React from "react";
import "./SelectPackage.css";
import Image1 from "../../Assets/watching1.webp";
import Image2 from "../../Assets/watching2.webp";
import Image3 from "../../Assets/watching3.webp";
const SelectPackage = () => {
  return (
    <div className="select-container">
      <div className="left-container">
        <img src={Image1} alt="Image" className="left-image" />
      </div>
      <div className="right-container">
        <div className="image-container">
          <img src={Image2} alt="Image" className="right-image" />
          <img src={Image3} alt="Image" className="right-image" />
        </div>
        <div className="card-text">
          <p className="title">Select the <span>Best Packages</span> Plan</p>
          <p>
            We evaluate top TV providers across the U.S. to help you find a plan
            that fits your budget and preferences. Whether you’re looking for
            premium channels, on-demand content, or affordable bundles, we’ve
            got you covered. Compare packages, explore exclusive deals, and
            choose a plan that delivers exceptional value.
          </p>
        </div>
      </div>
    </div>
  );
};
export default SelectPackage;