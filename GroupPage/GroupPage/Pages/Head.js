import { Box, Container, Grid, Stack, Typography } from '@mui/material'
import React from 'react'
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import CancelOutlinedIcon from '@mui/icons-material/CancelOutlined';
import Search from './Search';
import { useState } from 'react';

const Head = () => {
    const [searchshow , setSearchShow]=useState("true")
  return (
    <>
    <Container maxWidth="lg" sx={{backgroundColor:"#1688ca", color:"#fff",position:"relative"}}>
    <Grid container>
        <Grid item xs={4}> </Grid>
        <Grid item xs={4}> 
        <Box sx={{textAlign:"center"}}>
        <Typography variant='subtitle1'>Recent Sessions</Typography>
        </Box>
        </Grid>
        <Grid item xs={4}> 
        <Stack direction='row' spacing={1} sx={{justifyContent:"end", alignItems:"center",height:"100%"}}>
           <SearchOutlinedIcon onClick={()=>{setSearchShow(!searchshow)}} sx={{border:"1px solid #fff",padding:"2px" , borderRadius:"50%", width:"20px", height:"20px"}}/>
           <CancelOutlinedIcon/>
        </Stack>
        </Grid>
        {searchshow  &&

            <Search/>
        }
    </Grid>
    </Container>
    </>
  )
}

export default Head