import React, { useState } from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import MenuIcon from "@mui/icons-material/Menu";
import { ProfileImg } from "./Profile_style";
import Modal from '@mui/material/Modal';
import {
  Divider,
  Link,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Typography,
} from "@mui/material";
import Progress from "./CIrcleProgressBar";
import ExpandCircleDownIcon from "@mui/icons-material/ExpandCircleDown";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import EmailIcon from "@mui/icons-material/Email";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import AddIcCallOutlinedIcon from "@mui/icons-material/AddIcCallOutlined";
import ForumOutlinedIcon from "@mui/icons-material/ForumOutlined";
import SettingsVoiceOutlinedIcon from "@mui/icons-material/SettingsVoiceOutlined";
import AlternateEmailOutlinedIcon from "@mui/icons-material/AlternateEmailOutlined";
import TwitterIcon from "@mui/icons-material/Twitter";
import { FaLinkedinIn, FaFacebookF } from "react-icons/fa";
import { profile, profileImg } from "./Profile_style";
import {createGlobalStyle} from 'styled-components'
import AddComment from "./AddComment";
const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
}));
const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const Bgimg = createGlobalStyle
`
.bgimg{
  background-Image:url(./img/profilebg.jpg);
 height:329px;
    position: absolute;
    left: 0;
    width: 100%;
    z-index: -1;
    background-repeat: no-repeat;
    background-size: cover;
}
`;

