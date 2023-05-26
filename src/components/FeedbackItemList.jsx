import React from "react";
import FeedbackItem from "./FeedbackItem";

const FeedbackItemList = ({ feedback, handleDelete }) => {
  return (
    <div>
      {feedback.map((item) => (
        <FeedbackItem key = {item.id} item={item} handleDelete={handleDelete}/>
      ))}
    </div>
  );
};

export default FeedbackItemList;
