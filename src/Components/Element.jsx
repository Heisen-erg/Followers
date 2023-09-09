import React from 'react'

const Element = ({planname,plandescription,planprice}) => {
  return (
    


<tr style={{marginTop:'3vh'}}>
<td style={{width:'25vw', border: '2px solid black' }} className='text-center testimonial'  >{planname}</td>
<td  style={{width:'50vw', border: '2px solid black'}} className='text-center' >{plandescription}</td>
    <td  style={{width:'25vw', border: '2px solid black'}} className='text-center' >{planprice}</td>
</tr>




    
  )
}

export default Element