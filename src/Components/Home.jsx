
import "../styles/home.css"
import Typewriter from 'typewriter-effect'
import Countup from "react-countup"
import { motion } from "framer-motion"


const Home = () => {


  
  return (

    <>
    <div className="container-fluid">
      <div className="row">

        <div className="col-12 col-xl-6 m-0 p-0 custom z-2 d-grid"><motion.div initial={{ opacity: 0,y:10} }whileInView={{ opacity: 1,y:0 }}transition={{ duration: 1 }} useelementscroll='true' className='d-grid z-3' >   <img fetchpriority="high"  src= {require("../assets/instgram.jpg")} alt="" className='image' /> </motion.div>   </div>
        <div className="col-12 col-xl-6 m-0 p-0 custom z-2 d-grid "> <div className="orange"></div> <h1 className='text' > <span style={{ color: 'rgb(0, 16, 100)' }}> <Typewriter options={{ autoStart: true, loop: true, delay: 80, strings: ["Want  Instagram Followers ?"] }} />   </span> <br /> <br /> <br /> You Can Get Here ,Instagram Followers At Most affordable Cost. </h1> </div>
        <div className="col-12 col-xl-6 m-0 p-0 custom z-2 d-grid order-1 order-xl-0 " > <span className='stats'><Countup enableScrollSpy={true} start={0} end={240} duration={4}   >  </Countup> + <br /> CUSTOMERS </span>   </div>
         <div className="col-12 col-xl-6 m-0 p-0 custom z-2 d-grid order-0 order-xl-1 ">  <motion.div initial={{ opacity: 0,y:10} }whileInView={{ opacity: 1,y:0 }}transition={{ duration: 1 }} useelementscroll="true" className='d-grid z-3' >  <img  loading="lazy" src={require('../assets/instgram2.jpg')} alt="" className='image' /> </motion.div>  </div> 
         {/* <div className="col-12 col-xl-6 m-0 p-0 custom z-2 d-grid order-2 order-xl-2 " >  <motion.div initial={{ opacity: 0,y:10} }whileInView={{ opacity: 1,y:0 }}transition={{ duration: 1 }} useelementscroll="true" className='d-grid z-3' >  <img loading="lazy" src={require('../assets/rishi.jpg')} alt="" className='image' /> </motion.div>    </div>
         <div className="col-12 col-xl-6 m-0 p-0 custom z-2 d-grid order-3 order-xl-3 "> <span className='stats2'> Hi I'm Rishi Fukla ,<br/> I Will Provide You <br/> <Countup enableScrollSpy={true} start={0} end={24} duration={2}   >  </Countup>   HOURS OF <br/> SERVICE <br/> Whatsapp me on - 7860316413</span>   </div>  */}


      </div>
    </div>
    </>
  )
}

export default Home