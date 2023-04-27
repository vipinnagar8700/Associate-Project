import React from "react";
import {Checkbox, Grid, Box,Avatar, Typography} from "@mui/material";
import InfoSubHead from "./InfoSubHead";
import TableHeadSeven from "../GlobalComponent/TableHeadSeven";
import TableBodySeven from "../GlobalComponent/TableBodySeven";
import Data from "../Station_Discussion/Pages/SystemFileData";

const pointer = {cursor:"pointer"}
const textstyle = {fontSize:"12px",color:"#1688ca",cursor:"pointer",":hover":{textDecoration:"underline"}}
const datetextstyle = {fontSize:"12px",color:"#000"}

const SystemFileSeven = ({setSystemFile,systemfile}) => {
  return (
    <Grid container>
      <Grid item xs={12}>
        <Box>
          <InfoSubHead
            urlname1={"System Files"}
            urlname={<Typography sx={pointer} onClick={()=>setSystemFile(!systemfile)}>X</Typography>}
            backgroundColor={"#1688ca"}
            color={"#fff"}
          />
        </Box>
      </Grid>

      <Grid container sx={{ bgcolor: "#fff", py: 1 }}>
        <Grid item xs={12} sx={{ display: "flex", justifyContent: "end",px:1 }}>
          <Box sx={{ maxWidth: "100px",mb:1 }}>
            <input type="text" className="form-control" />
          </Box>
        </Grid>
        <Grid item xs={12}>
            <Box>
            <TableHeadSeven
            fontsize={"13px"}
             textclr="gray"
             name1={"ADD"}
             name2={"DOCUMENT"}
             name3={"DATE"}
             name4={"DUE DATE"}
             name5={"TYPE"}
             name6={"SIZE"}
             name7={"Sr.No."}
             />
            </Box>
        </Grid>
        <Grid item xs={12} sx={{maxHeight:"220px",overflowY:"scroll"}}>
            {
                Data.map((data)=>{
                    const{id,documentName,date,dueDate,urlName,size,srno}=data
                    return(
                        <Box key={id} sx={{":hover":{bgcolor:"#e6eff8"}}}>
                            <TableBodySeven
                            name1={<Checkbox size="small"/>}
                            name2={<Typography sx={textstyle} >{documentName}</Typography>}
                            name3={<Typography sx={datetextstyle} >{date}</Typography>}
                            name4={<Typography sx={{color:"green",fontSize:"12px",fontWeight:"500"}} >{dueDate}</Typography>}
                            name5={<Avatar sx={{mx:"auto"}} variant="rounded" src={urlName} />}
                            name6={<Typography sx={datetextstyle} >{size}</Typography>}
                            name7={<Typography sx={datetextstyle} >{srno}</Typography>}
                            />
                        </Box>
                    )
                })
            }
            
        </Grid>
        
      </Grid>
    </Grid>
  );
};

export default SystemFileSeven;
