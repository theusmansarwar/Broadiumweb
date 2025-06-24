import React, { useEffect, useState } from "react";
import "./Contact.css";
import { LuMapPin } from "react-icons/lu";
import { MdOutlineMailOutline, MdOutlinePhone } from "react-icons/md";
import "react-phone-input-2/lib/style.css";
import PhoneInput from "react-phone-input-2";
import { createLead } from "../../DAL/create";
import CustomAlert from "../../Components/Alert/CustomAlert";
import contactimg from "../../Assets/Frame 43.png";
import Breadcrumb from "../../Components/Breadcrumb/Breadcrumb";
import { toast, ToastContainer } from "react-toastify";
const Contact = () => {
  const serviceOptions = ["TV", "INTERNET", "BUNDLES", "STREAMING", "OTHERS"];
  const [errors, setErrors] = useState({});
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    subject: "",
    address: "",
    service: [],
    message: "",
  });

  const [status, setStatus] = useState(null);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };
  const handlePhoneChange = (value) => {
    setFormData((prev) => ({ ...prev, phone: value }));
  };

  const handleServiceChange = (e) => {
    const { value, checked } = e.target;
    setFormData((prev) => {
      const updatedServices = checked
        ? [...prev.service, value]
        : prev.service.filter((s) => s !== value);
      return { ...prev, service: updatedServices };
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const payload = {
      name: `${formData.name}`,
      phone: formData.phone,
      subject: formData.subject,
      address: formData.address,
      service: formData.service.join(", "),
      query: formData.message,
    };
    try {
      const res = await createLead(payload);
      if (res.status === 201) {
        setStatus("success");
        toast.success(res?.message || "Form submitted successfully");
        setErrors({});
        setFormData({
          name: "",
          phone: "",
          subject: "",
          address: "",
          service: [],
          message: "",
        });
      }
      if (res?.status == 400) {
        const fieldErrors = {};
        res.missingFields.forEach((field) => {
          fieldErrors[field.name] = field.message;
        });
        setErrors(fieldErrors);
      }
    } catch (err) {
      if (err?.status == 400) {
        const fieldErrors = {};
        err.missingFields.forEach((field) => {
          fieldErrors[field.name] = field.message;
        });
        setErrors(fieldErrors);
        toast.error();
      } else {
        setStatus("error");
      }
    }
  };

  return (
    <div>
      <ToastContainer
        position="top-right"
        autoClose={1500}
        pauseOnHover={false}
      />
      <div className="heading-area">
        <p>Get Connected!</p>
        <p>
          Find Cable <span>TV & Internet</span> Providers Nearby
        </p>
        <p>
          We’re here to help you take your brand to the next level. Whether you
          have a project in mind, need support, or just want to learn more about
          what we do, we’d love to hear from you.
        </p>
      </div>
      <Breadcrumb />
      <div className="contact-section">
        <div className="upper-section">
          <p>
            Let’s Bring Your <span>Vision</span> To <span>Life!</span>
          </p>
          <p>
            We’re here to help you take your brand to the next level. Whether
            you have a project in mind, need support, or just want to learn more
            about what we do, we’d love to hear from you.
          </p>
        </div>
        <div className="contact-form-section">
          <div className="left">
            <h3>Get in Touch</h3>
            {/* <h1>
              Let’s Start a<br />
              <span className="highlight">Conversation!</span>
            </h1>
            <p>
              Have questions or feedback? We're here to help. Send us a message,
              and we’ll respond within 24 hours.
            </p> */}
            <form onSubmit={handleSubmit}>
              <div className="input-field">
                <label htmlFor="name">Name</label>
                {errors.name && <p className="error-msg">{errors.name}</p>}
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Full Name"
                  value={formData.name}
                  onChange={handleChange}
                />
              </div>
              <div className="input-field">
                <label htmlFor="phone" className="phone-lable">
                  Phone Number
                </label>
                {errors.phone && <p className="error-msg">{errors.phone}</p>}
                <PhoneInput
                  country={"us"}
                  onlyCountries={["us"]}
                  disableDropdown={true}
                  countryCodeEditable={false}
                  value={formData.phone}
                  onChange={handlePhoneChange}
                  inputProps={{
                    name: "phone",
                    required: true,
                  }}
                  onKeyDown={(e) => {
                    if (
                      !/[0-9\b]/.test(e.key) &&
                      ![
                        "Backspace",
                        "Delete",
                        "ArrowLeft",
                        "ArrowRight",
                        "Tab",
                      ].includes(e.key)
                    ) {
                      e.preventDefault();
                    }
                  }}
                  containerClass="custom-phone-container"
                  buttonClass="custom-phone-flag" // helps hide the flag
                />
              </div>
              <div className="input-field">
                <label htmlFor="address">Address</label>
                {errors.address && (
                  <p className="error-msg">{errors.address}</p>
                )}
                <input
                  type="text"
                  id="address"
                  name="address"
                  placeholder="Address"
                  value={formData.address}
                  onChange={handleChange}
                />
              </div>

              <div className="input-field">
                <label htmlFor="subject">Subject</label>
                {errors.subject && (
                  <p className="error-msg">{errors.subject}</p>
                )}
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  placeholder="Subject"
                  value={formData.subject}
                  onChange={handleChange}
                />
              </div>
              <div className="checkbox-container">
                <p className="service-label required-label">
                  Services Interested In
                </p>
                {errors.service && (
                  <p className="error-msg">{errors.service}</p>
                )}
                <div className="checkbox-grid">
                  {serviceOptions.map((service) => (
                    <div className="checkbox-item" key={service}>
                      <input
                        type="checkbox"
                        id={service}
                        value={service}
                        checked={formData.service.includes(service)}
                        onChange={handleServiceChange}
                      />
                      <label htmlFor={service}>{service}</label>
                    </div>
                  ))}
                </div>
              </div>

              <div className="input-field">
                <label htmlFor="message">Message</label>
                {errors.query && <p className="error-msg">{errors.query}</p>}
                <textarea
                  id="message"
                  name="query"
                  placeholder="Leave a message"
                  rows="4"
                  value={formData.query}
                  onChange={handleChange}
                ></textarea>
              </div>

              <button className="send-btn" type="submit">
                Send Message
              </button>
            </form>
          </div>

          <div className="right">
            <div className="right-contact-img">
              <img className="bg-contact" src={contactimg} />
            </div>
            <div className="info-box">
              <a
                href="mailto:company@zemalt.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div
                  className="info-item"
                  onClick={() =>
                    window.open("mailto:support@broadium.net", "_blank")
                  }
                >
                  <MdOutlineMailOutline />
                  <div className="assssss">
                    <h4>Email</h4>
                    <p>support@broadium.net</p>
                  </div>
                </div>
              </a>
              <a
                href="http://wa.me/18003727981"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="info-item">
                  <MdOutlinePhone />
                  <div className="assssss">
                    <h4>Phone</h4>
                    <p>+1-(800)-372-7981</p>
                  </div>
                </div>
              </a>
              <a
                href="https://maps.app.goo.gl/owK9zDzZBdNGzWrL7"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="info-item">
                  <LuMapPin />
                  <div className="assssss">
                    <h4>Address</h4>
                    <p>
                      4419 Centennial Blvd Ste 1060 Colorado Springs, CO 80907
                      USA
                    </p>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
