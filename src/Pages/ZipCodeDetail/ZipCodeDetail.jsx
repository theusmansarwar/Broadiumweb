import React, { useState } from "react";
import ComparisonTable from "../../Components/ComparisonTable/ComparisonTable";
import spectrum from "../../Assets/spectrum.png";
import att from "../../Assets/att.png";
import dish from "../../Assets/dish.png";
import PackagesDetailCard from "../../Components/PackagesDetailCard/PackagesDetailCard";
import { useParams } from "react-router-dom";
import ZipBreadcrumb from "./ZipBreadCrumb";
import CallModal from "../../Components/CallModal/CallModal";

const ZipCodeDetail = () => {
  const internetProviders = [
    {
      provider: "SPECTRUM",
      availability: "61% available in ",
      logo: spectrum,
      speed: "245 Mbps",
      price: "$49.99",
      rating: 3,
      features: [
        "Get a $300 virtual prepaid Mastercard® when you sign up for Home Internet",
        "15-day free trial to see how well T-Mobile 5G operates in your home.",
        "FREE 2-day shipping.",
      ],
    },
    {
      provider: "AT&T",
      availability: "75% available in ",
      logo: att,
      speed: "1000 Mbps",
      price: "$49.99",
      rating: 5,
      features: [
        "Free installation with online orders.",
        "Unlimited data with no annual contract.",
        "Stream without buffering.",
      ],
    },
    {
      provider: "DISH",
      availability: "50% available in ",
      logo: dish,
      speed: "500 Mbps",
      price: "$49.99",
      rating: 4,
      features: [
        "Save $10/month with Auto Pay and paperless billing.",
        "No data caps or overage fees.",
        "Free router rental included.",
      ],
    },
    {
      provider: "SPECTRUM2",
      availability: "61% available in ",
      logo: spectrum,
      speed: "245 Mbps",
      price: "$49.99",
      rating: 3,
      features: [
        "Get a $300 virtual prepaid Mastercard® when you sign up for Home Internet",
        "15-day free trial to see how well T-Mobile 5G operates in your home.",
        "FREE 2-day shipping.",
      ],
    },
    {
      provider: "AT&T2",
      availability: "75% available in ",
      logo: att,
      speed: "1000 Mbps",
      price: "$49.99",
      rating: 5,
      features: [
        "Free installation with online orders.",
        "Unlimited data with no annual contract.",
        "Stream without buffering.",
      ],
    },
    {
      provider: "DISH2",
      availability: "50% available in ",
      logo: dish,
      speed: "500 Mbps",
      price: "$49.99",
      rating: 4,
      features: [
        "Save $10/month with Auto Pay and paperless billing.",
        "No data caps or overage fees.",
        "Free router rental included.",
      ],
    },
  ];
  const tvProviders = [
    {
      provider: "SPECTRUM",
      availability: "61% available in ",
      logo: spectrum,
      speed: "245 Mbps",
      price: "$49.99",
      rating: 3,
      features: [
        "Get a $300 virtual prepaid Mastercard® when you sign up for Home Internet",
        "15-day free trial to see how well T-Mobile 5G operates in your home.",
        "FREE 2-day shipping.",
      ],
    },
    {
      provider: "AT&T",
      availability: "75% available in ",
      logo: att,
      speed: "1000 Mbps",
      price: "$39.99",
      rating: 5,
      features: [
        "Free installation with online orders.",
        "Unlimited data with no annual contract.",
        "Stream without buffering.",
      ],
    },
    {
      provider: "DISH",
      availability: "50% available in ",
      logo: dish,
      speed: "500 Mbps",
      price: "$29.99",
      rating: 4,
      features: [
        "Save $10/month with Auto Pay and paperless billing.",
        "No data caps or overage fees.",
        "Free router rental included.",
      ],
    },
    {
      provider: "SPECTRUM2",
      availability: "61% available in ",
      logo: spectrum,
      speed: "245 Mbps",
      price: "$49.99",
      rating: 3,
      features: [
        "Get a $300 virtual prepaid Mastercard® when you sign up for Home Internet",
        "15-day free trial to see how well T-Mobile 5G operates in your home.",
        "FREE 2-day shipping.",
      ],
    },
    {
      provider: "AT&T2",
      availability: "75% available in ",
      logo: att,
      speed: "1000 Mbps",
      price: "$39.99",
      rating: 5,
      features: [
        "Free installation with online orders.",
        "Unlimited data with no annual contract.",
        "Stream without buffering.",
      ],
    },
    {
      provider: "DISH2",
      availability: "50% available in ",
      logo: dish,
      speed: "500 Mbps",
      price: "$49.99",
      rating: 4,
      features: [
        "Save $10/month with Auto Pay and paperless billing.",
        "No data caps or overage fees.",
        "Free router rental included.",
      ],
    },
  ];
  const [showModal, setShowModal] = useState(false);
  const { address, internet, tv } = useParams();
  const internetCount = parseInt(internet, 10) || 0;
  const tvCount = parseInt(tv, 10) || 0;

  return (
    <div>
      <div className="heading-area">
        <p>Get Connected!</p>
        <p>
          Find Cable <span>TV & Internet</span> Providers Nearby
        </p>
        <p>
          We’re here to help you take your brand to the next level. Whether you
          have a project in mind, need support, or just want to learn more about
          what we do, we’d love to hear from you.
        </p>
      </div>

      <ZipBreadcrumb />
      <div className="heading-area">
        <p>
          Internet providers in <span>{address}</span>
        </p>
        <p className="sub-heading">
          Explore a wide range of TV packages designed to fit your entertainment
          needs. Enjoy premium channels, on-demand content, and crystal-clear HD
          quality.
        </p>
      </div>
      {showModal && <CallModal onClose={() => setShowModal(false)} />}
      {internetProviders.slice(0, internetCount).map((provider, index) => (
        <PackagesDetailCard
          key={index}
          data={provider}
          onServiceClick={() => setShowModal(true)}
        />
      ))}

      <ComparisonTable data={internetProviders.slice(0, internetCount)} onServiceClick={() => setShowModal(true)} />
      <div className="heading-area">
        <p>
          TV providers in <span>{address}</span>
        </p>
        <p className="sub-heading">
          Explore a wide range of TV packages designed to fit your entertainment
          needs. Enjoy premium channels, on-demand content, and crystal-clear HD
          quality.
        </p>
      </div>
      {tvProviders.slice(0, tvCount).map((provider, index) => (
        <PackagesDetailCard
          key={index}
          data={provider}
          onServiceClick={() => setShowModal(true)}
        />
      ))}

      <ComparisonTable data={tvProviders.slice(0, tvCount)}  onServiceClick={() => setShowModal(true)}/>
    </div>
  );
};

export default ZipCodeDetail;
