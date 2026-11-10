
import {
  ArrowUpRight,
  ExternalLink,
  Code2,
  Layers3,
  Sparkles,
  Monitor,
} from "lucide-react";

import "./Projects.css";

// Add your actual deployed URLs and repository URLs here.
const projectLinks = {
  intelliChat: {
    demo: "",
    github: "",
  },
  machineCoding: {
    demo: "",
    github: "",
  },
};

const projects = [
  {
    id: "machine-coding",
    number: "02",
    title: "Machine Coding Portfolio",
    category: "FRONTEND ENGINEERING",
    description:
      "A dedicated collection of frontend machine coding challenges, built to practice interview problems and demonstrate reusable React implementations.",
    image: `${import.meta.env.BASE_URL}/images/projects/machine-coding.png`,
    imageAlt: "Machine Coding Portfolio application preview",
    technologies: [
      "React",
      "JavaScript",
      "CSS",
      "HTML",
    ],
    highlights: [
      "Reusable component implementations",
      "Searchable coding challenge collection",
      "Interactive live previews",
    ],
    demo: projectLinks.machineCoding.demo,
    github: projectLinks.machineCoding.github,
  },
];

const ProjectLinks = ({ demo, github }) => {
  return (
    <div className="project-actions">
      {demo && (
        <a
          href={demo}
          target="_blank"
          rel="noreferrer"
          className="project-link project-link-primary"
        >
          Live Demo
          <ExternalLink size={15} />
        </a>
      )}

      {github && (
        <a
          href={github}
          target="_blank"
          rel="noreferrer"
          className="project-link project-link-secondary"
        >
          <Code2 size={16} />
          Source Code
          <ArrowUpRight size={14} />
        </a>
      )}
    </div>
  );
};

