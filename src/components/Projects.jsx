import cphfwprj from "../assets/cphfwprj.png";
import blasolmain from "../assets/blasolmain2.png";

const demos = [
  {
    id: 1,
    title: "CPHFW Project",
    des: "One of the first project to practice reasearch, design and coding skills",
    stack: ["html", "css", "figma"],
    repo: "https://github.com/Viktor-Marunic/CPHFW_project",
    live: "https://viktor-marunic.github.io/CPHFW_project/",
    image: cphfwprj,
    overview:
      "A fully responsive web project built from scratch with clean semantic HTML and modern CSS. Developed with a strong focus on clean architecture, visual hierarchy, and user-centered design principles.",
    role: "Handled the complete end-to-end product lifecycle, including user and competitor research, UI/UX wireframing and prototyping in Figma, and frontend development using HTML and CSS.",
    process:
      "Started with comprehensive user and market research to define the core requirements. Translated insights into low- and high-fidelity wireframes and design mockups in Figma, followed by translating the final design into semantic, accessible HTML and responsive CSS layouts.",
    outcome:
      "Delivered a polished, performant website with a seamless user experience, bridging the gap between thoughtful design and clean code execution.",
  },
  {
    id: 2,
    title: "Bla Sol Project",
    des: "Website designed for festival with interactive map that has live location",
    stack: ["react", "css", "javascript", "figma"],
    repo: "https://github.com/MichalRadovanHresko/BlueSunFestivalWebApp",
    live: "#",
    image: blasolmain,
    overview:
      "A responsive festival website designed to help visitors explore the event, discover performances, and navigate the venue with an interactive live map.",
    role: "Handled the research, UX structure, visual design, and frontend development. Focused on making the festival schedule and location information easy to understand on both desktop and mobile.",
    process:
      "Started by organizing the festival content and identifying the key visitor journeys. Designed the interface and map experience in Figma, then built the responsive React implementation with reusable components, clear navigation, and live-location interactions.",
    outcome:
      "Created an engaging festival experience that combines event discovery with practical wayfinding, helping visitors find stages, activities, and their current location more easily.",
  },
  /*
  {
    id: 3,
    title: "Project Three",
    des: "A design system and component library demo placeholder.",
    stack: ["react", "storybook"],
    repo: "#",
    live: "#",
    preview: "npm run storybook",
    overview: "",
    role: "",
    process: "",
    outcome: "",
  },
  */
];

export default function Projects({ onSelectProject }) {
  return (
    <section id="projects" className="section-block projects-section">
      <div className="section-stack">
        <h3 className="section-title">Projects</h3>

        <div className="project-grid">
          {demos.map((p) => (
            <article
              key={p.id}
              className="project-card"
              onClick={() => onSelectProject(p)}
              role="button"
              tabIndex="0"
              onKeyDown={(event) => {
                if (event.key === "Enter" || event.key === " ") {
                  event.preventDefault();
                  onSelectProject(p);
                }
              }}
            >
              <div className="project-path">
                ~/projects/{p.title.replace(/\s+/g, "-").toLowerCase()}
              </div>
              <div className="project-thumb" src="//.assets">
                <img src={p.image} alt="" />
              </div>
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
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
