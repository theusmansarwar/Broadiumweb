import React from "react";
import { Link, useLocation } from "react-router-dom";
import backgroundimg from "../../Assets/backgroundimage.webp";

const ZipBreadcrumb = () => {
  const location = useLocation();
  const pathSegments = location.pathname
    .split("/")
    .filter((segment) => segment);

  // Extract the last segment (i.e., address)
  const address = decodeURIComponent(pathSegments[2] || "");

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
                {address && (
                  <li>
                    <span>{address}</span>
                  </li>
                )}
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ZipBreadcrumb;
