export default function ProjectDetails({ project, onBack }) {
  return (
    <section className="section-block project-details-page">
      <div className="section-card project-details-card">
        <button type="button" className="back-link" onClick={onBack}>
          Back to projects
        </button>

        <div className="project-details-heading">
          <div>
            <p className="project-path">
              ~/projects/{project.title.replace(/\s+/g, "-").toLowerCase()}
            </p>
            <h2 className="project-details-title">{project.title}</h2>
            <p className="section-copy">{project.des}</p>
          </div>
          {project.image && (
            <img
              src={project.image}
              alt={`${project.title} preview`}
              className="project-details-image"
            />
          )}
        </div>

        <div className="project-details-grid">
          <article className="project-details-block">
            <h3 className="subheading">Overview</h3>
            <p className="detail-placeholder">
              {project.overview || "halopico"}
            </p>
          </article>

          <article className="project-details-block">
            <h3 className="subheading">My role</h3>
            <p className="detail-placeholder">
              {project.role || "Add your responsibilities here..."}
            </p>
          </article>

          <article className="project-details-block">
            <h3 className="subheading">Process</h3>
            <p className="detail-placeholder">
              {project.process || "prcoessplaceholder"}
            </p>
          </article>

          <article className="project-details-block">
            <h3 className="subheading">Outcome</h3>
            <p className="detail-placeholder">
              {project.outcome ||"outcomeplaceholder"}
           </p>
          </article>
        </div>

        <div className="project-details-meta">
          <div>
            <h3 className="subheading">Stack</h3>
            <div className="stack-list compact">
              {project.stack.map((item) => (
                <span key={item} className="badge">
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div>
            <h3 className="subheading">Links</h3>
            <div className="modal-links">
              <a href={project.repo} target="_blank" rel="noreferrer">
                Repository
              </a>
              <a href={project.live} target="_blank" rel="noreferrer">
                Live project
              </a>
            </div>
          </div>
        </div>

        <div className="project-details-placeholder">
          <h3 className="subheading">Add more project media here</h3>
          <p className="detail-placeholder">
            This space is ready for screenshots, a video, a case study, or
            another preview of the work.
          </p>
        </div>
      </div>
    </section>
  );
}
