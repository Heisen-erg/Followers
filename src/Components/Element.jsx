import React from 'react'

const Element = ({planname,plandescription,planprice}) => {
  return (
    


<tr style={{marginTop:'3vh'}}>
<td style={{width:'25vw'}} className='text-center testimonial'  >{planname}</td>
<td  style={{width:'50vw'}} className='text-center' >{plandescription}</td>
    <td  style={{width:'25vw'}} className='text-center' >{planprice}</td>
</tr>




    
  )
}

export default Element