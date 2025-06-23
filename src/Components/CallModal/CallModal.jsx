import React from "react";
import "./CallModal.css";
import phoneImage from "../../Assets/phone.png";
import bgImage from "../../Assets/logo1.svg";
import { IoMdClose } from "react-icons/io";

const CallModal = ({onClose}) => {
   
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
          <button className="outlined">Let Us Call You</button>
          <button className="filled">Call Now</button>
        </div>
      </div>
    </div>
  );
};

export default CallModal;
