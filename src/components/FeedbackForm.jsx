import React from "react";
import { useState, useContext, useEffect } from "react";
import Card from "./shared/Card";
import RatingSelect from "./RatingSelect";
import Button from "./shared/Button";
import FeedbackContext from "../context/FeedbackContext";

const FeedbackForm = () => {
  const [text, setText] = useState("");
  const [message, setMessage] = useState("");
  const [rating, setRating] = useState(10);
  const [btnDisabled, setBtnDisabled] = useState(true);

  const { addFeedback, feedbackEdit, updateFeedback } =
    useContext(FeedbackContext);

  useEffect(() => {
    if (feedbackEdit.edit === true) {
      setBtnDisabled(false);
      setText(feedbackEdit.item.text);
      setRating(feedbackEdit.item.rating);
    }
  }, [feedbackEdit]);

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

    const newFeedback = {
      text,
      rating,
    };

    if (feedbackEdit.edit === true) {
      updateFeedback(feedbackEdit.item.id, newFeedback);
    } else {
      addFeedback(newFeedback);
    }

    // after submitting make the form go to default
    setText("");
    setRating(10);
    setBtnDisabled(true);
  };

  return (
    <Card>
      <form onSubmit={handleSubmit}>
        <h2>How would you like to rate your experience?</h2>
        <RatingSelect
          select={(rating) => setRating(rating)}
          selected={rating}
        />
        <div className="input-group">
          <input
            type="text"
            placeholder="Write a Review"
            onChange={handleChange}
            value={text}
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
