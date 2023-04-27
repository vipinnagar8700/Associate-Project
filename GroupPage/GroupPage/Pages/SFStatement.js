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
import InfoSubHead from "../../GlobalComponent/InfoSubHead";

const SFStatement = () => {
  return (
    <>
      <Container maxWidth="lg" sx={{ mt: 3 }}>
        <Grid container sx={{justifyContent:"center"}}>
         
          <Grid item xs={6}>
           
                <InfoSubHead urlname1={"Station Focus Statement"} urlname={"X"} backgroundColor={"#1688ca"}
              color={"#fff"}/>
           
            <Box sx={{bgcolor:"#fff",p:2}}>
            <Box sx={{py:1}}>
                <TextareaAutosize value={"Our team works with all hospital departments on IT needs. We plan for the future with integration"} className="form-control"/>
            </Box>
            <Box sx={{textAlign:"center"}}>
                <Button className="btn btn-primary">Submit</Button>
            </Box>
            </Box>
          </Grid>
          
        </Grid>
      </Container>
    </>
  );
};

export default SFStatement;
