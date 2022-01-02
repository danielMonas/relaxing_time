import React from "react";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";

import './App.css';

import Home from "./pages/home/home";
import Memes from "./pages/memes/memes";
import Videos from "./pages/videos/videos";


const App = () => (
  <Router>
    <Routes>
      <Route exact path="/" element={<Home />}> </Route>
      <Route path="/memes" element={<Memes />}> </Route>
      <Route path="/videos" element={<Videos />}> </Route>
    </Routes>
  </Router>
);

export default App;
