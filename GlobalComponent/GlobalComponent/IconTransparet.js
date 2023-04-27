import { Avatar } from '@mui/material'
import React from 'react'


const IconTransparet = ({iconname}) => {

  return (
    <>
   <Avatar sx={{width:"25px", height:"25px",bgcolor:"transparent",border:"2px solid #fff",padding:"5px"}}>{iconname}</Avatar>
    </>
  )
}

export default IconTransparet