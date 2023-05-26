import React from "react";

const FeedbackStats = ({ feedback }) => {
  let average =
    feedback.reduce(
      (accumulator, currentValue) => (accumulator += currentValue.rating),
      0
    ) / feedback.length;

  average = average.toFixed(1).replace(/\.0+$/, "");

  return (
    <div className="feedback-stats">
      <h4>{feedback.length} Reviews</h4>
      <h4>Average Rating: {average}</h4>
    </div>
  );
};

export default FeedbackStats;
