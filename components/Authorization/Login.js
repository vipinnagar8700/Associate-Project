import { height, Stack, width } from "@mui/system";
import React, { useState } from "react";
import Box from "@mui/material/Box";
import ImageList from "@mui/material/ImageList";
import zIndex from "@mui/material/styles/zIndex";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import InputLabel from "@mui/material/InputLabel";
import TextField from "@mui/material/TextField";
import Checkbox from "@mui/material/Checkbox";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Button from "@mui/material/Button";
import { Typography } from "@mui/material";
import { redirect } from "react-router-dom";
import KeyIcon from "@mui/icons-material/Key";
import { createGlobalStyle } from "styled-components";
import { useEffect } from "react";
import { login } from "../../Api/Authorization/Login";
import { getcookie, setcookie } from "../../Helper/cookie";
import { Navigate } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { setlocalstore } from "../../Helper/localsStroage";


const Imgsize = createGlobalStyle
`.Login_img{
    width: 100%;
    height: 100%;
    object-fit: cover;
}
.bgimg{
    background-image: url(./img/loginbg-img.jpg);
    width:100%;
    background-size:cover;
}
`;
const Login = () => {
  let navigate = useNavigate();
  const[Username,setUsername]=useState('')
  const[Password,setPassword]=useState(null)
  const handlelogin=(e)=>{
    e.preventDefault();
  
  let data= login(Username,Password)
  data.then((d)=>{
   const {token,role,user,message}=d.data
   console.log(user);
   if(token,user){
setcookie('login',token)
setlocalstore('login',user)
   }
   navigate("/MyStationDashboard", { replace: true });
 

   
  })
  
  }
 


  console.log(Username,Password);
  return (
    <div sx={{height:'100vh'}} >
        <Imgsize/>
      <Box
      className="bgimg"
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          paddingTop:'100px',
          boxSizing:'border-box',
          
        }}
      >
        <Box sx={{display:'flex', justifyContent:'center',alignItems:'center', flexDirection:'column', width:'430px'}}>
          <Box>
          <Box sx={{height: '120px',padding: "30px",backgroundColor:'#fff'}}>
          <img
              className="Login_img"
              src="./img/logo.png"
              alt="new image"
              loading="lazy"
              
            />
          </Box>

          <Stack
            spacing={1}
            direction="column"
            mt={3}
            sx={{
              width: "430px",
              height: "60VH",
              backgroundColor: "#fff",
              padding: "26px 24px 10px",
              
            }}
          >
            <FormGroup sx={{marginBottom:'10px'}}>
            <InputLabel sx={{ textAlign: "center", fontWeight: "bold" }}>
              Username
            </InputLabel>
            <TextField
            value={Username}
              id="outlined-basic"
              label="Username"
              onChange={(e)=>setUsername((s)=>{
               console.log(s);
                return e.target.value

              })}
              variant="outlined"
            />
            </FormGroup>
           <FormGroup>
           <InputLabel sx={{ textAlign: "center", fontWeight: "bold" }}>
              Password
            </InputLabel>
            <TextField
              id="outlined-password-input"
              label="Password"
              value={Password}
              onChange={(e)=>setPassword(e.target.value)}
              type="password"
              autoComplete="current-password"
            />
           </FormGroup>
            <FormGroup
              sx={{ fontSize: "10px", marginRight: "5px", fontWeight: '700', color:'#777' }}
            >
              <FormControlLabel
                control={<Checkbox defaultChecked />}
                label="Remember Me"
              />
            </FormGroup>
            <Stack direction="row" justifyContent="space-between">
              <Typography
                sx={{ fontSize: "14px", display: "flex", alignItems: "center", color:'#999' }}
              >
                Lost your password?
              </Typography>
              <Button
              onClick={handlelogin}
                variant="contained"
                sx={{ fontSize: "8px" }}
                startIcon={<KeyIcon />}
              >
                Login
              </Button>
            </Stack>
            <Box sx={{mt:1}}>
            <Typography
              sx={{
                fontSize: "14px",
                display: "flex",
                justifyContent: "center",
                color:'#C39BE1',mt:1
              }}
            >
              Building your Bridge to Better Collaboration
            </Typography>
            </Box>
          </Stack>
          </Box>
          <Box>
          <Box component="span" sx={{ display: 'block', backgroundColor:'#fff',marginTop:'5px', padding: "10px 24px 10px",textAlign:'center'}}>
            <Typography sx={{fontSize:'13px',color:'#000',fontWeight:'bold'}}>Don't have an account? <Typography variant="span" sx={{color: '#337ab7', fontSize:'13px',cursor: 'pointer'}}>Sign Up</Typography></Typography>
          </Box>
          <Box component="span" sx={{ display: 'block', backgroundColor:'#bfbfbf',marginTop:'5px' , padding: "10px",textAlign:'center',borderRadius:'5px'}}>
            <Typography sx={{fontSize:'14px', textAlign:'left'}}>You are our guest, feel free to explore the site and experience a new professional and unique business networking platform.</Typography>
          </Box>
          </Box>
        </Box>
      </Box>
    </div>
  );
};

export default Login;
