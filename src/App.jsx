import React from "react";
import { useState } from "react";
import Header from "./components/Header";
import FeedbackStats from "./components/FeedbackStats";
import data from "./data/data";
import FeedbackItemList from "./components/FeedbackItemList";

const App = () => {
  const [feedback, setFeedback] = useState(data);

  const handleDeleteFeedback = (itemId) => {
    const deleteConfirmed = window.confirm(
      "Are you sure you want to delete your feedback??"
    );
    if (deleteConfirmed) {
      setFeedback(feedback.filter((item) => itemId != item.id))
    }
  };

  return (
    <div className="container">
      <Header />
      <FeedbackStats feedback={feedback} />
      <FeedbackItemList feedback={feedback} handleDelete={handleDeleteFeedback} />
    </div>
  );
};

export default App;
