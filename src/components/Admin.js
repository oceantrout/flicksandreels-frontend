import { React, useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import Button from "react-bootstrap/Button";
import "./Admin.css";

function Admin() {
  const [reviewData, setReviewData] = useState([]);
  const params = useParams();
  let movieID = params.movieId;
  console.log("movieID from Admin params", movieID);
  useEffect(() => {
    const reviewUrl = `https://graceful-hoodie-deer.cyclic.app/review/find/${movieID}`;
    fetch(reviewUrl)
      .then((res) => res.json())
      .then((Data) => {
        console.log("API for review admin is successful", Data);
        setReviewData(Data.items);
      });
  }, []);

  const handleClick = async (username) => {
    console.log(username);
    var requestOptions = {
      method: "DELETE",
      redirect: "follow",
    };

    fetch(
      `https://graceful-hoodie-deer.cyclic.app/review/delete/${movieID}/${username}`,
      requestOptions
    )
      .then((response) => response.text())
      .then((result) => {
        console.log(result);
        alert("user review is deleted");
        window.location.reload(false);
      })
      .catch((error) => console.log("error", error));
  };

  const reviewResult = reviewData.map((item, index) => {
    return (
      <tr>
        <td>{item.username}</td>
        <td>{item.heading}</td>
        <td>{item.content}</td>

        <Button
          size="sm"
          onClick={() => {
            handleClick(item.username);
          }}
        >
          Delete
        </Button>
      </tr>
    );
  });

  return (
    <table>
      <tr>
        <th>User Name</th>
        <th>Heading </th>
        <th>Contents</th>
      </tr>
      {reviewResult}
    </table>
  );
}

export default Admin;
