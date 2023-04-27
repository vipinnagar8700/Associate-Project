import React from 'react'
import EmailIcon from "@mui/icons-material/Email";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import AddIcCallOutlinedIcon from "@mui/icons-material/AddIcCallOutlined";
import ForumOutlinedIcon from "@mui/icons-material/ForumOutlined";
import SettingsVoiceOutlinedIcon from "@mui/icons-material/SettingsVoiceOutlined";
import AlternateEmailOutlinedIcon from "@mui/icons-material/AlternateEmailOutlined";
import {Stack } from '@mui/material';
import ContactSingleIcon from './ContactSingleIcon';

const ContactIcon = () => {
  return (
   <>
   <Stack direction="row" spacing={2} sx={{bgcolor:"grey",py:1,justifyContent:"center",flexWrap:"wrap"}}>
   <ContactSingleIcon Icons={<EmailIcon sx={{width:"15px",height:"15px"}}/>}/>
   <ContactSingleIcon Icons={<EmailOutlinedIcon sx={{width:"15px",height:"15px"}}/>}/>
   <ContactSingleIcon Icons={<AddIcCallOutlinedIcon sx={{width:"15px",height:"15px"}}/>}/>
   <ContactSingleIcon Icons={<ForumOutlinedIcon sx={{width:"15px",height:"15px"}}/>}/>
   <ContactSingleIcon Icons={<AlternateEmailOutlinedIcon sx={{width:"15px",height:"15px"}}/>}/>
   <ContactSingleIcon Icons={<SettingsVoiceOutlinedIcon sx={{width:"15px",height:"15px"}}/>}/>
   </Stack>
   </>
  )
}

export default ContactIcon