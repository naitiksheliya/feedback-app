import React from "react";
import Header from "./components/header";
import FeedbackList from './components/FeedbackList'
import FeedbackStates from './components/FeedbackStates'
import FeedbackData from "./Data/FeedbackData";
import { useState } from 'react'
import Cards from "./components/shared/Cards";
// import PropTypes from 'prop-types'

function App() {
  const [feedback,setFeedback]=useState(FeedbackData)
  const deleteFeedback=(id)=>{
    setFeedback(feedback.filter((item)=>(item.id)!==id))
  }
  return (
    <div>
      {/* <Header text="Hello World" /> */}
      {/* <Header text={true}/>   will not work */}
      <Header text={'hello ji!!'} bgColor='red' textColor='blue' />
      <div className="container">
        {/* <h1>My App</h1> */}
        <FeedbackStates feedback={feedback}/>
        <FeedbackList Feedback={feedback} handleDelete={deleteFeedback}/>
      </div>
    </div>
  );
}



export default App;
