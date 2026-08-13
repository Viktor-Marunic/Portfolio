import { useState } from "react";
export default function LeftPanel() {
  const [hidden, setHidden] = useState(false);
  if (hidden) {
    return (
      <div className="panel-toggle-wrap">
        <button
          aria-label="Open panel"
          onClick={() => setHidden(false)}
          className="panel-toggle"
        >
          ▸
        </button>
      </div>
    );
  }

  return (
    <aside className="left-panel-wrap">
      <div className="left-panel-shell">
        <div className="left-panel-card">
          <div className="panel-head">
            <h4>Soft skills</h4>
            <button
              aria-label="Close panel"
              onClick={() => setHidden(true)}
              className="panel-close"
            >
              ✕
            </button>
          </div>
          <h4>hard skills</h4>
          <ul className="panel-copy">
            <li>Aarhus, Denmark</li>
            <li>+45 77 22 52 41</li>
            <li>viktormar147@gmail.com</li>
          </ul>
          <div className="panel-note">Tip: Hide the panel on mobile.</div>
        </div>
      </div>
    </aside>
  );
}
