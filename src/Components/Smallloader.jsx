import React from 'react'
import "../styles/contact.css"

const Contact = () => {
  return (
    <>
    <div className=' d-grid  hh container-fluid ' style={{
    height: '50vh',
    width: '100vw',
    backgroundcolor: 'transparent'
}}>
   <div className='loader'><img className=' img' src={require("../assets/loader.png")} alt="" /></div> 
    </div>
    </>
  )
}

export default Contact