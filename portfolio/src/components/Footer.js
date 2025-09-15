
import React from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";

function Footer({ linkedin, github }) {
  return (
    <footer>
      <div className="container">
        <p>
          Connect with me on{" "}
          <a
            href={`https://www.linkedin.com/in/${linkedin}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin /> LinkedIn
          </a>{" "}
          |{" "}
          <a
            href={`https://github.com/${github}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub /> GitHub
          </a>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
