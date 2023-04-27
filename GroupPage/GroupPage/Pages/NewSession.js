import React from "react";
import { Box, Container, Grid, Typography } from "@mui/material";
import AddSessionReuse from "../../../GlobalComponent/GlobalComponent/AddSessionReuse";
import InfoSubHead from "../../../GlobalComponent/GlobalComponent/InfoSubHead";
import DangerousIcon from "@mui/icons-material/Dangerous";
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  zIndex:999,
};


const NewSession = (props) => {
const {setnewsess} = (props)

  return (
    <Container maxWidth="lg" >
      <Grid container sx={style}>
        <Grid item xs={6}>
          <Grid container>
            <Grid item xs={12}>
              <InfoSubHead
                name="New Session"
                urlname={<DangerousIcon onClick={() => { setnewsess(false); }} />}
                backgroundColor={"#1688ca"}
                color={"#fff"}
              />
            </Grid>
            <Grid item xs={12}>
              <Box>
                <AddSessionReuse />
              </Box>
            </Grid>
            <Grid item xs={12}>
              <InfoSubHead
                name={<Typography  sx={{color:"#603190",fontSize:"22px"}}>Information Technology</Typography>}
                urlname={<AddCircleOutlineIcon />}
                backgroundColor={"#f4f4f4"}
                color={"#000"}
              />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};

export default NewSession;
