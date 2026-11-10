// import "./Hero.css";

// const skillGroups = [
//   {
//     category: "Frontend",
//     skills: [
//       "HTML5",
//       "CSS3",
//       "JavaScript",
//       "React.js",
//       "TypeScript",
//       "Redux",
//       "Lit Web Components",
//     ],
//   },
//   {
//     category: "Backend & Database",
//     skills: ["Node.js", "Express.js", "REST APIs", "PostgreSQL", "MongoDB"],
//   },
//   {
//     category: "Tools & Engineering",
//     skills: ["Git", "GitHub", "Vite", "CI/CD", "Playwright"],
//   },
//   {
//     category: "AI Integration",
//     skills: ["Gemini API", "AI Integration"],
//   },
// ];

// const Hero = () => {
//   return (
//     <section
//       id="home"
//       className="hero"
//       // style={{
//       //   "--hero-bg": `url("${import.meta.env.BASE_URL}/images/technical-grid.jpg")`,
//       // }}
//     >
//       <div className="hero-content">
//         <span className="hero-eyebrow">FRONTEND ENGINEER · PROBLEM SOLVER</span>

//         <h2>Building UI. Solving Problems.</h2>

//         <p className="hero-description">
//           A collection of frontend machine coding challenges, reusable
//           components, practical React implementations, and experiments in modern
//           web development.
//         </p>

//         <div className="hero-skills">
//           <span className="hero-skills-label">TECHNOLOGIES I WORK WITH</span>

//           {skillGroups.map((group) => (
//             <div className="hero-skill-group" key={group.category}>
//               <span className="hero-skill-category">{group.category}</span>

//               <div className="hero-skill-tags">
//                 {group.skills.map((skill) => (
//                   <span className="hero-skill-tag" key={skill}>
//                     {skill}
//                   </span>
//                 ))}
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Hero;



import { useEffect, useState } from "react";
import {
  ArrowRight,
  ArrowUpRight,
  Code2,
  Terminal,
  Sparkles,
} from "lucide-react";
import "./Hero.css";

const roles = [
  "Frontend Engineer.",
  "React Developer.",
  "UI Problem Solver.",
  "Creative Builder.",
];

const technologies = [
  {
    name: "React",
    description: "Building reusable components and interactive user interfaces.",
  },
  {
    name: "JavaScript",
    description: "Creating dynamic experiences and solving frontend problems.",
  },
  {
    name: "TypeScript",
    description: "Writing more predictable and maintainable application code.",
  },
  {
    name: "CSS",
    description: "Crafting responsive layouts and polished visual experiences.",
  },
  {
    name: "Redux",
    description: "Managing predictable application state.",
  },
  {
    name: "Node.js",
    description: "Exploring backend development and API integrations.",
  },
];

const Hero = ({ setActivePage }) => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [selectedTech, setSelectedTech] = useState("React");

  const activeTech = technologies.find(
    (tech) => tech.name === selectedTech
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((previous) => (previous + 1) % roles.length);
    }, 2800);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="hero">
      <div className="hero-content">

        <div className="hero-status">
          <span className="hero-status-dot"></span>
          AVAILABLE FOR OPPORTUNITIES
        </div>

        <span className="hero-eyebrow">
          HELLO, WORLD! I'M
        </span>

        <h1 className="hero-name">
          Mahesh Bikkina<span>.</span>
        </h1>

        <h2 className="hero-role" key={roleIndex}>
          {roles[roleIndex]}
        </h2>

        <p className="hero-description">
          I enjoy turning ideas into thoughtful digital experiences.
          I build responsive interfaces, reusable components and
          practical applications with modern frontend technologies.
        </p>

        <div className="hero-actions">
          <button
            className="hero-primary-btn"
            onClick={() => setActivePage("challenges")}
          >
            Explore Challenges
            <ArrowUpRight size={17} />
          </button>

          <button
            className="hero-secondary-btn"
            onClick={() => setActivePage("projects")}
          >
            View Projects
            <ArrowRight size={17} />
          </button>
        </div>

        {/* Interactive technology playground */}

        <div className="hero-playground">
          <div className="hero-playground-heading">
            <div>
              <Terminal size={16} />
              <span>MY TOOLKIT</span>
            </div>

            <span className="hero-playground-count">
              {String(technologies.length).padStart(2, "0")} TECHNOLOGIES
            </span>
          </div>

          <div className="hero-tech-list">
            {technologies.map((tech) => (
              <button
                key={tech.name}
                type="button"
                className={`hero-tech-chip ${
                  selectedTech === tech.name ? "active" : ""
                }`}
                onClick={() => setSelectedTech(tech.name)}
                aria-pressed={selectedTech === tech.name}
              >
                {tech.name}
                <ArrowUpRight size={12} />
              </button>
            ))}
          </div>

          <div className="hero-tech-description" aria-live="polite">
            <Sparkles size={16} />
            <p>{activeTech.description}</p>
          </div>
        </div>

        {/* Small coding window */}

        <div className="hero-code-window">
          <div className="hero-code-header">
            <div className="hero-code-dots">
              <span></span>
              <span></span>
              <span></span>
            </div>

            <span>developer.js</span>
            <Code2 size={15} />
          </div>

          <pre>
            <code>
              <span className="code-purple">const</span>{" "}
              <span className="code-blue">developer</span> = {"{"}
              {"\n"}  name: <span className="code-green">"Mahesh"</span>,
              {"\n"}  role: <span className="code-green">"Frontend Engineer"</span>,
              {"\n"}  passion: <span className="code-green">"Building useful things"</span>
              {"\n"}{"}"};
            </code>
          </pre>
        </div>

        <div className="hero-navigation-hint">
          <span className="hero-navigation-line"></span>
          <span>EXPLORE CODEFORGE USING THE NAVIGATION ABOVE</span>
          <span className="hero-navigation-line"></span>
        </div>

      </div>
    </section>
  );
};

export default Hero;
