import { React, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ShowMoreText from "react-show-more-text";
import Button from "react-bootstrap/Button";
import Form from "./Form";
//import "./Review.css";

function Review() {
  const [reviewData, setReviewData] = useState({});
  const [title, setTitle] = useState({});

  useEffect(() => {
    const titleUrl = `https://graceful-hoodie-deer.cyclic.app/title/tt1535109`;
    fetch(titleUrl)
      .then((res) => res.json())
      .then((data) => {
        console.log("API for title is successful", data);
        setTitle(data);
      });
  }, []);

  useEffect(() => {
    const reviewUrl = `https://graceful-hoodie-deer.cyclic.app/review/find/tt1535109`;
    fetch(reviewUrl)
      .then((res) => res.json())
      .then((data) => {
        console.log("API for review is successful", data);
        setReviewData(data);
      });
  }, []);

  const executeOnClick = (isExpanded) => {
    console.log(isExpanded);
  };

  const ReviewResult = () => {
    console.log("I am being rendered ", reviewData.items.length);
    return reviewData.items.map((review, index) => {
      return (
        <div>
          <h6>
            <strong>{review.username}</strong>
          </h6>
          <h6>
            <em>"{review.heading}"</em>
          </h6>
          <p>
            <ShowMoreText
              lines={3}
              more="Show more"
              less="Show less"
              className="content-css"
              anchorClass="show-more-less-clickable"
              onClick={executeOnClick}
              expanded={false}
              truncatedEndingComponent={"... "}
            >
              {review.content}
            </ShowMoreText>
          </p>
        </div>
      );
    });
  };

  const handleSubmitFromChild = async (val) => {
    console.log("This is from child " + val);
    let copyReviewData = { ...reviewData }; // Need to clone data when you want to change the state
    copyReviewData.items.push(val);
    setReviewData(copyReviewData);
    console.log(copyReviewData.items);

    // This will send a post request to update the data in the database
    await fetch("https://graceful-hoodie-deer.cyclic.app/review/update/tt1535109", {
      method: "PUT",
      body: JSON.stringify(val),
      headers: {
        "Content-Type": "application/json",
      },
    });
  };

  return (
    <>
      <h2>Movie Reviews</h2>
      <nav>
        <Link to="/">
          <Button>Home Page</Button>
        </Link>
        <Link to="/Popular">
          <Button variant="info">Popular</Button>
        </Link>
        {/* <Button variant="warning" onClick={handleSignOut}>
          Sign Out{" "}
        </Button> */}
      </nav>
      <div className="container">
        <div className="section">
          <img src={title.image} />
        </div>
        <div className="section">
          <div className="subsection">
            <h1>
              <strong>{title.title}</strong>
            </h1>
            <h5>{title.plot}</h5>
          </div>
          <div className="subsection">
            <h4>Reviews</h4>
            {reviewData?.items?.length > 0 ? <ReviewResult /> : null}
            <h4>Add a Review</h4>
            <Form onHandleSubmit={handleSubmitFromChild} />
          </div>
        </div>
      </div>
    </>
  );
}

export default Review;
