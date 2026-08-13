

export default function Header() {
  return (
    <header className="site-header">
      <div className="header-inner">
        <h1 className="brand">
          <span className="brand-mark">&lt;dev&gt;</span>
          <span className="brand-name">Viktor(Marunic)</span>
        </h1>
        <nav className="top-nav">
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </nav>
      </div>
    </header>
  );
}
