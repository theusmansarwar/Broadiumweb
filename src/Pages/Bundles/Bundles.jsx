import Breadcrumb from "../../Components/Breadcrumb/Breadcrumb";
import FriendlyPackages from "../../Components/FriendlyPackages/FriendlyPackages";
import "./Bundles.css";
import Spectrum from "../../Assets/spectrum.png";
import Att from "../../Assets/att.png";
import Dish from "../../Assets/dish.png";
import MoreStream from "../../Components/MoreStream/MoreStream";
const Bundles = () => {
  const allPackages = [
    {
      logo: Att,
      title: "AT&T Combo Deals",
      description:
        "We evaluate top TV providers across the U.S. to help you find a plan that fits your budget and preferences. Whether you’re looking for premium channels, on-demand content, or affordable bundles, we’ve got you covered.",
      pricingData: [
        {
          _id: "4",
          name: "Internet Basic",
          price: "$29.99",
          features: [
            "Secure browsing",
            "Unlimited streaming",
            "Free gateway device",
            "Up to 4000 MBPS Speed",
          ],
          vat: "5% VAT Included",
          installation: "Installation Charge: 1000 TK",
        },
        {
          _id: "5",
          name: "TV & Internet Premium",
          price: "$59.99",
          features: [
            "HD Channels + High-speed Internet",
            "No throttling",
            "24/7 customer support",
            "Up to 15000 MBPS Speed",
          ],
          vat: "5% VAT Included",
          installation: "Installation Charge: 750 TK",
        },
        {
          _id: "6",
          name: "TV & Internet Premium",
          price: "$59.99",
          features: [
            "HD Channels + High-speed Internet",
            "No throttling",
            "24/7 customer support",
            "Up to 15000 MBPS Speed",
          ],
          vat: "5% VAT Included",
          installation: "Installation Charge: 750 TK",
        },
      ],
    },
    {
      logo: Spectrum,
      title: "Budget Friendly Packages",
      description:
        "We evaluate top TV providers across the U.S. to help you find a plan that fits your budget and preferences. Whether you’re looking for premium channels, on-demand content, or affordable bundles, we’ve got you covered.",
      pricingData: [
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
          name: "TV, Broadband & Internet",
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
      ],
    },
    {
      logo: Dish,
      title: "Dish Elite Plans",
      description:
        "We evaluate top TV providers across the U.S. to help you find a plan that fits your budget and preferences. Whether you’re looking for premium channels, on-demand content, or affordable bundles, we’ve got you covered.",
      pricingData: [
        {
          _id: "7",
          name: "Fiber Internet",
          price: "$39.99",
          features: [
            "Pure fiber connection",
            "Symmetric upload/download",
            "Ultra-low latency",
            "Up to 10000 MBPS Speed",
          ],
          vat: "5% VAT Included",
          installation: "Installation Charge: 1200 TK",
        },
        {
          _id: "8",
          name: "Fiber + Entertainment",
          price: "$69.99",
          features: [
            "Premium streaming add-ons",
            "Gaming optimized",
            "Smart assistant compatibility",
            "Up to 18000 MBPS Speed",
          ],
          vat: "5% VAT Included",
          installation: "Installation Charge: 600 TK",
        },
        {
          _id: "9",
          name: "Fiber + Entertainment",
          price: "$69.99",
          features: [
            "Premium streaming add-ons",
            "Gaming optimized",
            "Smart assistant compatibility",
            "Up to 18000 MBPS Speed",
          ],
          vat: "5% VAT Included",
          installation: "Installation Charge: 600 TK",
        },
      ],
    },
  ];

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
      <Breadcrumb />

      {allPackages.map((company, index) => (
        <FriendlyPackages
          key={index}
          Packages={company}
          backgroundColor={index % 2 === 0 ? "var(--tertiory-color)" : "white"}
        />
      ))}
      <MoreStream />
    </div>
  );
};

export default Bundles;
