import React from "react";
import "./FriendlyPackages.css";
import PackageCard from "../PackageCard/PackageCard";
const FriendlyPackages = ({ Packages, backgroundColor }) => {
  return (
    <div className="friendly-package" style={{ backgroundColor }}>
      <div className="heading-area">
        <img className="company-logo" src={Packages.logo} alt="Company Logo" />
        <p className="title">{Packages.title}</p>
        <p className="description">{Packages.description}</p>
      </div>
      <div className="pricing-grid">
        {Packages.pricingData.map((plan) => (
          <PackageCard
            key={plan._id}
            name={plan.name}
            price={plan.price}
            features={plan.features}
            vat={plan.vat}
            installation={plan.installation}
              type="bundle"
          />
        ))}
      </div>
    </div>
  );
};
export default FriendlyPackages;