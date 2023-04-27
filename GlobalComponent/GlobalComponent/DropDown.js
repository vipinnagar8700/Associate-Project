import * as React from "react";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItemName from "./ListItemName";


export default function DropDown({top,name1,name2,name3,name4,name5,maxWidth,bgcolor,border,color}) {
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
        <ListItemName name={name1} color={color}/>
        <ListItemName name={name2} color={color}/>
        <ListItemName name={name3} color={color}/>
        <ListItemName name={name4} color={color}/>
        <ListItemName name={name5} color={color}/>
       
        </List>
      </nav>
    </Box>
  );
}
