import React from 'react'
import {Avatar, Box,ImageList,ImageListItem,Stack, Typography} from "@mui/material";
import PhotoData from './PhotoData';

const Photo = () => {
  return (
    <Stack
      direction="row"
      sx={{
        display: "grid",
        columnGap: 1,
        rowGap: 1,
        gridTemplateColumns: "repeat(3, 1fr)",
        padding: "10px",
      }}
    >
      {PhotoData.map((p) => {
        const { id, img } = p;
        return (
          <Box sx={{ border: "none" }} key={id}>
            <ImageList
              sx={{ width:"100%", height: "100%", borderRadius: "25px" }}
              cols={1}
            >
              <ImageListItem sx={{position:"relative"}}>
                <img src={img} />
                <Avatar sx={{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%,-50%)",width:"20px",height:"20px",fontSize:"12px"}}>1</Avatar>
              </ImageListItem>
            </ImageList>
          </Box>
        );
      })}
    </Stack>
  );
};

export default Photo;
