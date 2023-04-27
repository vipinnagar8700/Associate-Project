import React from 'react'
import {Typography,Box} from '@mui/material'
import AddFileName from './AddFIleName'

const FileAdd = () => {
  return (
    <Box sx={{textAlign:"center"}}>
        <Typography sx={{fontSize:"15px"}}>Name of File</Typography>
        <input type='text' className='form-control my-2'/>
       <Box sx={{display:"flex",justifyContent:"center"}}> <AddFileName /></Box>

    </Box>
  )
}

export default FileAdd