import { Avatar, Box, Container, Grid, Stack, Typography } from "@mui/material";
import React from "react";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import CancelOutlinedIcon from "@mui/icons-material/CancelOutlined";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import Icon from "./Icon";


const InfoSubHead = ({name, backgroundColor, color,Icon,urlname , urlname1,borderRadius}) => {
  return (
    <>
      <Container
        maxWidth="lg"
        sx={{ backgroundColor: {backgroundColor}, color:{color} ,borderRadius:{borderRadius}}}
      >
        <Grid container>
         <Grid item xs={12} sx={{py:1}}>
         <Stack direction="row" sx={{justifyContent:"space-between",alignItems:"center"}}>
            <Box><Box sx={{backgroundColor:"transparents"}}>{urlname1}</Box></Box>
            <Box><Box sx={{ textAlign: "center" }}>
              <Typography  sx={{fontSize:{xs:"12px",sm:"12px",md:"14px",lg:"16px"}}}>{name}</Typography>
            </Box></Box>
            <Box> <Stack
              direction="row"
              spacing={1}
              sx={{
                justifyContent: "end",
                alignItems: "center",
                height: "100%",
              }}
            >
              <Box sx={{backgroundColor:"transparents",cursor:"pointer"}}>{urlname}</Box>
             
            </Stack></Box>
          </Stack>
         </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default InfoSubHead;
