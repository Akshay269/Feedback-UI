// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { useState } from "react";
import Header from "./components/Header";
import FeedbackList from "./components/FeedbackList";
import FeedbackData from "./data/FeedbackData";

function App() {
  const [feedback, setFeedback] = useState(FeedbackData);

  return (
    <>
      <Header />
      <div className="container">
        {/* <h1>My App</h1> */}
        <FeedbackList feedback={feedback}/>
      </div>
    </>
  )
}
export default App;
