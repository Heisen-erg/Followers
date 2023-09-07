import React, { useEffect, useState } from 'react'
import "../styles/register.css"
import axios from 'axios'
import { useToast } from "@chakra-ui/react"
import Contact from './Contact'
import Usertable from './Usertable'
const Change = () => {
const toast = useToast()

const[user,setuser]=useState({})
const[user2,setuser2]=useState()
// const[loader,setloader]=useState(true)
const[userdata,setuserdata]=useState({})
const[buttonloader,setbuttonloader]=useState(false)
const[buttonloader2,setbuttonloader2]=useState(false)

// useEffect(() => {
//   axios.get("https://rishi-server.vercel.app/user/getallusers").then(
//     ({data})=>{
//     console.log(data)
//       setuserdata(data.allusers) 
//       // setloader(false)
//     }
//   )
  

//   return () => {
   
//   }
// }, [])


const HandleSubmit = async (e)=>{
  e.preventDefault()
  setbuttonloader(true)
await axios.post("https://rishi-server.vercel.app/plans/addplans",user).then((response)=>{
  toast({
       title:"Successfully Added The Plan",
        description: response.data.message,
        status: 'success',
        duration: 2000,
        isClosable: true,
        position:'top'
      })
      document.getElementById('Value1').value = ""
      document.getElementById('Value2').value = ""
      document.getElementById('Value3').value = ""
      setbuttonloader(false)
})

}

const HandleSubmit2 = async (e)=>{
  e.preventDefault()
  setbuttonloader2(true)
   await axios.delete(`https://rishi-server.vercel.app/plans/removeplans?drop=${user2}`).then((response)=>{ toast({title:'Changes Will Take Place In 5 Seconds' , description:response.data.message, status: 'success',
     duration: 2000,
      isClosable: true,
      position:'top'})
      document.getElementById('Value4').value = ""
      setbuttonloader(false)
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





  return ( <> <div style={{height:'10vh',marginTop:'5vh'}}>
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
        
            <button className='mt-3  butt ' disabled={buttonloader} > { buttonloader? <h6 style={{marginTop:'3px'}}>Processing... </h6 >: <h6 style={{marginTop:'3px'}}>SUBMIT </h6> }</button>
          </form></div>

      </div>
    </div>
    <div className="container-fluid">
      <div className="row d-grid tt">
        <div className="col-12 form "><p className='mt-2 text-center'>Fill In The Name of the Plan That You Want To Delete</p>
          <form className='d-grid' onSubmit={HandleSubmit2} >
            <h6 className='mt-5 ' >PLAN-NAME</h6>
            <input type="text" id='Value4' style={{ color: 'black', width: '70%', border: '1px solid blue', borderRadius: '5px', backgroundColor: 'rgb(200,200,200.5)',height:'50px' }} onChange={(e)=>{setuser2(e.target.value)} }/>
           
            <button className='mt-3  butt ' disabled={buttonloader2} > { buttonloader2? <h6 style={{marginTop:'3px'}}>Processing... </h6 >: <h6 style={{marginTop:'3px'}}>SUBMIT </h6> }</button>
           
          </form></div>

      </div>
    </div>

   

{/* {loader?  <Contact/> :  userdata.map((data)=>{return <Usertable userrishi={data.Username} />})  } */}


       

</>)
}

export default Change