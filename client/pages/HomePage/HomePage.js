import React from "react";
import "./HomePage.css";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import "../../App.css"

function HomePage() {
  const isBackgroundDark = true;

  return (
    <div className="App"
      style={{
        backgroundColor: isBackgroundDark ? "#3282b8" : "light",
      }}
    >
      
    </div>
  );
}

export default HomePage;