import React from "react";
import { useContext } from "react";
import FeedbackContext from "../context/FeedbackContext";
import FeedbackItem from "./FeedbackItem";

const FeedbackItemList = () => {
  const { feedback } = useContext(FeedbackContext);
  return (
    <div>
      {feedback.map((item) => (
        <FeedbackItem key={item.id} item={item} />
      ))}
    </div>
  );
};

export default FeedbackItemList;
