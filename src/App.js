import React from "react"

import Drawer1 from "./Components/Drawer1"

import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Contact from "./Components/Contact"
import Adminpass from "./Components/Adminpass"

import Footer from "./Components/Footer";
import { Suspense} from "react"; 
// ,useState,useEffect
import Pricing from "./Components/Pricing"
 
const Home = React.lazy(()=> import("./Components/Home"));
const Register = React.lazy(()=> import("./Components/Register"));



function App() {

//   const [ Loading , setLoading ] = useState(true)
   
//   useEffect(()=>{

//   setTimeout(()=>{setLoading(false)},3000)

//  },[])




  return (

    // Loading ? <Contact/> :
  
  
  <>

    <Router>
      <Drawer1 />
      
      <Routes>
        
      <Route path="/" element={ <Suspense fallback={<Contact/>}><Home /> </Suspense>} />
      
        <Route path="/Contact" element={<Suspense fallback={<Contact/>}><Contact /></Suspense>} />
        <Route path="/register" element={<Suspense fallback={<Contact/>}><Register /></Suspense>} />
        <Route path="/admin" element={<Suspense fallback={<Contact/>}><Adminpass /></Suspense>}/>
        <Route path="/pricing" element={<Suspense fallback={<Contact/>}><Pricing/></Suspense>}/>
    
      </Routes>
     <Footer/>
    </Router>

  </>
  );
}

export default App;
