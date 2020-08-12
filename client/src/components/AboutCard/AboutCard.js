import React from "react";
import "./AboutCard.css";

function AboutCard (props) {
  return (
    <div className="animate__animated animate__fadeInUp">
      <div
        className="card"
        style={{ minHeight: "450px", marginBottom: "30px", backgroundColor: "#e4f9f5"}}
      >
        <img
          src={props.image}
          className="card-img-top" style={{maxHeight: "250px"}}
          alt={props.idescription}
        />
        <div className="card-body">
          <p className="card-text">{props.cardtext}</p>
        </div>
      </div>
    </div>
  );
}

export default AboutCard;
