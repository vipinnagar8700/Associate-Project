import * as React from "react";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItemName from "./ListItemName";


export default function DropDown11({top,name1,name2,name3,name4,name5,name6,name7,name8,name9,name10,name11,maxWidth,bgcolor,border}) {
  return (
    <Box
      sx={{
        width: "100%",
        maxWidth:{maxWidth},
        bgcolor: `${bgcolor}`,
        border:`${border}`,
        position: "absolute",
        top: {top},
        zIndex: "99",
      }}
    >
      <nav aria-label="main mailbox folders">
        <List sx={{ p: 0 }}>
        <ListItemName name={name1}/>
        <ListItemName name={name2}/>
        <ListItemName name={name3}/>
        <ListItemName name={name4}/>
        <ListItemName name={name5}/>
        <ListItemName name={name6}/>
        <ListItemName name={name7}/>
        <ListItemName name={name8}/>
        <ListItemName name={name9}/>
        <ListItemName name={name10}/>
        <ListItemName name={name11}/>
        </List>
      </nav>
    </Box>
  );
}
