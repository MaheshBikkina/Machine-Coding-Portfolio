import "./Navbar.css";

const Navbar = () => {
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

      <a href="#github" className="navbar__github">
        GitHub ↗
      </a>
    </header>
  );
};

export default Navbar;
