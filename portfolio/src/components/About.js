import React from "react";
import { FaMapMarkerAlt, FaEnvelope, FaPhone } from "react-icons/fa";
import profilePic from "../assets/photo.jpg";

function About({ summary, location, email, phone }) {
  return (
    <section id="about" className="py-5">
      <div className="container">
        <h2 className="text-center mb-5" data-aos="fade-up">About Me</h2>
        <div className="row align-items-center">
          <div className="col-lg-4 text-center" data-aos="fade-right">
            <img src={profilePic} alt="Sakib Khan" className="img-fluid rounded-circle about-image" />
          </div>
          <div className="col-lg-8" data-aos="fade-left" data-aos-delay="200">
            <p className="lead about-summary">{summary}</p>
            <div className="row mt-4">
              <div className="col-md-6 mb-4">
                <div className="dashbox">
                  <FaMapMarkerAlt className="dashbox-icon" />
                  <div className="dashbox-content">
                    <h5>Location</h5>
                    <p>{location}</p>
                  </div>
                </div>
              </div>
              <div className="col-md-6 mb-4">
                <div className="dashbox">
                  <FaEnvelope className="dashbox-icon" />
                  <div className="dashbox-content">
                    <h5>Email</h5>
                    <p><a href={`mailto:${email}`}>{email}</a></p>
                  </div>
                </div>
              </div>
              <div className="col-md-12">
                <div className="dashbox">
                  <FaPhone className="dashbox-icon" />
                  <div className="dashbox-content">
                    <h5>Phone</h5>
                    <p>{phone}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;