import React from "react";
import { ListItem, Typography } from "@mui/material";
import { createGlobalStyle } from "styled-components";




const SingleList = ({ bgcolor, name, color,listwidth,hcolor }) => {
  return (
    <>
    <ListItem
    className={listwidth}
      sx={{
        bgcolor: `${bgcolor}`,
        borderRadius: "1rem 1rem 0 0",
        minHeight: "48px",
        border: "1px solid #e7e9ec",
        padding: "6px 15px",
      }}
    >
      <Typography
        align="center"
        sx={{
          fontSize:{xs:"11px",sm:"13px"},
          color: `${color}`,
          width: "100%",
          height: "100%",
          verticalAlign: "top",
          fontWeight: "bold",
          ":hover":{color:`${hcolor}`,transition:"all .4s"}
        }}
        color="initial"
      >
        {name}
      </Typography>
    </ListItem>
    </>
  );
};

export default SingleList;
