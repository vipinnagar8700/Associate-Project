import React from "react";
import Head from "./Pages/Head";
import Content from "./Pages/Content";
import { Box, Container, Grid } from "@mui/material";


const RecentSession = () => {
  return (
    <>
      <Container maxWidth="lg">
        <Grid container sx={{ mt: 5,padding:"0px 20px"}}>
          <Grid xs={12} sx={{backgroundColor:"#fff",height:"100vh"}}>
            <Grid container sx={{alignItems:"left" , justifyContent:"left"}}>
              <Grid xs={12} sx={{padding:"0px"}}>
                <Box>
                  <Head />
                </Box>
              </Grid>
              <Grid xs={12}>
                <Box sx={{borderBottom:"4px solid #dee7f5"}}>
                  <Content />
                </Box>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default RecentSession;
