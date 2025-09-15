import React from "react";
import { FaCode, FaReact, FaDatabase, FaBrain, FaNetworkWired, FaTools } from "react-icons/fa";

function Skills({ skills }) {
  const getIcon = (category) => {
    switch (category) {
      case "Programming Languages":
        return <FaCode className="skill-icon" />;
      case "Full-Stack Development":
        return <FaReact className="skill-icon" />;
      case "Front-End":
        return <FaReact className="skill-icon" />;
      case "Artificial Intelligence & Data Science":
        return <FaBrain className="skill-icon" />;
      case "Database Management":
        return <FaDatabase className="skill-icon" />;
      case "Networking":
        return <FaNetworkWired className="skill-icon" />;
      default:
        return <FaTools className="skill-icon" />;
    }
  };

  return (
    <section id="skills" className="py-5">
      <div className="container">
        <h2 className="text-center mb-5" data-aos="fade-up">Skills</h2>
        <div className="row text-center">
          <div className="col-md-4 mb-4" data-aos="fade-up" data-aos-delay="100">
            {getIcon("Programming Languages")}
            <h4>Programming Languages</h4>
            <div className="d-flex flex-wrap justify-content-center">
              {skills.programming.map((skill, index) => (
                <span key={index} className="skill-badge">{skill}</span>
              ))}
            </div>
          </div>
          <div className="col-md-4 mb-4" data-aos="fade-up" data-aos-delay="200">
            {getIcon("Full-Stack Development")}
            <h4>Full-Stack Development</h4>
            <div className="d-flex flex-wrap justify-content-center">
              {skills.fullStack.map((skill, index) => (
                <span key={index} className="skill-badge">{skill}</span>
              ))}
            </div>
          </div>
          <div className="col-md-4 mb-4" data-aos="fade-up" data-aos-delay="300">
            {getIcon("Front-End")}
            <h4>Front-End</h4>
            <div className="d-flex flex-wrap justify-content-center">
              {skills.frontEnd.map((skill, index) => (
                <span key={index} className="skill-badge">{skill}</span>
              ))}
            </div>
          </div>
          <div className="col-md-4 mb-4" data-aos="fade-up" data-aos-delay="400">
            {getIcon("Artificial Intelligence & Data Science")}
            <h4>AI & Data Science</h4>
            <div className="d-flex flex-wrap justify-content-center">
              {skills.ai.map((skill, index) => (
                <span key={index} className="skill-badge">{skill}</span>
              ))}
            </div>
          </div>
          <div className="col-md-4 mb-4" data-aos="fade-up" data-aos-delay="500">
            {getIcon("Database Management")}
            <h4>Database Management</h4>
            <div className="d-flex flex-wrap justify-content-center">
              {skills.database.map((skill, index) => (
                <span key={index} className="skill-badge">{skill}</span>
              ))}
            </div>
          </div>
          <div className="col-md-4 mb-4" data-aos="fade-up" data-aos-delay="600">
            {getIcon("Others")}
            <h4>Others</h4>
            <div className="d-flex flex-wrap justify-content-center">
              {skills.others.map((skill, index) => (
                <span key={index} className="skill-badge">{skill}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;