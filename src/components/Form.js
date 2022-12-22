import React, { useState } from "react";
import { useLocalStorage } from "@har4s/use-local-storage";

function Form(props) {
  const [usernameInput, setUsernameInput] = useState("");
  const [descriptionInput, setDescriptionInput] = useState("");
  const [reviewInput, setReviewInput] = useState("");
  const [uid, setUid] = useLocalStorage("UID");

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
      <form onSubmit={handleSubmit}>
        <label>Username --must have</label>
        <input
          type="text"
          placehoder={uid}
          value={usernameInput}
          onChange={handleUsernameInput}
        />
        <br />
        <label>Description</label>
        <input
          type="text"
          value={descriptionInput}
          onChange={handleDescriptionInput}
        />
        <br />
        <label>Review</label>
        <input type="text" value={reviewInput} onChange={handleReviewInput} />
        <br />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default Form;
