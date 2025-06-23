import React from "react";
import "./PackagesDetailCard.css";
import { useParams } from "react-router-dom";

const PackagesDetailCard = ({ data,onServiceClick, }) => {
   const { zipcode} = useParams();
  const renderStars = (count) => {
    return (
      <div className="stars">
        {"★".repeat(count)}
        {"☆".repeat(5 - count)}
      </div>
    );
  };

  return (
    
    <div className="package-detail-card">
      
      <div className="top">
        <span className="provider">{data.provider}</span>
        <span className="availability">{data.availability} {zipcode}</span>
      </div>

      <div className="bottom">
        <div className="parent-left">
        <div className="left">
          <img src={data.logo} alt="Spectrum" className="logo" />
          <div className="stars">{renderStars(data.rating)}</div>
        </div>
        <div className="vertical-line"></div>

        <div className="mid">
          <p className="speed-label">Speeds up to</p>
          <p className="speed-value">{data.speed}</p>
        </div>
        </div>
        <div className="vertical-line2"></div>
        <div className="parent-right">
        <div className="right">
          <ul>
            {data.features.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
          </div>
          <div className="vertical-line3"></div>
          <div className="right-pricing">
            <p>Pricing Starts from</p>
            <p ><span className="price">{data.price}</span>/mo.</p>
            <div className="view-plan-btn" onClick={onServiceClick}>View Plan</div>
          </div>
        
        </div>
      </div>
    </div>
  );
};

export default PackagesDetailCard;
