import React from 'react'
import EmailIcon from "@mui/icons-material/Email";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import ForumOutlinedIcon from "@mui/icons-material/ForumOutlined";
import SettingsVoiceOutlinedIcon from "@mui/icons-material/SettingsVoiceOutlined";
import AlternateEmailOutlinedIcon from "@mui/icons-material/AlternateEmailOutlined";
import {Stack,Tooltip } from '@mui/material';
import ContactSingleIcon from './ContactSingleIcon';
import { Link } from 'react-router-dom';

const clr = {color:"#fff"}
const iconstyle = {width:"15px",height:"15px"}
const FiveIconList = ({bgclr}) => {
  return (
   <>
   <Stack direction="row" spacing={2} sx={{bgcolor:`${bgclr}`,py:1,justifyContent:"center",flexWrap:"wrap"}}>
   <ContactSingleIcon Icons={
   <Tooltip title="External Email">
    <Link smooth style={clr} to="/ExternalEmail"><EmailIcon sx={iconstyle}/></Link>
    </Tooltip>
   }/>

   <ContactSingleIcon Icons={
   <Tooltip title="Internal Email">
    <Link smooth style={clr} to="/InternalEmail"><EmailOutlinedIcon sx={iconstyle}/>
    </Link>
    </Tooltip>}/>

   <ContactSingleIcon Icons={
   <Tooltip title="Text Message">
    <Link smooth style={clr} to="/AddTextMsg"><ForumOutlinedIcon sx={iconstyle}/>
    </Link>
    </Tooltip>}/>

   <ContactSingleIcon Icons={
   <Tooltip title="Add New Sessions">
    <Link smooth style={clr} to="/AddSession"><AlternateEmailOutlinedIcon sx={iconstyle}/>
    </Link>
    </Tooltip>}/>

   <ContactSingleIcon Icons={
   <Tooltip title="Voice Message">
    <Link smooth style={clr} to="/AddVoiceMsg"><SettingsVoiceOutlinedIcon sx={iconstyle}/>
    </Link>
    </Tooltip>}/>
   </Stack>
   </>
  )
}

export default FiveIconList