import React from "react";
import {
  FaCode,
  FaMoneyBillWave,
  FaHospital,
  FaBuilding,
  FaBook,
  FaBoxOpen,
  FaGamepad,
  FaCar,
  FaRocket,
  FaHardHat,
  FaBolt
} from "react-icons/fa";

const iconMap = {
  FaCode,
  FaMoneyBillWave,
  FaHospital,
  FaBuilding,
  FaBook,
  FaBoxOpen,
  FaGamepad,
  FaCar,
  FaRocket,
  FaHardHat,
  FaBolt
};

function Projects({ projects }) {
  return (
    <section id="projects" className="py-5">
      <div className="container">
        <h2 className="text-center mb-4" data-aos="fade-up">Projects</h2>
        <div className="row">
          {projects.map((project, index) => {
            const IconComponent = iconMap[project.icon] || FaCode;
            return (
              <div className="col-md-6 col-lg-4 mb-4" key={index} data-aos="zoom-in" data-aos-delay={`${index * 100}`}>
                <div className="card h-100">
                  <div className="card-body d-flex flex-column">
                    <div className="text-center mb-3">
                      <IconComponent className="skill-icon" />
                    </div>
                    <h5 className="card-title">{project.name}</h5>
                    <p className="card-text">{project.description}</p>
                    <div className="d-flex flex-wrap justify-content-center mt-auto">
                      {project.stack.split(', ').map((tech, techIndex) => (
                        <span key={techIndex} className="skill-badge">{tech}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Projects;