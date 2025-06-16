import React from "react";
import "./FirstSection.css";
import bottomimg from '../../Assets/Group6.png'
import topimg from '../../Assets/Group7.png'
const FirstSection = () => {
  return (
    <div className="first-section">
      <div className="left">
        <p>
          Select the <span>Best Packages</span> Plan
        </p>
        <p>
          We evaluate top TV providers across the U.S. to help you find a plan
          that fits your budget and preferences. Whether you’re looking for
          premium channels, on-demand content, or affordable bundles, we’ve got
          you covered. Compare packages, explore exclusive deals, and choose a
          plan that delivers exceptional value. With our expert guidance,
          finding a budget-friendly package with top channel offerings has never
          been easier.We evaluate top TV providers across the U.S. to help you
          find a plan that fits your budget and preferences. Whether you’re
          looking for premium channels, on-demand content, or affordable
          bundles, we’ve got you covered. Compare packages, explore exclusive
          deals, and choose a plan that delivers exceptional value. With our
          expert guidance, finding a budget-friendly package with top channel
          offerings has never been easier.
        </p>
      </div>
      <div className="right">
        <div className="image-stack">
          <div className="top-img-section">
            <img src={topimg} className="top-image1"/>
            <div className="top-image"/>
          </div>
           <div className="bottom-img-section">
             <div className="bottom-image"/>
              <img src={bottomimg} className="bottom-image1"/>
           </div>
          
         
        </div>
      </div>
    </div>
  );
};
export default FirstSection