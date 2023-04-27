import React from "react";
import {Avatar,Box,Grid,Stack,Typography} from "@mui/material";
import InfoSubHead from "../../../../GlobalComponent/GlobalComponent/InfoSubHead";
import StationFIlesData from "./StationFilesData";

const StationFiles = () => {
  return (
    <Box>
      <Box><InfoSubHead name={"Station Files"} backgroundColor={"#d2dee8"} color={"#000"} /> </Box>

      <Box sx={{ backgroundColor: "#fff", padding: "3px" }}>
        {StationFIlesData.map((p) => {
          const { id, name, img1, img2, img3,imgsize } = p;
          return (
            <Grid container sx={{ padding: "0px 0px 5px 0px" }} key={id}>
              <Grid item xs={8}>
                <Box sx={{ backgroundColor: "#E1F8F9", padding: "5px 10px" }}>
                  <Grid container>
                    <Grid item xs={9}>
                      <Typography
                        variant="caption"
                        sx={{
                          color: "#1688ca",
                          ":hover": { textDecoration: "underline" },
                        }}
                      >
                        {name}
                      </Typography>
                    </Grid>
                    <Grid item xs={2}>
                      <Stack
                        direction="row"
                        spacing={1}
                        sx={{
                          justifyContent: "center",
                          alignItems: "center",
                          height: "100%",
                        }}
                      >
                        <Avatar
                          sx={{
                            width: "20px",
                            height: "20px",
                            backgroundColor: "transparent",
                            color: "#1688ca",
                            fontSize: "13px",
                          }}
                        >
                          {img1}
                        </Avatar>

                        <Avatar
                          sx={{ width: "20px", height: "20px" }}
                          variant="rounded"
                          src={img2}
                        />

                        <Avatar
                          sx={{ width: "20px", height: "20px" }}
                          src={img3}
                        />
                      </Stack>
                    </Grid>
                  </Grid>
                </Box>
              </Grid>

              <Grid item xs={4}>
                <Box
                  sx={{
                    height: "100%",
                    display: "flex",
                    alignItems: "center",
                    padding: "5px",
                  }}
                >
                  <Typography variant="caption">{imgsize}</Typography>
                </Box>
              </Grid>
            </Grid>
          );
        })}
      </Box>
    </Box>
  );
};

export default StationFiles;
