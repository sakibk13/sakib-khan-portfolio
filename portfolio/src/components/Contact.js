
import React from "react";
import { FaEnvelope, FaUser, FaComment } from "react-icons/fa";

function Contact({ email }) {
  return (
    <section id="contact" className="py-5">
      <div className="container">
        <h2 className="text-center mb-4" data-aos="fade-up">Contact Me</h2>
        <div className="row">
          <div className="col-md-8 mx-auto">
            <div className="text-center mb-4" data-aos="fade-up" data-aos-delay="100">
              <FaEnvelope className="skill-icon" />
              <p className="lead">
                Have a question or want to work together? <br />
                Feel free to reach out to me at{" "}
                <a href={`mailto:${email}`}>{email}</a>.
              </p>
            </div>
            <div className="card p-4" data-aos="fade-up" data-aos-delay="200">
              <form>
                <div className="mb-3 input-group">
                  <span className="input-group-text"><FaUser /></span>
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    placeholder="Your Name"
                  />
                </div>
                <div className="mb-3 input-group">
                  <span className="input-group-text"><FaEnvelope /></span>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    placeholder="Your Email"
                  />
                </div>
                <div className="mb-3 input-group">
                  <span className="input-group-text"><FaComment /></span>
                  <textarea
                    className="form-control"
                    id="message"
                    rows="5"
                    placeholder="Your Message"
                  ></textarea>
                </div>
                <div className="text-center">
                  <button type="submit" className="btn btn-primary">
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
