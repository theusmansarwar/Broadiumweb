import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import HeroSection from "../Components/HeroSection/HeroSection";
import Services from "../Components/ServicesSection/Services";
import Pricing from "../Components/PricingSection/Pricing";
import Whyus from "../Components/WhyUs/Whyus";
import Movies from "../Components/Movies/Movies";

const Index = () => {
 
  return (
    <div>
      <div className="heading-area">
        <p>Get Connected!</p>
        <p>
          Find Cable <span>TV & Internet</span> Providers Nearby
        </p>
         <p>
            We’re here to help you take your brand to the next level. Whether
            you have a project in mind, need support, or just want to learn more
            about what we do, we’d love to hear from you.
          </p>
      </div>

      <HeroSection />
      <div className="heading-area">
        <p>
          <span>Services </span>we’re offering
        </p>
        <p className="sub-heading">
          Your favorite shows and movies are chilling out on cable TV, satellite
          TV, and online streaming services. We’ll break down all these TV
          options so you can find your favorite way to tune in.
        </p>
      </div>
      <Services />
      <Pricing />
      <div className="heading-area">
        <p>
          Why <span>Choose Us?</span>
        </p>
        <p className="sub-heading">
          Unlock seamless connectivity at home or abroad with our flexible,
          high-speed solutions.
        </p>
      </div>
      <Whyus />
      <div className="heading-area">
        <p>
          Enjoy <span>Sports, Movies, TV Shows</span> & More
        </p>
        <p className="sub-heading">
          Unlock seamless connectivity at home or abroad with our flexible,
          high-speed solutions.
        </p>
      </div>

      <Movies/>
      
    </div>
  );
};

export default Index;
