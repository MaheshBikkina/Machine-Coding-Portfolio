
import { useEffect } from "react";
import { X } from "lucide-react";
import "./PreviewModal.css";

const PreviewModal = ({ setPreShow, project }) => {
  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === "Escape") {
        setPreShow(false);
      }
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleEscape);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleEscape);
    };
  }, [setPreShow]);

  return (
    <div
      className="modal-overlay"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) {
          setPreShow(false);
        }
      }}
    >
      <div
        className="preview-modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="preview-title"
      >
        <div className="modal-header">
          <div className="modal-heading">
            <h2 id="preview-title">{project.title}</h2>
            <p>Live {project.title} preview</p>
          </div>

          <button
            className="modal-close"
            onClick={() => setPreShow(false)}
            aria-label="Close preview"
            type="button"
          >
            <X size={21} />
          </button>
        </div>

        <div className="modal-content">
          <iframe
            src={project.demoUrl}
            title={`${project.title} live preview`}
            allowFullScreen
          />
        </div>
      </div>
    </div>
  );
};

export default PreviewModal;
