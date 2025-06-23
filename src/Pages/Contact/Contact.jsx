import React, { useEffect, useState } from "react";
import "./Contact.css";
import { LuMapPin } from "react-icons/lu";
import { MdOutlineMailOutline, MdOutlinePhone } from "react-icons/md";
import "react-phone-input-2/lib/style.css";
import PhoneInput from "react-phone-input-2";
import { createLead } from "../../DAL/create";
import CustomAlert from "../../Components/Alert/CustomAlert";
import contactimg from '../../Assets/Frame 43.png'
import Breadcrumb from "../../Components/Breadcrumb/Breadcrumb";
const Contact = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    subject: "",
    query: "",
  });

  const [alertType, setAlertType] = useState("");
  const [alertMessage, setAlertMessage] = useState("");
  const [formErrors, setFormErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });

    if (isSubmitted) {
      setFormErrors((prevErrors) => ({
        ...prevErrors,
        [e.target.name]: e.target.value.trim() ? "" : prevErrors[e.target.name],
      }));
    }
  };
  const validateUSPhone = (phone) => {
    const cleaned = phone.replace(/\D/g, ""); // remove non-digit characters
    return /^1?\d{10}$/.test(cleaned); // accepts optional "1" at start, then 10 digits
  };

  const handlePhoneChange = (value) => {
    setFormData({ ...formData, phone: value });

    if (isSubmitted && value) {
      setFormErrors((prevErrors) => ({ ...prevErrors, phone: "" }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitted(true);

    const errors = {};

    // Validate required fields
    if (!formData.name.trim()) errors.name = "Name is required.";
    if (!formData.email.trim()) errors.email = "Email is required.";
    if (!formData.phone.trim()) errors.phone = "Phone is required.";
    if (!formData.subject.trim()) errors.subject = "Subject is required.";
    if (!formData.query.trim()) errors.query = "Message is required.";

    // ✅ Custom US phone number validation
    if (formData.phone && !validateUSPhone(formData.phone)) {
      errors.phone = "Please enter a valid US phone number.";
    }

    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      setAlertType("error");
      setAlertMessage("Please fix the errors before submitting.");
      return;
    }

    const payload = new FormData();
    payload.append("name", formData.name);
    payload.append("phone", formData.phone);
    payload.append("email", formData.email);
    payload.append("subject", formData.subject);
    payload.append("query", formData.query);

    try {
      const response = await createLead(payload);
      console.log("API Response:", response);

      if (response?.status === 201) {
        setAlertType("success");
        setAlertMessage(response?.message);
        setFormData({ name: "", phone: "", email: "", subject: "", query: "" });
        setIsSubmitted(false);
        setFormErrors({});
      } else if (response?.status === 400 && response?.missingFields) {
        const apiErrors = {};
        response.missingFields.forEach((field) => {
          apiErrors[field.name] = field.message;
        });

        setFormErrors(apiErrors);
        setAlertType("error");
        setAlertMessage(response?.message);
      } else {
        setAlertType("error");
        setAlertMessage(response?.message);
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setAlertType("error");
      setAlertMessage("Something went wrong. Try again later.");
    }
  };

  return (
    <div>
      <CustomAlert
        type={alertType}
        message={alertMessage}
        onClose={() => setAlertMessage("")}
      />
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
     <Breadcrumb/>
      <div className="contact-section">
        <div className="upper-section">
          <p>
            Let’s Bring Your  <span>Vision</span> To <span>Life!</span>
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
            <h1>
              Let’s Start a<br />
              <span className="highlight">Conversation!</span>
            </h1>
            <p>
              Have questions or feedback? We're here to help. Send us a message,
              and we’ll respond within 24 hours.
            </p>
            <form onSubmit={handleSubmit}>
              <div className="input-field">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Full Name"
                  value={formData.name}
                  onChange={handleChange}
                />
                {formErrors.name && (
                  <span className="error-message">{formErrors.name}</span>
                )}
              </div>
              <div className="input-field">
                <label htmlFor="phone" className="phone-lable">
                  Phone Number
                </label>
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

                {formErrors.phone && (
                  <span className="error-message">{formErrors.phone}</span>
                )}
              </div>
              <div className="input-field">
                <label htmlFor="address">Address</label>
                <input
                  type="text"
                  id="address"
                  name="address"
                  placeholder="Address"
                  value={formData.address}
                  onChange={handleChange}
                />
                {formErrors.address && (
                  <span className="error-message">{formErrors.address}</span>
                )}
              </div>

             

              <div className="input-field">
                <label htmlFor="subject">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  placeholder="Subject"
                  value={formData.subject}
                  onChange={handleChange}
                />
                {formErrors.subject && (
                  <span className="error-message">{formErrors.subject}</span>
                )}
              </div>

              <div className="input-field">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="query"
                  placeholder="Leave a message"
                  rows="4"
                  value={formData.query}
                  onChange={handleChange}
                ></textarea>
                {formErrors.query && (
                  <span className="error-message">{formErrors.query}</span>
                )}
              </div>

              <button className="send-btn" type="submit">
                Send Message
              </button>
            </form>
          </div>

          <div className="right">
            <div className="right-contact-img">
              <img className="bg-contact" src={contactimg}/>

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
                    <p>+1-(800)-372-7981
                         
                    </p>
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
                    <p>4419 Centennial Blvd Ste 1060 Colorado Springs, CO 80907 USA</p>
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
