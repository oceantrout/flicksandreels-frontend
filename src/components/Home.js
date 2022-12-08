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
          marginLeft: "350px",
          color: "grey",
        }}
      >
        <Card.Img
          variant="top"
          src="/img2.png"
          style={{ opacity: 0.3, height: "200px" }}
        />
        <Card.Body>
          <Card.Text>
            You can view what are the most popular movie titles this week
          </Card.Text>
          <Link to="/Popular">
            <Button variant="primary" size="lg">
              Top 20 most popular movie this week
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
          color: "grey",
        }}
      >
        <Card.Img
          variant="top"
          src="/img3.png"
          style={{ opacity: 0.3, height: "200px" }}
        />
        <Card.Body>
          <Card.Text>
            You can explore the movie titles and add comment, but this function
            is only for registered users
          </Card.Text>
          <Link to="/Display">
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
