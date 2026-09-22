export default function Header({ onNavigate, activeView }) {
  function handleNavigation(event, view) {
    if (view === "contact") {
      event.preventDefault();
    }
    onNavigate(view);
  }

  return (
    <header className="site-header">
      <div className="header-inner">
        <h1 className="brand">
          <span className="brand-mark">&lt;dev&gt;</span>
          <span className="brand-name">Viktor(Marunic)</span>
        </h1>
        <nav className="top-nav">
          <a
            href="#about"
            onClick={(event) => handleNavigation(event, "home")}
            className={activeView === "home" ? "active" : ""}
          >
            About
          </a>
          <a
            href="#projects"
            onClick={(event) => handleNavigation(event, "home")}
          >
            Projects
          </a>
          <a
            href="#contact"
            onClick={(event) => handleNavigation(event, "contact")}
            className={`nav-contact ${activeView === "contact" ? "active" : ""}`}
          >
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
}
