import React, { useContext, useEffect, useState } from 'react'
import { Box, Stack } from '@mui/system';
import Typography from '@mui/material/Typography'
import SearchIcon from '@mui/icons-material/Search';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import Collapse from '@mui/material/Collapse';
import Avatar from "@mui/material/Avatar";
import Count, { Session } from '../components/Context/Count';
import { RecentSes } from '../Api/Session';
import { Searchd } from './Searchd';
  

const Discussrecent = () => {
  const[searchon, setsearchon]=useState(false)
    let {sessionapi,setsessionapi}=useContext(Session)
    useEffect(()=>{
      let alldata=  RecentSes()
      alldata.then((data)=>{
       
        setsessionapi(data)
      })
    },[])
  
  return (
    <Box sx={{ width:'100%',backgroundColor:'#efebfc',zIndex:'999'
    
    }}>
        <Box sx={{display:'flex' , justifyContent:'space-between',backgroundColor:'#ddd' ,paddingRight:'30px'}}>
            <Box>

            </Box>
            <Box>
               <Typography variant="span" color="initial">
               Recent Sessions

               </Typography>
            </Box>

            <Box sx={{display:'flex' ,alignItems:'center'}}>
            <img alt='search' src='/img/Search.svg'
            onClick={()=>{
              setsearchon(!searchon)
            }}
            />
             <HighlightOffIcon/>
            </Box>
        </Box>
        <Box sx={{position:'relative'}}>
    {    <Collapse in={searchon} orientation="vertical">
      <Searchd/>
      </Collapse>
      
      }
           
          {
            sessionapi.map((rdata)=>{
              const {id,textbox,file,station,created_at,session_associate
              }=rdata
                return(
                    <Box sx={{backgroundColor:'#fff',paddingLeft:'12px',paddingRight:'12px',marginBottom:'10px'}} key={id}>
                    <Stack direction="row" spacing={2}  sx={{padding:"5px"}}>
                    
                    <Avatar alt="Remy Sharp" src="../img/john.jpg" />
                  <Box>
                  <Typography variant="body1" color="initial" sx={{fontSize:'15px',fontWeight:'bold'}}>Chris Hepple</Typography>
                  <Typography variant="body1" color="initial" sx={{fontSize:'13px'}}>03/02/2000</Typography>
                  <Stack direction="row" spacing={2}>
                
                  <Avatar
                                sx={{
                                    color:'black',
                                  width: "20px",
                                  height: "20px",
                                  fontSize: "12px",
                                  backgroundColor: "#cccccc",
                                }}
                              >
                                4
                                </Avatar>
        
                  <AddCircleOutlineIcon
                              sx={{ color: "grey", width: "22px", height: "22px" }}
                            />
                  </Stack>
                  
                  </Box>
                  <Box sx={{textAlign:'center'}}>
                    <Typography variant="body1" color="initial" sx={{fontSize:'14px'}}>
     
       {textbox}
                    </Typography>
                    <Typography variant="h6" color="initial">{station}</Typography>
                  
                  </Box>
                    </Stack>
                  
                    </Box>
                )
            })
          }
           
        </Box>
    </Box>
  )
}

export default Discussrecent