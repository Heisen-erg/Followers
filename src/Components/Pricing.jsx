import React, { useEffect, useState } from 'react'
import "../styles/pricing.css"
import Element from './Element'
import Contact from "../Components/Contact"
import axios from "axios"
const Pricing = () => {
const[loader,setloader]=useState(true)
const[pl,shpl]=useState([])
useEffect(() => {
   axios.get("https://rishi-server.vercel.app/plans/showplans").then((response)=>{shpl(response.data.allplans)
  setloader(false)})

  return () => {
    
  }
}, [])



  return (<div  style={{marginBottom:'50vh'}}>
    <div>
        <h1 className='text-center price'> PLANS </h1>
    </div>

    <table style={{marginTop:'7vh',fontFamily:'cursive',fontSize:'2vmax',color:'rgb(107, 43, 43)'}}>

<tr>
  <th style={{width:'25vw'}}  className='text-center'>PLAN</th>
  <th style={{width:'50vw'}} className='text-center'>DESCRIPTION</th>
  <th style={{width:'25vw'}}  className='text-center'>PRICE</th>
</tr>
 { loader? <Contact/> : pl.map((from)=>{ return(<Element  planname={from.planname}  plandescription={from.plandescription} planprice={from.planprice}  />)}) }

    </table>
    </div>
  )
}

export default Pricing