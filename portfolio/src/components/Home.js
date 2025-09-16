
import React from "react";
import { TypeAnimation } from 'react-type-animation';

function Home({ name }) {
  return (
    <section id="home" className="d-flex flex-column justify-content-center align-items-center text-center vh-100">
      <div className="container">
        <h1 className="display-3 fw-bold">Hi, I'm {name}</h1>
        <TypeAnimation
          sequence={[
            'A Full-Stack Web Developer',
            1000,
            'A Problem Solver',
            1000,
            'An Innovator',
            1000,
          ]}
          wrapper="p"
          speed={50}
          className="lead fs-4"
          repeat={Infinity}
        />
        <div className="mt-4">
          <a href="#about" className="btn btn-primary btn-lg">
            Explore My Work
          </a>
        </div>
      </div>
    </section>
  );
}

export default Home;
