
import "./Navbar.css";
import { useTheme } from "../../context/useTheme";

const Navbar = ({ activePage, setActivePage }) => {
  const { theme, setTheme } = useTheme();

  const navlinks = [
    { label: "Home", page: "home" },
    { label: "Challenges", page: "challenges" },
    { label: "Projects", page: "projects" },
    { label: "About", page: "about" },
    { label: "Contact", page: "contact" },
  ];

  return (
    <header className="navbar">
      <button
        type="button"
        className="navbar__brand"
        onClick={() => setActivePage("home")}
        aria-label="Go to Home page"
      >
        <span className="navbar__logo">&lt;MB/&gt;</span>

        <span className="navbar__brand-text">
          <span className="navbar__brand-title">DevShowcase</span>
          <span className="navbar__brand-subtitle">
            Machine Coding Portfolio
          </span>
        </span>
      </button>

      <nav className="navbar__links">
        {navlinks.map((link) => (
          <button
            key={link.page}
            type="button"
            onClick={() => setActivePage(link.page)}
            className={`navbar__link ${
              activePage === link.page ? "active" : ""
            }`}
            aria-current={activePage === link.page ? "page" : undefined}
          >
            {link.label}
          </button>
        ))}
      </nav>

      <div className="right-container">
        <a
          href="https://github.com/YOUR_USERNAME"
          className="navbar__github"
          target="_blank"
          rel="noreferrer"
        >
          GitHub ↗
        </a>

        <select
          className="theme-selecter"
          value={theme}
          onChange={(e) => setTheme(e.target.value)}
          aria-label="Select theme"
        >
          <option value="dark">Dark</option>
          <option value="orange">Orange</option>
          <option value="sage">Sage</option>
          <option value="navy">Navy</option>
          <option value="burgundy">Burgundy</option>
          <option value="outfit">Outfit</option>
        </select>
      </div>
    </header>
  );
};

export default Navbar;
