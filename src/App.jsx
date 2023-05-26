import React from "react";
import { useState } from "react";
import Header from "./components/Header";
import { v4 as uuid4 } from "uuid";
import FeedbackStats from "./components/FeedbackStats";
import FeedbackForm from "./components/FeedbackForm";
import data from "./data/data";
import FeedbackItemList from "./components/FeedbackItemList";

const App = () => {
  const [feedback, setFeedback] = useState(data);

  const handleDeleteFeedback = (itemId) => {
    const deleteConfirmed = window.confirm(
      "Are you sure you want to delete your feedback??"
    );
    if (deleteConfirmed) {
      setFeedback(feedback.filter((item) => itemId != item.id));
    }
  };

  const addFeedback = (newFeedback) => {
    newFeedback.id = uuid4();
    setFeedback([newFeedback, ...feedback]);
  };

  return (
    <div className="container">
      <Header />
      <FeedbackForm handleAdd={addFeedback} />
      <FeedbackStats feedback={feedback} />
      <FeedbackItemList
        feedback={feedback}
        handleDelete={handleDeleteFeedback}
      />
    </div>
  );
};

export default App;
