import React, { useState } from "react";
import Breadcrumb from "../../Components/Breadcrumb/Breadcrumb";
import InternetProviderCard from "../../Components/InternetProviderCard/InternetProviderCard";
import spectrumImg from "../../Assets/spectrum-internet.png";
import attImg from "../../Assets/att-internet.webp";
import coxImg from "../../Assets/cox-internet.webp";
import xfinityImg from "../../Assets/xfinity-internet.webp";
import verizonImg from "../../Assets/verizon-internet.webp";
import "./Internet.css";
import CallModal from "../../Components/CallModal/CallModal";

const Internet = () => {
  const cards = [
    {
      title: "Spectrum Internet ",
      subtitle: "Find the Perfect Plan for Your Needs",
      features: [
        "Savings up to $360.00/yr. when you combine Internet Gig with mobile or TV",
        "Multi-year price guarantees and no contracts",
        "Quick self-install options",
        "Get download speeds up to 1,000 Mbps",
      ],
      price: "$50.00/mo.",
      image: spectrumImg,
    },
    {
      title: "AT&T Internet",
      subtitle: "Plans, Speeds, and Prices",
      features: [
        "No data caps on any plan",
        "24/7 customer support",
        "Free modem included",
        "Speeds up to 940 Mbps",
      ],
      price: "$45.00/mo.",
      image: attImg,
    },

    {
      title: "COX Internet",
      subtitle: " Plans, Packages, & Prices",
      features: [
        "No data caps on any plan",
        "24/7 customer support",
        "Free modem included",
        "Speeds up to 940 Mbps",
      ],
      price: "$45.00/mo.",
      image: coxImg,
    },
    {
      title: "Xfinity Internet",
      subtitle: "Plans and Prices Explained",
      features: [
        "No data caps on any plan",
        "24/7 customer support",
        "Free modem included",
        "Speeds up to 940 Mbps",
      ],
      price: "$45.00/mo.",
      image: xfinityImg,
    },
    {
      title: "Verizon Internet",
      subtitle: "Fios Internet Plans",
      features: [
        "No data caps on any plan",
        "24/7 customer support",
        "Free modem included",
        "Speeds up to 940 Mbps",
      ],
      price: "$45.00/mo.",
      image: verizonImg,
    },
  ];
  const [showModal, setShowModal] = useState(false);

  return (
    <div>
      <Breadcrumb />
       {showModal && <CallModal onClose={() => setShowModal(false)} />}
      {cards.map((card, idx) => (
        <InternetProviderCard
          key={idx}
          color={idx % 2 === 0 ? "gainsboro" : "white"}
          title={card.title}
          subtitle={card.subtitle}
          features={card.features}
          price={card.price}
          image={card.image}
          onServiceClick={() => setShowModal(true)}
        />
      ))}
    </div>
  );
};

export default Internet;
