import React, { useState ,useEffect,useContext} from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import moment from "moment";
import { createGlobalStyle } from "styled-components";
import {
  Container,
  Divider,
  ImageList,
  ImageListItem,
  Typography,
} from "@mui/material";

import Tooltip, { tooltipClasses } from "@mui/material/Tooltip";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import JoditEditor from "jodit-react";
import EmailIcon from "@mui/icons-material/Email";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import AddIcCallOutlinedIcon from "@mui/icons-material/AddIcCallOutlined";
import ForumOutlinedIcon from "@mui/icons-material/ForumOutlined";
import SettingsVoiceOutlinedIcon from "@mui/icons-material/SettingsVoiceOutlined";
import AlternateEmailOutlinedIcon from "@mui/icons-material/AlternateEmailOutlined";
import AttachmentSharpIcon from "@mui/icons-material/AttachmentSharp";
import CancelIcon from "@mui/icons-material/Cancel";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputAdornment from "@mui/material/InputAdornment";
import FormHelperText from "@mui/material/FormHelperText";
import FormControl from "@mui/material/FormControl";
import SentimentSatisfiedAltIcon from "@mui/icons-material/SentimentSatisfiedAlt";
import { addcomment, discusscomment } from "../Api/Discussion/Discussion";
import { Link, useParams } from "react-router-dom";
import { Discussapi } from "../components/Context/Discussionapi";
import Sidebar from "./Sidebar";
import Discussrecent from "./Discussrecent";

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
}));

const Bgimg = createGlobalStyle`
.title:hover{
    border:2px solid black;
}
.title{
    border:2px solid transparent;
    padding:2px;
}
.date{
  position:relative
}
.date::before{
  content: "";
    display: block;
    border-top: 1px solid #D4D4D4;
    width: 100%;
    height: 1px;
    position: absolute;
    top: 50%;
    Z-index:0;
}
.show{
  visibility:hidden;
}
.box_hover:hover .show{
  visibility:visible;
}
`;

const HtmlTooltip = styled(({ className, ...props }) => (
  <Tooltip {...props} classes={{ popper: className }} />
))(({ theme }) => ({
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: "#f5f5f9",
    color: "rgba(0, 0, 0, 0.87)",
    maxWidth: 220,
    fontSize: theme.typography.pxToRem(12),
    border: "1px solid #dadde9",
  },
}));

