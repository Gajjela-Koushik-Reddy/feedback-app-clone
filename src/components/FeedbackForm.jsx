import React from "react";
import { useState } from "react";
import Card from "./shared/Card";
import RatingSelect from "./RatingSelect";
import Button from "./shared/Button";

const FeedbackForm = ({handleAdd}) => {
  const [text, setText] = useState("");
  const [message, setMessage] = useState("");
  const [rating, setRating] = useState(10);
  const [btnDisabled, setBtnDisabled] = useState(false);

//   const rating = (rating) => {
    // console.log(rating)
//   };

  const handleChange = (event) => {
    if (text === "") {
      setMessage(null);
      setBtnDisabled(true);
    } else if (text !== "" && text.trim().length <= 10) {
      setMessage("Text should be more than 10 characters");
      setBtnDisabled(true);
    } else {
      setMessage(null);
      setBtnDisabled(false);
    }
    setText(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    handleAdd({
        text,
        rating,
    })
  };

  return (
    <Card>
      <form onSubmit={handleSubmit}>
        <h2>How would you like to rate your experience?</h2>
        <RatingSelect select={(rating) => setRating(rating)}/>
        <div className="input-group">
          <input
            type="text"
            placeholder="Write a Review"
            onChange={handleChange}
          />
          <Button type="submit" isDisabled={btnDisabled}>
            Submit
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default FeedbackForm;
