/* eslint-disable */
import {
  BrowserRouter as Router,
  Routes,
  Route,
  BrowserRouter,
} from "react-router-dom";
import React from "react";
import Navbar from "./Navbar";
import "../css/App.css";
import Questions from "./Questions";
import Notice from "./Notice";
import Login from "./Login";
import QuestionList from "./QuestionList";
import QuestionText from "./QuestionText";

// function App() {
//   return (
//     <Router>
//       <Navbar />
//       <Routes>
//         <Route path="/" exact />
//       </Routes>
//       <Notice />
//     </Router>
//   );
// }

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" />
        <Route path="/question_list" element={<QuestionList />} />
        <Route path="/questions" element={<Questions />} />
        <Route path="/notice" element={<Notice />} />
        <Route path="/sign-up" element={<Login />} />
        <Route path="/questions/:no" element={<QuestionText />} />
      </Routes>
    </Router>
  );
}

export default App;
