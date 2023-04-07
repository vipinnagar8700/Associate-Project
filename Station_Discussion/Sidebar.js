import React, { useEffect, useState } from 'react'
import Grid from "@mui/material/Grid";
import { Box, Stack } from '@mui/system';
import { Avatar, Typography } from '@mui/material';
import CancelIcon from "@mui/icons-material/Cancel";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputAdornment from "@mui/material/InputAdornment";
import FormHelperText from "@mui/material/FormHelperText";
import FormControl from "@mui/material/FormControl";
import SentimentSatisfiedAltIcon from "@mui/icons-material/SentimentSatisfiedAlt";
import { addcommentreply, getcommentbyreply } from '../Api/Discussion/Discussion';

const Sidebar = ({thirdcomment, setthirdcomment,sidebardata}) => {
  const[contentreply,setcontentreply]=useState('')
  const[sucess,setsucess]=useState('')
  const[reply,setreply]=useState('')
  const{user_id,session_id,id,updated_at,img,users,content




    
  }=sidebardata
console.log(reply,"this");
  useEffect(()=>{
   
      getcommentbyreply(id).then(data=>{
            let{status,reply}=data
           
            setreply(reply)

      })
  },[sucess])
const Commentside=(e)=>{
  setsucess('')
  e.preventDefault()
  alert(contentreply)
  addcommentreply(session_id,id,contentreply).then((data)=>{
  setsucess(data.messege)

  })

}
  return (
<>
              <Box
                sx={{ display: "flex", justifyContent: "space-between" }}
              >
                <Box></Box>
                <Box>
                  <Typography
                    variant="subtitle1"
                    sx={{ fontWeight: "600" }}
                  >
                    Sidebar Comments
                  </Typography>
                </Box>
                <Box>
                  <CancelIcon onClick={()=>{
                    setthirdcomment(false)
                  }} />
                </Box>
              </Box>
              <Box sx={{ border: "4px solid #1688ca", padding: "3px" }}>
                <Typography
                  variant="subtitle1"
                  sx={{ fontWeight: "bold", fontSize: "14px" }}
                >
                  You are responding to the post of: 
                </Typography>
                <Stack direction="row" spacing={1}>
                  {users &&    <Avatar alt="Remy Sharp"  src={`https://assoc.studiomyraa.com/public/uploads/images/${users[0].image}`} />
               }
                  <Typography sx={{ fontWeight: "bold", color: "#1688ca" }}>
                    {users && users[0].name}
                  </Typography>
                </Stack>
              </Box>

              <Stack
                direction="row"
                spacing={1}
                sx={{
                  my: 2,
                  alignItems: "center",
                  justifyContent: "center",
                  textAlign: "center",
                }}
              >
                <Box>
                  <FormControl
                    sx={{ m: 1, width: "20ch" }}
                    variant="outlined"
                  >
                    <OutlinedInput
                    value={contentreply}
                    onChange={(e)=>{
                      setcontentreply(e.target.value)
                    }}
                      id="outlined-adornment-weight"
                      endAdornment={
                        <InputAdornment position="end"></InputAdornment>
                      }
                      aria-describedby="outlined-weight-helper-text"
                      inputProps={{
                        "aria-label": "weight",
                      }}
                    />
                  </FormControl>
                </Box>
                <Box>
                  <Box>
                    <SentimentSatisfiedAltIcon />
                  </Box>
                  <Box>
                    <Typography
                      variant="caption"
                      onClick={Commentside}
                      sx={{
                        backgroundColor: "lightgrey",
                        padding: "5px 10px",
                        borderRadius: "0.25rem",
                        fontWeight: "bold",
                        verticalAlign: "middle",
                        lineHeight: "2.66",
                        ":hover": {
                          backgroundColor: "#1688ca",
                          color: "#fff",
                        },
                      }}
                    >
                      Add
                    </Typography>
                  </Box>
                </Box>
              </Stack>

              <Box sx={{ my: 2 }}>
               {
                reply.length>0 && reply.map((redata,index)=>{
                   const{users}= redata
                  return(
                    <Stack direction="row" spacing={1} key={index}>
                   {users &&    <Avatar alt="Remy Sharp"  src={`https://assoc.studiomyraa.com/public/uploads/images/${users[0].image}`} />
               }
                    <Stack direction="column">
                      <Typography variant="subtitle2">
                       {redata.content}
                      </Typography>
                      <Typography
                        variant="subtitle2"
                        sx={{ color: "#bbbbbd" }}
                      >
                       {users && users[0].name}
                      </Typography>
                      <Typography
                        variant="subtitle2"
                        sx={{
                          color: "#1688ca",
                          cursor: "pointer",
                          ":hover": {
                            textDecoration: "underline",
                            textDecorationColor: "#1688ca",
                          },
                        }}
                      >
                        Reply
                      </Typography>
                    </Stack>
                  </Stack>
                  )
                })
               }
              </Box>
              </>
  )
}

export default Sidebar