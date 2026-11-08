import "./Navbar.css";
import { useTheme } from "../../context/useTheme";
const Navbar = () => {
  const { theme, setTheme } = useTheme();

  const navlinks = [
    { label: "Home", href: "#home" },
    { label: "Challenges", href: "#challenges" },
    { label: "Projects", href: "#projects" },
    { label: "About", href: "#about" },
  ];
  return (
    <header className="navbar">
      <a href="#home" className="navbar__brand">
        <span className="navbar__logo">&lt;MB/&gt;</span>
        <span className="navbar__brand-text">
          <span className="navbar__brand-title">DevShowcase</span>
          <span className="navbar__brand-subtitle">
            Machine Coding Portfolio
          </span>
        </span>
      </a>

      <nav className="navbar__links">
        {navlinks.map((link) => (
          <a key={link.label} href={link.href} className="navbar__link">
            {link.label}
          </a>
        ))}
      </nav>

      <div className="right-container">
        <a href="#github" className="navbar__github">
        GitHub ↗
      </a>


      <select className="theme-selecter" value={theme} onChange={(e)=>setTheme(e.target.value.trim())}>
        <option value="dark">Dark</option>
        <option value="sage">Sage</option>
        <option value="navy">Navy</option>
        <option value="burgundy">Burgundy</option>
      </select>
      </div>

    </header>
  );
};

export default Navbar;
