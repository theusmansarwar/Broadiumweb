import React from "react";
import "./Footer.css";
import {
  FaEnvelope,
  FaLinkedin,
  FaPhone,

} from "react-icons/fa6";
import { FaMapMarkerAlt } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { ImFacebook2 } from "react-icons/im";
import { useNavigate } from "react-router-dom";
import logo from '../../Assets/logo2.svg'
const Footer = () => {
  const navigate = useNavigate();
  return (
    <footer className="footer">
      <h1>Work, stream, play—do it all without a hitch!</h1>
      <div className="footer-container">
        <div className="footer-left">
          <img src={logo} alt="zemalt.com" />
          <p>
            Zemalt is a World-Wide digital solutions agency specializing in SEO,
            Google Ads, content writing, social media marketing, web
            development, and UI/UX design.
          </p>
          <div className="social-icons">
            <a
              href="https://www.linkedin.com/company/zemalt/"
              target="_blank"
              rel="noopener noreferrer"
            >
              {" "}
              <FaLinkedin />
            </a>
            <a
              href="https://www.instagram.com/zemaltpvtltd/"
              target="_blank"
              rel="noopener noreferrer"
            >
              {" "}
              <RiInstagramFill />
            </a>
            <a
              href="https://www.facebook.com/zemaltpvtltd"
              target="_blank"
              rel="noopener noreferrer"
            >
              {" "}
              <ImFacebook2 />
            </a>
          </div>
        </div>

        <div className="footer-right">
          <div className="footer-columns">
            <div className="footer-column">
              <h4>For Queries</h4>
              <ul>
                <li onClick={() => navigate(`/services`)}>Services</li>
                <li onClick={() => navigate(`/about`)}>About Us</li>
                <li onClick={() => navigate(`/contact`)}>Contact Us</li>
              </ul>
            </div>

            <div className="footer-column">
              <h4>Others</h4>
              <ul>
                <li onClick={() => navigate(`/terms`)}>Terms & Conditions</li>
                <li onClick={() => navigate(`/privacy-policy`)}>Privacy Policy</li>
                <li onClick={() => navigate(`/disclaimer`)}>Disclaimer</li>
              </ul>
            </div>

            <div className="footer-column">
              <h4>Office</h4>
              <ul>
                <li>
                 <a  href="mailto:support@broadium.net"
              target="_blank"
              rel="noopener noreferrer"><FaEnvelope /> support@broadium.net</a> 
                </li>
               
                <li >
             
                  <FaPhone /> +1 800 372 7981
              
                </li>
                <li>
                <a
                href="https://maps.app.goo.gl/znKmZeRgU9sRG3BF6"
                target="_blank"
                rel="noopener noreferrer"
              >
                  <FaMapMarkerAlt /> 4419 Centennial Blvd Ste 1060
                  Colorado Springs, CO 80907 USA
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <p className="copyright">
            © All rights reserved{" "}
            <a
              href="https://zemalt.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Broadium
            </a>{" "}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
