import { SiReact, SiJavascript, SiGit, SiFigma } from "react-icons/si";
import { FaCss3Alt, FaPalette } from "react-icons/fa";

export default function About() {
  return (
    <section id="about" className="section-block">
      <div className="section-card">
        <h3 className="section-title">About</h3>
        <p className="section-copy">
          tu dam rychle bio nejake
        </p>

        <div className="section-grid">
          <div>
            <h4 className="subheading">Skills</h4>
            <ul className="skill-list">
              <Skill name="UX" pct={85} />
              <Skill name="UI" pct={90} />
              <Skill name="Research" pct={88} />
            </ul>
          </div>
           <div>
            <h4 className="subheading">Education</h4>
            <ul className="skill-list">
              <Skill name="Business Academy Aarhus - Multimedia Design" pct={55} />
            </ul>
          </div>
        </div>

        <div className="stack-block">
          <h4 className="subheading">Tools & Stack</h4>
          <div className="tool-grid">
            <ToolCard icon={SiFigma} label="Figma" pct={86} />
            <ToolCard icon={FaPalette} label="Adobe Design" pct={85} />
            <ToolCard icon={FaCss3Alt} label="CSS" pct={88} />
            <ToolCard icon={SiReact} label="React" pct={90} />
            <ToolCard icon={SiJavascript} label="JavaScript" pct={85} />
            <ToolCard icon={SiGit} label="Github" pct={80} />
          </div>
        </div>
      </div>
    </section>
  );
}

function Skill({ name, pct }) {
  return (
    <li className="skill-item">
      <div className="skill-meta">
        <span>{name}</span>
        <span>{pct}%</span>
      </div>
      <div className="progress">
        <div className="progress-bar" style={{ width: pct + "%" }} />
      </div>
    </li>
  );
}

function ToolCard({ icon: Icon, label, pct }) {
  return (
    <div className="tool-card">
      <Icon className="tool-icon" />
      <p className="tool-label">{label}</p>
      <p className="tool-pct">{pct}%</p>
    </div>
  );
}
