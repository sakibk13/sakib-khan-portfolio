import React from "react";
import { FaBriefcase } from "react-icons/fa";

function Experience({ experience }) {
  return (
    <section id="experience" className="py-5">
      <div className="container">
        <h2 className="text-center mb-4" data-aos="fade-up">Work Experience</h2>
        <div className="timeline">
          {experience.map((exp, index) => (
            <div className="timeline-item" key={index} data-aos="fade-up" data-aos-delay={`${index * 150}`}>
              <div className="timeline-badge"><FaBriefcase /></div>
              <div className="timeline-panel">
                <div className="timeline-heading">
                  <h4 className="timeline-title">{exp.role}</h4>
                  <p className="text-muted"><small>{exp.company} - {exp.duration}</small></p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experience;