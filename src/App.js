import Drawer1 from "./Components/Drawer1"
import React from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Contact from "./Components/Contact";
import Home from "./Components/Home";

function App() {
  return (<>

    <Router>
      <Drawer1 />
      <Routes>
      <Route path="/" element={<Home />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes>
    </Router>

  </>
  );
}

export default App;
