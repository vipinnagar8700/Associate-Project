import { Avatar, Box, Container, Grid, Stack, Typography } from "@mui/material";
import React from "react";
import MenuIcon from "@mui/icons-material/Menu";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import AddAPhotoIcon from "@mui/icons-material/AddAPhoto";
import EmailIcon from "@mui/icons-material/Email";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import AddIcCallOutlinedIcon from "@mui/icons-material/AddIcCallOutlined";
import ForumOutlinedIcon from "@mui/icons-material/ForumOutlined";
import SettingsVoiceOutlinedIcon from "@mui/icons-material/SettingsVoiceOutlined";
import AlternateEmailOutlinedIcon from "@mui/icons-material/AlternateEmailOutlined";
import TwitterIcon from "@mui/icons-material/Twitter";
import CancelIcon from "@mui/icons-material/Cancel";
import { createGlobalStyle } from "styled-components";
import Pagination from "@mui/material/Pagination";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormHelperText from "@mui/material/FormHelperText";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

const Style = createGlobalStyle`
.iconlist,.close{
    visibility:hidden;
    
}
.boxes:hover{
    border:4px solid #ffad00;
    background-image: url(./img/firstreply.jpg);
    height:150px;
    padding:10px 0px;
}
.boxes:hover .iconlist{
    visibility:visible;
    
}
.boxes:hover .close{
    visibility:visible;
}
.boxes:hover .name{
    display:none;
}
li.MuiButtonBase-root.MuiMenuItem-root.MuiMenuItem-gutters.Mui-selected.MuiMenuItem-root.MuiMenuItem-gutters.Mui-selected.css-kk1bwy-MuiButtonBase-root-MuiMenuItem-root{
  display:none;
}
.css-11u53oe-MuiSelect-select-MuiInputBase-input-MuiOutlinedInput-input{
  padding:0px;
}
`;

