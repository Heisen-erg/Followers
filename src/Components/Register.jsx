import React, { useState } from 'react'
import "../styles/register.css"
import { useToast } from '@chakra-ui/react';
import axios from "axios"

const Register = () => {

const [pass,setpass] = useState({});

 const toast = useToast()

 const HandleSubmits =  (e) => {
  e.preventDefault();
  const{Rishi,conRishi}=pass

//  if (!(Rishi === conRishi)){ 
//   return toast({
//     title: 'Matching Error',
//     description: "Username does not match",
//     status: 'error',
//     duration: 2000,
//     isClosable: true,
//     position:'top'
//   }) }

// else if(Rishi === conRishi){
  
  // https://rishi-server.vercel.app/user/register
 
  axios.post("https://rishi-server.vercel.app/plans/register",pass,{headers:{
  "Content-Type":'application/json'
}}).then(({data})=>{toast({
  title: 'Success',
  description:data.message,
  status: 'success',
  duration: 2000,
  isClosable: true,
  position:'top'
})
// document.getElementById('Value5').value=""
// document.getElementById('Value6').value=""
})

// }
 }


  

  return (
    <div className="container-fluid">
      <div className="row d-grid tt">
        <div className="col-12 form "><p className='mt-2 text-center'>Fill In The Username In which You Want To Increase Your Followers </p>
          <form className='d-grid'  >
            <h6 className='mt-5 ' >USERNAME</h6>
            <input type="text" style={{ color: 'black', width: '70%', border: '1px solid blue', borderRadius: '5px', backgroundColor: 'rgb(200,200,200.5)',height:'50px' }} id='Value5' onChange={(e)=>{setpass({...pass,Rishi:e.target.value}) }}/>
            <h6 className='mt-5 ' >CONFIRM USERNAME</h6>
            <input type="text" style={{ color: 'black', width: '70%', border: '1px solid blue', borderRadius: '5px', backgroundColor: 'rgb(200,200,200.5)',height:'50px' }} id='Value6' onChange={(e)=>{setpass({...pass,conRishi:e.target.value})}} />
            <button className='mt-5  butt ' onSubmit={HandleSubmits} >SUBMIT</button>
          </form></div>

      </div>
    </div>
  )
}

export default Register