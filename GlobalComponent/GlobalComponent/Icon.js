import { Avatar } from '@mui/material'
import React from 'react'
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';

const Icon = ({url}) => {

  return (
    <>
   <Avatar src={`${url}`} sx={{width:"20px", height:"20px"}}/>
    </>
  )
}

export default Icon