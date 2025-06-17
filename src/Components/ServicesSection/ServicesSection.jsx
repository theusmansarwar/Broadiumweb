import React from "react";
import "./ServicesSection.css";
import { BsAndroid2 } from "react-icons/bs";
const services = [
  {
    title: "Custom OTT Apps",
    description:
      "We offer custom OTT apps tailored for Android, iOS, Windows, and macOS platforms.",
  },
  {
    title: "Video Streaming Solutions",
    description:
      "End-to-end video streaming platforms with scalable backend and adaptive bitrate streaming.",
  },
  {
    title: "Smart TV App Development",
    description:
      "Develop apps for Smart TVs like Samsung, LG, Roku, and Android TV with engaging UI/UX.",
  },
  {
    title: "Monetization Integration",
    description:
      "Integrate subscriptions, ads, and pay-per-view models to monetize your content effectively.",
  },
  {
    title: "Content Management System",
    description:
      "Robust CMS to manage, schedule, and publish your video content across platforms.",
  },
  {
    title: "Analytics & Insights",
    description:
      "Track user engagement, content performance, and platform growth with powerful analytics tools.",
  },
];
const ServicesSection = () => {
  return (
    <section className="services-section">
      <p className="services-title">Services</p>
      <p className="services-subtitle">
        Explore a wide range of TV packages designed to fit your entertainment
        needs. Enjoy premium channels, on-demand content, and crystal-clear HD
        quality.
      </p>
      <div className="services-grid">
        {services.map((service, index) => (
          <div key={index} className="service-card">
            <div className="icon-container">
              <BsAndroid2 className="icon" />
            </div>
            <p className="card-title">{service.title}</p>
            <p className="card-description">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};
export default ServicesSection;