const AllAssociates = () => {
  const [age, setAge] = React.useState("");

  const handleChange = (event) => {
    console.log("DJBVUFD");
    setAge(event.target.value);
  };
  return (
    <>
      <Style />
      <Container maxWidth="lg">
        <Box sx={{ padding: "15px" }}>
          <Box sx={{ backgroundColor: "#fff" }}>
            <Box
              sx={{
                backgroundColor: "#1688ca",
                color: "#fff",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                borderRadius: "unset",
                flexWrap: "wrap",
                paddingLeft: "10px",
                paddingRight: "10px",
                // padding: "6px 10px",
              }}
            >
              <Box>
              <FormControl sx={{ m: 1, minWidth:"60"}}>
                    <Select
                      value={age}
                      onChange={handleChange}
                      displayEmpty
                      inputProps={{ "aria-label": "Without label" }}
                    >
                      <MenuItem value="">
                        <em><MenuIcon /></em>
                      </MenuItem>
                      <MenuItem value={10}>Ten jlsdgvfiusgudi hgdhdh</MenuItem>
                      <MenuItem value={20}>Twenty</MenuItem>
                      <MenuItem value={30}>Thirty</MenuItem>
                    </Select>
                  </FormControl>
                 {/* <ExpandMoreIcon /> */}
                {/* <ExpandMoreIcon /> */}
              </Box>
              <Box sx={{ fontSize: "18px" }}>My Associates</Box>
              <Box>
                <AddAPhotoIcon />
                <ExpandMoreIcon />
              </Box>
            </Box>
            <Stack
              direction="row"
              sx={{
                justifyContent: "space-around",
                textAlign: "center",
                flexWrap: "wrap",
                padding: "10px",
              }}
            >
              <Box
                className="boxes"
                sx={{
                  width: "19.5%",
                  border: "4px solid transparent",
                  height: "100%",
                  marginBottom: "5px",
                  position: "relative",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    marginBottom: "10px",
                  }}
                >
                  <Avatar
                    sx={{ width: "80px", height: "80px" }}
                    alt="Remy Sharp"
                    src="./img/john.jpg"
                  />
                </Box>
                <Typography
                  className="name"
                  sx={{ fontSize: "14px", fontWeight: "bold" }}
                >
                  Chris Hepple
                </Typography>
                <Typography
                  className="name"
                  sx={{ fontSize: "14px", color: "#333" }}
                >
                  Biomed Manager
                </Typography>
                <Box
                  className="close"
                  sx={{ position: "absolute", right: ".5rem", top: ".3rem" }}
                >
                  <CancelIcon sx={{ color: "#fff" }} />
                </Box>
                <Box>
                  <Stack
                    className="iconlist"
                    direction="row"
                    sx={{
                      justifyContent: "center",
                      paddingTop: "2px",
                      paddingBottom: "5px",
                      marginTop: "10px",
                      flexWrap: "wrap",
                    }}
                    spacing={1}
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

              <Box
                className="boxes"
                sx={{
                  width: "19.5%",
                  border: "4px solid transparent",
                  height: "100%",
                  marginBottom: "5px",
                  position: "relative",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    marginBottom: "10px",
                  }}
                >
                  <Avatar
                    sx={{ width: "80px", height: "80px" }}
                    alt="Remy Sharp"
                    src="./img/2.png"
                  />
                </Box>
                <Typography
                  className="name"
                  sx={{ fontSize: "14px", fontWeight: "bold" }}
                >
                  Chris Hepple
                </Typography>
                <Typography
                  className="name"
                  sx={{ fontSize: "14px", color: "#333" }}
                >
                  Biomed Manager
                </Typography>
                <Box
                  className="close"
                  sx={{ position: "absolute", right: ".5rem", top: ".3rem" }}
                >
                  <CancelIcon sx={{ color: "#fff" }} />
                </Box>
                <Box>
                  <Stack
                    className="iconlist"
                    direction="row"
                    sx={{
                      justifyContent: "center",
                      paddingTop: "2px",
                      paddingBottom: "5px",
                      marginTop: "10px",
                      flexWrap: "wrap",
                    }}
                    spacing={1}
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

              <Box
                className="boxes"
                sx={{
                  width: "19.5%",
                  border: "4px solid transparent",
                  height: "100%",
                  marginBottom: "5px",
                  position: "relative",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    marginBottom: "10px",
                  }}
                >
                  <Avatar
                    sx={{ width: "80px", height: "80px" }}
                    alt="Remy Sharp"
                    src="img/3.png"
                  />
                </Box>
                <Typography
                  className="name"
                  sx={{ fontSize: "14px", fontWeight: "bold" }}
                >
                  Chris Hepple
                </Typography>
                <Typography
                  className="name"
                  sx={{ fontSize: "14px", color: "#333" }}
                >
                  Biomed Manager
                </Typography>
                <Box
                  className="close"
                  sx={{ position: "absolute", right: ".5rem", top: ".3rem" }}
                >
                  <CancelIcon sx={{ color: "#fff" }} />
                </Box>
                <Box>
                  <Stack
                    className="iconlist"
                    direction="row"
                    sx={{
                      justifyContent: "center",
                      paddingTop: "2px",
                      paddingBottom: "5px",
                      marginTop: "10px",
                      flexWrap: "wrap",
                    }}
                    spacing={1}
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
              <Box
                className="boxes"
                sx={{
                  width: "19.5%",
                  border: "4px solid transparent",
                  height: "100%",
                  marginBottom: "5px",
                  position: "relative",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    marginBottom: "10px",
                  }}
                >
                  <Avatar
                    sx={{ width: "80px", height: "80px" }}
                    alt="Remy Sharp"
                    src="img/4.jpg"
                  />
                </Box>
                <Typography
                  className="name"
                  sx={{ fontSize: "14px", fontWeight: "bold" }}
                >
                  Chris Hepple
                </Typography>
                <Typography
                  className="name"
                  sx={{ fontSize: "14px", color: "#333" }}
                >
                  Biomed Manager
                </Typography>
                <Box
                  className="close"
                  sx={{ position: "absolute", right: ".5rem", top: ".3rem" }}
                >
                  <CancelIcon sx={{ color: "#fff" }} />
                </Box>
                <Box>
                  <Stack
                    className="iconlist"
                    direction="row"
                    sx={{
                      justifyContent: "center",
                      paddingTop: "2px",
                      paddingBottom: "5px",
                      marginTop: "10px",
                      flexWrap: "wrap",
                    }}
                    spacing={1}
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

              <Box
                className="boxes"
                sx={{
                  width: "19.5%",
                  border: "4px solid transparent",
                  height: "100%",
                  marginBottom: "5px",
                  position: "relative",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    marginBottom: "10px",
                  }}
                >
                  <Avatar
                    sx={{ width: "80px", height: "80px" }}
                    alt="Remy Sharp"
                    src="img/5.jpg"
                  />
                </Box>
                <Typography
                  className="name"
                  sx={{ fontSize: "14px", fontWeight: "bold" }}
                >
                  Chris Hepple
                </Typography>
                <Typography
                  className="name"
                  sx={{ fontSize: "14px", color: "#333" }}
                >
                  Biomed Manager
                </Typography>
                <Box
                  className="close"
                  sx={{ position: "absolute", right: ".5rem", top: ".3rem" }}
                >
                  <CancelIcon sx={{ color: "#fff" }} />
                </Box>
                <Box>
                  <Stack
                    className="iconlist"
                    direction="row"
                    sx={{
                      justifyContent: "center",
                      paddingTop: "2px",
                      paddingBottom: "5px",
                      marginTop: "10px",
                      flexWrap: "wrap",
                    }}
                    spacing={1}
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

              <Box
                className="boxes"
                sx={{
                  width: "19.5%",
                  border: "4px solid transparent",
                  height: "100%",
                  marginBottom: "5px",
                  position: "relative",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    marginBottom: "10px",
                  }}
                >
                  <Avatar
                    sx={{ width: "80px", height: "80px" }}
                    alt="Remy Sharp"
                    src="img/4.jpg"
                  />
                </Box>
                <Typography
                  className="name"
                  sx={{ fontSize: "14px", fontWeight: "bold" }}
                >
                  Chris Hepple
                </Typography>
                <Typography
                  className="name"
                  sx={{ fontSize: "14px", color: "#333" }}
                >
                  Biomed Manager
                </Typography>
                <Box
                  className="close"
                  sx={{ position: "absolute", right: ".5rem", top: ".3rem" }}
                >
                  <CancelIcon sx={{ color: "#fff" }} />
                </Box>
                <Box>
                  <Stack
                    className="iconlist"
                    direction="row"
                    sx={{
                      justifyContent: "center",
                      paddingTop: "2px",
                      paddingBottom: "5px",
                      marginTop: "10px",
                      flexWrap: "wrap",
                    }}
                    spacing={1}
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

              <Box
                className="boxes"
                sx={{
                  width: "19.5%",
                  border: "4px solid transparent",
                  height: "100%",
                  marginBottom: "5px",
                  position: "relative",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    marginBottom: "10px",
                  }}
                >
                  <Avatar
                    sx={{ width: "80px", height: "80px" }}
                    alt="Remy Sharp"
                    src="img/4.jpg"
                  />
                </Box>
                <Typography
                  className="name"
                  sx={{ fontSize: "14px", fontWeight: "bold" }}
                >
                  Chris Hepple
                </Typography>
                <Typography
                  className="name"
                  sx={{ fontSize: "14px", color: "#333" }}
                >
                  Biomed Manager
                </Typography>
                <Box
                  className="close"
                  sx={{ position: "absolute", right: ".5rem", top: ".3rem" }}
                >
                  <CancelIcon sx={{ color: "#fff" }} />
                </Box>
                <Box>
                  <Stack
                    className="iconlist"
                    direction="row"
                    sx={{
                      justifyContent: "center",
                      paddingTop: "2px",
                      paddingBottom: "5px",
                      marginTop: "10px",
                      flexWrap: "wrap",
                    }}
                    spacing={1}
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

              <Box
                className="boxes"
                sx={{
                  width: "19.5%",
                  border: "4px solid transparent",
                  height: "100%",
                  marginBottom: "5px",
                  position: "relative",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    marginBottom: "10px",
                  }}
                >
                  <Avatar
                    sx={{ width: "80px", height: "80px" }}
                    alt="Remy Sharp"
                    src="img/2.png"
                  />
                </Box>
                <Typography
                  className="name"
                  sx={{ fontSize: "14px", fontWeight: "bold" }}
                >
                  Chris Hepple
                </Typography>
                <Typography
                  className="name"
                  sx={{ fontSize: "14px", color: "#333" }}
                >
                  Biomed Manager
                </Typography>
                <Box
                  className="close"
                  sx={{ position: "absolute", right: ".5rem", top: ".3rem" }}
                >
                  <CancelIcon sx={{ color: "#fff" }} />
                </Box>
                <Box>
                  <Stack
                    className="iconlist"
                    direction="row"
                    sx={{
                      justifyContent: "center",
                      paddingTop: "2px",
                      paddingBottom: "5px",
                      marginTop: "10px",
                      flexWrap: "wrap",
                    }}
                    spacing={1}
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

              <Box
                className="boxes"
                sx={{
                  width: "19.5%",
                  border: "4px solid transparent",
                  height: "100%",
                  marginBottom: "5px",
                  position: "relative",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    marginBottom: "10px",
                  }}
                >
                  <Avatar
                    sx={{ width: "80px", height: "80px" }}
                    alt="Remy Sharp"
                    src="./img/5.jpg"
                  />
                </Box>
                <Typography
                  className="name"
                  sx={{ fontSize: "14px", fontWeight: "bold" }}
                >
                  Chris Hepple
                </Typography>
                <Typography
                  className="name"
                  sx={{ fontSize: "14px", color: "#333" }}
                >
                  Biomed Manager
                </Typography>
                <Box
                  className="close"
                  sx={{ position: "absolute", right: ".5rem", top: ".3rem" }}
                >
                  <CancelIcon sx={{ color: "#fff" }} />
                </Box>
                <Box>
                  <Stack
                    className="iconlist"
                    direction="row"
                    sx={{
                      justifyContent: "center",
                      paddingTop: "2px",
                      paddingBottom: "5px",
                      marginTop: "10px",
                      flexWrap: "wrap",
                    }}
                    spacing={1}
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

              <Box
                className="boxes"
                sx={{
                  width: "19.5%",
                  border: "4px solid transparent",
                  height: "100%",
                  marginBottom: "5px",
                  position: "relative",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    marginBottom: "10px",
                  }}
                >
                  <Avatar
                    sx={{ width: "80px", height: "80px" }}
                    alt="Remy Sharp"
                    src="./img/john.jpg"
                  />
                </Box>
                <Typography
                  className="name"
                  sx={{ fontSize: "14px", fontWeight: "bold" }}
                >
                  Chris Hepple
                </Typography>
                <Typography
                  className="name"
                  sx={{ fontSize: "14px", color: "#333" }}
                >
                  Biomed Manager
                </Typography>
                <Box
                  className="close"
                  sx={{ position: "absolute", right: ".5rem", top: ".3rem" }}
                >
                  <CancelIcon sx={{ color: "#fff" }} />
                </Box>
                <Box>
                  <Stack
                    className="iconlist"
                    direction="row"
                    sx={{
                      justifyContent: "center",
                      paddingTop: "2px",
                      paddingBottom: "5px",
                      marginTop: "10px",
                      flexWrap: "wrap",
                    }}
                    spacing={1}
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
                <Box>
                  <Stack spacing={2}>
                    <Pagination count={3} color="primary" />
                  </Stack>
                  
                </Box>
              </Box>
            </Stack>
          </Box>
        </Box>
      </Container>
    </>
  );
};

export default AllAssociates;
