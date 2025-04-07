import React from "react";
import checkicon from "../Assets/check.svg";
import "./PricingCard.css";
import { IoPlayForwardOutline } from "react-icons/io5";

const PricingCard = ({ name, price, features, vat, installation }) => {
  console.log("PricingCard Props:", {
    name,
    price,
    features,
    vat,
    installation,
  });
  return (
    <div className="pricing-card">

      <div className="card-header">
        
        <div className="card-left">
          <span className="price">{price} </span>
          <span className="month">/Month</span>
        </div>
        <div className="card-right-triangle"></div>

        <h3 className="plan-title">{name}</h3>
      </div>

      <ul className="features">
        {Array.isArray(features) ? (
          features.map((feature, index) => (
            <li key={index} className="feature-item">
              <img src={checkicon} /> {feature}
            </li>
          ))
        ) : (
          <li className="feature-item">No features available</li>
        )}
      </ul>
      
      <p className="installation">{vat} {installation}</p>
      <div className="bottom-area">
        <div className="btn-section">
          <div className="service-button">Get Started</div>
          <div className="service-button-secondary">
            <IoPlayForwardOutline />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PricingCard;
