import React from "react";
import "./Card.css";

function Card() {
  return (
    <div>
      <div className="card" style={{marginBottom: "10px"}}>
        <h5 className="card-header">Skills</h5>
        <div className="card-body">
          <h5 className="card-title">Christina has experience in the following...</h5>
          <p className="card-text">
          HTML5, CSS3, JavaScript, jQuery, Java, Bootstrap, Express.js, React.js, Node.js, Database Theory, Bookshelf.js, MongoDB, MySQL, Command Line, Git, debugging, tests.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Card;
