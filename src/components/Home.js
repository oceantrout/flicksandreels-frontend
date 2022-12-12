import "./Home.css";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

import React from "react";
function Home() {
  return (
    <div className="nav">
      <Card
        style={{
          width: "300px",
          height: "400px",
          opacity: 0.8,
          margin: "100px",
          marginLeft: "150px",
          color: "black",
          fontfamily: "Nunito",
        }}
      >
        <Card.Img
          variant="top"
          src="/img2.png"
          style={{ opacity: 1, height: "200px" }}
        />
        <Card.Body>
          <Card.Text>Click for free information</Card.Text>
          <Link to="/Popular">
            <Button variant="primary" size="lg">
              Random movie selection
            </Button>
          </Link>{" "}
        </Card.Body>
      </Card>

      <Card
        style={{
          width: "300px",
          height: "400px",
          margin: "100px",
          marginLeft: "150px",
          opacity: 0.8,
          color: "black",
          fontfamily: "Nunito",
        }}
      >
        <Card.Img
          variant="top"
          src="/img3.png"
          style={{ opacity: 1, height: "200px" }}
        />
        <Card.Body>
          <Card.Text>Registered User Only</Card.Text>
          <Link to="/Login">
            <Button variant="primary" size="lg">
              Movie title and reviews
            </Button>
          </Link>{" "}
        </Card.Body>
      </Card>
    </div>
  );
}

export default Home;
