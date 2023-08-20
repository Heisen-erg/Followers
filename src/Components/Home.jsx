import React from 'react'
import "../styles/home.css"
import Typewriter from 'typewriter-effect'
import { Suspense } from "react"
import Countup from "react-countup"
import { motion } from "framer-motion"

const Home = () => {
  return (
    <div className="container-fluid">
      <div className="row">

        <div className="col-12 col-xl-6 m-0 p-0 custom z-2 d-grid"><motion.div initial={{ opacity: 0,y:30} }whileInView={{ opacity: 1,y:0 }}transition={{ duration: 3 }} useElementScroll={true} className='d-grid z-3' >   <img src={require('../assets/instgram3.jpg')} alt="" className='image' /> </motion.div>   </div>
        <div className="col-12 col-xl-6 m-0 p-0 custom z-2 d-grid "> <div className="orange"></div> <h1 className='text' > <span style={{ color: 'rgb(0, 16, 100)' }}> <Typewriter options={{ autoStart: true, loop: true, delay: 80, strings: ["Want  Instagram Followers ?"] }} />   </span> <br /> <br /> <br /> You Can Get Here ,Instagram Followers At Most affordable Cost. </h1> </div>
        <div className="col-12 col-xl-6 m-0 p-0 custom z-2 d-grid order-1 order-xl-0 " > <span className='stats'><Countup enableScrollSpy={true} start={0} end={240} duration={4}   > </Countup> + <br /> CUSTOMERS </span>   </div>
         <div className="col-12 col-xl-6 m-0 p-0 custom z-2 d-grid order-0 order-xl-1 ">  <motion.div initial={{ opacity: 0,y:30} }whileInView={{ opacity: 1,y:0 }}transition={{ duration: 1 }} useElementScroll={true} className='d-grid z-3' >  <img src={require('../assets/instgram2.jpg')} alt="" className='image' /> </motion.div>  </div> 


      </div>
    </div>
  )
}

export default Home