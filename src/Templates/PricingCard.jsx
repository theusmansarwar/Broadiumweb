import React from "react";
import checkicon from "../Assets/check.svg";
import "./PricingCard.css";
import { IoPlayForwardOutline } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

const PricingCard = ({ name, price, features, vat, installation }) => {
 const navigate = useNavigate();
  return (
    <div className="pricing-card">

      <div className="pricing-card-header">
        
        <div className="pricing-card-left">
          <span className="price">{price} </span>
          <span className="month">/Month</span>
        </div>
        <div className="pricing-card-right-triangle"></div>

        <h3 className="pricing-plan-title">{name}</h3>
      </div>

      <ul className="pricing-features">
        {Array.isArray(features) ? (
          features.map((feature, index) => (
            <li key={index} className="pricing-feature-item">
              <img src={checkicon} /> {feature}
            </li>
          ))
        ) : (
          <li className="pricing-feature-item">No features available</li>
        )}
      </ul>
      
      <p className="pricing-installation">{vat} {installation}</p>
      <div className="bottom-area">
        <div className="btn-section" onClick={()=>navigate("/contact-us")}>
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
