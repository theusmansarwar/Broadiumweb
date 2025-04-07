import React from "react";
import "./Services.css";
import { useNavigate } from "react-router-dom";
import ServiceTemplate from "../../Templates/ServiceTemplate";

import service1 from '../../Assets/service1.svg'
import service2 from '../../Assets/service2.svg'
import service3 from '../../Assets/service3.svg'
import service4 from '../../Assets/service4.svg'

const serviceData = [
  {
    _id: "1",
    image: service1,
    name: "Web Development",
    slug: "web-development",
    description: "Your favorite shows and movies are chilling out on cable TV, satellite TV, and online streaming services. We’ll break down all these TV options so you can find your favorite way to tune in.",
  },
  {
    _id: "2",
    image: service2,
    name: "Graphic Design",
    slug: "graphic-design",
    description: "Your favorite shows and movies are chilling out on cable TV, satellite TV, and online streaming services. We’ll break down all these TV options so you can find your favorite way to tune in.",
  },
  {
    _id: "3",
    image: service3,
    name: "SEO Optimization",
    slug: "seo-optimization",
    description: "Your favorite shows and movies are chilling out on cable TV, satellite TV, and online streaming services. We’ll break down all these TV options so you can find your favorite way to tune in.",
  },
  {
    _id: "4",
    image: service4,
    name: "Digital Marketing",
    slug: "digital-marketing",
    description: "Your favorite shows and movies are chilling out on cable TV, satellite TV, and online streaming services. We’ll break down all these TV options so you can find your favorite way to tune in.",
  },
];

const Services = () => {

  return (
    <div className="services-section">
      <div className="service-section">
        <div className="service-grid">
          {serviceData.map((service) => (
            <ServiceTemplate
              key={service._id}
              image={service.image}
              name={service.name}
              slug={service.slug}
              description={service.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
