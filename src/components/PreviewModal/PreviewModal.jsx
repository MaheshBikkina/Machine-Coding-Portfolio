import "./PreviewModal.css"

const PreviewModal = ({setPreShow}) => {
  return (
    <div className="modal-overlay">
      <div className="preview-modal">
        <div className="modal-header">
          <div>
            <h2>Project Title</h2>
            <p>Live project Preview</p>
          </div>
          <div>
            <button onClick={()=>setPreShow(false)}>&times;</button>
            {/* <button>&times;</button>
            <button>&times;</button> */}
          </div>
        </div>

        <div className="modal-content">
            <iframe src='https://mb-expense-tracker.netlify.app/' title="Project-Title" allowFullScreen></iframe>
        </div>
      </div>
    </div>
  );
};

export default PreviewModal;
