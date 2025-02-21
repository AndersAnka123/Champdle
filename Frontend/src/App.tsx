import { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import HomePage from "./Pages/Home";
import ClassicGame from "./Pages/Classic";
import QuotePage from "./Pages/Quote";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/Classic" element={<ClassicGame />} />
          <Route path="/Quote" element={<QuotePage />} />
          <Route path="/Ability" element={<ClassicGame />} />
          <Route path="/Emoji" element={<ClassicGame />} />
          <Route path="/Splash" element={<ClassicGame />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
