import "./PreviewModal.css"

const PreviewModal = ({setPreShow, project}) => {
  return (
    <div className="modal-overlay">
      <div className="preview-modal">
        <div className="modal-header">
          <div>
            <h2>{project.title}</h2>
            <p>{`Live ${project.title} preview`}</p>
          </div>
          <div>
            <button onClick={()=>setPreShow(false)}>&times;</button>
            {/* <button>&times;</button>
            <button>&times;</button> */}
          </div>
        </div>

        <div className="modal-content">
            <iframe src={project.demoUrl} title="Project-Title" allowFullScreen></iframe>
        </div>
      </div>
    </div>
  );
};

export default PreviewModal;
