import { useState } from "react";
import {
  ArrowUpRight,
  BriefcaseBusiness,
  Handshake,
  Lightbulb,
  MessageCircle,
  Mail,
  Send,
  Sparkles,
  CheckCircle2,
} from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

import "./ContactSection.css";

// Replace this with your actual email address.
const CONTACT_EMAIL = "YOUR_EMAIL@example.com";

const topics = [
  {
    id: "Job opportunity",
    title: "Career opportunity",
    description: "Let's discuss a role.",
    icon: BriefcaseBusiness,
  },
  {
    id: "Collaboration",
    title: "Collaboration",
    description: "Let's build something.",
    icon: Handshake,
  },
  {
    id: "Project discussion",
    title: "Project discussion",
    description: "I have an idea to share.",
    icon: Lightbulb,
  },
  {
    id: "Just saying hello",
    title: "Just saying hello",
    description: "No agenda needed.",
    icon: MessageCircle,
  },
];

const ContactSection = () => {
  const [selectedTopic, setSelectedTopic] = useState("Job opportunity");

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const subject = `${selectedTopic} - Contact from ${formData.name}`;

    const body = `
Hi Mahesh,

${formData.message}

-------------------------
Name: ${formData.name}
Email: ${formData.email}
Topic: ${selectedTopic}
    `;

    const mailtoUrl =
      `mailto:${CONTACT_EMAIL}` +
      `?subject=${encodeURIComponent(subject)}` +
      `&body=${encodeURIComponent(body)}`;

    window.location.href = mailtoUrl;
  };

  return (
    <section className="contact-section">
      <div className="contact-container">

        {/* Introduction */}

        <div className="contact-header">
          <div className="contact-header-content">
            <span className="contact-eyebrow">
              CODEFORGE / LET'S CONNECT
            </span>

            <h1>
              Let's start a
              <span> conversation.</span>
            </h1>

            <p>
              Good things often start with a simple hello.
              Whether you have an opportunity, an idea or just
              want to talk technology, I'd love to hear from you.
            </p>

            <div className="contact-availability">
              <span className="contact-availability-dot"></span>
              Open to meaningful opportunities
            </div>
          </div>

          <div className="contact-header-decoration">
            <div className="contact-decoration-icon">
              <MessageCircle size={35} />
            </div>

            <span className="contact-decoration-text">
              IDEAS START WITH CONVERSATIONS
            </span>

            <Sparkles className="contact-decoration-sparkle" size={23} />
          </div>
        </div>

        {/* Main contact area */}

        <div className="contact-layout">

          {/* Left: Conversation topics */}

          <div className="contact-topic-panel">
            <div className="contact-step-heading">
              <span className="contact-step-number">01</span>

              <div>
                <h2>What's on your mind?</h2>
                <p>Choose what you'd like to talk about.</p>
              </div>
            </div>

            <div className="contact-topic-list">
              {topics.map((topic) => {
                const Icon = topic.icon;
                const isSelected = selectedTopic === topic.id;

                return (
                  <button
                    key={topic.id}
                    type="button"
                    className={`contact-topic ${
                      isSelected ? "active" : ""
                    }`}
                    onClick={() => setSelectedTopic(topic.id)}
                    aria-pressed={isSelected}
                  >
                    <span className="contact-topic-icon">
                      <Icon size={19} />
                    </span>

                    <span className="contact-topic-content">
                      <strong>{topic.title}</strong>
                      <small>{topic.description}</small>
                    </span>

                    <span className="contact-topic-indicator">
                      {isSelected && <CheckCircle2 size={18} />}
                    </span>
                  </button>
                );
              })}
            </div>

            <div className="contact-side-note">
              <Sparkles size={17} />

              <p>
                Not sure where to start? That's completely fine.
                Just say hello and we'll take it from there.
              </p>
            </div>
          </div>

          {/* Right: Contact form */}

          <div className="contact-form-panel">

            <div className="contact-step-heading">
              <span className="contact-step-number">02</span>

              <div>
                <h2>Tell me a little more.</h2>
                <p>I'll be happy to hear from you.</p>
              </div>
            </div>

            <form
              className="contact-form"
              onSubmit={handleSubmit}
            >
              <div className="contact-form-row">
                <div className="contact-field">
                  <label htmlFor="contact-name">
                    YOUR NAME
                  </label>

                  <input
                    id="contact-name"
                    type="text"
                    name="name"
                    placeholder="What should I call you?"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="contact-field">
                  <label htmlFor="contact-email">
                    EMAIL ADDRESS
                  </label>

                  <input
                    id="contact-email"
                    type="email"
                    name="email"
                    placeholder="you@example.com"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <div className="contact-field">
                <label htmlFor="contact-message">
                  YOUR MESSAGE
                </label>

                <textarea
                  id="contact-message"
                  name="message"
                  placeholder="Hey Mahesh, I'd like to talk about..."
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="contact-form-footer">
                <span>
                  <span className="contact-required">*</span>
                  All fields are required
                </span>

                <button
                  type="submit"
                  className="contact-submit-btn"
                >
                  Send message
                  <Send size={16} />
                </button>
              </div>

              <p className="contact-form-note">
                Your email application will open with your message
                ready to send.
              </p>
            </form>
          </div>

        </div>

        {/* Alternative contact methods */}

        <div className="contact-alternatives">
          <div className="contact-alternatives-heading">
            <span className="contact-eyebrow">
              PREFER A DIFFERENT WAY?
            </span>

            <h2>Find me around the web.</h2>
          </div>

          <div className="contact-social-links">

            <a
              href="mailto:YOUR_EMAIL@example.com"
              className="contact-social-card"
            >
              <span className="contact-social-icon">
                <Mail size={20} />
              </span>

              <span>
                <strong>Email</strong>
                <small>Drop me a message</small>
              </span>

              <ArrowUpRight size={17} />
            </a>

            <a
              href="https://github.com/YOUR_USERNAME"
              target="_blank"
              rel="noreferrer"
              className="contact-social-card"
            >
              <span className="contact-social-icon">
                <FaGithub size={20} />
              </span>

              <span>
                <strong>GitHub</strong>
                <small>Explore what I build</small>
              </span>

              <ArrowUpRight size={17} />
            </a>

            <a
              href="https://www.linkedin.com/in/YOUR_USERNAME/"
              target="_blank"
              rel="noreferrer"
              className="contact-social-card"
            >
              <span className="contact-social-icon">
                <FaLinkedin size={20} />
              </span>

              <span>
                <strong>LinkedIn</strong>
                <small>Let's connect professionally</small>
              </span>

              <ArrowUpRight size={17} />
            </a>

          </div>
        </div>

        {/* Closing message */}

        <div className="contact-bottom">
          <span>GOOD CONVERSATIONS START SOMEWHERE.</span>
          <span className="contact-bottom-mark">MB ↗</span>
        </div>

      </div>
    </section>
  );
};

export default ContactSection;
