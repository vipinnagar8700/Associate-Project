import { Avatar, Box, Grid, Slider, Stack, Typography } from "@mui/material";
import React from "react";
import { createGlobalStyle } from "styled-components";
import InfoSubHead from "../../../GlobalComponent/GlobalComponent/InfoSubHead";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import StationFiles from "./StationPhotoPages/StationFiles";
import TaskBoard from "./StationPhotoPages/TaskBoard";
import Photo from "./StationPhotoPages/Photo";
import EmailIcon from "@mui/icons-material/Email";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import KeyboardVoiceIcon from "@mui/icons-material/KeyboardVoice";
import ForumIcon from "@mui/icons-material/Forum";


const Style = createGlobalStyle`

.boxes{
    border:4px solid #ffad00;    
}
.prges1 .css-eg0mwd-MuiSlider-thumb:before{
  content:"56";
  color:#fff;
  font-size: 12px;
    text-align: center;
    vertical-align: middle;
    line-height: 20px;

}
.prges2 .css-eg0mwd-MuiSlider-thumb:before{
  content:"69";
  color:#fff;
  font-size: 12px;
  text-align: center;
  vertical-align: middle;
  line-height: 20px;

}

`;

const StationPhotos = () => {
  return (
    <>
      <Style />

      <Box>
        <Box sx={{ backgroundColor: "#fff" }}>
          <Box>
            <InfoSubHead
              name={"Station Photos"}
              backgroundColor={"#1688ca"}
              color={"#fff"}
              urlname={<ArrowDropDownIcon />}
            />
          </Box>

          <Box>
            <Photo />
          </Box>

          <Box>
            <InfoSubHead
              name={"Station Boards Progress Report"}
              backgroundColor={"#d2dee8"}
              color={"#000"}
              urlname={<ArrowDropDownIcon />}
              urlname1={
                <Avatar
                  sx={{
                    width: "20px",
                    height: "20px",
                    fontSize: "10px",
                    bgcolor: "#000",
                    color: "#fff",
                    fontWeight: "bold",
                  }}
                >
                  AB
                </Avatar>
              }
            />
            <Stack
              className="prges1"
              direction="row"
              sx={{
                justifyContent: "space-between",
                padding: "13px 5px 5px 5px",
                borderBottom: "1.5px solid #d2dee8",
              }}
            >
              <Stack
                direction="row"
                sx={{
                  justifyContent: "center",
                  alignItems: "center",
                  pb: 1,
                  color: "#1688ca",
                  ":hover": { textDecoration: "underline" },
                }}
              >
                <ArrowDropDownIcon />
                <Typography variant="subtitle2"> Cerner Upgrade</Typography>
              </Stack>
              <Box width={300}>
                <Slider
                  size="large"
                  defaultValue={50}
                  aria-label="Default"
                  valueLabelDisplay="off"
                />
              </Box>
            </Stack>

            <Stack
              className="prges2"
              direction="row"
              sx={{
                justifyContent: "space-between",
                padding: "13px 10px 5px 10px",
                borderBottom: "1.5px solid #d2dee8",
              }}
            >
              <Stack
                direction="row"
                spacing={1}
                sx={{
                  justifyContent: "center",
                  alignItems: "center",
                  pb: 1,
                  color: "#1688ca",
                  ":hover": { textDecoration: "underline" },
                }}
              >
                <ArrowDropDownIcon
                  sx={{
                    border: "1px solid #1688ca",
                    borderRadius: "50%",
                    width: "15px",
                    height: "15px",
                  }}
                />
                <Typography variant="subtitle2"> Help Desk</Typography>
              </Stack>
              <Box width={300}>
                <Slider
                  size="large"
                  defaultValue={50}
                  aria-label="Default"
                  valueLabelDisplay="off"
                />
              </Box>
            </Stack>

            <Stack
              direction="row"
              sx={{ justifyContent: "space-between", padding: "20px 0" }}
            ></Stack>
          </Box>

          <Box>
            <StationFiles />
          </Box>

          <Box>
            <TaskBoard />
          </Box>

          <Box>
            <Box>
              <InfoSubHead
                name={"Add/View Station Messages"}
                backgroundColor={"#d2dee8"}
                color={"#000"}
              />
            </Box>
            <Box sx={{ backgroundColor: "#fff", p: 1 }}>
              <Grid container>
                <Grid item xs={5}>
                  <Stack
                    direction="row"
                    spacing={1}
                    sx={{
                      justifyContent: "center",
                      alignItems: "center",
                      backgroundColor: "rgba(0,0,0,.2)",
                      height: "100%",
                      padding: "0px",
                    }}
                  >
                    <Box>
                      <EmailIcon
                        sx={{
                          borderRadius: "50%",
                          border: "2px solid #fff",
                          padding: "2px",
                          color: "#fff",
                          width: "35px",
                          height: "35px",
                        }}
                      />
                    </Box>
                    <Box>
                      <MailOutlineIcon
                        sx={{
                          borderRadius: "50%",
                          border: "2px solid #1688ca",
                          padding: "2px",
                          color: "#fff",
                          width: "35px",
                          height: "35px",
                        }}
                      />
                    </Box>
                  </Stack>
                </Grid>
                <Grid item xs={2}>
                  <Box
                    sx={{ maxHeight: "65px", maxWidth: "65px", padding: "5px" }}
                  >
                    <Avatar
                      variant="rounded"
                      src="./img/pdf.png"
                      sx={{ width: "100%", height: "100%", objectFit: "cover" }}
                    />
                  </Box>
                </Grid>
                <Grid item xs={5}>
                  <Stack
                    direction="row"
                    spacing={1}
                    sx={{
                      justifyContent: "center",
                      alignItems: "center",
                      backgroundColor: "rgba(0,0,0,.2)",
                      height: "100%",
                      padding: "0px",
                    }}
                  >
                    <Box>
                      <KeyboardVoiceIcon
                        sx={{
                          borderRadius: "50%",
                          border: "2px solid #fff",
                          padding: "2px",
                          color: "#fff",
                          width: "35px",
                          height: "35px",
                        }}
                      />
                    </Box>
                    <Box>
                      <ForumIcon
                        sx={{
                          borderRadius: "50%",
                          border: "2px solid #fff",
                          padding: "2px",
                          color: "#fff",
                          width: "35px",
                          height: "35px",
                        }}
                      />
                    </Box>
                  </Stack>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default StationPhotos;
