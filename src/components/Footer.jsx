export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <div>© {new Date().getFullYear()} Viktor Marunic</div>
        <div className="footer-links">
          <a href="#">GitHub</a>
          <a href="#">LinkedIn</a>
          <a href="#">Resume</a>
        </div>
      </div>
    </footer>
  );
}
