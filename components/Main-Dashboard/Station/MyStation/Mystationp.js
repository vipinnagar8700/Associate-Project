import React, { useEffect, useContext } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import { useState } from "react";
import "./MyStation.css";
import AddNewSession from "../RecentSessions/AddNewSession";
import Tooltip from "@mui/material/Tooltip";
import MyStationForm from "./MyStationForm";
import axios from "axios";
import { Box, Typography } from "@mui/material";
import { Sessionform } from "../../../Context/Session";
import { allStationdata } from "../../../../Api/Station";
import { Icon } from "../../../Context/Sideicon";
import { height } from "@mui/system";
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import AddIcon from '@mui/icons-material/Add';
import Avatar from "@mui/material/Avatar";
import EmailIcon from "@mui/icons-material/Email";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import AddIcCallOutlinedIcon from "@mui/icons-material/AddIcCallOutlined";
import ForumOutlinedIcon from "@mui/icons-material/ForumOutlined";
import SettingsVoiceOutlinedIcon from "@mui/icons-material/SettingsVoiceOutlined";
import AlternateEmailOutlinedIcon from "@mui/icons-material/AlternateEmailOutlined";
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import TwitterIcon from "@mui/icons-material/Twitter";
const MyStationp = ({ stationFile }) => {
  const [MyStationData, setMyStationData] = useState([]);
  const { sessionform, setsessionform } = useContext(Sessionform);
  
  const { iconaction,seticonaction } = useContext(Icon)
  console.log(iconaction);
  const{displayprority,countvalue, SessionMessaging}=iconaction
  const { modalShow, id } = sessionform;
  console.log(sessionform);

  const [show, setIsShown] = useState("");
  const [option, setOption] = useState(false);
  const [form, setForm] = useState(false);
  const [width, setwidth] = useState(6);
  const [showid,setshowid] = useState(1);
  const [datas, setdatas] = useState([]);
  const[text,settext]=useState("")
  const[search,setSearch]=useState(false)
  
  let counter=0;
  counter++;

  useEffect(() => {
  
allStationdata().then((data)=>{
  setMyStationData(data);
},[])
   
  }, [stationFile]);
  useEffect(()=>{
   
    seticonaction({...iconaction, addstation:setForm,station:form})
  },[countvalue])

  const widthadjust = () => {
    if (width === 6) {
      setwidth(3);
    } else {
      setwidth(6);
    }
    console.log(width);
  };
  const nstation=MyStationData.filter((data)=>{
     return data.stationname.toLowerCase().includes(text.toLowerCase())
  })
  console.log(nstation,"thiss is",nstation.length);
 
  return (
    <div>
      {form && <MyStationForm setForm={setForm} form={form} />}
      <div className="Station-head sub-head py-2 fs-13">
    {displayprority &&<div className="d-flex gap-2 ps-2">
          <p
            onClick={() => {
              alert("Please check off Priority Box on Station");
            }}
          >
            <span>Priority</span> <span>+</span>
          </p>
          <div className="dropdown">
            <p>
              <span
                onClick={() => {
                  setOption(!option);
                }}
              >
                Options
              </span>{" "}
             
              <span>+</span>
            </p>
            {option && (
              <div className="dropdown-body text-center">
                <p className="fw-bold">Messaging optionso</p>
                <div className="my-2 d-flex gap-4 justify-content-between">
                  <label>Show only Session Messaging</label>
                  <input type="checkbox" />
                </div>
                <div className="my-2 d-flex gap-4 justify-content-between">
                  <div>
                    <p>Add a Station</p>
                  </div>
                  <div>
                    <p
                      onClick={() => {
                        setForm(!form);
                      }}
                    >
                      +
                    </p>
                  </div>
                </div>
                <div className="my-2 d-flex gap-4 justify-content-between">
                  <div>
                    <p>Add Direct Session Message</p>
                  </div>
                  <div>
                    <p>
                      <AddNewSession />
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
}
        <div>
          <ul>
            <li>
           
              {displayprority &&   <img src="./img/substationicon1.png" onClick={widthadjust} />}
          
            </li>
            <li>
            
            <img src="./img/substationicon2.png" onClick={()=>setSearch(!search)} />
            </li>
          </ul>
        </div>
      </div>
    { search && <div className="huddle_search_btn p-1"><input type="search" value={text
    } onChange={(e)=>settext(e.target.value)}      placeholder="Search..." 
            className="px-2 fs-12"/></div>}
      <div className="pb-2 bg-white stationss " style={{ display: "flex" }}>
        {nstation &&
          nstation.map((sData) => {
            console.log(sData,"whdugefug")
            const { _id, stationname, image, id,associates } = sData;
            return (
              <Col key={_id} md={width} className=""> 
                <div
                   onMouseEnter={() => {setIsShown(stationname) 
                     setshowid(id)}}
                   onMouseLeave={() => setIsShown('')}
                  className="w-100 h-100 px-1 py-2 "
                 
               sx={{position:'relative'}} >
               {  SessionMessaging &&   <Box sx={{fontSize:'14px'}}>
                         { show===stationname && showid===id && 
                         <Box
                         sx={{
                          boxShadow:'rgba(0, 0, 0, 0.35) 0px 5px 15px',
                           textAlign: "center",
                           position: "absolute",
                           width: "360px",
                          
                         
                           marginTop: "130px",
                         }}
                       >
                         <Typography
                           sx={{ color: "#8b5cab", backgroundColor: "white" ,paddingBottom:'5px',fontSize:'14px'}}
                          
                         >
                           {stationname}
                         </Typography>
                         <Grid container spacing={0} >
                           <Grid item xs={6}  sx={{backgroundColor:'#eaecf0'}}>
                           <Stack spacing={0} direction='column'>
                        
                       <Box sx={{display:'flex', justifyContent:'space-between', width:'100%',paddingX:'5px'}}> 
                        <Typography
                           sx={{ color: "#000",fontSize:'14px' }}
                          
                         > {associates.length} Station</Typography>
                           <AddIcon/> 
                         </Box>  
                         <Box sx={{display:'flex', justifyContent:'space-between', width:'100%',paddingX:'5px'}}> 
                        <Typography
                           sx={{ color: "#000",fontSize:'14px' }}
                          
                         >    Station Sessions

                   
                         </Typography>
                           <AddIcon/> 
                         </Box>  
                         <Box sx={{display:'flex', justifyContent:'space-between', width:'100%',paddingX:'5px'}}> 
                         <Typography
                            sx={{ color: "#000",fontSize:'14px' }}
                           
                          > Priority
 
                    
                          </Typography>
                          <Checkbox
                                sx={{width:'0px',height:'0px',backgroundColor:'#fff'}}

                               inputProps={{ 'aria-label': 'controlled' }}
                                />
                          </Box>  
                            
                             </Stack>
             
                           </Grid>
                           <Grid item xs={6} sx={{backgroundColor:'#eaecf0'}}>
                           <Stack spacing={0} direction='column'>
                        
                        <Box sx={{display:'flex', justifyContent:'space-between', width:'100%',paddingX:'5px'}}> 
                         <Typography
                            sx={{ color: "#000",fontSize:'14px' }}
                           
                          >  Edit Station</Typography>
                            <AddIcon/> 
                          </Box>  
                          <Box sx={{display:'flex', justifyContent:'space-between', width:'100%',paddingX:'5px'}}> 
                         <Typography
                            sx={{ color: "#000",fontSize:'14px' }}
                           
                          >    Station Tasks
 
                    
                          </Typography>
                            <AddIcon/> 
                          </Box>  
                      
                          <Box sx={{display:'flex', justifyContent:'space-between', width:'100%',paddingX:'5px'}}> 
                        <Typography
                           sx={{ color: "#000",fontSize:'14px' }}
                          
                         >  Station  Details</Typography>
                           <AddIcon/> 
                         </Box>  
                                 
                             
                              </Stack>
                           </Grid>
                         </Grid>
                         <Box sx={{display:'flex', justifyContent:'center' ,backgroundColor:'#afb1b4',alignContent:'center'}}>
                          <Box>
                          <Stack
                      direction="row"
                      sx={{
                        justifyContent: "center",
                        paddingTop: "2px",
                        paddingBottom: "2px",
                 
                        marginTop: "10px",
                        flexWrap:'wrap',
                      }}
                      spacing={2}
                    >
                      <Avatar
                        sx={{
                          width: "25px",
                          height: "25px",
                          backgroundColor: "transparent",
                          border: "2px solid #fff",
                        }}
                      >
                        <EmailIcon sx={{ fontSize: "15px" }} />
                      </Avatar>
                      <Avatar
                        sx={{
                          width: "25px",
                          height: "25px",
                          backgroundColor: "transparent",
                          border: "2px solid #fff",
                        }}
                      >
                        <EmailOutlinedIcon sx={{ fontSize: "15px" }} />
                      </Avatar>
                      <Avatar
                        sx={{
                          width: "25px",
                          height: "25px",
                          backgroundColor: "transparent",
                          border: "2px solid #fff",
                        }}
                      >
                        <AddIcCallOutlinedIcon sx={{ fontSize: "15px" }} />
                      </Avatar>
                      <Avatar
                        sx={{
                          width: "25px",
                          height: "25px",
                          backgroundColor: "transparent",
                          border: "2px solid #fff",
                        }}
                      >
                        <ForumOutlinedIcon sx={{ fontSize: "15px" }} />
                      </Avatar>
                      <Avatar
                        sx={{
                          width: "25px",
                          height: "25px",
                          backgroundColor: "transparent",
                          border: "2px solid #fff",
                        }}
                      >
                        <SettingsVoiceOutlinedIcon sx={{ fontSize: "15px" }} />
                      </Avatar>
                      <Avatar
                        sx={{
                          width: "25px",
                          height: "25px",
                          backgroundColor: "transparent",
                          border: "2px solid #fff",
                        }}
                      >
                        <AlternateEmailOutlinedIcon sx={{ fontSize: "15px" }} />
                      </Avatar>
                    </Stack>
                          </Box>
                         </Box>
                       </Box>
                       
                         
                         }
 
                  </Box>}
                  <div className="my-1 w-100 h-100 station-img">
                    <Card.Img
                  
                      variant="top"
                      src={`https://assoc.studiomyraa.com/public/uploads/images/${image}`}
                      onClick={() =>
                        setsessionform({
                          ...sessionStorage,
                          modalShow: true,
                          id: sData,
                        })
                      }
                    />
                    {/* <Typography>{stationname}</Typography> */}
                  </div>
                
                </div>
              </Col>
            );
          })}
      </div>
    </div>
  );
};

export default MyStationp;
