import Drawer1 from "./Components/Drawer1"

import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Contact from "./Components/Contact";
import Home from "./Components/Home";
import Register from "./Components/Register";
import Footer from "./Components/Footer";


function App() {
  return (<>

    <Router>
      <Drawer1 />
      
      <Routes>
      <Route path="/" element={<Home />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/register" element={<Register />} />
      </Routes>
     <Footer/>
    </Router>

  </>
  );
}

export default App;
