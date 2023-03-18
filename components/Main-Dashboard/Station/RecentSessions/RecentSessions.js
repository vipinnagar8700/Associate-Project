import React, { useEffect, useState ,useContext} from "react";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";
import { Row, Col } from "react-bootstrap";
// import DisplayAddNewSessionModal from './AddNewSession';
import "./RecentSessions.css";
import RecentSessionsData from "./RecentSessionsData";
import axios from "axios";
import { RecentSes } from "../../../../Api/Session";
import IconList from "./IconList";
import { Link, Typography } from "@mui/material";
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { height } from "@mui/system";
import DatePicker from "react-datepicker";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import "react-datepicker/dist/react-datepicker.css";
import { Sessionform } from "../../../Context/Session";




function RecentSessions() {
  const {sessionform,setsessionform} = useContext( Sessionform);
  const{ modalShow,id}=sessionform
 
  const [startDate, setStartDate] = useState(new Date());
  console.log(startDate);
  var date=new Date()
  const[RecentSessionsData,setRecentSessionsData]=useState([])
  const[seachon,setseachon]=useState(false)
  useEffect(()=>{
  let alldata=  RecentSes()
  alldata.then((data)=>{
    setRecentSessionsData(data)
  })

  },[])
  const [openicon , setOpenIcon]= useState(false)
  console.log(startDate,"hsvydfwy");
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
                  onClick={()=>{setOpenIcon(! openicon)}}
                 />
                 {openicon &&
                  <IconList/>
                 }
              
            </div>
            <div className="priority_session">
              <OverlayTrigger
                delay={{ show: 250, hide: 300 }}
                overlay={(props) => (
                  <Tooltip {...props} className="mytooltip">
                    My Priority Sessions
                  </Tooltip>
                )}
                placement="bottom"
              >
                <img
                  src="img/blank_star.png"
                  className="global_icon_size cursor-pointer"
                  alt=""
                />
              </OverlayTrigger>
            </div>
          </div>
          <div className="recenet_session_title">
            <p className="mb-0 fs-18">Recent Sessions</p>
          </div>
          <div className="recent_session_right_action">
            <div className="d-flex align-item-center">
              <div className="add_new_session pe-3">
                <OverlayTrigger
                  delay={{ show: 250, hide: 300 }}
                  overlay={(props) => (
                    <Tooltip {...props} className="mytooltip">
                      Add New Sessions
                    </Tooltip>
                  )}
                  placement="bottom"
                >
                  <img
                    onClick={()=>setsessionform({...sessionform,modalShow:true})}
                    src="img/add_icon.png"
                    className="global_icon_size cursor-pointer"
                    alt="wd"
                  
                  />
                </OverlayTrigger>
              </div>

              <div className="search_session">
                <OverlayTrigger
                  delay={{ show: 250, hide: 300 }}
                  overlay={(props) => (
                    <Tooltip {...props} className="mytooltip">
                      Search
                    </Tooltip>
                  )}
                  placement="bottom"
                >
                  <img
                    src="img/search_icon.png"
                    className="global_icon_size cursor-pointer"
                    alt="search"
                    onClick={()=>{setseachon(!seachon)}}

                  />
                </OverlayTrigger>
               
              </div>
            </div>
          </div>
        </div>

        <div class="session_Box pt-1">
       {
        seachon &&  <Box sx={{ width: '30%'}} id="seach_date">
        <Stack spacing={2} direction="column" justifyContent="center" sx={{border:"0.5px solid #cdcdcd"}}>
      <Box sx={{backgroundColor:'#1688ca' ,height:'40%', padding:'10px' ,textAlign:'center'}}> 
      <Typography sx={{color:"#fff"}} variant='h6'> Search</Typography>  </Box>
      
      <Stack  direction="column" justifyContent="center" sx={{gap:"8px",padding:"10px 10px"}}>
      <DatePicker placeholderText="From Date"  className="m" sx={{ backgroundColor:"#fff"}}selected={startDate} onChange={(date) => setStartDate(date)} />
        
       
      <DatePicker placeholderText="To Date" sx={{ backgroundColor:"#fff"}}selected={startDate} onChange={(date) => setStartDate(date)} />
      <input type='text' id="search_text"  placeholder="Search"/>
      <Box sx={{width:"100%",display:"flex",justifyContent:'center',alignItems:"center",marginBottom:"10px"}}>
      <Button  variant="contained" sx={{fontSize:"10px", justifyContent:'center',backgroundClip:'red'}}>Search</Button>
      </Box>
      
      </Stack>
        </Stack>
      </Box>
  
       }
        {RecentSessionsData.map((sessionData) => {
            const {id,textbox,file,station,created_at,session_associate
            }=sessionData
            const dateObj = new Date(created_at);

// Format the date and time values
const year = dateObj.getFullYear();
const month = dateObj.getMonth() + 1;
const day = dateObj.getDate();
const formattedDate = `${day}/${month}/${year}`;


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
                        <i className="fa fa-ellipsis-h" aria-hidden="true"></i>
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
                          src="img/full_screen_view.png"
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
                          src="img/stations.png"
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
                          src="img/blank_star.png"
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
                    <a href="">
                      <img
                        src={`https://assoc.studiomyraa.com/public/uploads/images/${file}`}
                        className="img-fluid cursor-pointer"
                        alt=""
                      />
                    </a>
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
