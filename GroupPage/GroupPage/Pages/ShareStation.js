import React from "react";
import {
  Container,
  Grid,
  Box,
  Typography,
  Button,
  TextareaAutosize,
  InputBase,
} from "@mui/material";
import { Link } from "react-router-dom";

const ShareStation = () => {
  return (
    <>
      <Container maxWidth="lg" sx={{ mt: 3 }}>
        <Grid container sx={{ px: 2 }}>
          <Grid item xs={12}>
            <Box
              sx={{ display: "flex", justifyContent: "space-between", mb: 2 }}
            >
              <Box>
                <Typography sx={{ fontSize: "18px", color: "#1280c2" }}>
                  Share Station
                </Typography>
              </Box>
              <Box>
                <Link to="/group">
                  <Button size="small" className="btn btn-primary">
                    Back
                  </Button>
                </Link>
              </Box>
            </Box>
          </Grid>

          <Grid item xs={12} sx={{ bgcolor: "#fff",p:3 }}>
            <Grid container sx={{ justifyContent: "center" }}>
              <Grid item xs={6}>
                <Box
                  sx={{
                    border: "1px solid #1280c2",
                    borderRadius: "0.25rem",
                    p: 3,
                  }}
                >
                  <Grid container>
                    <Grid item xs={4}>
                      <Box sx={{mb:1}}>
                        <Typography sx={{fontSize:"14px"}}>Associates Email:</Typography>
                      </Box>
                    </Grid>
                    <Grid item xs={7}>
                      <Box sx={{mb:1}}>
                        <InputBase className="form-control" />
                      </Box>
                    </Grid>
                    <Grid item xs={1}>
                      <Box sx={{mb:1}}>
                        <Typography sx={{textAlign:"center"}}>+</Typography>
                      </Box>
                    </Grid>

                    <Grid item xs={4}>
                      <Box>
                       
                        <Typography sx={{fontSize:"14px"}}>Comment:</Typography>
                      </Box>
                    </Grid>
                    <Grid item xs={7}>
                      <Box>
                        
                        <TextareaAutosize
                          className="form-control"
                        />
                      </Box>
                      <Box sx={{textAlign:"center",mt:1}}>
                            <Button className="btn btn-primary" size="small">Email</Button>
                        </Box>
                    </Grid>
                    <Grid item xs={1}>
                      <Box>
                        <Typography sx={{textAlign:"center"}}></Typography>
                      </Box>
                    </Grid>
                    

                  </Grid>
                </Box>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default ShareStation;
