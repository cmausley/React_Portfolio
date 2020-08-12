import React from "react";
import "./Welcome.css";

function Welcome() {

    return (
        <div>
            <div className="animate__animated animate__slideInLeft">
          <div className="jumbotron" style={{height:"320px", marginTop:"20px", backgroundColor: "#e4f9f5"}}>
            <h1 className="display-4">Welcome to Christina's Portfolio!</h1>
             <p className="lead">Scroll down for more info about Christina, or visit her Contact and Projects pages above.</p>
            <hr className="my-4"/>
            <p>Want to know more? Check out her GitHub and LinkedIn profiles below.</p>
            <a className="btn btn-primary btn-lg" style={{backgroundColor: "#30e3ca"}} href="https://github.com/cmausley" target="_blank" role="button">GitHub</a> <a className="btn btn-primary btn-lg" style={{backgroundColor: "#30e3ca"}} href="https://www.linkedin.com/in/christina-ausley/" target="_blank" role="button">LinkedIn</a>
            </div>
            </div>
            </div>
    );
}

export default Welcome;