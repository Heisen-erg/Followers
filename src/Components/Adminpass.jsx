import React, { useState } from 'react'

import Change from './Change'
let passt

const Adminpass = () => {
  
  const [juicy,setjuicy] = useState(false)
const Check = (event) => {
  
 passt = document.getElementById('pass').value ;

if(passt==="rishi@1234")
{ 
setjuicy(true)

}
else{
  alert("WRONG PASSWORD , YOU ARE NOT AN ADMIN ")
}

}

  return (<>{
   juicy ? (<Change/>) :
   ( <div className='d-grid' style={{height:'70vh'}}>
   <p style={{placeSelf:'center',color:'grey',fontFamily:'verdana',fontSize:'2vmax'}}>PASSWORD</p> <input type="text" style={{placeSelf:'center',width:'250px',height:'50px',border:'3px solid black'}}  id='pass' placeholder='   Password' />
    <button className='btn bg-primary' onClick={Check} style={{placeSelf:'center'}} >submit</button>
    </div>) 



  }



</>
  )
}

export default Adminpass