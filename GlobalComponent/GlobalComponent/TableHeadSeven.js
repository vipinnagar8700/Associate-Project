import React from "react";
import { Grid, Box, Typography } from "@mui/material";
import { Table } from "react-bootstrap";

const TableHeadSeven = ({name1,name2,name3,name4,name5,name6,name7,textclr,fontsize}) => {
  return (
    <Grid container>
      <Grid item xs={12}>
        <Box sx={{ overflowX: "auto" }}>
          <Table striped bordered hover style={{border:"none",margin:0}}>
            <thead
              style={{
                backgroundColor: "#cfdce7",
                fontWeight: "lighter",
              }}
            >
              <tr style={{border:"none"}}>
                <th
                  style={{
                    fontSize: `${fontsize}`,
                    fontWeight: "400",
                    maxWidth: "50px",
                    minWidth: "50px",
                    color:`${textclr}`,
                    border:"none"
                  }}
                >
                 {name7}                                  
                </th>

                <th
                  style={{
                    fontSize: `${fontsize}`,
                    fontWeight: "400",
                    maxWidth: "50px",
                    minWidth: "50px",
                    color:`${textclr}`,
                    border:"none"
                  }}
                >
                 {name1}                                  
                </th>

                <th
                   style={{
                    fontSize: `${fontsize}`,
                    fontWeight: "400",
                    maxWidth: "100px",
                    minWidth: "100px",
                    color:`${textclr}`,
                    border:"none"
                  }}
                >
                  {name2}
                </th>

                <th
                   style={{
                    fontSize: `${fontsize}`,
                    fontWeight: "400",
                    maxWidth: "50px",
                    minWidth: "50px",
                    color:`${textclr}`,
                    border:"none"
                  }}
                >
                 {name3}
                </th>
                
                <th
                   style={{
                    fontSize: `${fontsize}`,
                    fontWeight: "400",
                    maxWidth: "50px",
                    minWidth: "50px",
                    color:`${textclr}`,
                    border:"none"
                  }}
                >
                 {name4}
                </th>

                <th
                   style={{
                    fontSize: `${fontsize}`,
                    fontWeight: "400",
                    maxWidth: "50px",
                    minWidth: "50px",
                    color:`${textclr}`,
                    border:"none"
                  }}
                >
                 {name5}
                </th>

                <th
                   style={{
                    fontSize: `${fontsize}`,
                    fontWeight: "400",
                    maxWidth: "50px",
                    minWidth: "50px",
                    color:`${textclr}`,
                    border:"none"
                  }}
                >
                 {name6}
                </th>

              </tr>
            </thead>
          </Table>
        </Box>
      </Grid>
    </Grid>
  );
};

export default TableHeadSeven;
