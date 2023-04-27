import React from "react";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Typography from '@mui/material/Typography'

const ListItemName = ({name,color}) => {
  return (
    <ListItem
      disablePadding
      sx={{
        borderBottom: "1px solid #fff",
        transition: "all .4s",
        ":hover": {
          backgroundColor: "#3cb1e6",
          transition: "all .4s",
        },
        textAlign: "left",
        pl: 1,
      }}
    >
      <ListItemText primary={<Typography sx={{fontSize:"13px",color: `${color}`}} >{name}</Typography>} />
    </ListItem>
  );
};

export default ListItemName;
