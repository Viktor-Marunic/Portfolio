export default function ProjectModal({ project, onClose }) {
  if (!project) return null;
  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-card" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <h3>{project.title}</h3>
          <button onClick={onClose} className="modal-close">
            ✕
          </button>
        </div>
        <p className="modal-copy">{project.des}</p>
        <div className="modal-grid">
          <div>
            <h4 className="subheading">Stack</h4>
            <div className="stack-list compact">
              {(project.stack || []).map((s) => (
                <span key={s} className="badge">
                  {s}
                </span>
              ))}
            </div>
          </div>
          <div>
            <h4 className="subheading">Links</h4>
            <div className="modal-links">
              {project.repo && <a href={project.repo}>Repo</a>}
              {project.live && <a href={project.live}>Live</a>}
            </div>
          </div>
        </div>
        <div className="modal-preview-wrap">
          <h4 className="subheading">Preview</h4>
          <div className="terminal">
            {project.preview || "No preview available"}
          </div>
        </div>
      </div>
    </div>
  );
}