const Profile = () => {
  const [hovereffect , setHoverEffect]=useState({  e:true ? true :false ,name:""})
  const[showdropdown , setShowDropdown]= useState(false)
  // const[addcomment , setAddComment]= useState(false)
  const [open, setOpen] = useState(false);
 console.log(setOpen);
  
  return (
    <>
    <Bgimg/>
    <Box className="bgimg"></Box>
      <Box sx={{ flexGrow: 1, marginTop: "50px" }}>
        <Grid
          container
          spacing={0}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexWrap:'wrap',
          }}
        >
          <Grid item xs={10}>
            <Item
              sx={{
                backgroundColor: "#1688ca",
                color: "#fff",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                borderRadius: "unset",
                flexWrap:'wrap',
              }}
            >
              <Box sx={{position:'relative', minWidth: 360}} >
                <MenuIcon sx={{marginLeft:'5px'}} onClick={()=>{setShowDropdown(!showdropdown)}}/>
                {showdropdown &&
                  <Box sx={{position:'absolute',top:'100%',marginTop:'10px',left:'-7.8px'}}>
                  <List
                    sx={{
                      width: "100%",
                      maxWidth: 360,
                      bgcolor: "#fff",
                      boxShadow:'1px 1px 5px rgba(0,0,0,.4)',
                    }}
                  >
                    <ListItem sx={{padding:'0px 16px'}}>
                      <ListItemText primary="Directory" sx={{color:'#000'}} />
                    </ListItem>
                    <Divider  sx={{border:'1px solid #1688ca',opacity:'1'}}/>
                    <ListItem sx={{padding:'0px 16px'}}>
                      <ListItemText primary="My Associates" sx={{color:'#000'}} />
                    </ListItem>
                    <Divider  sx={{border:'1px solid #1688ca',opacity:'1'}}/>
                    <ListItem sx={{padding:'0px 16px'}}>
                      <ListItemText primary="Associate Bio's" sx={{color:'#000'}}  />
                    </ListItem>
                    <Divider  sx={{border:'1px solid #1688ca',opacity:'1'}}/>
                  </List>
                </Box>
                }
                
              </Box>
              <Box sx={{ fontSize: "20px", color: "#fff" }}>
                Associates Profile
              </Box>
              <Stack direction="row" spacing={2}>
                <Avatar
                  sx={{
                    backgroundColor: "#fff",
                    fontSize: "12px",
                    width: "22px",
                    height: "22px",
                    color: "black",
                  }}
                >
                  AA
                </Avatar>
                <Avatar
                  sx={{
                    backgroundColor: "#fff",
                    fontSize: "12px",
                    width: "22px",
                    height: "22px",
                    color: "black",
                  }}
                >
                  SP
                </Avatar>
              </Stack>
            </Item>
            <Box sx={{ flexGrow: 1, display: "flex" }}>
              <Grid item xs={8} sx={{ borderRadius: "unset" }}>
                <Item
                  sx={{
                    backgroundImage: "url(./img/profile-img.jpg)",
                    backgroundBlendMode: "overlay",
                    backgroundColor: "rgba(0,0,0,.5)",
                    backgroundSize: "cover",
                    color: "#fff",
                    borderRadius: "unset",
                    padding:'0'
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      paddingTop: "10px",
                      padding: "10px 1rem 0 1rem",
                      flexWrap:'wrap',
                    }}
                  >
                    <Box>
                      <Typography sx={{ fontSize: "12px" }}>
                        puja patel
                      </Typography>
                      <Typography sx={{ fontSize: "14px" }}>
                        IT Technician
                      </Typography>
                      <Typography sx={{ fontSize: "14px" }}>
                        mpujapatel@gmail.com
                      </Typography>
                      <Typography sx={{ fontSize: "14px" }}>
                        Department Name
                      </Typography>
                      <Typography sx={{ fontSize: "14px" }}>
                        Street Address*
                      </Typography>
                      <Typography sx={{ fontSize: "12px" }}>City*</Typography>
                      <Typography sx={{ fontSize: "12px" }}>State*</Typography>
                      <Typography sx={{ fontSize: "12px" }}>787878</Typography>
                      <Typography sx={{ fontSize: "12px" }}>
                        6786875756756
                      </Typography>
                      <Typography sx={{ fontSize: "12px" }}>
                        Company Name
                      </Typography>
                    </Box>
                    <Box>
                      <Box
                        sx={{
                          display: "flex",
                          justifyContent: "center",
                          gap: "50px",
                          flexWrap:'wrap',
                        }}
                      >
                        <Box>
                          {" "}
                          <Progress data={1} />
                          <Typography sx={{ fontSize: "12px" }}>
                            Tenure
                          </Typography>
                        </Box>
                        <Box>
                          {" "}
                          <Progress data={1} />
                          <Typography sx={{ fontSize: "12px" }}>
                            Training
                          </Typography>
                        </Box>
                        <Box>
                          {" "}
                          <Progress data={6} />
                          <Typography sx={{ fontSize: "12px" }}>
                            Experience
                          </Typography>
                        </Box>
                      </Box>
                      <Box
                        sx={{
                          textAlign: "center",
                          marginTop: "15px",
                          marginBottom: "15px",
                        }}
                      >
                        <Typography>Accomplishments</Typography>
                      </Box>
                      <Box
                        sx={{
                          display: "flex",
                          justifyContent: "center",
                          gap: "10px",
                        }}
                      >
                        <Stack direction="row" spacing={2}>
                          <Avatar
                            sx={{ height: "35px", width: "35px" }}
                            variant="rounded"
                            src="./img/john.jpg"
                          />
                          <Avatar
                            sx={{ height: "35px", width: "35px" }}
                            variant="rounded"
                            src="./img/john.jpg"
                          />
                        </Stack>
                      </Box>
                    </Box>
                  </Box>
                  <Stack sx={{ paddingTop: "10px", paddingLeft: '17px' }}>
                    <Avatar variant="rounded" src="./img/invite.png" />
                  </Stack>
                  <Stack sx={{ textAlign: "center" }}>
                    <Typography>
                      Recognize Your Associate <ExpandCircleDownIcon onClick={()=>setOpen(true)}  />
                      {open &&
                    <AddComment open={open} setOpen={setOpen}/>
}
                    </Typography>
                  </Stack>
                  <Stack direction="row">
                    <Grid xs={2}>
                      <ImageList sx={{ width: 100 }} cols={1} rowHeight={100}>
                        <ImageListItem>
                          <img src="./img/puja1.png" loading="Puja" />
                        </ImageListItem>
                      </ImageList>
                    </Grid>
                    <Grid xs={10} sx={{padding:'5px'}}>
                      <Item
                        sx={{
                          backgroundColor: "transparent",
                          boxShadow: "none",
                          color: "#fff",
                        }}
                      >
                        Puja, you were amazing in getting all our IT equipment
                        back up after the power outage today. That was so
                        helpful. Thanks again Pat Link, Mar 19, 2019
                      </Item>
                      <Divider  sx={{border:'1px solid #fff',opacity:'1'}}/>
                    </Grid>
                  </Stack>
                </Item>
              </Grid>

              <Grid item xs={4}>
                <Item sx={{ borderRadius: "unset", backgroundColor: "Black" }}>
                  <Box>
                    <Typography sx={{ textAlign: "center", color: "#fff" }}>
                      Contact Associate
                    </Typography>
                    <Stack
                      direction="row"
                      sx={{
                        justifyContent: "center",
                        paddingTop: "2px",
                        paddingBottom: "2px",
                        backgroundColor: "grey",
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
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      paddingTop: "10px",
                      paddingBottom: "0",
                      flexWrap:'wrap',
                    }}
                  >
                    <Box>
                      {" "}
                      <Avatar
                        sx={{
                          backgroundColor: "#fff",
                          fontSize: "12px",
                          width: "22px",
                          height: "22px",
                          color: "black",
                        }}
                      >
                        PA
                      </Avatar>
                    </Box>
                    <Typography sx={{ color: "#fff" }}>
                      Member of these Stations{" "}
                    </Typography>
                    <Box>
                      <ExpandCircleDownIcon sx={{ color: "#fff" }} />
                    </Box>
                  </Box>
                </Item>
                <Box
                  sx={{
                    backgroundColor: "#fff",
                    padding: "5px",
                    marginTop: "2px",
                    maxHeight:'260px',
                    overflowY:'scroll'
                  }}
                >
                  <ImageList sx={{ width: "100%"}} cols={2} rowHeight={124}>
                    <ImageListItem  sx={{position:'relative'}} onMouseEnter={( e)=> {setHoverEffect({e:true,name:e.target.name="community"})} }onMouseLeave={( e)=> {setHoverEffect({e:true,name:e.target.name=""})} } 
                    
                    >
                      <img
                        src="./img/stations8.png"
                        loading="Puja"
                        sx={{
                          width: "100%",
                          height: "100%",
                          objectFit: "cover",
                        }}
                      />
                     
                        { hovereffect.name ==="community"  && 
                          <ProfileImg name="community">
                          <Box>
                          <Typography>community</Typography>
                          <Typography>30 Members</Typography>
                          </Box>
                        </ProfileImg>
                        }
                        
                     
                    </ImageListItem>
                    <ImageListItem onMouseEnter={( e)=> {setHoverEffect({e:true,name:e.target.name="employee engagement"})} }onMouseLeave={( e)=> {setHoverEffect({e:true,name:e.target.name=""})} } >
                      <img
                        src="./img/stations3.jpg"
                        loading="Puja"
                        sx={{
                          width: "100%",
                          height: "100%",
                          objectFit: "cover",
                        }}
                      />
                     
                     { hovereffect.name ==="employee engagement"  && 
                          <ProfileImg name="employee engagement">
                          <Box>
                          <Typography>employee engagement</Typography>
                          <Typography>7 Members</Typography>
                          </Box>
                        </ProfileImg>
                        }
                        
                        
                    </ImageListItem>
                    <ImageListItem onMouseEnter={( e)=> {setHoverEffect({e:true,name:e.target.name="Hospital Safety"})} }onMouseLeave={( e)=> {setHoverEffect({e:true,name:e.target.name=""})} }>
                      <img
                        src="./img/stations3.jpg"
                        loading="Puja"
                        sx={{
                          width: "100%",
                          height: "100%",
                          objectFit: "cover",
                        }}
                      />

