
import { useState } from "react";
import {
  ArrowUpRight,
  CalendarDays,
  Check,
  Copy,
  Download,
  Mail,
  Code2,
  Sparkles,
} from "lucide-react";

import {
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";

import "./ContactSection.css";

// Update these details before deployment
const CONTACT = {
  email: "your-email@example.com",
  github: "https://github.com/YOUR_USERNAME",
  linkedin: "https://linkedin.com/in/YOUR_USERNAME",
  calendly: "https://calendly.com/YOUR_USERNAME/15min",
  resume: "/documents/Mahesh_Resume.pdf",
};

const ContactSection = () => {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(CONTACT.email);
      setCopied(true);

      window.setTimeout(() => {
        setCopied(false);
      }, 2000);
    } catch (error) {
      console.error("Failed to copy email:", error);
    }
  };

  return (
    <section className="contact-section" id="contact">
      <div className="contact-container">

        {/* Main heading */}
        <div className="contact-content">
          <span className="contact-label">
            <span className="contact-dot"></span>
            LET'S CONNECT
          </span>

          <h2>
            Have an idea?
            <br />
            <span>Let's build it together.</span>
          </h2>

          <p className="contact-description">
            Whether it's a frontend challenge, a creative
            collaboration, or an interesting opportunity,
            I'm always open to connecting with fellow developers.
          </p>

          <div className="contact-actions">
            <a
              href={`mailto:${CONTACT.email}`}
              className="contact-primary-btn"
            >
              Get in touch
              <ArrowUpRight size={16} />
            </a>

            <a
              href={CONTACT.github}
              target="_blank"
              rel="noreferrer"
              className="contact-secondary-btn"
            >
              Explore GitHub
              <FaGithub size={16} />
            </a>
          </div>
        </div>

        {/* Decorative branding */}
        <div className="contact-decoration">
          <div className="contact-decoration-circle">
            <span>{"<MB/>"}</span>
          </div>

          <span className="contact-decoration-text">
            BUILD · CREATE · REPEAT
          </span>
        </div>

      </div>

      {/* Feature 1: Availability */}
      <div className="contact-extra-container">

        <div className="availability-card">
          <div className="availability-left">
            <span className="availability-indicator"></span>

            <div>
              <h4>Open to opportunities</h4>
              <p>Available for frontend engineering roles</p>
            </div>
          </div>

          <span className="availability-tag">
            Available
          </span>
        </div>

        {/* Features 2, 3 and 4 */}
        <div className="contact-feature-grid">

          {/* Resume */}
          <div className="contact-feature-card">
            <div className="feature-icon">
              <Download />
            </div>

            <h3>My Resume</h3>

            <p>
              Explore my professional experience,
              skills and projects.
            </p>

            <a
              href={CONTACT.resume}
              download
              className="feature-link"
            >
              Download resume
              <ArrowUpRight size={15} />
            </a>
          </div>

          {/* Copy email */}
          <div className="contact-feature-card">
            <div className="feature-icon">
              <Mail />
            </div>

            <h3>Drop me an email</h3>

            <p>
              Have something interesting to discuss?
              Let's get in touch.
            </p>

            <button
              className="feature-link"
              onClick={handleCopyEmail}
            >
              {copied ? (
                <>
                  Copied successfully
                  <Check size={15} />
                </>
              ) : (
                <>
                  Copy email
                  <Copy size={15} />
                </>
              )}
            </button>
          </div>

          {/* Schedule meeting */}
          <div className="contact-feature-card">
            <div className="feature-icon">
              <CalendarDays />
            </div>

            <h3>Schedule a call</h3>

            <p>
              Let's have a quick 15-minute conversation.
            </p>

            <a
              href={CONTACT.calendly}
              target="_blank"
              rel="noreferrer"
              className="feature-link"
            >
              Book a meeting
              <ArrowUpRight size={15} />
            </a>
          </div>

        </div>

        {/* Feature 5: Currently building */}
        <div className="currently-building">

          <div className="building-header">
            <span>
              <Code2 size={16} />
              CURRENTLY BUILDING
            </span>

            <span className="building-status">
              IN PROGRESS
            </span>
          </div>

          <div className="building-content">

            <div className="building-icon">
              <Sparkles size={25} />
            </div>

            <div className="building-info">
              <h3>IntelliChat</h3>

              <p>
                An AI-powered learning and conversation platform
                built using React, TypeScript, Node.js,
                PostgreSQL and Gemini API.
              </p>

              <div className="building-technologies">
                <span>React</span>
                <span>TypeScript</span>
                <span>Node.js</span>
                <span>PostgreSQL</span>
                <span>Gemini API</span>
              </div>
            </div>

          </div>
        </div>

        {/* Feature 6: Social connections */}
        <div className="contact-social-section">

          <div className="social-heading">
            <h3>Find me around the web.</h3>
            <p>Let's connect and exchange ideas.</p>
          </div>

          <div className="contact-social-links">

            <a
              href={CONTACT.github}
              target="_blank"
              rel="noreferrer"
              className="social-link"
            >
              <FaGithub size={17} />
              <span>GitHub</span>
              <ArrowUpRight size={14} />
            </a>

            <a
              href={CONTACT.linkedin}
              target="_blank"
              rel="noreferrer"
              className="social-link"
            >
              <FaLinkedin size={17} />
              <span>LinkedIn</span>
              <ArrowUpRight size={14} />
            </a>

            <a
              href={`mailto:${CONTACT.email}`}
              className="social-link"
            >
              <Mail size={17} />
              <span>Email</span>
              <ArrowUpRight size={14} />
            </a>

          </div>
        </div>

      </div>
    </section>
  );
};

export default ContactSection;
