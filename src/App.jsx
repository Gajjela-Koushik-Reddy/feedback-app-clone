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
import { FeedbackProvider } from "./context/FeedbackContext";
import { useContext } from "react";

const App = () => {

  return (
    <FeedbackProvider>
      <Router>
        <Header />
        <div className="container">
          <Routes>
            <Route
              exact
              path="/"
              element={
                <>
                  <FeedbackForm />
                  <FeedbackStats />
                  <FeedbackItemList />
                </>
              }
            ></Route>

            <Route path="/about" element={<AboutPage />}></Route>
          </Routes>
          <AboutIconLink />
        </div>
      </Router>
    </FeedbackProvider>
  );
};

export default App;
