import {
  SiReact,
  SiJavascript,
  SiFigma,
  SiDavinciresolve,
  SiPython,
  SiDocker,
  SiWoocommerce,
  SiGithub,
  SiGitforwindows,
  SiGithubcopilot,
} from "react-icons/si";
import { FaCss3Alt, FaPalette } from "react-icons/fa";

export default function About() {
  return (
    <section id="about" className="section-block">
      <div className="section-card">
        <h3 className="section-title">About</h3>
        <p className="section-copy">tu dam rychle bio nejake</p>

        <div className="section-grid">
          <div>
            <h4 className="subheading">Skills</h4>
            <ul className="skill-list">
              <Skill
                name="UX"
                pct={85}
                label="Growing through practical projects"
              />
              <Skill
                name="UI"
                pct={90}
                label="Strong visual design foundation"
              />
              <Skill
                name="Research"
                pct={88}
                label="User-focused research experience"
              />
            </ul>
          </div>
          <div>
            <h4 className="subheading">Education</h4>
            <ul className="skill-list">
              <Skill
                name="Business Academy Aarhus - Multimedia Design"
                pct={65}
                label="2025-Present"
              />
            </ul>
          </div>
        </div>

        <div className="stack-block">
          <h4 className="subheading">Tools & Stack</h4>
          <div className="tool-grid">
            <ToolCard icon={SiFigma} label="Figma" />
            <ToolCard icon={FaPalette} label="Adobe Design" />
            <ToolCard icon={FaCss3Alt} label="CSS" />
            <ToolCard icon={SiReact} label="React" />
            <ToolCard icon={SiJavascript} label="JavaScript" />
            <ToolCard icon={SiGithub} label="Github" />
            <ToolCard icon={SiGitforwindows} label="Git" />
            <ToolCard icon={SiGithubcopilot} label="Copilot" />
            <ToolCard icon={SiPython} label="Python" />
            <ToolCard icon={SiDocker} label="Docker" />
            <ToolCard icon={SiWoocommerce} label="Woocommerce" />
            <ToolCard icon={SiDavinciresolve} label="Davinci Resolve" />
          </div>
        </div>
      </div>
    </section>
  );
}

function Skill({ name, pct, label }) {
  return (
    <li className="skill-item">
      <div className="skill-meta">
        <span>{name}</span>
        <span>{label}</span>
      </div>
      <div className="progress">
        <div className="progress-bar" style={{ width: pct + "%" }} />
      </div>
    </li>
  );
}

function ToolCard({ icon: Icon, label }) {
  return (
    <div className="tool-card">
      <Icon className="tool-icon" />
      <p className="tool-label">{label}</p>
    </div>
  );
}
