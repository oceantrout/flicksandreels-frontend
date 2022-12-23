import React, { useState } from "react";
import { useLocalStorage } from "@har4s/use-local-storage";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function ReviewForm(props) {
  const [usernameInput, setUsernameInput] = useState("");
  const [descriptionInput, setDescriptionInput] = useState("");
  const [reviewInput, setReviewInput] = useState("");
  const [uid, setUid] = useLocalStorage("UID");
  let clientTime = new Date().toUTCString();
  let newClientTime = clientTime.split(' ').slice(1,4).join(' ');

  const handleUsernameInput = (event) => {
    setUsernameInput(event.target.value);
  };

  const handleDescriptionInput = (event) => {
    setDescriptionInput(event.target.value);
  };

  const handleReviewInput = (event) => {
    setReviewInput(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const val = {
      username: usernameInput,
      heading: descriptionInput,
      date: newClientTime,
      content: reviewInput,
    }; // Getting the value from the state
    console.log("STATE: formInput:", val);
    props.onHandleSubmit(val);
    setUsernameInput("");
    setDescriptionInput("");
    setReviewInput("");
  };

  return (
    <div>
      <Form>
        <Form.Group className="mb-3" controlId="username">
          <Form.Label>Username*</Form.Label>
          <Form.Control
            type="username"
            placeholder={uid}
            value={usernameInput}
            onChange={handleUsernameInput}
          />
          <Form.Text className="text-muted">
            <em>*required</em>
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="description">
          <Form.Label>Description</Form.Label>
            <Form.Control
              type="description"
              value={descriptionInput}
              onChange={handleDescriptionInput}
            />
        </Form.Group>
        <Form.Group className="mb-3" controlId="review">
          <Form.Label>Review</Form.Label>
          <Form.Control
            type="review" 
            value={reviewInput} 
            onChange={handleReviewInput} 
            />
          <Button onClick={handleSubmit}>Submit</Button>
        </Form.Group>
      </Form>
    </div>
  );
}

export default ReviewForm;
