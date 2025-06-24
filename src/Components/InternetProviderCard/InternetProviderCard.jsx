// InternetProviderCard.jsx
import React from "react";
import "./InternetProviderCard.css";

const InternetProviderCard = ({
  color,
  title,
  subtitle,
  features,
  price,
  image,
  onServiceClick,
}) => {
  return (
    <div className="internet-provider-card" style={{ backgroundColor: color }}>
      <div className="left">
        <p className="title">
          {title.split(" ").map((word, idx) => (
            <span
              key={idx}
              style={{
                color: idx === 1 ? "var(--primary-color)" : "inherit",
                marginRight: "4px",
              }}
            >
              {word}
            </span>
          ))}
          <br />
          <span>{subtitle}</span>
        </p>

        <ul>
          {features.map((item, idx) => (
            <li key={idx}>{item}</li>
          ))}
        </ul>
        <div className="price-box">
          <p>High-speed internet packages starting at</p>
          <strong>{price}</strong>
          <button className="view-plan" onClick={onServiceClick}>
            View Plans
          </button>
        </div>
      </div>
      <div className="right">
        <div className="image-container">
          <img className="provider-logo" src={image} alt="Internet Plan" />
        </div>
      </div>
    </div>
  );
};

export default InternetProviderCard;
