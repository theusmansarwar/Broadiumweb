import React from "react";
import "./DrivingSuccess.css";
import Image1 from "../../Assets/success1.png";
import Image2 from "../../Assets/success2.jpg";
import Image3 from "../../Assets/success3.png";
const DrivingSuccess = () => {
  return (
    <div className="driving-success">
      <div className="left-container">
        <div className="image-container">
         <div className="yt-container">
           <img src={Image1} alt="Image1" className="yt-image" />
         </div>
          <img src={Image2} alt="Image2" className="left-image" />
        </div>
        <div className="card-text">
          <p className="title">Driving Success Through Ultimate Speed</p>
          <p>
            Explore how our targeted campaigns and creative strategies delivered
            measurable growth, helping businesses achieve their marketing goals
            effectively.
          </p>
        </div>
      </div>
      <div className="right-container">
        <img src={Image3} alt="Image3" className="right-image" />
      </div>
    </div>
  );
};
export default DrivingSuccess;