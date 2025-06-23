import React, { useState } from "react";
import "./PackageSection.css";
import backgroundImage from "../../Assets/packagebg.jpg";
import PackageCard from "../PackageCard/PackageCard";
import CallModal from "../CallModal/CallModal";

const PackageSection = () => {
  const pricingData = [
    {
      _id: "1",
      name: "TV",
      price: "$23.99",
      features: [
        "Free modem, free antivirus software",
        "No data caps or contracts",
        "Add Advanced WiFi for greater network security",
        "Up to 5000 MBPS Speed",
      ],
      vat: "5% VAT Included",
      installation: "Installation Charge: 1500 TK",
    },
    {
      _id: "2",
      name: "TV & Internet",
      price: "$49.99",
      features: [
        "Includes everything in Basic",
        "Higher bandwidth & streaming quality",
        "Priority customer support",
        "Up to 10000 MBPS Speed",
      ],
      vat: "5% VAT Included",
      installation: "Installation Charge: 1000 TK",
    },
    {
      _id: "3",
      name: "TV, Brodband & Internet",
      price: "$79.99",
      features: [
        "All Standard features",
        "Smart home integration",
        "Cloud backup & storage",
        "Up to 20000 MBPS Speed",
      ],
      vat: "5% VAT Included",
      installation: "Installation Charge: 500 TK",
    },
  ];
  const [showModal, setShowModal] = useState(false);
  return (
    <div className="pricings-section">
      <div className="top-half">
        <img className="bg-img" src={backgroundImage} alt="Background" />
        <div className="image-overlay" />
      </div>
      <div className="pricing-content">
        <div className="packege-heading-area ">
          <p className="title">Budget Friendly Packages</p>
          <p className="sub-headings">
            Explore budget-friendly TV packages designed to deliver premium
            entertainment without breaking the bank.
          </p>
        </div>
        <div className="pricing-grid">
          {showModal && <CallModal onClose={() => setShowModal(false)} />}
          {pricingData.map((plan) => (
            <PackageCard
              key={plan._id}
              name={plan.name}
              price={plan.price}
              features={plan.features}
              vat={plan.vat}
              installation={plan.installation}
              onServiceClick={() => setShowModal(true)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
export default PackageSection;
