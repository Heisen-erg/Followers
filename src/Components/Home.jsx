import React from 'react'
import "../styles/home.css"
import Typewriter from 'typewriter-effect'

const Home = () => {
  return (
   <div className="container-fluid">
    <div className="row">
      
   <div className="col-12 col-xl-6 m-0 p-0 custom z-2 d-grid"> <img src={require('../assets/instgram.jpg')} alt="" className='image' /> </div>
        <div className="col-12 col-xl-6 m-0 p-0 custom z-2 d-grid"> <h1 className='text' > <span style={{color:'rgb(0, 16, 100)'}}> <Typewriter options={{autoStart:true,loop:true,delay:80,strings:["Want More Instagram Followers ?"]}}/>   </span> <br /> <br/> <br/> You Can Get Here Instagram Followers At Most affordable Cost. </h1> </div>
       
   
    </div>
   </div>
  )
}

export default Home