import { useState } from "react";
import ProjectModal from "./ProjectModal";
import cphfwprj from "../assets/cphfwprj.png";
import spillcafeen from "../assets/spillcafeen.png";

const demos = [
  {
    id: 1,
    title: "CPHFW Project",
    des: "A placeholder starter project that shows layout and interaction.",
    stack: ["react", "css"],
    repo: "#",
    live: "#",
    preview: "npx run demo",
    image: cphfwprj,
  },
  {
    id: 2,
    title: "Spilcafeen Project",
    des: "A more advanced demo with API integration placeholder.",
    stack: ["react", "node"],
    repo: "#",
    live: "#",
    preview: "curl http://api.example.com",
    image: spillcafeen,
  },
  {
    id: 3,
    title: "Project Three",
    des: "A design system and component library demo placeholder.",
    stack: ["react", "storybook"],
    repo: "#",
    live: "#",
    preview: "npm run storybook",
  },
];

export default function Projects() {
  const [selected, setSelected] = useState(null);

  return (
    <section id="projects" className="section-block">
      <div className="section-stack">
        <h3 className="section-title">Projects</h3>

        <div className="project-grid">
          {demos.map((p) => (
            <article
              key={p.id}
              className="project-card"
              onClick={() => setSelected(p)}
            >
              <div className="project-path">
                ~/projects/{p.title.replace(/\s+/g, "-").toLowerCase()}
              </div>
              <div className="project-thumb" src="//.assets"><img src={p.image} alt="" /></div>
              <h4 className="project-title">{p.title}</h4>
              <p className="project-copy">{p.des}</p>
              <div className="project-footer">
                <div className="stack-list compact">
                  {p.stack.map((s) => (
                    <span key={s} className="badge">
                      {s}
                    </span>
                  ))}
                </div>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelected(p);
                  }}
                  className="details-link"
                >
                  Details
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
      <ProjectModal project={selected} onClose={() => setSelected(null)} />
    </section>
  );
}
