import React from "react";

function ProjectCard (props) {

  return (
    <div className="animate__animated animate__fadeInUp">
      <div className="card" style={{height: "500px", marginTop: "10px", marginBottom: "10px", border: "10px solid #30e3ca", backgroundColor: "#e4f9f5"}}>
        <img
          className="card-img-top" 
          src={props.projectimage}
          alt={props.imagedescription}
        />
        <div className="card-body">
          <h5 className="card-title">{props.projecttitle}</h5>
          <p className="card-text">{props.projectdescription}</p>
        </div>
        <div className="card-body">
          <a href={props.link1} target="_blank" className="card-link">
            Project
          </a>
          <a href={props.link2} target="_blank" className="card-link">
            Deployed App
          </a>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