const Singlediscuss = () => {
const[sucess,setsucces]=useState('')
const[circle ,setcircle]=useState(false)
const [content, setContent] = useState('');
console.log(content);
  const[data,setdata]=useState(null)
  const[name ,setname]=useState('')
  const[sidebardata,setsidebardata]=useState(false)

  let { id } = useParams();
  useEffect(()=>{
discusscomment(+(id)).then((data)=>{
setdata(data)
          

})
  },[id,sucess])



 const[thirdcomment,setthirdcomment]=useState(false)
 const[Rec,setRec]=useState(false)
 let {discussdata,setdiscussdata}=useContext(Discussapi)
 const handlediscuss=(e)=>{
  
  setsucces('')
  e.preventDefault()
  addcomment(discussdata,id,content).then((data)=>{
    console.log(data.messege,"this is che kinggg");
    setsucces(data.messege)
  

  })

 }
   if(!data
    ){
    return<div>
      <h2>loading ......</h2>
    </div>
   }
       
console.log(discussdata,"this is new discuss");
   let name1=data.results.session_associate[0]
   console.log(name1);
  return (
    <>
    <Box className="bgimg">

      
    </Box>
    <Bgimg />
    
  
    <Container maxWidth="lg" sx={{ marginTop: "15px" }}>
    
      <Grid container spacing={0} sx={{ padding: "10px" }}>
        <Grid item xs={12} sx={{ backgroundColor: "#fff",position:'relative' }}>
     {
      Rec &&    <Box sx={{ position: 'absolute',
      top: '32%',
      left: '40%',
      transform: 'translate(-50%, -50%)',
     zIndex:'999',
      bgcolor: 'white',}}>


<Discussrecent/>
</Box>
     }
          <Box
            sx={{
              backgroundColor: "#1688ca",
              color: "#fff",
              display: "flex",
              justifyContent: "left",
              gap: "10px",
              alignItems: "center",
              borderRadius: "unset",
              flexWrap: "wrap",
            }}
          >
            <Box className="title">
              <Typography sx={{ fontWeight: "bold", fontSize: "20px" }}>
              {data.results.station
}
              </Typography>
            </Box>
            <Box>
              <Typography sx={{ fontSize: "17px" }}>
                Added by  {name1.name}
 on  {name1.updated_at}
              </Typography>
            </Box>
          </Box>
          <Container>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <Box
                  sx={{
                    textAlign: "center",
                    marginBottom: "10px",
                    marginTop: "5px",
                  }}
                >
                  <AddCircleOutlineIcon sx={{ color: "grey" }} />
                  <Box>
                    {" "}
                    <Typography variant="caption">
                      Sent To: {name1.name}
                    </Typography>
                  </Box>
                </Box>
              
              </Grid>

              <Grid item xs={3}>
                <Box sx={{ padding: "5px", textAlign: "center" }}>
                  <Typography>Dashboard</Typography>

                  <ImageList cols={1}>
                    <ImageListItem>
                      <img src="./img/puja1.png"  alt="assocaite imahe"/>
                    </ImageListItem>
                  </ImageList>
                  <Typography>Responses</Typography>
                  <Stack
                    direction="row"
                    sx={{ justifyContent: "space-around" }}
                    spacing={2}
                  >
                    <Box>
                      <Avatar
                        sx={{
                          width: "25px",
                          height: "25px",
                          fontSize: "12px",
                          backgroundColor: "#00b050",
                        }}
                      >
                   {data && data.comment.length}
                      </Avatar>
                      <Typography sx={{ fontSize: "14px" }}>Total</Typography>
                    </Box>
                    <Box>
                      <Avatar
                        sx={{
                          width: "25px",
                          height: "25px",
                          fontSize: "12px",
                          backgroundColor: "#ffcc00",
                          color: "red",
                        }}
                      >
                        0
                      </Avatar>
                      <Typography sx={{ fontSize: "14px" }}>New</Typography>
                    </Box>
                  </Stack>

                  <Box>
                    <Stack
                      direction="row"
                      sx={{
                        justifyContent: "center",
                        paddingTop: "5px",
                        marginTop: "5px",
                        paddingBottom: "5px",
                        backgroundColor: "rgba(0, 0, 0, 0.25)",
                        flexWrap: "wrap",
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
                        <SettingsVoiceOutlinedIcon
                          sx={{ fontSize: "15px" }}
                        />
                      </Avatar>
                      <Avatar
                        sx={{
                          width: "25px",
                          height: "25px",
                          backgroundColor: "transparent",
                          border: "2px solid #fff",
                        }}
                      >
                        <AlternateEmailOutlinedIcon
                          sx={{ fontSize: "15px" }}
                        />
                      </Avatar>
                    </Stack>
                    <Box>
                      <Typography
                        sx={{
                          textAlign: "center",
                          fontWeight: "bold",
                          fontSize: "14px",
                        }}
                      >
                        Actions
                      </Typography>
                    </Box>
                    <Box>
                      <Typography
                        sx={{
                          fontWeight: "bold",
                          textAlign: "center",
                          marginTop: "10px",
                          fontSize: "15px",
                        }}
                      >
                        Direct Files
                      </Typography>
                      <Box
                        sx={{
                          display: "flex",
                          border: "2px solid lightgrey",
                          padding: "10px",
                          minHeight: "250px",
                        }}
                      >
                        <Box>
                          <Stack direction="row" spacing={1}>
                            <Avatar
                              variant="rounded"
                              alt="Remy Sharp"
                              src="./img/pdf.png"
                              sx={{ width: "30px", height: "30px" }}
                            />
                            <Stack
                              direction="column"
                              sx={{ textAlign: "left" }}
                            >
                              <Typography variant="subtitle2">
                                Added by Pat Link
                              </Typography>
                              <Typography
                                variant="caption"
                                sx={{ fontSize: "14px" }}
                              >
                                on 28 Apr 2020: 225.84 KB
                              </Typography>
                            </Stack>
                          </Stack>
                        </Box>
                      </Box>
                    </Box>
                  </Box>
                </Box>
              </Grid>

              <Grid item xs={6}>
                <Box
                  sx={{ display: "flex", justifyContent: "space-between" }}
                >
                  <Box sx={{ display: "flex" }}>
                    <AddCircleOutlineIcon
                      sx={{ color: "grey", width: "22px", height: "22px" }}
                    />
                    <AddCircleOutlineIcon
                      sx={{ color: "grey", width: "22px", height: "22px" }}
                    />
                    <AddCircleOutlineIcon
                      sx={{ color: "grey", width: "22px", height: "22px" }}
                      onClick={()=>{
                     setRec(!Rec)
                      }}
                    />
                  </Box>
                  <Box>
                    <Typography sx={{ fontSize: "15px" }}>
                      Direct Sessions
                    </Typography>
                  </Box>
                 

                  <Box sx={{ display: "flex", gap: "5px" }}>
                    <Link to={`http://localhost:3000/discussion/${+(id)-1}`}>
                    <ChevronLeftIcon
                      sx={{
                        backgroundColor: "#5a585d",
                        width: "21px",
                        height: "21px",
                        borderRadius: "50%",
                        color: "#fff",
                      }}

                    />
                    </Link>
                    <Link to= {`/discussion/${+(id )+ 1}`}>
                    <ChevronRightIcon
                      sx={{
                        backgroundColor: "#5a585d",
                        borderRadius: "50%",
                        width: "21px",
                        height: "21px",
                        color: "#fff",
                      }}
                    />
                    </Link>
                  </Box>
                </Box>

                <Box
                  sx={{
                    border: "1px solid lightgray",
                    marginTop: "5px",
                  }}
                >
                  {/* <Box
                    className="box_hover"
                    sx={{
                      padding: "15px 5px 1px 5px",
                      marginBottom: "10px",
                      ":hover": {
                        backgroundColor: "#1688ca17",
                      },
                    }}
                  >
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "space-between",
                      }}
                    >
                      <Stack
                        direction="row"
                        spacing={2}
                        sx={{
                          justifyContent: "center",
                          alignItems: "center",
                        }}
                      >
                        <Avatar alt="Remy Sharp" src="./img/john.jpg" />
                        <Box>
                          <Typography
                            sx={{ fontSize: "15px", fontWeight: "bold" }}
                          >
                            Chris Hepple
                          </Typography>
                          <Typography
                            sx={{ fontSize: "12px", color: "#655f5f" }}
                          >
                            03/14 2:35 PM
                          </Typography>
                        </Box>
                      </Stack>
                      <Box>
                        <Stack
                          direction="row"
                          spacing={1}
                          sx={{
                            justifyContent: "center",
                            alignItems: "center",
                          }}
                        >
                          <Stack
                            className="show"
                            direction="row"
                            spacing={1}
                            sx={{
                              justifyContent: "center",
                              alignItems: "center",
                            }}
                          >
                            <Avatar
                              sx={{
                                width: "18px",
                                height: "18px",
                                fontSize: "12px",
                                backgroundColor: "transparent",
                                color: "#000",
                                border: "1px solid #000",
                                ":hover": {
                                  textDecoration: "underline",
                                },
                              }}
                            >
                              3
                            </Avatar>
                            <Box>
                              <Typography
                                variant="caption"
                                sx={{
                                  backgroundColor: "lightgrey",
                                  padding: "3px",
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
                                Reply
                              </Typography>
                            </Box>
                            <Tooltip
                              title="forward message"
                              placement="bottom"
                            >
                              <ChevronRightIcon
                                sx={{
                                  backgroundColor: "#5a585d",
                                  width: "18px",
                                  height: "18px",
                                  borderRadius: "50%",
                                  color: "#fff",
                                }}
                              />
                            </Tooltip>
                          </Stack>
                          <Typography variant="caption">Plans</Typography>
                          <HtmlTooltip
                            title={
                              <React.Fragment>
                                <Box
                                  sx={{
                                    display: "flex",
                                    flexDirection: "column",
                                  }}
                                >
                                  <Typography
                                    variant="caption"
                                    color="inherit"
                                  >
                                    Added by Pat Link
                                  </Typography>
                                  <Typography
                                    variant="caption"
                                    color="inherit"
                                  >
                                    2 years ago
                                  </Typography>
                                  <Typography
                                    variant="caption"
                                    color="inherit"
                                  >
                                    225.84 KB size.
                                  </Typography>
                                  <Typography
                                    variant="caption"
                                    color="inherit"
                                  >
                                    plans
                                  </Typography>
                                </Box>
                              </React.Fragment>
                            }
                          >
                            <Avatar
                              variant="rounded"
                              alt="Remy Sharp"
                              src="./img/pdf.png"
                              sx={{ width: "30px", height: "30px" }}
                            />
                          </HtmlTooltip>
                        </Stack>
                      </Box>
                    </Box>
                    <Typography
                      sx={{
                        fontSize: "14px",
                        marginBottom: "15px",
                        marginTop: "5px",
                      }}
                    >
                      Our new Bi-plane Imaging suite is completed. It is state
                      of the art. We received donations for most of this cost.
                      This will greatly improved imaging services and enhance
                      patient care. Thanks
                    </Typography>
                  </Box> */}

                 

                  <Box
                    className="box_hover"
                    sx={{
                      padding: "15px 5px 1px 5px",
                      marginBottom: "10px",
                      ":hover": {
                        backgroundColor: "#1688ca17",
                      },
                    }}
                  >
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "space-between",
                      }}
                    >
                      <Stack
                        direction="row"
                        spacing={2}
                        sx={{
                          justifyContent: "center",
                          alignItems: "center",
                        }}
                      >
                        <Avatar alt="Remy Sharp" src="../img/john.jpg" />
                        <Box>
                          <Typography
                            sx={{ fontSize: "15px", fontWeight: "bold" }}
                          >
                           {name1.name}
                          </Typography>
                          <Typography
                            sx={{ fontSize: "12px", color: "#655f5f" }}
                          >
                           {name1.updated_at}
                          </Typography>
                        </Box>
                      </Stack>
                      <Box>
                    
                        <Stack
                          direction="row"
                          spacing={1}
                          sx={{
                            justifyContent: "center",
                            alignItems: "center",
                          }}
                        >
                          <Stack
                            className="show"
                            direction="row"
                            spacing={1}
                            sx={{
                              justifyContent: "center",
                              alignItems: "center",
                            }}
                          >
                            <Avatar
                              sx={{
                                width: "18px",
                                height: "18px",
                                fontSize: "12px",
                                backgroundColor: "transparent",
                                color: "#000",
                                border: "1px solid #000",
                                ":hover": {
                                  textDecoration: "underline",
                                },
                              }}
                            >
                              3
                            </Avatar>
                            <Box>
                              <Typography
                                variant="caption"
                                sx={{
                                  backgroundColor: "lightgrey",
                                  padding: "3px",
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
                                Reply
                              </Typography>
                            </Box>
                         
                            <ChevronRightIcon
                              sx={{
                                backgroundColor: "#5a585d",
                                width: "18px",
                                height: "18px",
                                borderRadius: "50%",
                                color: "#fff",
                              }}
                            />
                          </Stack>
                          <Typography variant="caption">Plans</Typography>
                          <Avatar
                            variant="rounded"
                            alt="Remy Sharp"
                            src="./img/pdf.png"
                            sx={{ width: "30px", height: "30px" }}
                          />
                        </Stack>
                      </Box>
                    </Box>

                    <Typography
                      sx={{
                        fontSize: "14px",
                        marginBottom: "15px",
                        marginTop: "5px",
                      }}
                    >
                {data.results.textbox
}
                    </Typography>
                  </Box>


                  <Box sx={{ padding: "0px 5px" }}>
                    <ImageList
                      cols={1}
                      sx={{ borderRadius: "15px", margin: "5px 0" }}
                    >
                      <ImageListItem>
                        <img src={`https://assoc.studiomyraa.com/public/uploads/images/${data.results.file}`}/>
                      </ImageListItem>
                    </ImageList>
                  </Box>



                  {/* <Box
                    className="box_hover"
                    sx={{
                      padding: "15px 5px 1px 5px",
                      marginBottom: "10px",
                      ":hover": {
                        backgroundColor: "#1688ca17",
                      },
                    }}
                  >
                    <Box className="date " sx={{ textAlign: "center" }}>
                      <Box
                        component="span"
                        sx={{
                          p: 1,
                          px: 2,
                          backgroundColor: "#fff",
                          color: "#9c9494",
                          zIndex: "999",
                          position: "relative",
                          fontSize: "14px",
                          fontStyle: "italic",
                          fontWeight: "400",
                        }}
                      >
                        March 29, 2023
                      </Box>
                    </Box>

                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "space-between",
                      }}
                    >
                      <Stack
                        direction="row"
                        spacing={2}
                        sx={{
                          justifyContent: "center",
                          alignItems: "center",
                        }}
                      >
                        <Avatar alt="Remy Sharp" src="./img/john.jpg" />
                        <Box>
                          <Typography
                            sx={{ fontSize: "15px", fontWeight: "bold" }}
                          >
                            John S Smith
                          </Typography>
                          <Typography
                            sx={{ fontSize: "12px", color: "#655f5f" }}
                          >
                            03:08 pm
                          </Typography>
                        </Box>
                      </Stack>
                      <Box>
                        <Stack
                          direction="row"
                          spacing={1}
                          sx={{
                            justifyContent: "center",
                            alignItems: "center",
                          }}
                        >
                          <Stack
                            className="show"
                            direction="row"
                            spacing={1}
                            sx={{
                              justifyContent: "center",
                              alignItems: "center",
                            }}
                          >
                            <Avatar
                              sx={{
                                width: "18px",
                                height: "18px",
                                fontSize: "12px",
                                backgroundColor: "transparent",
                                color: "#000",
                                border: "1px solid #000",
                                ":hover": {
                                  textDecoration: "underline",
                                },
                              }}
                            >
                              3
                            </Avatar>
                            <Box>
                              <Typography
                                variant="caption"
                                sx={{
                                  backgroundColor: "lightgrey",
                                  padding: "3px",
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
                                Reply
                              </Typography>
                            </Box>
                            <ChevronRightIcon
                              sx={{
                                backgroundColor: "#5a585d",
                                width: "18px",
                                height: "18px",
                                borderRadius: "50%",
                                color: "#fff",
                              }}
                            />
                          </Stack>
                          <Typography variant="caption">Plans</Typography>
                          <Avatar
                            variant="rounded"
                            alt="Remy Sharp"
                            src="./img/pdf.png"
                            sx={{ width: "30px", height: "30px" }}
                          />
                        </Stack>
                      </Box>
                    </Box>
                    <Typography
                      sx={{
                        fontSize: "14px",
                        marginBottom: "15px",
                        marginTop: "5px",
                      }}
                    >
                      nice
                    </Typography>
                  </Box> */}
                 {
                  data.comment.map((sdata)=>{
                    console.log(sdata,"ejfiheif");
                    return<>
                     <Box
                    className="box_hover"
                    sx={{
                      padding: "15px 5px 1px 5px",
                      marginBottom: "10px",
                      ":hover": {
                        backgroundColor: "#1688ca17",
                      },
                    }}
                  >
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "space-between",
                      }}
                    >
                      <Stack
                        direction="row"
                        spacing={2}
                        sx={{
                          justifyContent: "center",
                          alignItems: "center",
                        }}
                      >
                        <Avatar alt="Remy Sharp" src={`https://assoc.studiomyraa.com/public/uploads/images/${sdata.users[0].image}`} />
                        <Box>
                         

                          <Typography
                            sx={{ fontSize: "15px", fontWeight: "bold" }}
                          >
                            {sdata.users[0].name             
}
                          </Typography>
                          <Typography
                            sx={{ fontSize: "12px", color: "#655f5f" }}
                          >
                           {moment(sdata.users[0].created_at).format('LLL')}
                          </Typography>
                        </Box>
                      </Stack>
                      <Box>
                        <Stack
                          direction="row"
                          spacing={1}
                          sx={{
                            justifyContent: "center",
                            alignItems: "center",
                          }}
                        >
                          <Stack
                            className="show"
                            direction="row"
                            spacing={1}
                            sx={{
                              justifyContent: "center",
                              alignItems: "center",
                            }}
                          >
                            <Avatar
                              sx={{
                                width: "18px",
                                height: "18px",
                                fontSize: "12px",
                                backgroundColor: "transparent",
                                color: "#000",
                                border: "1px solid #000",
                                ":hover": {
                                  textDecoration: "underline",
                                },
                              }}
                            >
                              3
                            </Avatar>
                            <Box>
                              <Typography
                                variant="caption"
                                onClick={()=>{
                                setsidebardata(sdata)
                                    setthirdcomment(true)
                                }}
                                sx={{
                                  backgroundColor: "lightgrey",
                                  padding: "3px",
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
                                Reply
                              </Typography>
                            </Box>
                            <ChevronRightIcon
                              sx={{
                                backgroundColor: "#5a585d",
                                width: "18px",
                                height: "18px",
                                borderRadius: "50%",
                                color: "#fff",
                              }}
                            />
                          </Stack>
                          <Typography variant="caption">Plans</Typography>
                          <Avatar
                            variant="rounded"
                            alt="Remy Sharp"
                            src="./img/pdf.png"
                            sx={{ width: "30px", height: "30px" }}
                          />
                        </Stack>
                      </Box>
                    </Box>
                    <Typography
                      sx={{
                        fontSize: "14px",
                        marginBottom: "15px",
                        marginTop: "5px",
                      }}
                    >
                      {sdata.content.replaceAll('<p>', '').replaceAll('</p>', '')}
                    </Typography>
                  </Box> 
                    </>
                  })
                 }
                  {/* <Box
                    className="box_hover"
                    sx={{
                      padding: "15px 5px 1px 5px",
                      marginBottom: "10px",
                      ":hover": {
                        backgroundColor: "#1688ca17",
                      },
                    }}
                  >
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "space-between",
                      }}
                    >
                      <Stack
                        direction="row"
                        spacing={2}
                        sx={{
                          justifyContent: "center",
                          alignItems: "center",
                        }}
                      >
                        <Avatar alt="Remy Sharp" src="./img/john.jpg" />
                        <Box>
                          <Typography
                            sx={{ fontSize: "15px", fontWeight: "bold" }}
                          >
                            John S Smith
                          </Typography>
                          <Typography
                            sx={{ fontSize: "12px", color: "#655f5f" }}
                          >
                            03:08 pm
                          </Typography>
                        </Box>
                      </Stack>
                      <Box>
                        <Stack
                          direction="row"
                          spacing={1}
                          sx={{
                            justifyContent: "center",
                            alignItems: "center",
                          }}
                        >
                          <Stack
                            className="show"
                            direction="row"
                            spacing={1}
                            sx={{
                              justifyContent: "center",
                              alignItems: "center",
                            }}
                          >
                            <Avatar
                              sx={{
                                width: "18px",
                                height: "18px",
                                fontSize: "12px",
                                backgroundColor: "transparent",
                                color: "#000",
                                border: "1px solid #000",
                                ":hover": {
                                  textDecoration: "underline",
                                },
                              }}
                            >
                              3
                            </Avatar>
                            <Box>
                              <Typography
                                variant="caption"
                                sx={{
                                  backgroundColor: "lightgrey",
                                  padding: "3px",
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
                                Reply
                              </Typography>
                            </Box>
                            <ChevronRightIcon
                              sx={{
                                backgroundColor: "#5a585d",
                                width: "18px",
                                height: "18px",
                                borderRadius: "50%",
                                color: "#fff",
                              }}
                            />
                          </Stack>
                          <Typography variant="caption">Plans</Typography>
                          <Avatar
                            variant="rounded"
                            alt="Remy Sharp"
                            src="./img/pdf.png"
                            sx={{ width: "30px", height: "30px" }}
                          />
                        </Stack>
                      </Box>
                    </Box>
                    <Typography
                      sx={{
                        fontSize: "14px",
                        marginBottom: "15px",
                        marginTop: "5px",
                      }}
                    >
                      web
                    </Typography>
                  </Box> */}
                </Box>

                <Grid container spacing={1} sx={{my:2}}>
                      <Grid item xs={10}>
                      <Box>
                    <JoditEditor
                    value={content}
                    onChange={newContent => {setContent(newContent)}}
                    
                    />
                  </Box>
                      </Grid>
                      <Grid item xs={1}>
                      <Box>
                    <Box sx={{ marginBottom: "30px" }}>
                      <Typography
                        variant="caption"
                        sx={{
                          backgroundColor: "lightgrey",
                          padding: "5px",
                          borderRadius: "0.25rem",
                          fontWeight: "bold",
                        }}
                        onClick={handlediscuss}
                      >
                        Reply
                      </Typography>
                    </Box>
                    <Box sx={{ color: "#1688ca" }}>
                      <AttachmentSharpIcon />
                      <input type='file' onClick={(e)=>{
                             setdiscussdata({...discussdata,dfiledata:e.target.files[0]})
                      }}/>
                      <Typography variant="caption">Add</Typography>
                    </Box>
                  </Box>
                      </Grid>
                </Grid>
               
              </Grid>

             {
              thirdcomment &&
              <Grid item sx={3}>
             <Sidebar thirdcomment={thirdcomment} setthirdcomment={setthirdcomment} sidebardata={sidebardata}/>
             </Grid>
             }
            </Grid>
          </Container>
        </Grid>
      </Grid>
    </Container>
  </>
  );
}

export default Singlediscuss