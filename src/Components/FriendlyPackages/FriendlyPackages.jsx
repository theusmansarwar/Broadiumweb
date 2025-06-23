import React, { useState } from "react";
import "./FriendlyPackages.css";
import PackageCard from "../PackageCard/PackageCard";
import CallModal from "../CallModal/CallModal";
const FriendlyPackages = ({ Packages, backgroundColor }) => {
    const [showModal, setShowModal] = useState(false);
  return (
    <div className="friendly-package" style={{ backgroundColor }}>
      <div className="heading-area">
        <img className="company-logo" src={Packages.logo} alt="Company Logo" />
        <p className="title">{Packages.title}</p>
        <p className="description">{Packages.description}</p>
      </div>
      <div className="pricing-grid">
        {showModal && <CallModal onClose={() => setShowModal(false)} />}
        {Packages.pricingData.map((plan) => (
          <PackageCard
            key={plan._id}
            name={plan.name}
            price={plan.price}
            features={plan.features}
            vat={plan.vat}
            installation={plan.installation}
              type="bundle"
               onServiceClick={() => setShowModal(true)}
          />
        ))}
      </div>
    </div>
  );
};
export default FriendlyPackages;