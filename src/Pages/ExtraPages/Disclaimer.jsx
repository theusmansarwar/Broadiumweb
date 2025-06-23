import React from "react";
import Breadcrumb from "../../Components/Breadcrumb/Breadcrumb";
import bgImage from "../../Assets/streambg.png"
import "./Extra.css";
const Disclaimer = () => {
  return (
    <div 
     style={{
        backgroundImage:`url(${bgImage})`,
        backgroundPosition:"center",
        backgroundSize:"cover",
        backgroundRepeat:"no-repeat"
      }}>
    
      <div className="heading-area">
        <p>Who We Are?</p>
        <p className="sub-heading">
          Explore a wide range of TV packages designed to fit your entertainment
          needs. Enjoy premium channels, on-demand content, and crystal-clear HD
          quality.
        </p>
      </div>
      <Breadcrumb />
      <div className="extra-content">
        <p className="title">Disclaimer</p>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. Lorem Ipsum is simply dummy
          text of the printing and typesetting industry. Lorem Ipsum has been
          the industry's standard dummy text ever since the 1500s, when an
          unknown printer took a galley of type and scrambled it to make a type
          specimen book.
        </p>
        <p>
          {" "}
          Lorem Ipsum has been the industry's standard dummy text ever since the
          1500s, when an unknown printer took a galley of type and scrambled it
          to make a type specimen book.
        </p>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. Lorem Ipsum is simply dummy
          text of the printing and typesetting industry. Lorem Ipsum has been
          the industry's standard dummy text ever since the 1500s, when an
          unknown printer took a galley of type and scrambled it to make a type
          specimen book.
        </p>
      </div>
    </div>
  );
};

export default Disclaimer;
