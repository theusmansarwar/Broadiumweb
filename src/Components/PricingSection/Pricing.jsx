import React from "react";
import "./Pricing.css";
import PricingCard from "../../Templates/PricingCard";
import backgroundImage from '../../Assets/background2.png'


const Pricing = () => {
    const pricingData = [
        {
          _id: "1",
          name: "Basic",
          price: "$23.99",
          features: [
            "Free modem, free antivirus software",
            "No data caps or contracts",
            "Add Advanced WiFi for greater network security",
            "Up to 5000 MBPS Speed"
          ],
          vat: "5% VAT Included",
          installation: "Installation Charge: 1500 TK",
        },
        {
          _id: "2",
          name: "Standard",
          price: "$49.99",
          features: [
            "Includes everything in Basic",
            "Higher bandwidth & streaming quality",
            "Priority customer support",
            "Up to 10000 MBPS Speed"
          ],
          vat: "5% VAT Included",
          installation: "Installation Charge: 1000 TK",
        },
        {
          _id: "3",
          name: "Premium",
          price: "$79.99",
          features: [
            "All Standard features",
            "Smart home integration",
            "Cloud backup & storage",
            "Up to 20000 MBPS Speed"
          ],
          vat: "5% VAT Included",
          installation: "Installation Charge: 500 TK",
        },
      
      ];
    console.log("Pricing Data:", pricingData); 
  return (
    <div className="pricings-sections" 
     style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        transition: "background-image 0.8s ease-in-out",
      }}>
        <div className="pricing-section-overly">
        <div className="heading-area">
              <p>Select the <span>Best Packages</span> Plan</p> 
              <p className="sub-heading">Your favorite shows and movies are chilling out on cable TV, satellite TV, and online streaming services. We’ll break down all these TV options so you can find your favorite way to tune in.</p>
      </div>
        
      <div className="pricing-section">
        <div className="pricing-grid">
          {pricingData?.map((plan) => (
            <PricingCard
              key={plan._id}
              name={plan.name}
              price={plan.price}
              features={plan.features}
              vat={plan.vat}
              installation={plan.installation}
            />
          ))}
        </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
