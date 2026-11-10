
import "./FooterSection.css";

const FooterSection = () => {
  const year = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="site-footer">

      <div className="footer-container">

        <div className="footer-main">

          {/* Brand */}
          <div className="footer-brand">
            <a href="#home" className="footer-logo">
              {"<MB/>"}
            </a>

            <h3>CodeForge</h3>

            <p>
              Building UI. Solving Problems.
              <br />
              One challenge at a time.
            </p>
          </div>

          {/* Navigation */}
          <div className="footer-column">
            <h4>Explore</h4>

            <a href="#home">Home</a>
            <a href="#challenges">Challenges</a>
            <a href="#projects">Projects</a>
            <a href="#about">About</a>
          </div>

          {/* Social */}
          <div className="footer-column">
            <h4>Connect</h4>

            <a
              href="https://github.com/MaheshBikkina"
              target="_blank"
              rel="noreferrer"
            >
              GitHub ↗
            </a>

            <a
              href="https://www.linkedin.com/in/maheshbikkina3310/"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn ↗
            </a>

            <a href="mailto:maheshbikkina3310@gmail.com">
              Email ↗
            </a>
          </div>

          {/* Technologies */}
          <div className="footer-column">
            <h4>Built with</h4>

            <span>React.js</span>
            <span>JavaScript</span>
            <span>CSS3</span>
            <span>REST APIs</span>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="footer-bottom">

          <p>
            © {year} CodeForge. Crafted with curiosity.
          </p>

          <button
            className="back-to-top"
            onClick={scrollToTop}
          >
            Back to top ↑
          </button>

        </div>

      </div>

    </footer>
  );
};

export default FooterSection;
