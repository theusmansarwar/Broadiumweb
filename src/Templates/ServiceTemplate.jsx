import React from "react";
import "./ServicesTemplate.css";
import { IoPlayForwardOutline } from "react-icons/io5";

const ServiceTemplate = ({ image, name, description }) => {
  return (
    <div className="service-card">
      <img src={image} alt={name} className="service-image" />
      <h3 className="service-title">{name}</h3>
      <p className="service-description">{description}</p>
      <div className="btn-section">
      <div className="service-button">Check Out</div>
      <div className="service-button-secondary"><IoPlayForwardOutline /></div>
      </div>
    </div>
  );
};

export default ServiceTemplate;
