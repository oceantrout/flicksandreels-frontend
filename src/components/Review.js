import { React, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ShowMoreText from "react-show-more-text";
import { useLocalStorage } from "@har4s/use-local-storage";
import { useParams } from "react-router-dom";
import { useHistory } from "react-router-dom";

import Button from "react-bootstrap/Button";
import Form from "./ReviewForm";
import "./Review.css";

function Review() {
  const [reviewData, setReviewData] = useState({});
  const [title, setTitle] = useState({});
  const [uid, setUid] = useLocalStorage("UID");
  const params = useParams();
  let history = useHistory();
  let clientTime = new Date().toLocaleString();

  console.log(params);
  const movieID = params.movieId;
  console.log("The movie ID is ", movieID);
  useEffect(() => {
    const titleUrl = `https://graceful-hoodie-deer.cyclic.app/title/${movieID}`;
    console.log(titleUrl);
    fetch(titleUrl)
      .then((res) => res.json())
      .then((data) => {
        console.log("API for title is successful", data);
        setTitle(data);
      });
  }, []);

  useEffect(() => {
    const reviewUrl = `https://graceful-hoodie-deer.cyclic.app/review/find/${movieID}`;
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
              <br></br>
              <a>Date: </a>
              {review.date}
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

    // This will send a post request to update the data in the database
    await fetch(
      `https://graceful-hoodie-deer.cyclic.app/review/update/${movieID}`,
      {
        method: "PUT",
        body: JSON.stringify(val),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    //   var myHeaders = new Headers();
    //   myHeaders.append("Content-Type", "application/json");

    //   var raw = JSON.stringify({
    //     username: val.username,
    //     userUrl: reviewData.items[0].userUrl,
    //     reviewLink: reviewData.items[0].reviewLink,
    //     warningSpoilers: reviewData.items[0].warningSpoilers,
    //     date: clientTime,
    //     rate: reviewData.items[0].rate,
    //     helpful: reviewData.items[0].helpful,
    //     heading: val.heading,
    //     content: val.content,
    //   });

    //   var requestOptions = {
    //     method: "PUT",
    //     headers: myHeaders,
    //     body: raw,
    //     redirect: "follow",
    //   };

    //   await fetch(
    //     `https://graceful-hoodie-deer.cyclic.app/review/update/${movieID}`,
    //     requestOptions
    //   )
    //     .then((response) => response.text())
    //     .then((result) => console.log(result))
    //     .catch((error) => console.log("error", error));
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
        <Button
          onClick={() => {
            if (uid === "banana@gmail.com") {
              history.push(`/${movieID}/Admin`);
            } else {
              alert("You don't have admin access");
              return;
            }
          }}
          variant="danger"
        >
          Admin Access
        </Button>
        {/* <Button variant="warning" onClick={handleSignOut}>
          Sign Out{" "}
        </Button> */}
      </nav>
      <br></br>
      <span>
        Currentl logged user: {uid}, {clientTime}
      </span>
      <br></br>
      <div className="container">
        <div className="section">
          <img className="review-img" src={title.image} alt="not loaded" />
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
