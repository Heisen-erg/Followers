import React, { useEffect, useState } from 'react'
import "../styles/register.css"
import axios from 'axios'
import { useToast } from "@chakra-ui/react"
import Contact from './Contact'
import Usertable from './Usertable'
import Smallloader from "./Smallloader"
const Change = () => {
const toast = useToast()

const[user,setuser]=useState({})
const[user2,setuser2]=useState()
const[loader,setloader]=useState(true)
const[userdata,setuserdata]=useState([])
const[buttonloader,setbuttonloader]=useState(false)


useEffect(() => {
  axios.get("https://rishi-server.vercel.app/getallusers").then(
    (response)=>{
    console.log(response.data.allusers)
      setuserdata(response.data.allusers) 
      setloader(false)
    }
  )
  

  return () => {
   
  }
}, [])

useEffect(()=>{


  window.scrollTo({top: 0, left: 0, behavior: 'smooth'});

},[buttonloader])


const HandleSubmit = async (e)=>{
  e.preventDefault()
 
  if( !user.planname || !user.plandescription ||  !user.planprice ){return toast({title:"All Details Must Be Filled",status:'error',position:"top"})}
else{
  setbuttonloader(true)
 
await axios.post("https://rishi-server.vercel.app/plans/addplans",user).then((response)=>{
  setuser({})
setbuttonloader(false)
 return  toast({title:"Successfully Added The Plan", description: response.data.message,status: 'success',duration: 2000, isClosable: true,position:'top'}) ;   
     
    })}
    
  
}

const HandleSubmit2 = async (e)=>{
  e.preventDefault()
  setbuttonloader(true)
   await axios.delete(`https://rishi-server.vercel.app/plans/removeplans?drop=${user2}`).then((response)=>{  
   
   setbuttonloader(false) 
   return toast({title:'Changes Will Take Effect In 5 Seconds' , description:response.data.message, status: 'success',
     duration: 2000,
      isClosable: true,
      position:'top'})
    
     
//  if(response.data.message=="Success"){ toast({
//    title:"Successfully Deleted The Plan",
//     description: response.data.message,
//     status: 'success',
//     duration: 2000,
//     isClosable: true,
//     position:'top'
//   })}
//   else{toast({
//     title:"No plans",
//      description: response.data.error,
//      status: 'error',
//      duration: 2000,
//      isClosable: true,
//      position:'top'
//    })

//   }
 })


  }





  return ( buttonloader?  ( <Contact/>) :  <> <div style={{height:'10vh',marginTop:'5vh'}}>
<h1 style={{fontFamily:'dancing',fontSize:'35px',color:'grey'}} className='text-center'>WELCOME ADMIN RISHI SHUKLA !</h1>
</div>

<div className="container-fluid" style={{marginTop:'15vh'}}>
      <div className="row d-grid tt">
        <div className="col-12 form "><p className='mt-2 text-center'>Fill In The Details of Plan That You Want To Add In Pricing Section</p>
          <form className='d-grid' onSubmit={HandleSubmit} >
            <h6 className='mt-3 ' >PLAN-NAME</h6>
            <input type="text"  id='Value1' style={{ color: 'black', width: '70%', border: '1px solid blue', borderRadius: '5px', backgroundColor: 'rgb(200,200,200.5)',height:'50px' }} onChange={(e)=>{setuser({...user,planname:e.target.value})} }/>
            <h6 className='mt-3 ' >PLAN-DESCRIPTION</h6>
            <input type="text" id='Value2' style={{ color: 'black', width: '70%', border: '1px solid blue', borderRadius: '5px', backgroundColor: 'rgb(200,200,200.5)',height:'50px' }} onChange={(e)=>{setuser({...user,plandescription:e.target.value})}} />
            <h6 className='mt-3 ' >PLAN-PRICE</h6>
            <input type="text" id='Value3' style={{ color: 'black', width: '70%', border: '1px solid blue', borderRadius: '5px', backgroundColor: 'rgb(200,200,200.5)',height:'50px' }} onChange={(e)=>{setuser({...user,planprice:e.target.value})}} />
        
            {/* { buttonloader?  <button className='mt-3  butt ' disabled={buttonloader} >PROCESSING... </button> :  <button className='mt-3  butt ' disabled={buttonloader} >SUBMIT </button> } */}
            <button className='mt-3  butt '>SUBMIT </button>
         
          </form></div>

      </div>
    </div>
    <div className="container-fluid">
      <div className="row d-grid tt">
        <div className="col-12 form "><p className='mt-2 text-center'>Fill In The Name of the Plan That You Want To Delete</p>
          <form className='d-grid' onSubmit={HandleSubmit2} >
            <h6 className='mt-5 ' >PLAN-NAME</h6>
            <input type="text" id='Value4' style={{ color: 'black', width: '70%', border: '1px solid blue', borderRadius: '5px', backgroundColor: 'rgb(200,200,200.5)',height:'50px' }} onChange={(e)=>{setuser2(e.target.value)} }/>
           
           
    <button className='mt-3  butt '>SUBMIT </button>      
          </form></div>

      </div>
    </div>

   
<h1 className='text-center' style={{marginTop:'15px',marginBottom:'15px'}} >USERS</h1>
{loader?  <Smallloader/> :  userdata.map((data)=>{return <Usertable userrishi={data.Rishi} />})  }


       

</> )
}

export default Change