import React from "react";
import {
  Container,
  Grid,
  Box,
  Typography,
 Avatar
} from "@mui/material";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import { Link } from "react-router-dom";
import InfoSubHead from "../../GlobalComponent/InfoSubHead";


const iconsize={width:"18px",height:"18px",fontSize:"10px",color:"black"}
const plussize={width:"20px",height:"20px",opacity:".6",justifyContent:"center",alignItems:"center",display:"flex"}

const data = [
  { id: 1, name: "Membership - 6 Associates",num:"" ,icon:""},
  { id: 2, name: "Station Creator - John S Smith",num:"" ,icon:""},
  { id: 3, name: "Station Manager -",num:"" ,icon:""},
  { id: 4, name: "Pending Request to join Station-",num:<Avatar className="bg_ylow" sx={iconsize}>0</Avatar> ,icon: <AddCircleIcon sx={plussize}/> },
  { id: 5, name: "Station Status - Public",num:"" ,icon: <AddCircleIcon sx={plussize}/> },
  { id: 6, name: "Like",num:<Avatar className="bg_skyblue" sx={iconsize}>1</Avatar> ,icon: <AddCircleIcon sx={plussize}/> },
  { id: 7, name: "Add Background Image",num:"" ,icon: <AddCircleIcon sx={plussize}/> },
  { id: 8, name: "Assign Role",num:"" ,icon: <AddCircleIcon sx={plussize}/> },
];

const StationStatus = () => {
  return (
    <>
      <Box sx={{maxWidth:"350px",m:3}}>
        <Box>
            <InfoSubHead name="Station Status" urlname={"X"}  backgroundColor={"#1688ca"}
              color={"#fff"}/>
        </Box>
        <Box sx={{p:1,bgcolor:"#fff"}}>
        {data.map((data) => {
            const {id,icon,name,num}=data
          return (
            <Grid container key={id} sx={{justifyContent:"center",alignItems:"center"}}>
              <Grid item xs={10}>
                <Typography sx={{fontSize:"13px",fontWeight:"bold",lineHeight:"25px"}}>{name}</Typography>
              </Grid>
              <Grid item xs={1}>
                {num}
              </Grid>
              <Grid item xs={1}>
               <Box> {icon}</Box>
              </Grid>
            </Grid>
          );
        })}
        </Box>
      </Box>
    </>
  );
};

export default StationStatus;
