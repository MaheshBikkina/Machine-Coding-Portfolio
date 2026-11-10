
import { useEffect, useRef, useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { useTheme } from "../../context/useTheme";
import "./Navbar.css";

const Navbar = ({ activePage, setActivePage }) => {
  const { theme, setTheme } = useTheme();
  const [menuOpen, setMenuOpen] = useState(false);
  const navbarRef = useRef(null);

  const navlinks = [
  { label: "Home", page: "home" },
  { label: "About", page: "about" },
  { label: "Challenges", page: "challenges" },
  { label: "Projects", page: "projects" },
  { label: "Contact", page: "contact" },
];

  const handleNavigation = (page) => {
    setActivePage(page);
    setMenuOpen(false);
  };

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (
        navbarRef.current &&
        !navbarRef.current.contains(event.target)
      ) {
        setMenuOpen(false);
      }
    };

    const handleEscape = (event) => {
      if (event.key === "Escape") {
        setMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);
    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
      document.removeEventListener("keydown", handleEscape);
    };
  }, []);

  // Close menu when switching to desktop width
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 900) {
        setMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <header className="navbar" ref={navbarRef}>
      {/* Brand */}

      <button
        type="button"
        className="navbar__brand"
        onClick={() => handleNavigation("home")}
        aria-label="Go to Home page"
      >
        <span className="navbar__logo">&lt;MB/&gt;</span>

        <span className="navbar__brand-text">
          <span className="navbar__brand-title">CodeForge</span>
          <span className="navbar__brand-subtitle">
            Machine Coding Portfolio
          </span>
        </span>
      </button>

      {/* Desktop navigation */}

      <nav className="navbar__links" aria-label="Main navigation">
        {navlinks.map((link) => (
          <button
            key={link.page}
            type="button"
            onClick={() => handleNavigation(link.page)}
            className={`navbar__link ${
              activePage === link.page ? "active" : ""
            }`}
            aria-current={
              activePage === link.page ? "page" : undefined
            }
          >
            {link.label}
          </button>
        ))}
      </nav>

      {/* Desktop actions */}

      <div className="right-container">
        <a
          href="https://github.com/YOUR_USERNAME"
          className="navbar__github"
          target="_blank"
          rel="noreferrer"
        >
          GitHub ↗
        </a>

        <div className="theme-select-wrapper">
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

          <ChevronDown size={15} />
        </div>
      </div>

      {/* Mobile menu button */}

      <button
        type="button"
        className="navbar__menu-toggle"
        onClick={() => setMenuOpen((previous) => !previous)}
        aria-label={
          menuOpen ? "Close navigation menu" : "Open navigation menu"
        }
        aria-expanded={menuOpen}
        aria-controls="mobile-navigation"
      >
        {menuOpen ? <X size={23} /> : <Menu size={23} />}
      </button>

      {/* Mobile dropdown */}

      <div
        id="mobile-navigation"
        className={`navbar__mobile-menu ${
          menuOpen ? "is-open" : ""
        }`}
        aria-hidden={!menuOpen}
        inert={!menuOpen}
      >
        <nav className="navbar__mobile-links" aria-label="Mobile navigation">
          {navlinks.map((link) => (
            <button
              key={link.page}
              type="button"
              onClick={() => handleNavigation(link.page)}
              className={`navbar__mobile-link ${
                activePage === link.page ? "active" : ""
              }`}
              aria-current={
                activePage === link.page ? "page" : undefined
              }
              tabIndex={menuOpen ? 0 : -1}
            >
              {link.label}

              {activePage === link.page && (
                <span className="navbar__mobile-active-dot" />
              )}
            </button>
          ))}
        </nav>

        <div className="navbar__mobile-actions">
          <a
            href="https://github.com/YOUR_USERNAME"
            className="navbar__github"
            target="_blank"
            rel="noreferrer"
            tabIndex={menuOpen ? 0 : -1}
          >
            GitHub ↗
          </a>

          <div className="theme-select-wrapper">
            <select
              className="theme-selecter"
              value={theme}
              onChange={(e) => setTheme(e.target.value)}
              aria-label="Select theme"
              tabIndex={menuOpen ? 0 : -1}
            >
              <option value="dark">Dark</option>
              <option value="orange">Orange</option>
              <option value="sage">Sage</option>
              <option value="navy">Navy</option>
              <option value="burgundy">Burgundy</option>
              <option value="outfit">Outfit</option>
            </select>

            <ChevronDown size={15} />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
