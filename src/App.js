import Drawer1 from "./Components/Drawer1"

import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Contact from "./Components/Contact";
import Home from "./Components/Home";
import Register from "./Components/Register";
import Footer from "./Components/Footer";
import { useEffect , useState } from "react";


function App() {

  const [ Loading , setLoading ] = useState(true)
   
  useEffect(()=>{

  setTimeout(()=>{setLoading(false)},3000)

 },[])




  return (

    Loading ? <Contact/> :
  
  
  <>

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
