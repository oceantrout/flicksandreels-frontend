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
          marginRight: "100px",
          marginLeft: "150px",
          marginBottom: "200px",
          color: "black",
          fontfamily: "Nunito",
        }}
      >
        <Card.Img
          variant="top"
          src="/img2.png"
          style={{ opacity: 0.8, height: "200px" }}
        />
        <Card.Body>
          <Card.Text>Latest Movie in 2022</Card.Text>
          <Link to="/Popular">
            <Button variant="primary" size="lg">
              Try for FREE
            </Button>
          </Link>{" "}
        </Card.Body>
      </Card>

      <Card
        style={{
          width: "300px",
          height: "400px",
          marginRight: "100px",
          marginLeft: "150px",
          marginBottom: "200px",
          opacity: 0.8,
          color: "black",
          fontfamily: "Nunito",
        }}
      >
        <Card.Img
          variant="top"
          src="/img3.png"
          style={{ opacity: 0.8, height: "200px" }}
        />
        <Card.Body>
          <Card.Text> Movie title and reviews</Card.Text>
          <Link to="/Login">
            <Button variant="primary" size="lg">
              Sign-in to contribute
            </Button>
          </Link>{" "}
        </Card.Body>
      </Card>
    </div>
  );
}

export default Home;
