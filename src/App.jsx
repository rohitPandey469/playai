import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import PlayAI from "./components/PlayAI";
import Navbar from "./components/Navbar"; // Import the Navbar
import MickeyVoice from "./components/MickeyVoice";
import PeterGriffinVoice from "./components/PeterGriffinVoice";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<PlayAI />} />
        <Route path="/mickey-voice" element={<MickeyVoice />} />
        <Route path="/peter-voice" element={<PeterGriffinVoice />} />
      </Routes>
    </Router>
  );
};

export default App;
