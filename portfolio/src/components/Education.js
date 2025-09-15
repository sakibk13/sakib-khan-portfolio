

import React from "react";
import { FaGraduationCap } from "react-icons/fa";

function Education({ education }) {
  return (
    <section id="education" className="py-5">
      <div className="container">
        <h2 className="text-center mb-4" data-aos="fade-up">Education</h2>
        <div className="timeline">
          {education.map((edu, index) => (
            <div className="timeline-item" key={index} data-aos="fade-up" data-aos-delay={`${index * 150}`}>
              <div className="timeline-badge"><FaGraduationCap /></div>
              <div className="timeline-panel">
                <div className="timeline-heading">
                  <h4 className="timeline-title">{edu.degree}</h4>
                  <p className="text-muted"><small>{edu.institution} - {edu.year}</small></p>
                </div>
                <div className="timeline-body">
                  <p>CGPA: {edu.cgpa || edu.gpa}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Education;

