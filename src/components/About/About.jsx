
import {
  ArrowUpRight,
  Code2,
  Layers3,
  Gauge,
  BrainCircuit,
} from "lucide-react";

import "./About.css";

const About = () => {
  const interests = [
    {
      icon: Code2,
      title: "Frontend Development",
      description:
        "Building responsive interfaces and interactive applications using React, JavaScript and modern CSS.",
    },
    {
      icon: Layers3,
      title: "Component Architecture",
      description:
        "Creating reusable components, managing application state and keeping code maintainable.",
    },
    {
      icon: Gauge,
      title: "Performance & UX",
      description:
        "Improving rendering performance, accessibility and the overall user experience.",
    },
    {
      icon: BrainCircuit,
      title: "Exploring AI",
      description:
        "Experimenting with AI integrations and building applications that solve practical problems.",
    },
  ];

  return (
    <section id="about" className="about-section">
      <div className="about-container">

        {/* Heading and Profile */}

        <div className="about-heading">
          <div className="about-heading-text">
            <span className="about-eyebrow">
              A LITTLE INTRODUCTION
            </span>

            <h2>More than just writing code.</h2>
          </div>

          <div className="about-heading-image">
            <div className="about-profile-photo">
              <img
                src={`${import.meta.env.BASE_URL}/images/BWMahesh.jpg`}
                alt="Mahesh Bikkina"
              />
            </div>

            <div className="about-heading-image-name">
              <h2 className="firstname">Mahesh</h2>
              <h2 className="lastname">Bikkina</h2>
            </div>
          </div>
        </div>

        {/* Main Content */}

        <div className="about-content">

          <div className="about-intro">
            <p className="about-lead">
              I'm a Frontend Engineer who enjoys turning ideas
              into thoughtful, functional web experiences.
            </p>

            <p>
              I work primarily with JavaScript and React,
              building responsive interfaces, reusable components
              and interactive applications. I enjoy understanding
              how things work under the hood and finding better
              ways to solve frontend problems.
            </p>

            <p>
              Beyond the interface, I'm interested in application
              architecture, performance, API integration and
              exploring how AI can make products more useful.
            </p>

            <a
              className="about-github-link"
              href="https://github.com/YOUR_USERNAME"
              target="_blank"
              rel="noreferrer"
            >
              Explore my work
              <ArrowUpRight size={16} />
            </a>
          </div>

          {/* Focus Areas */}

          <div className="about-interests">
            <span className="about-subheading">
              WHAT I FOCUS ON
            </span>

            {interests.map((item) => {
              const Icon = item.icon;

              return (
                <div className="about-interest" key={item.title}>
                  <div className="about-interest-icon">
                    <Icon size={19} />
                  </div>

                  <div className="about-interest-content">
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                  </div>
                </div>
              );
            })}
          </div>

        </div>

        {/* Bottom Information */}

        <div className="about-bottom">
          <span>BASED IN INDIA</span>
          <span className="about-bottom-divider"></span>
          <span>FRONTEND ENGINEERING</span>
          <span className="about-bottom-divider"></span>
          <span>ALWAYS BUILDING SOMETHING</span>
        </div>

      </div>
    </section>
  );
};

export default About;
