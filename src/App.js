import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Header from "./Components/Header/Header";
import Footer from "./Components/FooterSection/Footer";
import Index from "./Pages/Index";
import "./App.css";
import NotFound from "./Pages/NotFound/NotFound";
import Contact from "./Pages/Contact/Contact";
import Tv from "./Pages/Tv/Tv";
import Internet from "./Pages/Internet/Internet";
import Streaming from "./Pages/Streaming/Streaming";
import Bundles from "./Pages/Bundles/Bundles";
import ZipCodeDetail from "./Pages/ZipCodeDetail/ZipCodeDetail";
import AboutUs from "./Pages/AboutUs/AboutUs";
import Disclaimer from "./Pages/ExtraPages/Disclaimer";
import PrivacyPolicy from "./Pages/ExtraPages/PrivacyPolicy";
import TermsAndConditions from "./Pages/ExtraPages/TermsAndConditions";
import { MdOutlinePhoneCallback } from "react-icons/md";
import ScrollToTop from "./Utils/ScrollToTop.js";

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Header />

      <div className="main-content">
        <a href="tel:+18003727981"  className="linkss">
          <div className="first-btn">
            <MdOutlinePhoneCallback /> <span>Call Now</span>
          </div>
        </a>

        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/contact-us" element={<Contact />} />
          <Route path="/tv" element={<Tv />} />
          <Route path="/internet" element={<Internet />} />
          <Route path="/streaming" element={<Streaming />} />
          <Route path="/bundles" element={<Bundles />} />
          <Route
            path="/zip/:zipcode/:address/:internet/:tv"
            element={<ZipCodeDetail />}
          />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/disclaimer" element={<Disclaimer />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route
            path="/terms-and-conditions"
            element={<TermsAndConditions />}
          />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
