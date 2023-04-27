import { Box,Stack } from '@mui/material'
import React from 'react'

const Search = () => {
  return (
    <Box sx={{ position:"absolute",right:"0px",top:"100%",backgroundColor:"#fff",boxShadow:"2px 2px 2px rgba(0,0,0,.2),-2px 2px 2px rgba(0,0,0,.2)"}}>
        <Stack direction="row" sx={{justifyContent:"space-between",backgroundColor:"#1688ca",px:1}}>
            <Box></Box>
            <Box>Search</Box>
            <Box>X</Box>
        </Stack>
        <Box sx={{padding:"10px"}}>
        <input type="text" placeholder="Search..." />
        </Box>
    </Box>
  )
}

export default Search