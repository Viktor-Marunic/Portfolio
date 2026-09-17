export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <div>© {new Date().getFullYear()} Viktor Marunic</div>
        <div className="footer-links">
          <a href="https://github.com/Viktor-Marunic">GitHub</a>
          <a href="https://www.linkedin.com/in/viktor-maruni%C4%8D-b03924364/">LinkedIn</a>
          <a href="#">Resume</a>
        </div>
      </div>
    </footer>
  );
}
