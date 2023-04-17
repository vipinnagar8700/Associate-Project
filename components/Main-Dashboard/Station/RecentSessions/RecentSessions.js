import React, { useEffect, useState ,useContext} from "react";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";
import { Row, Col } from "react-bootstrap";
import { Document, Page } from 'react-pdf';
import Collapse from '@mui/material/Collapse';
// import DisplayAddNewSessionModal from './AddNewSession';
import "./RecentSessions.css";
import RecentSessionsData from "./RecentSessionsData";
import axios from "axios";
import { RecentSes, Searchdate } from "../../../../Api/Session";
import IconList from "./IconList";
import { Link, Typography } from "@mui/material";
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import AddIcon from '@mui/icons-material/Add';
import { height } from "@mui/system";
import DatePicker from "react-datepicker";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import "react-datepicker/dist/react-datepicker.css";
import { Sessionform } from "../../../Context/Session";
import { Icon } from "../../../Context/Sideicon";
import moment from 'moment'
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Imageview from "./Imageview";
import { Session } from "../../../Context/Count";


function RecentSessions() {
  const {sessionform,setsessionform} = useContext( Sessionform);
  const{ modalShow,id}=sessionform
  const { iconaction,seticonaction} = useContext(Icon)
  console.log(iconaction);
  const{search ,messageoption , showiconsubheader, leaveactionmenu,actionsearch,SessionMessaging}=iconaction
 
  const [startDate, setStartDate] = useState();
  const [endDate, endStartDate] = useState();
  const[searchtext,setsearchtext]=useState('')
  let Start =moment(startDate).format('L')
  let End =moment(endDate).format('L')
 
   
   
  
  console.log(endDate);
  

  var date=new Date()
  const[RecentSessionsData,setRecentSessionsData]=useState([])
  const[seachon,setseachon]=useState(false)
  const [open, setOpen] = useState(false);
  const [Imageviewfile, setOpenImageviewfile] = useState(null);
   let {sessionapi,setsessionapi}=useContext(Session)
  
  useEffect(()=>{
  let alldata=  RecentSes()
  alldata.then((data)=>{
    setRecentSessionsData(data)
  
  })

  },[])

  useEffect(()=>{
seticonaction({...iconaction,search:seachon,actionsearch:setseachon})
  },[iconaction.event])
if(searchtext && End && Start){
    Searchdate(Start,End,searchtext).then((sdata)=>{
   console.log(sdata.data);
   setRecentSessionsData(sdata.data)
    })
   }
  const [openicon , setOpenIcon]= useState(false)
  
  return (
    <>
   
      <div className="session_box">
        <div className="recent_session_header d-flex align-items-center justify-content-between">
          <div className="left_session_icons d-flex align-items-center">
            <div className="priority_session pe-3">
             
                <img
                  src="img/dot-menu.png"
                  className="global_icon_size cursor-pointer"
                  alt=""
                  onClick={()=>{seticonaction(({ leaveactionmenu})=>{
                    if(leaveactionmenu===true){
                      return {...iconaction, leaveactionmenu:false}
                    }
                    return {...iconaction, leaveactionmenu:true} 
                  })}}
                 />
                 {leaveactionmenu &&
                  <IconList/>
                 }
              
            </div>
            <div className="priority_session">
           
                  
              
              {  showiconsubheader && <img
                  src="img/PriotiySessions.svg"
                  className="global_icon_size cursor-pointer"
                  alt=""
                />
              }
             
            </div>
          </div>
          <div className="recenet_session_title">
            <p className="mb-0 fs-18">Recent Sessions</p>
          </div>
          <div className="recent_session_right_action">
            <div className="d-flex align-item-center" style={{flexGrow:'1'}}>
              <div className="add_new_session pe-3">
              
           
               
              </div>

              <div className="search_session  d-flex align-items-center">
              {   showiconsubheader && <img
                    onClick={()=>setsessionform({...sessionform,modalShow:true})}
                    src="img/AddNewSession.svg"
                    className="global_icon_size cursor-pointer"
                    alt="wd"
                   
                  
                  />}
                
              {  showiconsubheader &&    <img
                    src="img/Search.svg"
                    className="global_icon_size cursor-pointer"
                    alt="search"
                    onClick={()=>{setseachon(!seachon)}}

                  />}
                 
                <div> <img
                    src="img/FullScreen.svg"
                    className="global_icon_size cursor-pointer"
                    alt="search"
                 

                  /> </div>
              </div>
             
                
             
                  
                 
                 
              
            </div>
          </div>
        </div>

        <div class="session_Box pt-1">
       { messageoption && 
       
       <Box width="45%" height="fit-content" sx={{ backgroundColor:"#fff",boxShadow:" rgba(0, 0, 0, 0.35) 0px 5px 15px"}} className="icon_action">
      <Stack direction="row" sx={{display:'flex',justifyContent:'center', padding:'5px'}}>
         <Typography>Messaging options</Typography>
       </Stack>
    <Stack direction="column" sx={{padding:'20px'}}>
     
    <FormControlLabel  sx={{display:'flex',flexDirection:"row-reverse", justifyContent:'space-between',alignItems:'center', fontSize:'8px' }} label="Show only Session Messaging"control={<Checkbox Checked onClick={()=>{
      seticonaction(( { SessionMessaging}  )=>{
        if( SessionMessaging===false){
          return {...iconaction,  SessionMessaging:true}
        }
        return {...iconaction,  SessionMessaging:false}
      })
    }} />}  />
    <FormControlLabel  sx={{display:'flex',flexDirection:"row-reverse" , justifyContent:'space-between',alignItems:'center' }} label="Show icons on sub headers"control={<Checkbox Checked  onClick={()=>{
      seticonaction(( {showiconsubheader}  )=>{
        if(showiconsubheader===false){
          return {...iconaction, showiconsubheader:true}
        }
        return {...iconaction, showiconsubheader:false}
      })
    }}/>}  />
    <FormControlLabel  sx={{display:'flex',flexDirection:"row-reverse" , justifyContent:'space-between',alignItems:'center'}} label="Add a Station"control={<AddIcon 
    sx={{marginRight:"10px"}} onClick={(e)=>{iconaction.addstation((value)=>{
      if(value==true) return false;
      return true;
    })
      seticonaction({...iconaction,event:e})} }
    
    />}  />
 
    <FormControlLabel  sx={{display:'flex',flexDirection:"row-reverse", justifyContent:'space-between',alignItems:'center' }} label="Leave Actions Menu open"control={<Checkbox unChecked    onClick={()=>{seticonaction(({ leaveactionmenu})=>{
                    if(leaveactionmenu===true){
                      return {...iconaction, leaveactionmenu:false}
                    }
                    return {...iconaction, leaveactionmenu:true} 
                  })}} />}  />
    <FormControlLabel  sx={{display:'flex',flexDirection:"row-reverse", justifyContent:'space-between',alignItems:'center' }} label="Display Priority and Option Menu"control={<Checkbox Checked   onClick={()=>{seticonaction(({ displayprority})=>{
                    if(displayprority===true){
                      return {...iconaction,displayprority:false}
                    }
                    return {...iconaction, displayprority:true} 
                  })}}/>}  />
    
    </Stack>
    </Box>}
       {
        
          <Collapse in={seachon}  orientation="vertical"  sx={{ width: '30%'}} id="seach_date" style={{transitionTimingFunction:'linear' }}>
         
        <Stack spacing={2} direction="column" justifyContent="center" sx={{border:"0.5px solid #cdcdcd"}}>
      <Box sx={{backgroundColor:'#1688ca' ,height:'40%', padding:'10px' ,textAlign:'center'}}> 
      <Typography sx={{color:"#fff"}} variant='h6'> Search</Typography>  </Box>
      
      <Stack  direction="column" justifyContent="center" sx={{gap:"8px",padding:"10px 10px"}}>
      <DatePicker placeholderText="From Date"  className="m" sx={{ backgroundColor:"#fff"}}selected={startDate} onChange={(date) => setStartDate(date)} />
        
       
      <DatePicker placeholderText="To Date" sx={{ backgroundColor:"#fff"}} selected={endDate} onChange={(date) => endStartDate(date)} />
      <input type='text' id="search_text" value={searchtext}  onChange={(e)=>setsearchtext(e.target.value)}  placeholder="Search"/>
      <Box sx={{width:"100%",display:"flex",justifyContent:'center',alignItems:"center",marginBottom:"10px"}}>
      <Button  variant="contained" sx={{fontSize:"10px", justifyContent:'center',backgroundClip:'red'}}>Search</Button>
      </Box>
      
      </Stack>
        </Stack>
      
      
      
      </Collapse>
          
       }
       <Box>  {
          open && <Imageview  open={open} setOpen={setOpen} Imageviewfile={Imageviewfile}/>
        }</Box>
        {RecentSessionsData.length >0 &&  RecentSessionsData.map((sessionData) => {
          console.log(sessionData,"efiefie");
            const {id,textbox,file,station,created_at,session_associate
            }=sessionData
            const parts = file.split(".");
          
            const dateObj = new Date(created_at);

// Format the date and time values
const year = dateObj.getFullYear();
const month = dateObj.getMonth() + 1;
const day = dateObj.getDate();
const formattedDate = `${day}/${month}/${year}`;
       let viewer
       console.log(parts[1],"format");
     

           const{name}= session_associate[0]
           console.log(sessionData); 
           
   
          return (
            <div className="session_listing" key={id}>
              <Row >
                <Col md={3}>
                  <div className="list_left_part d-flex align-items-center mb-3">
                    <div className="rs_user pe-2">
                      <div>
                        <OverlayTrigger
                          delay={{ show: 250, hide: 300 }}
                          overlay={(props) => (
                            <Tooltip {...props} className="custom_tool_tip">
                              <p className="mb-0">{name}</p>
                              <a href="tel: 555-555-5555"> 555-555-5555</a>
                              <p className="mb-0"> Facility Manager</p>
                            </Tooltip>
                          )}
                          placement="right"
                        >
                         <Link href="/Profile">
                         <img
                            src={name==='Puja'?`./img/puja1.png`:`./img/john.jpg`}
                            className="global_icon_size cursor-pointer rs_user_profile"
                            alt=""
                          />
                         </Link>
                        </OverlayTrigger>
                      </div>
                    </div>

                    <div>
                      <p className="fs-14 mb-0">{name}</p>
                      <p className="fs-13 mb-0">{formattedDate}</p>
                    </div>
                  </div>

                  <ul className="session_action ps-0 mb-0">
                    <li>
                      <a href="">
                      <img
                    src="img/Option.svg"
                    className="global_icon_size cursor-pointer"
                    alt="search"
                  id="new_iconzip"
                 

                  /> 
                      </a>
                    </li>
                    <li>
                      <OverlayTrigger
                        delay={{ show: 250, hide: 300 }}
                        overlay={(props) => (
                          <Tooltip {...props} className="custom_tool_tip">
                            Open on page
                          </Tooltip>
                        )}
                        placement="right"
                      >
                        <img
                          src="img/Openonpage.svg"
                          className="cursor-pointer"
                          alt=""
                        />
                      </OverlayTrigger>
                    </li>

                    <li>
                      <OverlayTrigger
                        delay={{ show: 250, hide: 300 }}
                        overlay={(props) => (
                          <Tooltip {...props} className="custom_tool_tip">
                            Reply Page
                          </Tooltip>
                        )}
                        placement="right"
                      >
                        <img
                          src="img/Replypage-01.svg"
                          className=" cursor-pointer"
                          alt=""
                        />
                      </OverlayTrigger>
                    </li>

                    <li>
                      <OverlayTrigger
                        delay={{ show: 250, hide: 300 }}
                        overlay={(props) => (
                          <Tooltip {...props} className="mytooltip">
                            Mark As Priority
                          </Tooltip>
                        )}
                        placement="right"
                      >
                        <img
                          src="img/PriotiySessions.svg"
                          className="global_icon_size cursor-pointer"
                          alt=""
                        />
                      </OverlayTrigger>
                    </li>
                  </ul>
                </Col>
                <Col md={1}>
                  <OverlayTrigger
                    delay={{ show: 250, hide: 300 }}
                    overlay={(props) => (
                      <Tooltip {...props} className="custom_tool_tip">
                        <p className="fs-12 mb-0">Added by Jhon Smith</p>
                        <p className="fs-12 mb-0">20 hour ago</p>
                        <p className="fs-12 mb-0">1 MB Size</p>
                      </Tooltip>
                    )}
                    placement="right"
                  >
                 {file && (
        <div>
          {parts[1]==="jpg"  && (
             <img
             src={`https://assoc.studiomyraa.com/public/uploads/images/${file}`}
             className="img-fluid cursor-pointer"
             alt=""
             onClick={()=>{
              setOpen(!open)
              setOpenImageviewfile(file)
             }}
           />
          )}
            {parts[1]==="gif"  && (
             <img
             src={`https://assoc.studiomyraa.com/public/uploads/images/${file}`}
             className="img-fluid cursor-pointer"
             alt=""
             onClick={()=>{
              setOpen(!open)
              setOpenImageviewfile(file)
             }}
           />
          )}
          {parts[1] === 'pdf' && (
            <img src="https://app.associatenetwork.com/images/docicons/pdf.png"  className="img-fluid cursor-pointer"
            alt=""
              onClick={()=>{
              setOpen(!open)
              setOpenImageviewfile(file)
             }}
            />

          )}
          {/* Add more conditionals for other file types here */}
        </div>
      )}
                 
                  </OverlayTrigger>
                </Col>
                <Col md={8}>
                  <div className="mb-4">
                    <p className="fs-14 mb-0">{textbox} </p>
                  </div>

                  <div className="rs_comment_area">
                    <div className="comment_now">
                      <i className="fa fa-comments-o">
                        <span className="ps-2">2</span>
                      </i>
                    </div>
                    <div>
                      <a
                        href=""
                        className="text-decoration-none fs-14 discussions_link"
                      >
                        {station}
                      </a>
                    </div>
                    <div className="comment_now">
                      <i className="fa fa-comments-o">
                        <span className="ps-2">2</span>
                      </i>
                    </div>
                  </div>
                </Col>
             
              </Row>
            </div>
          );
        })}
        
        </div>

        {/* <div className='session_listing'>
                <Row>
                    <Col md={3}>
                        <div className='list_left_part d-flex align-items-center mb-3'>
                            <div className='rs_user pe-2'>
                                <div>
                                <OverlayTrigger
                                            delay={{ show: 250, hide:300 }}
                                            overlay={(props) => (
                                            <Tooltip {...props} className="custom_tool_tip">
                                                <p className='mb-0'>John S Smith</p>
                                                <a href='tel: 555-555-5555'> 555-555-5555</a>
                                                <p className='mb-0'> Facility Manager</p>
                                            
                                            </Tooltip>
                                            )}
                                            placement="right"
                                            >
                                            <img src="img/john.jpg" className='global_icon_size cursor-pointer rs_user_profile' alt="" />
                                </OverlayTrigger>
                                </div>


                                
                            </div>

                            
                            <div>
                                <p className='fs-14 mb-0'>John S S</p>
                                <p className='fs-13 mb-0'>02/13 1:19 AM</p>
                            </div>
                        </div>


                        <ul className='session_action ps-0 mb-0'>
                            <li><a href=""><i class="fa fa-ellipsis-h" aria-hidden="true"></i></a></li>
                            <li>
                            <OverlayTrigger
                                            delay={{ show: 250, hide:300 }}
                                            overlay={(props) => (
                                            <Tooltip {...props} className="custom_tool_tip">
                                            Open on page
                                            
                                            </Tooltip>
                                            )}
                                            placement="right"
                                            >
                                            <img src="img/full_screen_view.png" className='cursor-pointer' alt="" />
                                </OverlayTrigger>
                            </li>

                            <li>
                            <OverlayTrigger
                                            delay={{ show: 250, hide:300 }}
                                            overlay={(props) => (
                                            <Tooltip {...props} className="custom_tool_tip">
                                            Reply Page
                                            
                                            </Tooltip>
                                            )}
                                            placement="right"
                                            >
                                            <img src="img/stations.png" className=' cursor-pointer' alt="" />
                                </OverlayTrigger>
                            </li>

                            <li>
                            <OverlayTrigger
                                            delay={{ show: 250, hide:300 }}
                                            overlay={(props) => (
                                            <Tooltip {...props} className="mytooltip">
                                                Mark As Priority
                                            </Tooltip>
                                            )}
                                            placement="right"
                                            >
                                            <img src="img/blank_star.png" className='global_icon_size cursor-pointer' alt="" />
                                </OverlayTrigger>
                            </li>
                        </ul>
                    </Col>
                    <Col md={1}>
                    <OverlayTrigger
                                            delay={{ show: 250, hide:300 }}
                                            overlay={(props) => (
                                            <Tooltip {...props} className="custom_tool_tip">
                                                <p className='fs-12 mb-0'>Added by Jhon Smith</p>
                                                <p className='fs-12 mb-0'>20 hour ago</p>
                                                <p className='fs-12 mb-0'>1 MB Size</p>
                                            </Tooltip>
                                            )}
                                            placement="right"
                                            >
                                            <a href=''><img src="img/pdf.png" className='img-fluid cursor-pointer' alt="" /></a>
                                </OverlayTrigger> 
                    </Col>
                    <Col md={8}>
                    <div className='mb-4'>
                    <p className='fs-14 mb-0'>Hello team, here is our newly selected cohort team for Leadership training. First session will be help in the auditorium on Monday. </p>  
                    </div>

                        <div className='rs_comment_area'>
                                <div className='comment_now'>
                                <i class="fa fa-comments-o"><span className='ps-2'>2</span></i>
                                </div>
                                <div>
                                    <a href='' className='text-decoration-none fs-14 discussions_link'>EMPLOYEE ENGAGEMENT</a>
                                </div>
                                <div className='comment_now'>
                                <i class="fa fa-comments-o"><span className='ps-2'>2</span></i>
                                </div>
                        </div>                     
                    </Col>
                </Row>
            </div> */}
      </div>
    </>
  );
}

export default RecentSessions;
