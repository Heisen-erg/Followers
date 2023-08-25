import React, { useState } from 'react'
import "../styles/register.css"
import { useToast } from '@chakra-ui/react';

const Register = () => {

const [user,setuser] = useState({pass:"",conpass:""});
 const toast = useToast()

 const HandleSubmit = (e) => {
  e.preventDefault();
  const {pass,conpass} = user
 if (!(pass === conpass)){
  toast({
    title: 'Matching Error',
    description: "Username dose not match",
    status: 'error',
    duration: 2000,
    isClosable: true,
    position:'top'
  })
 }
  }

  return (
    <div className="container-fluid">
      <div className="row d-grid tt">
        <div className="col-12 form "><p className='mt-2 text-center'>Fill In The Username In which You Want To Increase Your Followers </p>
          <form className='d-grid' onSubmit={HandleSubmit} >
            <h6 className='mt-5 ' >USERNAME</h6>
            <input type="text" style={{ color: 'black', width: '60%', border: '1px solid blue', borderRadius: '5px', backgroundColor: 'rgb(200,200,200.5)' }} onChange={(e)=>{setuser({...user,pass:e.target.value})} }/>
            <h6 className='mt-5 ' >CONFIRM USERNAME</h6>
            <input type="text" style={{ color: 'black', width: '60%', border: '1px solid blue', borderRadius: '5px', backgroundColor: 'rgb(200,200,200.5)' }} onChange={(e)=>{setuser({...user,conpass:e.target.value})}} />
            <button className='mt-5  butt ' >SUBMIT</button>
          </form></div>

      </div>
    </div>
  )
}

export default Register