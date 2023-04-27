import { Container, Box, Grid, Typography, IconButton, Avatar, Stack, Button, Divider } from '@mui/material'
import React, { useState } from 'react'
import ArrowDropDownCircleIcon from '@mui/icons-material/ArrowDropDown'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import ProjectAssignments from './TestFile/ProjectAssignments';



const Assignments = () => {

    // assign
    const [assigns, setassigns] = useState(false);
    const handleOpen = () => {
        setassigns(true);
    };
    return (

        <Box sx={{ backgroundColor: '#ffff', marginTop: '4px' }}>
            <Grid container sx={{ justifyContent: 'end', backgroundColor: '#f6f6f6', alignItems: 'center' }}>
                <Grid item xs={12} sx={{ textAlign: "center" }}>
                    <Stack direction={"row"} sx={{ justifyContent: "space-between", alignItems: "center" }}>
                        <Box></Box>
                        <Box>  <Typography variant='h6' sx={{
                            fontSize: 16, "&:hover": {
                                border: "1px solid #00FF00",
                            }
                        }} onClick={() => setassigns(true)}> Project Assignments</Typography>
                            {
                                assigns &&
                                <ProjectAssignments assigns={assigns} setassigns={setassigns} />
                            }</Box>
                        <Box>
                            <IconButton>
                                <ArrowDropDownCircleIcon type="button" />
                            </IconButton>
                        </Box>
                    </Stack>

                </Grid>
                
            </Grid>
            <Box height="330px">
                <TableContainer>
                    <Table size="small" >
                        <TableHead >
                            <TableRow sx={{ justifyContent: 'start' }} >
                                <TableCell sx={{ textTransform: 'lowercase', display: 'flex' }}>Status <Typography sx={{ fontSize: '9px', alignItems: 'center', lineHeight: '3' }}>(hover for Details)</Typography></TableCell>
                                <TableCell align="right" sx={{ textTransform: 'lowercase' }}>Tasks</TableCell>
                                <TableCell align="right" sx={{ textTransform: 'lowercase' }}>MileStone %</TableCell>
                                <TableCell align="right" sx={{ textTransform: 'lowercase' }}>Tags</TableCell>
                                <TableCell align="right" sx={{ textTransform: 'lowercase' }}>Critical</TableCell>
                                <TableCell align="right" sx={{ textTransform: 'lowercase' }}>Assigned</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody >

                            <TableRow
                            >
                                <TableCell sx={{ display: 'flex', justifyContent: 'space-between', padding: 2, alignItems: 'center' }}  ><Avatar sx={{ height: 20, width: 20, backgroundColor: 'red', color: 'red' }} ></Avatar><Typography sx={{ fontSize: 15 }}>Organize Committee</Typography></TableCell>
                                <TableCell ></TableCell>
                                <TableCell ><Stack direction="row" alignBoxs="center" sx={{ justifyContent: 'center', alignItems: 'center', }}>
                                    <Typography sx={{ border: '0px solid red', padding: 1, backgroundColor: '#A6FFFF', fontSize: 12 }}> Aug 27 - </Typography>
                                    <Typography sx={{ border: '0px solid red', padding: 1, backgroundColor: '#FFC9FF', fontSize: 12 }}> Mar 27 </Typography>
                                    <Typography sx={{ padding: 1.3, fontSize: 12 }}> 50% </Typography>
                                </Stack></TableCell>
                                <TableCell ><Button variant="outlined" color="error" sx={{ color: '#000000', fontSize: 13 }}><Typography sx={{ fontSize: 8 }}>New Task</Typography></Button></TableCell>
                                <TableCell >hbjk</TableCell>
                                <TableCell sx={{ justifyContent: 'end' }} ><Stack ><Avatar alt='John s smith' sx={{ width: 25, height: 25 }} src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQPQmH3gZw6BGda2FbR4lpxXr09NZsI_axIg&usqp=CAU' /></Stack></TableCell>
                                <Divider m={2} />
                            </TableRow>
                            <TableRow
                            >
                                <TableCell sx={{ display: 'flex', justifyContent: 'space-between', padding: 2, alignItems: 'center' }}  ><Avatar sx={{ height: 20, width: 20, backgroundColor: 'red', color: 'red' }} ></Avatar><Typography sx={{ fontSize: 15 }}>Organize Committee</Typography></TableCell>
                                <TableCell ></TableCell>
                                <TableCell ><Stack direction="row" alignBoxs="center" sx={{ justifyContent: 'center', alignItems: 'center', }}>
                                    <Typography sx={{ border: '0px solid red', padding: 1, backgroundColor: '#A6FFFF', fontSize: 12 }}> Aug 27 - </Typography>
                                    <Typography sx={{ border: '0px solid red', padding: 1, backgroundColor: '#FFC9FF', fontSize: 12 }}> Mar 27 </Typography>
                                    <Typography sx={{ padding: 1.3, fontSize: 12 }}> 50% </Typography>
                                </Stack></TableCell>
                                <TableCell ><Button variant="outlined" color="error" sx={{ color: '#000000', fontSize: 13 }}><Typography sx={{ fontSize: 8 }}>New Task</Typography></Button></TableCell>
                                <TableCell >hbjk</TableCell>
                                <TableCell sx={{ justifyContent: 'end' }} ><Stack ><Avatar alt='John s smith' sx={{ width: 25, height: 25 }} src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQPQmH3gZw6BGda2FbR4lpxXr09NZsI_axIg&usqp=CAU' /></Stack></TableCell>
                                <Divider m={2} />
                            </TableRow><TableRow
                            >
                                <TableCell sx={{ display: 'flex', justifyContent: 'space-between', padding: 2, alignItems: 'center' }}  ><Avatar sx={{ height: 20, width: 20, backgroundColor: 'red', color: 'red' }} ></Avatar><Typography sx={{ fontSize: 15 }}>Organize Committee</Typography></TableCell>
                                <TableCell ></TableCell>
                                <TableCell ><Stack direction="row" alignBoxs="center" sx={{ justifyContent: 'center', alignItems: 'center', }}>
                                    <Typography sx={{ border: '0px solid red', padding: 1, backgroundColor: '#A6FFFF', fontSize: 12 }}> Aug 27 - </Typography>
                                    <Typography sx={{ border: '0px solid red', padding: 1, backgroundColor: '#FFC9FF', fontSize: 12 }}> Mar 27 </Typography>
                                    <Typography sx={{ padding: 1.3, fontSize: 12 }}> 50% </Typography>
                                </Stack></TableCell>
                                <TableCell ><Button variant="outlined" color="error" sx={{ color: '#000000', fontSize: 13 }}><Typography sx={{ fontSize: 8 }}>New Task</Typography></Button></TableCell>
                                <TableCell >hbjk</TableCell>
                                <TableCell sx={{ justifyContent: 'end' }} ><Stack ><Avatar alt='John s smith' sx={{ width: 25, height: 25 }} src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQPQmH3gZw6BGda2FbR4lpxXr09NZsI_axIg&usqp=CAU' /></Stack></TableCell>
                                <Divider m={2} />
                            </TableRow>

                        </TableBody>
                    </Table>
                </TableContainer>
            </Box>
        </Box>

    )
}

export default Assignments