const Projects = () => {
  return (
    <section className="projects-section">
      <div className="projects-container">

        {/* =================================
            PAGE INTRODUCTION
        ================================= */}

        <header className="projects-header">
          <div className="projects-header-content">
            <span className="projects-eyebrow">
              CODEFORGE / SELECTED WORK
            </span>

            <h1>
              Ideas become
              <span> reality.</span>
            </h1>

            <p>
              A collection of applications, experiments and
              ideas brought to life through code. Each project
              represents something I've learned, explored
              and built along the way.
            </p>
          </div>

          <div className="projects-header-mark">
            <div className="projects-mark-icon">
              <Layers3 size={38} />
            </div>

            <span>DESIGNED WITH PURPOSE</span>
            <Sparkles
              className="projects-mark-sparkle"
              size={22}
            />
          </div>
        </header>

        {/* =================================
            FEATURED PROJECT
        ================================= */}

        <div className="projects-featured-section">

          <div className="projects-section-heading">
            <div>
              <span className="projects-section-number">
                01 / FEATURED PROJECT
              </span>

              <h2>Something I'm building.</h2>
            </div>

            <span className="projects-section-label">
              PERSONAL PROJECT
            </span>
          </div>

          <article className="featured-project">

            {/* Project screenshot */}

            <div className="featured-project-visual">
              <div className="project-browser-bar">
                <div className="project-browser-dots">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>

                <span>INTELLICHAT / APPLICATION</span>

                <Monitor size={15} />
              </div>

              <div className="featured-project-image">
                <img
                  src={`${import.meta.env.BASE_URL}/images/projects/intelliChat.png`}
                  alt="IntelliChat application preview"
                  loading="lazy"
                  onError={(e) => {
                    e.currentTarget.style.display = "none";
                  }}
                />

                <div className="project-image-fallback">
                  <Sparkles size={34} />
                  <span>INTELLICHAT</span>
                  <small>AI-POWERED CONVERSATIONS</small>
                </div>
              </div>

              <div className="featured-project-image-footer">
                <span>AI CONVERSATIONAL APPLICATION</span>
                <span>01 — 02</span>
              </div>
            </div>

            {/* Project information */}

            <div className="featured-project-content">

              <div className="featured-project-meta">
                <span>01</span>
                <span className="project-meta-divider"></span>
                <span>AI / FULL-STACK DEVELOPMENT</span>
              </div>

              <h3>IntelliChat</h3>

              <p className="featured-project-description">
                An AI-powered conversational application designed
                to make interacting with AI feel more personal
                and engaging.

                Built with a distinctive vintage Indian classroom
                inspired interface and integrated with Gemini API.
              </p>

              <div className="project-tech-heading">
                TECHNOLOGIES USED
              </div>

              <div className="project-tech-list">
                {[
                  "React",
                  "TypeScript",
                  "Node.js",
                  "Express",
                  "PostgreSQL",
                  "Gemini API",
                ].map((tech) => (
                  <span className="project-tech-tag" key={tech}>
                    {tech}
                  </span>
                ))}
              </div>

              <div className="project-highlights">
                <span>WHAT I WORKED ON</span>

                <ul>
                  <li>Interactive chat interface and components</li>
                  <li>Backend API and AI provider integration</li>
                  <li>Conversation flow and application architecture</li>
                </ul>
              </div>

              <ProjectLinks
                demo={projectLinks.intelliChat.demo}
                github={projectLinks.intelliChat.github}
              />

            </div>
          </article>
        </div>

        {/* =================================
            OTHER PROJECTS
        ================================= */}

        <div className="projects-collection">

          <div className="projects-section-heading">
            <div>
              <span className="projects-section-number">
                02 / MORE WORK
              </span>

              <h2>Built with curiosity.</h2>
            </div>

            <span className="projects-section-label">
              PROJECT COLLECTION
            </span>
          </div>

          <div className="projects-grid">
            {projects.map((project) => (
              <article className="project-card" key={project.id}>

                <div className="project-card-visual">
                  <img
                    src={project.image}
                    alt={project.imageAlt}
                    loading="lazy"
                    onError={(e) => {
                      e.currentTarget.style.display = "none";
                    }}
                  />

                  <div className="project-card-fallback">
                    <Code2 size={32} />
                    <span>MACHINE CODING</span>
                    <small>FRONTEND CHALLENGES</small>
                  </div>

                  <span className="project-card-number">
                    {project.number}
                  </span>
                </div>

                <div className="project-card-content">

                  <span className="project-card-category">
                    {project.category}
                  </span>

                  <h3>{project.title}</h3>

                  <p>{project.description}</p>

                  <div className="project-tech-list">
                    {project.technologies.map((tech) => (
                      <span className="project-tech-tag" key={tech}>
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="project-card-highlights">
                    {project.highlights.map((highlight) => (
                      <div key={highlight}>
                        <span className="project-highlight-dot"></span>
                        {highlight}
                      </div>
                    ))}
                  </div>

                  <ProjectLinks
                    demo={project.demo}
                    github={project.github}
                  />

                </div>
              </article>
            ))}
          </div>
        </div>

        {/* =================================
            CLOSING SECTION
        ================================= */}

        <div className="projects-closing">
          <div>
            <span className="projects-eyebrow">
              ALWAYS EXPLORING
            </span>

            <h2>
              The next idea is
              <span> already brewing.</span>
            </h2>

            <p>
              I'm constantly experimenting, learning and
              building. There's always something new around
              the corner.
            </p>
          </div>

          <div className="projects-closing-mark">
            <Code2 size={36} />
            <span>KEEP BUILDING ↗</span>
          </div>
        </div>

        {/* Bottom information */}

        <div className="projects-bottom">
          <span>IDEAS INTO APPLICATIONS</span>
          <span className="projects-bottom-divider"></span>
          <span>BUILT WITH CURIOSITY</span>
          <span className="projects-bottom-divider"></span>
          <span>ALWAYS ITERATING</span>
        </div>

      </div>
    </section>
  );
};

export default Projects;
