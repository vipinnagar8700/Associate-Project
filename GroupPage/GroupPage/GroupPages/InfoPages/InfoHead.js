import { Avatar, Box, Container, Grid, Stack, Tooltip, Typography } from "@mui/material";
import React from "react";
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';




const name = ["Information Technology"];

const InfoHead = () => {
  return (
    <>
      <Container
        maxWidth="lg"
        sx={{ backgroundColor: "#1688ca", color: "#fff" }}
      >
        <Grid container>
          <Grid item xs={12}sx={{my:"auto",py:1}}>
            <Stack direction="row" sx={{justifyContent:"space-between",alignItems:"center"}}>
           <Box>
           <Avatar sx={{backgroundColor:"#000", color:"#fff",width:{sm:"18px",xs:"12px"},height:{sm:"18px",xs:"12px"},fontSize:{sm:"10px",xs:"5px"}}}>SS</Avatar>
           </Box>
           <Box>
           <Box sx={{ textAlign: "center"}}>
              <Typography sx={{fontSize:{xs:"9px",sm:"12px",md:"14px",lg:"16px"}}}>{name}</Typography>
            </Box>
           </Box>
           <Box>
           <Stack
              direction="row"
              sx={{
                justifyContent: "end",
                alignItems: "center",
                height: "100%",
                gap:{xs:"10px",lg:"15px"},
                flexWrap:"wrap"
              }}
            >
                
                <Avatar sx={{backgroundColor:"#000", color:"#fff",width:{sm:"18px",xs:"10px",md:"15px"},height:{sm:"18px",xs:"10px",md:"15px"}}}> 
                <ChevronRightIcon sx={{fontSize:{sm:"17px",xs:"10px"}}}/>
                 </Avatar>

                <Avatar sx={{backgroundColor:"#000", color:"#fff",width:{sm:"18px",xs:"10px",md:"15px"},height:{sm:"18px",xs:"10px",md:"15px"}}}> 
                <KeyboardArrowLeftIcon sx={{fontSize:{sm:"17px",xs:"10px"}}}/> 
                </Avatar>

                <Tooltip title="Station Stats">
                <Avatar  sx={{width:{sm:"18px",xs:"10px",md:"15px"},height:{sm:"18px",xs:"10px",md:"15px"}, backgroundColor:"transparent"}}><ArrowDropDownIcon/></Avatar>
                </Tooltip>
                <Tooltip >

                <Avatar  sx={{width:{sm:"18px",xs:"10px"},height:{sm:"18px",xs:"10px"}, backgroundColor:"transparent"}}><ArrowDropDownIcon/></Avatar>
                </Tooltip>
                
              
             
            </Stack>
           </Box>
           </Stack>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default InfoHead;
