import React from "react";

function ResumeCard() {
  return (
    <div>
      <div className="card" style={{marginTop: "10px", marginBottom: "10px"}}>
        <h5 className="card-header">Christina's Resume</h5>
        <div className="card-body">
          <h5 className="card-title">Check out Christina's resume via the link below.</h5>
          <p className="card-text">
            Contact Christina for a formal cover letter further explaining her experience with web development. In the meantime, check out her resume below.
          </p>
          <a href="https://drive.google.com/file/d/1qznh3fDubJI06Apr15DZU1f9SOgsKPfP/view?usp=sharing" target="_blank" className="btn btn-primary">
            Resume
          </a>
        </div>
      </div>
    </div>
  );
}

export default ResumeCard;
