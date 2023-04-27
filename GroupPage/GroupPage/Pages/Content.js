import { Avatar, Box, Container, Grid, Stack, Typography } from "@mui/material";
import React from "react";
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

const Content = () => {
  return (
    <Container maxWidth="lg" sx={{ backgroundColor: "#fff",p:1,border:"2px solid transparent",":hover":{border:"2px solid #1688ca" , backgroundColor:"#E8F0F8"} }}>
      <Grid container >
        <Grid item xs={3}>
          <Stack direction="row" spacing={1}>
            <Avatar src="./img/john.jpg"  />
            <Stack>
                <Typography variant="caption" sx={{fontWeight:"bold",color:"#000"}}>04/16 6:12 PM</Typography>
                <Stack direction="row" spacing={2}>
                    <Avatar sx={{width:"18px",height:"18px",fontSize:"12px",color:"#000"}}>3</Avatar>
                    
                    <AddCircleOutlineIcon sx={{width:"20px",height:"20px",fontSize:"12px"}}/>

                    <ChevronRightIcon sx={{backgroundColor:"#000", color:"#fff", borderRadius:"50%",width:"18px",height:"18px"}}/>

                    <Avatar variant="rounded" src="./img/jpeg.png" sx={{width:"18px",height:"18px",fontSize:"12px"}}/>
                   
                </Stack>
            </Stack>
          </Stack>
        </Grid>
        <Grid item xs={9}>
          <Stack direction="column" spacing={5}>
            <Box>
              <Typography variant="subtitle2" sx={{color:"#000"}}>
                This new Medical Records technology will be part of a capital
                upgrade for the ICU. It is fully funded.
              </Typography>
            </Box>
            <Box sx={{ textAlign: "center" }}>
              <Typography variant="caption" sx={{color:"#8e8c8cb3", fontWeight:"bold", textDecoration:"underline"}}>
                INFORMATION TECHNOLOGY STATION
              </Typography>
            </Box>
          </Stack>
        </Grid>

      </Grid>
    </Container>
  );
};

export default Content;
