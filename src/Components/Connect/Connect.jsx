
import React, { useState } from "react";
import "./Connect.css";
import tv from "../../Assets/tv1.svg";
import cardbg from "../../Assets/streambg.png";
import { IoPlayForwardOutline } from "react-icons/io5";

const tvServices = [
  "XfinityTV",
  "SpectrumTV",
  "OptimumTV",
  "DIRECTV",
  "CoxTV",
  "VerizonTV",
];

const internetServices = [
  "Xfinity Internet",
  "Spectrum Internet",
  "Optimum Internet",
  "AT&T",
  "Cox Internet",
  "Verizon Internet",
];
const Connect = ({type}) => {
    const [selectedTV, setSelectedTV] = useState("");
    const [selectedInternet, setSelectedInternet] = useState("");
    const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = (event) => {
    setIsChecked(event.target.checked);
  };

  const style =
    type === "bundle"
      ?  {
          backgroundImage: `url(${cardbg})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          marginTop:"-20px"
        
        }
      :
      {
        backgroundColor: `var(--tertiory-color)`
      }
      ;
  return (
    <div className="Connect" style={style}>
      <div className="heading-area">
        <p>
          Enjoy <span>Sports, Movies, TV Shows</span> & More
        </p>
        <p className="sub-heading">
          Unlock seamless connectivity at home or abroad with our flexible,
          high-speed solutions.
        </p>
      </div>
      <div className="lower-section">
        <div className="left">
        <div className="service-container">
        <div className="checkbox-container">
    
        <input
          type="checkbox"
          checked={isChecked}
          onChange={handleCheckboxChange}
          className="checkbox"
        />
          <label>
        I want a bundle
      </label>
    </div>
      <select
        value={selectedTV}
        onChange={(e) => setSelectedTV(e.target.value)}
        className="service-select"
      >
        <option value="">Select Service</option>
        {tvServices.map((service) => (
          <option key={service} value={service}>
            {service}
          </option>
        ))}
      </select>

      <div className="service-and">and</div>

      <select
        value={selectedInternet}
        onChange={(e) => setSelectedInternet(e.target.value)}
        className="service-select"
      >
        <option value="">Select Service</option>
        {internetServices.map((service) => (
          <option key={service} value={service}>
            {service}
          </option>
        ))}
      </select>

      <div className="btn-section2">
                <div className="service-button2">Get Started</div>
                <div className="service-button-secondary2">
                  <IoPlayForwardOutline />
                </div>
              </div>
    </div>


        </div>
        <div className="right">
          <img src={tv} />
        </div>
      </div>
    </div>
  );
};

export default Connect;
