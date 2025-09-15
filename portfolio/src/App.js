import React, { useEffect } from "react";
import Header from "./components/Header";
import Home from "./components/Home";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import "animate.css/animate.min.css";
import "./App.css";
import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  const portfolioData = {
    name: "Sakib Khan",
    linkedin: "sakib-khan",
    github: "sakibk13",
    email: "shakibk1306@gmail.com",
    phone: "+8801832465446",
    address: "15 Rankin Street, Wari, Dhaka-1203",
    location: "15 Rankin Street, Wari, Dhaka 1203",
    summary:
      "I am a Computer Science and Engineering graduate from BRAC University with a strong background in programming and full-stack web development. I have experience working with both front-end and back-end technologies to build responsive and dynamic applications. Skilled in managing databases using MySQL, SQL, and NoSQL, I also have knowledge in machine learning, networking, and cybersecurity. I am passionate about creating scalable, secure, and user-focused solutions that ensure performance and functionality.",
    education: [
      {
        degree: "B.Sc. in Computer Science and Engineering",
        institution: "BRAC University",
        year: "2021-2025",
        cgpa: "3.33/4.0",
      },
      {
        degree: "Higher Secondary Certificate(HSC)",
        institution: "Notre Dame College",
        year: "2018-2020",
        gpa: "5.0/5.0",
      },
      {
        degree: "Secondary School Certificate (SSC)",
        institution: "St. Gregory's High School & College",
        year: "2008-2017",
        gpa: "5.0/5.0",
      },
    ],
    skills: {
      programming: ["Python", "Java", "JavaScript"],
      fullStack: ["MERN", "MEAN", "LAMP", "Django"],
      frontEnd: ["HTML", "CSS", "JavaScript", "Tailwind CSS", "Bootstrap"],
      ai: ["Machine Learning"],
      database: ["MySQL", "SQL", "NOSQL"],
      networking: ["Cisco Packet Tracer", "Wireshark"],
      others: [
        "MS Excel",
        "MS Word",
        "MS PowerPoint",
        "Canva",
        "Figma",
        "Webframe",
      ],
    },
    projects: [
      {
        name: "Money Transaction System – MoneyWave",
        stack: "HTML, CSS, PHP",
        description:
          "Built a secure money transfer system enabling users to send, receive, and track transactions with an intuitive web interface.",
        githubLink: "#",
      },
      {
        name: "Hospital Management Portal",
        stack: "MERN, DJANGO",
        description:
          "Developed a full-stack portal for managing patients, doctors, appointments, and medical records with real-time access.",
        githubLink: "#",
      },
      {
        name: "Property Management Portal – PropertyWave",
        stack: "MEAN",
        description:
          "Designed and implemented a property portal for listing, buying, selling, and managing real estate seamlessly.",
        githubLink: "#",
      },
      {
        name: "Library Management System – LibraWave",
        stack: "Laravel",
        description:
          "Created a digital library platform for cataloging, borrowing, and tracking books with role-based user access.",
        githubLink: "#",
      },
      {
        name: "Parcel Delivery Platform – ParcelWave",
        stack: "MERN",
        description:
          "Engineered a peer-to-peer delivery platform matching senders with travelers for efficient and cost-effective parcel delivery.",
        githubLink: "#",
      },
      {
        name: "Basic Games",
        stack: "Assembly Language - 8086",
        description:
          "Developed classic 2D games in Assembly language on the 8086 processor, demonstrating low-level programming and logic building.",
        githubLink: "#",
      },
      {
        name: "Car Price Prediction",
        stack: "Machine Learning",
        description:
          "Built a machine learning model to predict car prices based on features like brand, mileage, and engine capacity.",
        githubLink: "#",
      },
      {
        name: "Galaxy Attack Game",
        stack: "OpenGL",
        description:
          "Designed and programmed a 2D shooting game using OpenGL, implementing game mechanics and interactive graphics.",
        githubLink: "#",
      },
      {
        name: "Smart Safety Helmet",
        stack: "Hardware",
        description:
          "Created a hardware prototype helmet with safety sensors to detect accidents and alert emergency contacts.",
        githubLink: "#",
      },
      {
        name: "Voltage Deviation Visualizer",
        stack: "Hardware Project",
        description:
          "Developed a visualization tool to analyze and display voltage deviations in electrical circuits for monitoring system stability.",
        githubLink: "#",
      },
    ],
    experience: [
      {
        company: "BitEncryptIT",
        role: "Software Developer Intern",
        duration: "MAY 2025- AUGUST 2025",
      },
    ],
  };

  return (
    <div>
      <Header />
      <Home name={portfolioData.name} />
      <About summary={portfolioData.summary} location={portfolioData.location} email={portfolioData.email} phone={portfolioData.phone} />
      <Skills skills={portfolioData.skills} />
      <Education education={portfolioData.education} />
      <Projects projects={portfolioData.projects} />
      <Experience experience={portfolioData.experience} />
      <Contact email={portfolioData.email} />
      <Footer linkedin={portfolioData.linkedin} github={portfolioData.github} />
    </div>
  );
}

export default App;