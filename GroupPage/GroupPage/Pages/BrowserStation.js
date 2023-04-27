import React from "react";
import {
  Stack,
  Grid,
  Box,
  Typography,
  InputBase
} from "@mui/material";

import InfoSubHead from "../../GlobalComponent/InfoSubHead";



const data = [
  { id: 1, name: "All Associates"},
  { id: 2, name: "Biomedical"},
  { id: 3, name: "Finance"},
  { id: 4, name: "Hospital Security"},
  { id: 5, name: "Human Resources"},
  { id: 6, name: "Information Technology"},
  { id: 7, name: "Leadership"},
  { id: 8, name: "Process Improvement"},
  { id: 9, name: "Productivity"},
  { id: 10, name: "Project Management"},
  { id: 11, name: "Training"},
  { id: 11, name: "Volunteers"}
];

const BrowserStation = () => {
  return (
    <>
      <Box sx={{maxWidth:"350px",m:3}}>
        <Box>
            <InfoSubHead name="Browse Stations" urlname={"X"}  backgroundColor={"#1688ca"}
              color={"#fff"}/>
        </Box>
        <Box sx={{bgcolor:"#fff"}}>
            <Box sx={{display:"flex",justifyContent:"right",p:1}}>
            <Box sx={{maxWidth:"100px"}}>
                <InputBase size="small" className="p-1 border rounded"/>
            </Box>
            </Box>
            <Stack direction="row" spacing={2} sx={{bgcolor:"#d2dee8",p:"4px"}}>
                <Box><Typography sx={{fontSize:"14px"}}>S.NO</Typography></Box>
                <Box><Typography sx={{fontSize:"14px"}}>TITLE OF STATIONS</Typography></Box>
            </Stack>
            <Box >
        {data.map((data) => {
            const {id,name}=data
          return (
            <Grid container key={id} sx={{justifyContent:"center",alignItems:"center"}}>
              <Grid item xs={10} sx={{bgcolor:"#bfbfbf",px:"4px"}}>
                <Typography sx={{fontSize:"14px",lineHeight:"25px",color:"#1688ca",cursor:"pointer",":hover":{textDecoration:"underline",color:"#23527c"}}}>{name}</Typography>
              </Grid>
              <Grid item xs={2}>
                
              </Grid>
            </Grid>
          );
        })}
        </Box>
        </Box>
      </Box>
    </>
  );
};

export default BrowserStation;
