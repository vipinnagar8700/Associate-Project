import React from 'react'
import {Badge,Box, Typography} from '@mui/material'

const SmallBox = ({border,value}) => {
  return (
   <>
   {/* <Badge badgeContent={2} color="success">
    </Badge> */}
    <Box component="span" ><Typography 
    variant="subtitle2" 
    color="initial"
    sx={{width:"25px",height:"25px",border:{border},borderRadius:"50%",textAlign:"center",verticalAlign:"middle",lineHeight:"21px",display:"inline-block",fontWeight:"bold"}}
    >{value}</Typography></Box>
   </>
  )
}

export default SmallBox