import React, { useState } from 'react'

export const Checking = () => {
  const[search,setsearch]  =useState('')
  const handlechange=(e)=>{
setsearch(e.data.value)
  }
  console.log(search);
  return (
    <div>

<div style={{width:'80px'}}>
<input   onChange={handlechange} type="text" />
</div>
       
    </div>
  )
}
