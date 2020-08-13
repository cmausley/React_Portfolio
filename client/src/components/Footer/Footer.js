import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

function Footer () {

    return (
        <div>
          <div></div>
          <div className="card">
            <div className="card-body">
            <h5 className="card-title">Thanks for visiting!</h5>
            <p className="card-text">Still have questions? Contact Christina below.</p>
            <Link to="/contact-page" className="btn btn-primary">
              Contact
            </Link>
        </div>
    </div>
</div>
    )
};

export default Footer;