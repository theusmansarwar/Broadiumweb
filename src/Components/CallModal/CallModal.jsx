import React from "react";
import "./CallModal.css";
import phoneImage from "../../Assets/phone.png";
import bgImage from "../../Assets/logo1.svg";
import { IoMdClose } from "react-icons/io";
import { useNavigate } from "react-router-dom";

const CallModal = ({ onClose }) => {
  const navigate = useNavigate();

  return (
    <div className="modal-backdrop">
      <div className="call-modal">
        <IoMdClose className="close-button" onClick={onClose} />

        <div
          className="image-container"
          style={{
            backgroundImage: `url(${phoneImage})`,
            backgroundPosition: "center",
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
          }}
        >
          <img className="phone-img" src={bgImage} alt="Phone" />
        </div>

        <h2>We’d Love to Hear From You!</h2>
        <p>Tell us how we can make things easier for you.</p>

        <div className="button-group">
          <button
            className="outlined"
            onClick={() => {
              navigate("/contact-us");
            }}
          >
            Let Us Call You
          </button>
          <a href="tel:+18003727981">
            <button className="filled">Call Now</button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default CallModal;
