import { React, useEffect, useState } from "react";
//import { useParams } from "react-router-dom";

import Button from "react-bootstrap/Button";
import "./Admin.css";

function Admin() {
  const [reviewData, setReviewData] = useState([]);

  useEffect(() => {
    const reviewUrl = `https://graceful-hoodie-deer.cyclic.app/review/find/tt1535109`;
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
      `http://localhost:3000/review/delete/tt1535109/${username}`,
      requestOptions
    )
      .then((response) => response.text())
      .then((result) => console.log(result))
      .catch((error) => console.log("error", error));
  };

  const reviewResult = reviewData.map((item, index) => {
    return (
      <tr>
        <td>{item.username}</td>
        <td>{item.heading}</td>
        <td>{item.content}</td>

        <Button onClick={handleClick(item.username)}>Delete</Button>
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