{ hovereffect.name ==="Hospital Safety"  && 
                          <ProfileImg name="Hospital Safety">
                          <Box>
                          <Typography>Hospital Safety</Typography>
                          <Typography>13 Members</Typography>
                          </Box>
                        </ProfileImg>
                        }
                    </ImageListItem>
                    <ImageListItem onMouseEnter={( e)=> {setHoverEffect({e:true,name:e.target.name="Human Resources"})} }onMouseLeave={( e)=> {setHoverEffect({e:true,name:e.target.name=""})} }>
                      <img
                        src="./img/stations3.jpg"
                        loading="Puja"
                        sx={{
                          width: "100%",
                          height: "100%",
                          objectFit: "cover",
                        }}
                        
                      />
                      { hovereffect.name ==="Human Resources"  && 
                          <ProfileImg name="Human Resources">
                          <Box>
                          <Typography>Human Resources</Typography>
                          <Typography>10 Members</Typography>
                          </Box>
                        </ProfileImg>
                        }
                    </ImageListItem>
                    <ImageListItem onMouseEnter={( e)=> {setHoverEffect({e:true,name:e.target.name="Deepak"})} }onMouseLeave={( e)=> {setHoverEffect({e:true,name:e.target.name=""})} }>
                      <img
                        src="./img/stations3.jpg"
                        loading="Puja"
                        sx={{
                          width: "100%",
                          height: "100%",
                          objectFit: "cover",
                        }}
                        
                      />
                      { hovereffect.name ==="Deepak"  && 
                          <ProfileImg name="Deepak">
                          <Box>
                          <Typography>Deepak</Typography>
                          <Typography>10 Members</Typography>
                          </Box>
                        </ProfileImg>
                        }
                    </ImageListItem>
                  </ImageList>
                </Box>
              </Grid>
            </Box>
          </Grid>
        </Grid>
      </Box>

      <Box sx={{ flexGrow: 1, marginTop: "5px" }}>
        <Grid
          container
          spacing={0}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexWrap:'wrap',
          }}
        >
          <Grid item xs={10}>
            <Item
              sx={{
                backgroundImage: "url(./img/binary-3441007_640.jpg)",
                backgroundBlendMode: "overlay",
                backgroundColor: "rgba(0,0,0,.5)",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                color: "#fff",
                borderRadius: "unset",
                padding: "1rem",
              }}
            >
              <Box sx={{ paddingBottom: "50px" }}>
                <Typography sx={{ fontWeight: "bold" }}>puja's Bio</Typography>
                <Typography>
                  10 years experience in IT projects and program implementation
                  in healthcare, Worked on all types of IT projects and programs
                  initiatives. Work with leadership on program implementation.
                  Experienced on complex IT projects in numerous hospitals.
                </Typography>
              </Box>
              <Box sx={{ paddingBottom: "15px" }}>
                <Typography sx={{ fontWeight: "bold" }}>Skills</Typography>
                <Typography>
                  IT skilled in project management for hospitals throughout the
                  west coast
                </Typography>
              </Box>
              <Box sx={{ paddingBottom: "15px" }}>
                <Typography sx={{ fontWeight: "bold" }}>Projects</Typography>
                <Typography>
                  Smart room technology and electronic health records
                </Typography>
              </Box>
              <Box sx={{ paddingBottom: "15px" }}>
                <Typography>
                  Video Link<Link href="#"> http://www.youtube.com</Link>
                </Typography>
              </Box>

              <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                <Box>
                  <Typography>
                    Link <Link href="#"> http://wwww/ashe.com</Link>
                  </Typography>
                </Box>
                <List sx={{ padding: "0px" }}>
                  <ListItem sx={{ padding: "0px" }}>
                    <ListItemButton sx={{ padding: "0px 8px" }}>
                      <Avatar
                        sx={{
                          backgroundColor: "#fff",
                          color: "#000",
                          width: "32px",
                          height: "32px",
                        }}
                      >

                        <FaFacebookF sx={{ width: "20px", height: "20px" }} />
                      </Avatar>
                    </ListItemButton>
                    <ListItemButton sx={{ padding: "0px 8px" }}>
                      <Avatar
                        sx={{
                          backgroundColor: "#fff",
                          color: "#000",
                          width: "32px",
                          height: "32px",
                        }}
                      >
                        <FaLinkedinIn sx={{ width: "20px", height: "20px" }} />
                      </Avatar>
                    </ListItemButton>
                    <ListItemButton sx={{ padding: "0px 8px" }}>
                      <Avatar
                        sx={{
                          backgroundColor: "#fff",
                          color: "#000",
                          width: "32px",
                          height: "32px",
                        }}
                      >
                        <TwitterIcon sx={{ width: "20px", height: "20px" }} />
                      </Avatar>
                    </ListItemButton>
                  </ListItem>
                </List>
              </Box>
            </Item>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default Profile;
