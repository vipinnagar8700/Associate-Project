import React, { useState } from "react";
import { Checkbox, Grid, Box, Typography, Radio } from "@mui/material";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import { Link } from "react-router-dom";
import InfoSubHead from "../../GlobalComponent/InfoSubHead";

const textstyle = {fontSize:"11px",fontWeight:"bold",borderRight:"1px solid #D4D4D4",textAlign:"center"}

const data = [
  {
    id: 1,
    name: "Sue Karng",
    num: "a",
    icon: <Checkbox sx={{ p: 0 }} size="small" />,
  },
  {
    id: 2,
    name: "Kelly Garcia",
    num: "b",
    icon: <Checkbox sx={{ p: 0 }} size="small" />,
  },
  {
    id: 3,
    name: "Jim Smith",
    num: "c",
    icon: <Checkbox sx={{ p: 0 }} size="small" />,
  },
  {
    id: 4,
    name: "John S Smith",
    num: "d",
    icon: <Checkbox sx={{ p: 0 }} size="small" />,
  },
];

const AssignRoles = () => {
  const [selectedValue, setSelectedValue] = useState("a");
  const valueChange = (e) => {
    setSelectedValue(e.target.value);
  };
  return (
    <>
      <Box sx={{ maxWidth: "400px", m: 3 }}>
        <Box>
          <InfoSubHead
            name="Assign Roles"
            urlname={"X"}
            backgroundColor={"#1688ca"}
            color={"#fff"}
          />
        </Box>

        <Grid
            container
            sx={{ justifyContent: "center", alignItems: "center",bgcolor:"#d2dee8",p:1 }}
          >
            <Grid item xs={6}>
              <Box><Typography sx={{fontSize:"11px",fontWeight:"bold",borderRight:"1px solid #D4D4D4"}}>SELECT ROLE</Typography></Box>
            </Grid>
            <Grid item xs={2}>
            <Box><Typography sx={textstyle}>MANAGER</Typography></Box>
            </Grid>
            <Grid item xs={2}>
            <Box><Typography sx={textstyle}>GUEST</Typography></Box>
            </Grid>
            <Grid item xs={2}>
            <Box><Typography sx={{fontSize:"11px",fontWeight:"bold",textAlign:"center"}}>MEMBER</Typography></Box>
            </Grid>
          </Grid>

        <Box sx={{ px: 1, bgcolor: "#fff" }}>
          
          {data.map((data) => {
            const { id, icon, name, num } = data;
            return (
              <Grid
                container
                key={id}
                sx={{ justifyContent: "center", alignItems: "center" }}
              >
                <Grid item xs={6}>
                  <Typography
                    sx={{
                      fontSize: "13px",
                      fontWeight: "bold",
                      lineHeight: "25px",
                      borderRight:"1px solid #D4D4D4"
                    }}
                  >
                    {name}
                  </Typography>
                </Grid>
                <Grid item xs={2}>
                  <Box sx={{borderRight:"1px solid #D4D4D4",textAlign:"center"}}>
                    <Radio
                      size="small"
                      checked={selectedValue === num}
                      onChange={valueChange}
                      value={num}
                      name="radio-buttons"
                      sx={{ p: 0}}
                    />
                  </Box>
                </Grid>
                <Grid item xs={2}>
                  <Box sx={{borderRight:"1px solid #D4D4D4",textAlign:"center"}}> {icon}</Box>
                </Grid>
                <Grid item xs={2}>
                  <Box sx={{textAlign:"center"}}> {icon}</Box>
                </Grid>
              </Grid>
            );
          })}
        </Box>
      </Box>
    </>
  );
};

export default AssignRoles;
