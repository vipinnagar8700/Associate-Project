import {
    Grid,
    Box,
    Stack,
    Avatar,
    Radio,
    Typography
  } from "@mui/material";
  import { useState } from "react";
  import JoditEditor from "jodit-react";
  import InfoSubHead from "../GlobalComponent/InfoSubHead";
  import StationFiles from './StationFiles'
import FileAdd from "./FileAdd";

 
const pointer = {cursor:"pointer"}
  const iconSize = {width:"30px",height:"30px",bgcolor:"transparent",p:"5px" };

const AddSessionReuse = ({minHeight}) => {
    const [selectedValue, setSelectedValue] = useState("a");
  const [systemfile, setSystemFile] = useState(false);
  const [choosefile, setChooseFile] = useState(false);

  const valueChange = (e) => {
    setSelectedValue(e.target.value);
  };

  return (
    <Grid
          item
          xs={12}
          sx={{ bgcolor: "#fff", py: 1, px: 2, minHeight:`${minHeight}`}}
        >
          <Box
            sx={{ bgcolor: "#e0daf8", padding: "5px", borderRadius: "0.25rem",position:"relative" }}
          >
            <Grid container spacing={1}>
              <Grid item xs={12}>
                <Box>
                  <JoditEditor />
                </Box>
                <Box sx={{ px: 1, pt: 1 }}>
                  <Stack
                    direction="row"
                    sx={{ justifyContent: "space-between" }}
                  >
                    <Box>
                      <Stack
                        direction="row"
                        spacing={0}
                        sx={{ justifyContent: "center", alignItems: "center" }}
                      >
                        <Avatar src="./img/sttfile.svg" sx={iconSize} onClick={()=>{setChooseFile(!choosefile)}} />
                        <Radio
                          size="small"
                          checked={selectedValue === "a"}
                          onChange={valueChange}
                          onClick={() => setSystemFile(false)}
                          value="a"
                          name="radio-buttons"
                          inputProps={{ "aria-label": "A" }}
                          sx={{ p: 0 }}
                        />
                        <Avatar
                          src="./img/down-transparent.png"
                          sx={iconSize}
                        />
                      </Stack>
                    </Box>

                    <Box>
                      <Stack
                        direction="row"
                        sx={{ justifyContent: "space-between" }}
                      >
                        <Avatar
                          sx={iconSize}
                        ><img src="./img/fileupld.png" className="w-100 img-fluid"/></Avatar>
                        <Radio
                          size="small"
                          checked={selectedValue === "b"}
                          onChange={valueChange}
                          onClick={() => setSystemFile(true)}
                          value="b"
                          name="radio-buttons"
                          inputProps={{ "aria-label": "B" }}
                          sx={{ p: 0 }}
                        />
                      </Stack>
                    </Box>

                    <Box>
                      <Avatar src="./img/sends.png" sx={iconSize} />
                    </Box>
                  </Stack>
                </Box>
                <Box sx={{position:"relative" }}>
                  
                {/* {systemfile && (
                <Box
                  sx={{
                    position: "absolute",
                    left: 0,
                    top: 0,
                    right: 0,
                    zIndex: 99,
                  }}
                >
                  <SystemFileSeven
                    setSystemFile={setSystemFile}
                    systemfile={systemfile}
                  />
                </Box>
              )} */}

                {systemfile && (
                <Box
                  sx={{
                    position: "absolute",
                    left: 0,
                    top: 0,
                    right: 0,
                    zIndex: 99,
                  }}
                >
                  <Grid item xs={12}>
                    <Box>
                      <InfoSubHead
                        urlname1={"Station Files"}
                        urlname={
                          <Typography
                            sx={pointer}
                            onClick={() => setSystemFile(!systemfile)}
                          >
                            X
                          </Typography>
                        }
                        backgroundColor={"#1688ca"}
                        color={"#fff"}
                      />
                    </Box>
                  </Grid>
                  <StationFiles
                    setSystemFile={setSystemFile}
                    systemfile={systemfile}
                  />
                </Box>
              )}
                </Box>
                
              </Grid>
            </Grid>
           {choosefile &&
             <Box sx={{position:"absolute",top:"100%",bgcolor:"#d9d9d9",p:2}}>
             <FileAdd/>
           </Box>
           }
          </Box>

         
                          
             
            </Grid>

          

         
  )
}

export default AddSessionReuse