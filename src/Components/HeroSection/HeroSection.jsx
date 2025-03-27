import React, { useState } from "react";
import "./Herosection.css";
import backgroundimage from "../../Assets/backgroundimage.webp";
import company1 from "../../Assets/company1.svg";
import company2 from "../../Assets/company2.svg";
import company3 from "../../Assets/company3.svg";
import company4 from "../../Assets/company4.svg";
import company5 from "../../Assets/company5.svg";
import company6 from "../../Assets/company6.svg";
import { getDatabase, ref, get } from "firebase/database";
import { app } from "../../firebaseConfig";
import { IoLocationSharp } from "react-icons/io5";
import { IoClose } from "react-icons/io5";

const database = getDatabase(app);

const HeroSection = () => {
  const [zipCode, setZipCode] = useState("");
  const [address, setAddress] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [showDropdown, setShowDropdown] = useState(false);

  const handleInputChange = (e) => {
    const value = e.target.value;

    if (/^\d*$/.test(value) && value.length <= 5) {
      setZipCode(value);
      
      if (value.length < 5) {
        setAddress(null);
        setShowDropdown(false);
        setError("");
      }

      if (value.length === 5) {
        fetchAddressData(value);
      }
    }
  };

  const fetchAddressData = async (zip) => {
    setLoading(true);
    setError("");
    setShowDropdown(false);
    setAddress(null);

    try {
      const zipRef = ref(database, `zipcodes/${zip}`);
      const snapshot = await get(zipRef);

      if (snapshot.exists()) {
        setAddress(snapshot.val());
        setShowDropdown(true);
      } else {
        setError("ZIP code not found!");
        setAddress(null);
        setShowDropdown(false);
      }
    } catch (err) {
      setError("Error fetching data.");
      console.error(err);
    }

    setLoading(false);
  };

  const handleSelectAddress = () => {
    if (address) {
      setZipCode(`${address.primary_city}, ${address.state}, ${address.country}`);
      setShowDropdown(false);
    }
  };

  const clearInput = () => {
    setZipCode("");
    setAddress(null);
    setShowDropdown(false);
    setError("");
  };

  return (
    <div className="Hero-section">
      <div
        className="feature-section"
        style={{
          backgroundImage: `url(${backgroundimage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          transition: "background-image 0.8s ease-in-out",
        }}
      >
        <div className="blackscreen">
          <div className="text-section">
            <div className="zipcode-area">
              <div className="zipcode-section"></div>
              <div className="input-area">
                <input
                  type="text"
                  placeholder="Enter ZIP Code"
                  value={zipCode}
                  onChange={handleInputChange}
                />
                {zipCode && (
                  <IoClose className="clear-icon" onClick={clearInput} />
                )}
                <div className="find-btn">Find <IoLocationSharp /></div>
              </div>

              {loading && <p className="dropdown-list">Loading...</p>}
              {error && <p className="dropdown-list">{error}</p>}

              {showDropdown && address && (
                <ul className="dropdown-list">
                  <li onClick={handleSelectAddress}>
                    <IoLocationSharp />
                    {address.primary_city}, {address.state}, {address.country}
                  </li>
                </ul>
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="company-list">
        <img src={company1} alt="Company 1" />
        <img src={company2} alt="Company 2" />
        <img src={company3} alt="Company 3" />
        <img src={company4} alt="Company 4" />
        <img src={company5} alt="Company 5" />
        <img src={company6} alt="Company 6" />
      </div>
    </div>
  );
};

export default HeroSection;