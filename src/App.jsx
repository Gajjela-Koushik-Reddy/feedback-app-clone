import React from "react";
import { useState } from "react";
import Header from "./components/Header";
import { v4 as uuid4 } from "uuid";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AboutIconLink from "./components/AboutIconLink";
import AboutPage from "./pages/AboutPage";
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
    <Router>
      <Header />
      <div className="container">
        <Routes>
          <Route
            exact
            path="/"
            element={
              <>
                <FeedbackForm handleAdd={addFeedback} />
                <FeedbackStats feedback={feedback} />
                <FeedbackItemList
                  feedback={feedback}
                  handleDelete={handleDeleteFeedback}
                />
              </>
            }
          ></Route>

          <Route path="/about" element={<AboutPage />}></Route>
        </Routes>
        <AboutIconLink />
      </div>
    </Router>
  );
};

export default App;
