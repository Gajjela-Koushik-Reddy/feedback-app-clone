import { createContext, useState } from "react";
import { v4 as uuid4 } from "uuid";
import data from "../data/data";

const FeedbackContext = createContext();

export const FeedbackProvider = ({ children }) => {
  // create functions and stuff

  const [feedback, setFeedback] = useState(data);

  const [feedbackEdit, setFeedbackEdit] = useState({
    item: {},
    edit: false,
  });

  const deleteFeedback = (itemId) => {
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

  const editFeedback = (item) => {
    setFeedbackEdit({
      item,
      edit: true,
    });
  };

  const updateFeedback = (id, updItem) => {
    setFeedback(
      feedback.map((item) => (item.id === id ? { ...item, ...updItem } : item))
    );
  };

  return (
    <FeedbackContext.Provider
      value={{
        feedback,
        deleteFeedback,
        addFeedback,
        feedbackEdit,
        editFeedback,
        updateFeedback,
      }}
    >
      {children}
    </FeedbackContext.Provider>
  );
};

export default FeedbackContext;
