import {
  Avatar,
  Box,
  Container,
  Grid,
  Stack,
  InputBase,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import InfoHead from "./InfoPages/InfoHead";
import InfoSubHead from "../../../GlobalComponent/GlobalComponent/InfoSubHead";
import GroupContent from "./InfoPages/GroupContent";
import SSContent from "./InfoPages/SSContent";
import AddComment from "../../../../src/components/AssociatesProfile/AddComment";
import CameraAltIcon from "@mui/icons-material/CameraAlt";
import Icon from "../../../GlobalComponent/GlobalComponent/Icon";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import SmallBox from "../../../GlobalComponent/GlobalComponent/SmallBox";
import RecognizeText from "./InfoPages/RecognizeText";
import RadioGroup from "../../../GlobalComponent/GlobalComponent/RadioGroup";
import NewSession from "../Pages/NewSession";

const InfoTech = () => {
  const [open, setOpen] = useState(false);
  const [show, setShow] = useState(true);
  const [showrecognize, setShowRecognize] = useState(true);
  const [showRate, setShowRate] = useState(true);


   // New session
const [newsess, setnewsess] = useState(false )




  return (

    
   
    <>
    <Box>

      <Grid container>
        <Grid item xs={10} className="position-relative">
          {
            <AddComment
              name="Station Focus Statement"
              text="Our team works with all hospital departments on IT needs. We plan for the future with integration"
              open={open}
              setOpen={setOpen}
            />
          }
        </Grid>
        <Grid item xs={12}>
          <Box>
            <InfoHead />
          </Box>
        </Grid>

        <Grid item xs={12}>
          <Box onClick={() => setOpen(true)}>
            <InfoSubHead
              name={"Station Statement"}
              backgroundColor={"#d2dee8"}
              color={"#000"}
            />
          </Box>
        </Grid>

        <Grid item xs={12}>
          <Box sx={{ py: 1, backgroundColor: "#fff" }}>
            <GroupContent
              content={
                "Our team works with all hospital departments on IT needs. We plan for the future with integration"
              }
            />
          </Box>
        </Grid>

        <Grid item xs={12}>
          <Box>
            <InfoSubHead
              name={"Station Associates"}
              backgroundColor={"#d2dee8"}
              color={"#000"}
              urlname={<CameraAltIcon />}
              urlname1={<Icon url="./img/substationicon1.png" />}
            />
          </Box>
        </Grid>

        <Grid item xs={12}>
          <Box sx={{ bgcolor: "#fff" }}>
            <GroupContent
              content={
                <Stack direction="row" spacing={2} sx={{ alignItems: "center", pt: 1 }} >
                  <Avatar src="./img/john.jpg" />
                  <Avatar src="/img/Picture1.png" />
                  <Avatar src="./img/puja1.png" />
                  <Avatar src="./img/john.jpg" />
                </Stack>
              }
            />
          </Box>
        </Grid>

        <Grid item xs={12}>
          <Box>
            <InfoSubHead
              name={<Typography onClick={()=>{setnewsess(!newsess)}}>Station Sessions</Typography>}
              backgroundColor={"#d2dee8"}
              color={"#000"}
              urlname1={<Icon url="./img/playicon.png" />}
              urlname={<Icon url="./img/watch.png" />}
              
            />
            {
              newsess && 
              <NewSession newsess={newsess} setnewsess={setnewsess}/>
            }
          </Box>
        </Grid>

        <Grid item xs={12}>
          <Box >
            <SSContent />
          </Box>
        </Grid>

        <Grid item xs={12}>
          <Box>
            <InfoSubHead
              name={"Station Updates"}
              backgroundColor={"#d2dee8"}
              color={"#000"}
              urlname={<AddCircleIcon onClick={() => setShow(!show)} />}
              urlname1={<SmallBox border={"2px solid black"} value={2} />}
            />
          </Box>
          {show ? (
            <Box sx={{ backgroundColor: "#fff", padding: "5px" }}></Box>
          ) : (
            <Box sx={{ py: 1, backgroundColor: "#fff" }}>
              <GroupContent
                content={"By: John S Smith Posted On: Apr 03, 2023"}
              />
              <GroupContent
                content={
                  "Reviewing software patch upgrade for nurse call system. By: John S Smith Posted On: Oct 15, 2016"
                }
              />
            </Box>
          )}
        </Grid>

        <Grid item xs={12}>
          <Box>
            <InfoSubHead
              name={"Recognize Your Associate"}
              backgroundColor={"#d2dee8"}
              color={"#000"}
              urlname={
                <AddCircleIcon
                  onClick={() => setShowRecognize(!showrecognize)}
                />
              }
            />
          </Box>
          {showrecognize ? (
            <Box sx={{ backgroundColor: "#fff", padding: "5px" }}></Box>
          ) : (
            <Box sx={{ backgroundColor: "#fff" }}>
              <RecognizeText />
            </Box>
          )}
        </Grid>

        <Grid item xs={12} sx={{ mb: 1 }}>
          <Box>
            <InfoSubHead
              name={"Rate This Station"}
              backgroundColor={"#d2dee8"}
              color={"#000"}
              urlname={<AddCircleIcon onClick={() => setShowRate(!showRate)} />}
              urlname1={
                <Stack direction="row" spacing={1}>
                  {" "}
                  <SmallBox value={"80%"} />{" "}
                  <ArrowUpwardIcon color="success" />
                </Stack>
              }
            />
          </Box>
          {showRate ?
            <Box sx={{ backgroundColor: "#fff", padding: "5px" }}></Box> :
            <Container sx={{ bgcolor: "#fff", py: 1 }}>
              <Grid container>
                <Grid item xs={12}>
                  <Stack
                    direction="row"
                    sx={{
                      justifyContent: "space-between",
                    }}
                  >
                    <Box>
                      <Typography variant="subtitle2" color="initial">
                        Vote: 7 out of 10 ( 70%)
                      </Typography>
                    </Box>
                    <Box>
                      <RadioGroup />
                      <Stack
                        direction="row"
                        sx={{
                          justifyContent: "space-between",
                          alignItems: "center",
                          margin: "3px 0"
                        }}
                      >
                        <Box>
                          <Typography
                            sx={{ fontSize: "10px", fontWeight: "bold" }}
                          >
                            Least Effective
                          </Typography>
                        </Box>
                        <Box>
                          <Typography
                            sx={{ fontSize: "10px", fontWeight: "bold" }}
                          >
                            Most Effective
                          </Typography>
                        </Box>
                      </Stack>
                    </Box>
                  </Stack>
                </Grid>
              </Grid>
            </Container>
          }


        </Grid>
      </Grid>
    </Box>
    </>
  );
};

export default InfoTech;
