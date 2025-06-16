import React from "react";
import { Link, useLocation } from "react-router-dom";

import backgroundimg from "../../Assets/backgroundimage.webp";
const Breadcrumb = () => {
  const location = useLocation();
  const pathSegments = location.pathname.split("/").filter((segment) => segment);

  // Function to truncate long segments
  const truncate = (text, maxLength = 8) =>
    text.length > maxLength ? text.slice(0, maxLength) + "..." : text;

  return (
    <div className="Hero-section2">
        <div
          className="feature-section2"
          style={{
            backgroundImage: `url(${backgroundimg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            transition: "background-image 0.8s ease-in-out",
          }}
        >
          <div className="blackscreen">
            <div className="text-section2">
             <nav className="breadcrumb">
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        {pathSegments.map((segment, index) => {
          const href = "/" + pathSegments.slice(0, index + 1).join("/");
          const label = segment.replace(/-/g, " ");
          const displayLabel = truncate(label.charAt(0).toUpperCase() + label.slice(1));

          return (
            <li key={index}>
              <Link to={href}>{displayLabel}</Link>
            </li>
          );
        })}
      </ul>
    </nav>
            </div>
          </div>
        </div>
      </div>
    
  );
};

export default Breadcrumb;
