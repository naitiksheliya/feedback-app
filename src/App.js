import AboutIconLink from "./components/AboutIconLink";
import React from "react";
import Header from "./components/header";
import FeedbackList from "./components/FeedbackList";
import FeedbackStates from "./components/FeedbackStates";
import FeedbackData from "./Data/FeedbackData";
import { useState } from "react";
import Cards from "./components/shared/Cards";
import FeedbackForm from "./components/FeedbackForm";
import RatingSelect from "./components/RatingSelect";
import { v4 as uuidv4 } from "uuid";
import AboutPage from "./pages/AboutPage";
import { Link } from "react-router-dom";
import FeedbackContext, { FeedbackProvider } from "./context/FeedbackContext";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
// import PropTypes from 'prop-types'

function App() {
  // const [feedback, setFeedback] = useState(FeedbackData);
 
  return (
    <FeedbackProvider>
    <div>
      {/* <Header text="Hello World" /> */}
      {/* <Header text={true}/>   will not work */}
          <Header text={"Feedback-UI"} bgColor="red" textColor="blue" />
      <div className="container">
        {/* <h1>My App</h1> */}
        <Router>
        <Routes>
        <Route path='' element={
          <>
            {/* <FeedbackForm handleAdd={addFeedback} /> */}
            <FeedbackForm />
            {/* <FeedbackStates feedback={feedback} /> */}
            <FeedbackStates />
            {/* <FeedbackList  handleDelete={deleteFeedback} /> */}
            <FeedbackList />
            {/* <FeedbackList feedback={feedback} handleDelete={deleteFeedback} /> */}
            <AboutIconLink/>
          </>
          }
          />
          <Route path='about' element={<AboutPage />}/> 
        </Routes>
        </Router>
      </div>
    </div>
  </FeedbackProvider>
  )
}

export default App;
