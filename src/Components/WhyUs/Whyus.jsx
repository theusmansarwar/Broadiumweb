import React from "react";
import "./Whyus.css";
import largeImg from '../../Assets/large.svg';
import topImg from '../../Assets/top.svg';
import bottomImg from '../../Assets/bottom.svg';
import reason1 from '../../Assets/reason1.svg';
import reason2 from '../../Assets/reason2.svg';
import reason3 from '../../Assets/reason3.svg';


const Whyus = () => {
  return (
  

      <div className="why-us-section">
        <div className="left">
          <div className="imgs-section">
            <div className="large-img" 
            
            style={{
                backgroundImage: `url(${largeImg})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                transition: "background-image 0.8s ease-in-out",
              }}
            
            />
            <div className="small-img-section">
              <div className="top-img"
               style={{
                backgroundImage: `url(${topImg})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                transition: "background-image 0.8s ease-in-out",
              }}
            
            />
              <div className="lower-img"
               style={{
                backgroundImage: `url(${bottomImg})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                transition: "background-image 0.8s ease-in-out",
              }}
            
            />
            </div>
          </div>
        </div>
        <div className="right">
            <p className="top-text">Securing your private conversations is our utmost priority. Our advanced encryption technology ensures.</p>
            <ul>
                <li><img src={reason1}/> <div className="reason"> <p>Multiple Providers, One Solution</p> <p>Compare the best plans from leading providers.</p></div></li>
                <li><img src={reason2}/> <div className="reason"> <p>Multiple Providers, One Solution</p> <p>Compare the best plans from leading providers.</p></div></li>
                <li><img src={reason3}/> <div className="reason"> <p>Multiple Providers, One Solution</p> <p>Compare the best plans from leading providers.</p></div></li>
                </ul>
        </div>
      </div>
   
  );
};

export default Whyus;
