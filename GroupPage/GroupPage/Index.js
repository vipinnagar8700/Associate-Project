import { Box, Container, Grid } from '@mui/material'
import React from 'react'
import StationPhotos from './GroupPages/StationPhotos'
import InfoTech from './GroupPages/InfoTech'


const GroupPage = () => {
  return (
    <>
    <Box sx={{backgroundImage: "url(./img/bggroup.jpeg)",backgroundAttachment:"fixed" , backgroundSize:"100% 360px", backgroundRepeat:"no-repeat", bgcolor: "rgb(1 31 101 / 19%)",
    backgroundPosition:"0px -10px", backgroundBlendMode:"overlay"}}>
    
   <Container maxWidth="lg" sx={{pt:5,px:{xs:0,md:2,lg:3}}}>
    <Grid container spacing={2} sx={{px:{xs:0,sm:2,md:2,lg:3}}}>
        <Grid item xs={12} md={6} sm={6}>
          <InfoTech/>
        </Grid>
        <Grid item xs={12} md={6} sm={6} >
          <StationPhotos />
        </Grid>
    </Grid>
   </Container>
   </Box>
   </>
  )
}

export default GroupPage