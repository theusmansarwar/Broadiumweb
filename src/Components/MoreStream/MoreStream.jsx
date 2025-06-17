import React from "react";
import "./MoreStream.css";
import Image from "../../Assets/stream.jpg"
import bgImage from "../../Assets/streambg.png"
const MoreStream = () => {
  return (
    <div className="more-stream"
      style={{
        backgroundImage:`url(${bgImage})`,
        backgroundPosition:"center",
        backgroundSize:"cover",
        backgroundRepeat:"no-repeat"
      }}>
      <div className="left">
       <div className="top">
         <p>
          Stream More, Pay Less –
        </p>
        <p>Bundle Up Now!</p>
       </div>
        <p>
          Get everything you need in one powerful package—high-speed internet,
          unlimited streaming, and unbeatable value. Say goodbye to buffering
          and overpriced plans. With our best bundles, you enjoy smooth
          browsing, seamless entertainment, and real savings every month.
        </p>
        <button className="btn">Call Now</button>
      </div>
      <div className="right"
      style={{
        backgroundImage:`url(${Image})`,
        backgroundPosition:"center",
        backgroundSize:"cover",
        backgroundRepeat:"no-repeat",
        mixBlendMode:"multiply"
      }}
      ></div>
    </div>
  );
};
export default MoreStream;





