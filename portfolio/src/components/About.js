import React from "react";
import { FaMapMarkerAlt, FaEnvelope, FaPhone } from "react-icons/fa";

function About({ summary, location, email, phone }) {
  return (
    <section id="about" className="py-5">
      <div className="container">
        <h2 className="text-center mb-4" data-aos="fade-up">About Me</h2>
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <p className="lead" data-aos="fade-up" data-aos-delay="200" style={{ textAlign: 'justify' }}>{summary}</p>
            <div className="row mt-5 text-center">
              <div className="col-md-4" data-aos="fade-up" data-aos-delay="300">
                <div className="card p-3 h-100">
                  <FaMapMarkerAlt className="skill-icon mx-auto mb-3" />
                  <h5>Location</h5>
                  <p>{location}</p>
                </div>
              </div>
              <div className="col-md-4" data-aos="fade-up" data-aos-delay="400">
                <div className="card p-3 h-100">
                  <FaEnvelope className="skill-icon mx-auto mb-3" />
                  <h5>Email</h5>
                  <p><a href={`mailto:${email}`}>{email}</a></p>
                </div>
              </div>
              <div className="col-md-4" data-aos="fade-up" data-aos-delay="500">
                <div className="card p-3 h-100">
                  <FaPhone className="skill-icon mx-auto mb-3" />
                  <h5>Phone</h5>
                  <p>{phone}</p>
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