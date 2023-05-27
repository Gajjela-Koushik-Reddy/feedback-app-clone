import React from "react";
import Header from "./components/Header";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AboutIconLink from "./components/AboutIconLink";
import AboutPage from "./pages/AboutPage";
import FeedbackStats from "./components/FeedbackStats";
import FeedbackForm from "./components/FeedbackForm";
import FeedbackItemList from "./components/FeedbackItemList";
import { FeedbackProvider } from "./context/FeedbackContext";

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
