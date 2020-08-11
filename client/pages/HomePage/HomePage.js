import React from "react";
import "./HomePage.css";
import Navbar from "../../components/Navbar/Navbar"
import Welcome from "../../components/Welcome/Welcome";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import "../../App.css"

function HomePage() {
  const isBackgroundDark = true;

  return (
    <div className="App"
      style={{
        backgroundColor: isBackgroundDark ? "#11999e" : "light",
      }}
    >
      <Navbar/>
      <Welcome/>
    </div>
  );
}

export default HomePage;