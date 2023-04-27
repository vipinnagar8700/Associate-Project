import { Avatar, Typography, Divider, Grid } from '@mui/material'
import React, { useState, useEffect } from 'react'
import { Container, Box, Stack, Link, Button } from '@mui/material'
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import ArrowDropDownCircleIcon from '@mui/icons-material/ArrowDropDownCircle';
import MapsUgcIcon from '@mui/icons-material/MapsUgc';
import { RecentSes } from '../Api/Session';
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';

import Table from 'react-bootstrap/Table';
import MenuIcon from '@mui/icons-material/Menu';
import Badge from '@mui/material/Badge';
import PropTypes from 'prop-types';
import Checkbox from '@mui/material/Checkbox';

import CircularProgress from '@mui/material/CircularProgress';

import moment from 'moment';
const label = { inputProps: { 'aria-label': 'Checkbox demo' } };


function CircularProgressWithLabel(props) {
    return (
        <Box sx={{ position: 'relative', display: 'inline-flex' }}>
            <CircularProgress variant="determinate" {...props} />
            <Box
                sx={{
                    top: 0,
                    left: 0,
                    bottom: 0,
                    right: 0,
                    position: 'absolute',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',

                }}
            >
                <Typography variant="caption" component="div" color="text.secondary">
                    {`${Math.round(props.value)}%`}
                </Typography>
            </Box>
        </Box>
    );
}

CircularProgressWithLabel.propTypes = {
    /**
     * The value of the progress indicator for the determinate variant.
     * Value between 0 and 100.
     * @default 0
     */
    value: PropTypes.number.isRequired,
};

const Index = () => {

    const [progress, setProgress] = React.useState(50);

    // React.useEffect(() => {
    //     const timer = setInterval(() => {
    //         setProgress((prevProgress) => (prevProgress >= 100 ? 0 : prevProgress + 10));
    //     }, 800);
    //     return () => {
    //         clearInterval(timer);
    //     };
    // }, []);



    return (
        <div >
            <Container maxWidth="lg">
                <Box m={5}>
                    <Stack direction='row' sx={{ justifyContent: 'space-between' }}>
                        <Box gap={3} spacing={3}>
                            <Grid container gap={2}>
                                <Grid items >
                                    <Typography p={0.5} sx={{ backgroundColor: '#A7D9FF', border: '0px solid red', borderRadius: 2 }} ><Link sx={{ color: 'black', fontSize: '14px' }} > Add Project
                                    </Link></Typography>
                                </Grid>
                                <Grid items>
                                    <Typography p={0.5} sx={{ backgroundColor: '#A7D9FF', border: '0px solid red', borderRadius: 2 }} > <Checkbox {...label} sx={{ margin: 0, padding: 0 }} /><Link sx={{ color: 'black', fontSize: '14px' }}> Enable Sorting
                                    </Link></Typography>
                                </Grid>

                            </Grid>


                        </Box>

                        <Box>

                        </Box>
                        <Box>
                            <Typography p={0.5} sx={{ backgroundColor: '#A7D9FF', border: '0px solid red', borderRadius: 2 }} ><Link sx={{ color: 'black', fontSize: '14px' }}> Share Tasks
                            </Link></Typography>

                        </Box>

                    </Stack>
                    <Box mt={2} sx={{ backgroundColor: '#ffff' }}>
                        <Stack direction='row' p={1} sx={{ justifyContent: 'space-between', alignItems: 'center', backgroundColor: '#f3f3f3' }}>
                            <Box>

                                <ArrowDropDownCircleIcon />
                                <MapsUgcIcon />
                            </Box>
                            <Box>
                                <Typography>
                                    Project Tasks - All Projects
                                </Typography>
                            </Box>
                            <Box>
                                <Stack direction='row' gap={2} sx={{alignItems:'center'}}>
                                <Avatar sx={{width:20,height:20,bgcolor:'black',fontSize:14 }}>S</Avatar>
                                <CameraAltIcon />
                                </Stack>
                            </Box>

                        </Stack>

                    </Box>
                    <Table striped bordered hover   >
                        <thead style={{ backgroundColor: '#cfdce7', fontSize: '10px', fontWeight: 'lighter' }}>
                            <tr style={{ fontSize: '13px', fontWeight: '400', textAlign: 'center' }}>
                                <th style={{ color: '#000', fontSize: '13px', fontWeight: '400', textTransform: 'none' }}>S.no</th>
                                <th style={{ color: '#000', fontSize: '13px', fontWeight: '400', textAlign: 'center', textTransform: 'none' }}>Comments</th>
                                <th style={{ color: '#000', fontSize: '13px', fontWeight: '400', textTransform: 'none' }}>Tasks</th>
                                <th style={{ color: '#000', fontSize: '13px', fontWeight: '400', textTransform: 'none' }}>Tags</th>
                                <th style={{ color: '#000', fontSize: '13px', fontWeight: '400', textTransform: 'none' }}>Assigned</th>
                                <th style={{ color: '#000', fontSize: '13px', fontWeight: '400', textTransform: 'none' }}>Attachments</th>
                                <th style={{ color: '#000', fontSize: '13px', fontWeight: '400', textTransform: 'none' }}>Timeline</th>
                                <th style={{ color: '#000', fontSize: '13px', fontWeight: '400', textTransform: 'none' }}>% Elapsed</th>
                                <th style={{ color: '#000', fontSize: '13px', fontWeight: '400', textTransform: 'none' }}>% Done</th>
                                <th style={{ color: '#000', fontSize: '13px', fontWeight: '400', textTransform: 'none' }}> Critical % </th>
                                <th style={{ color: '#000', fontSize: '13px', fontWeight: '400', textTransform: 'none' }}>Link</th>
                            </tr>
                        </thead>
                        <tbody style={{ backgroundColor: '#ffff', borderBottom: '1px solid black', alignItems: 'center', verticalAlign: 'middle' }}>
                            <tr  >
                                <td>
                                    1.
                                </td>
                                <td colSpan={2} ><Typography sx={{ fontSize: '14px', fontWeight: '500', alignItems: 'center' }}>Overall % completion of Cerner upgrade</Typography></td>
                                <td ><Typography px={4} sx={{
                                    fontSize: '13px', fontWeight: '300', border: '2px solid red', borderRadius: 2
                                }}>New Task</Typography></td>
                                <td></td>
                                <td><Typography p={1} sx={{ fontSize: '13px', fontWeight: '400', border: '1px solid black' }}>Currently no files</Typography></td>
                                <td><Typography p={1} sx={{ fontSize: '13px', fontWeight: '400' }}>Sep 09 - Jan 08</Typography></td>
                                <td> <CircularProgressWithLabel strokewidth="100" value={progress} sx={{ color: 'red' }} /></td>
                                <td> <CircularProgressWithLabel value={progress} /></td>
                                <td>  <CircularProgressWithLabel value={progress} /></td>
                                <td></td>
                            </tr>
                            <tr  >
                                <td>
                                    1.
                                </td>
                                <td colSpan={2} ><Typography sx={{ fontSize: '14px', fontWeight: '500', alignItems: 'center' }}>Overall % completion of Cerner upgrade</Typography></td>
                                <td ><Typography px={4} sx={{
                                    fontSize: '13px', fontWeight: '300', border: '2px solid red', borderRadius: 2
                                }}>New Task</Typography></td>
                                <td></td>
                                <td><Typography p={1} sx={{ fontSize: '13px', fontWeight: '400', border: '1px solid black' }}>Currently no files</Typography></td>
                                <td><Typography p={1} sx={{ fontSize: '13px', fontWeight: '400' }}>Sep 09 - Jan 08</Typography></td>
                                <td> <CircularProgressWithLabel strokewidth="100" value={progress} sx={{ color: 'red' }} /></td>
                                <td> <CircularProgressWithLabel value={progress} /></td>
                                <td>  <CircularProgressWithLabel value={progress} /></td>
                                <td></td>
                            </tr>
                            <tr  >
                                <td>
                                    1.
                                </td>
                                <td colSpan={2} ><Typography sx={{ fontSize: '14px', fontWeight: '500', alignItems: 'center' }}>Overall % completion of Cerner upgrade</Typography></td>
                                <td ><Typography px={4} sx={{
                                    fontSize: '13px', fontWeight: '300', border: '2px solid red', borderRadius: 2
                                }}>New Task</Typography></td>
                                <td></td>
                                <td><Typography p={1} sx={{ fontSize: '13px', fontWeight: '400', border: '1px solid black' }}>Currently no files</Typography></td>
                                <td><Typography p={1} sx={{ fontSize: '13px', fontWeight: '400' }}>Sep 09 - Jan 08</Typography></td>
                                <td> <CircularProgressWithLabel strokewidth="100" value={progress} sx={{ color: 'red' }} /></td>
                                <td> <CircularProgressWithLabel value={progress} /></td>
                                <td>  <CircularProgressWithLabel value={progress} /></td>
                                <td></td>
                            </tr>
                            <tr  >
                                <td>
                                    1.
                                </td>
                                <td colSpan={2} ><Typography sx={{ fontSize: '14px', fontWeight: '500', alignItems: 'center' }}>Overall % completion of Cerner upgrade</Typography></td>
                                <td ><Typography px={4} sx={{
                                    fontSize: '13px', fontWeight: '300', border: '2px solid red', borderRadius: 2
                                }}>New Task</Typography></td>
                                <td></td>
                                <td><Typography p={1} sx={{ fontSize: '13px', fontWeight: '400', border: '1px solid black' }}>Currently no files</Typography></td>
                                <td><Typography p={1} sx={{ fontSize: '13px', fontWeight: '400' }}>Sep 09 - Jan 08</Typography></td>
                                <td> <CircularProgressWithLabel strokewidth="100" value={progress} sx={{ color: 'red' }} /></td>
                                <td> <CircularProgressWithLabel value={progress} /></td>
                                <td>  <CircularProgressWithLabel value={progress} /></td>
                                <td></td>
                            </tr>
                            <tr  >
                                <td>
                                    1.
                                </td>
                                <td colSpan={2} ><Typography sx={{ fontSize: '14px', fontWeight: '500', alignItems: 'center' }}>Overall % completion of Cerner upgrade</Typography></td>
                                <td ><Typography px={4} sx={{
                                    fontSize: '13px', fontWeight: '300', border: '2px solid red', borderRadius: 2
                                }}>New Task</Typography></td>
                                <td></td>
                                <td><Typography p={1} sx={{ fontSize: '13px', fontWeight: '400', border: '1px solid black' }}>Currently no files</Typography></td>
                                <td><Typography p={1} sx={{ fontSize: '13px', fontWeight: '400' }}>Sep 09 - Jan 08</Typography></td>
                                <td> <CircularProgressWithLabel strokewidth="100" value={progress} sx={{ color: 'red' }} /></td>
                                <td> <CircularProgressWithLabel value={progress} /></td>
                                <td>  <CircularProgressWithLabel value={progress} /></td>
                                <td></td>
                            </tr>
                            <tr  >
                                <td>
                                    1.
                                </td>
                                <td colSpan={2} ><Typography sx={{ fontSize: '14px', fontWeight: '500', alignItems: 'center' }}>Overall % completion of Cerner upgrade</Typography></td>
                                <td ><Typography px={4} sx={{
                                    fontSize: '13px', fontWeight: '300', border: '2px solid red', borderRadius: 2
                                }}>New Task</Typography></td>
                                <td></td>
                                <td><Typography p={1} sx={{ fontSize: '13px', fontWeight: '400', border: '1px solid black' }}>Currently no files</Typography></td>
                                <td><Typography p={1} sx={{ fontSize: '13px', fontWeight: '400' }}>Sep 09 - Jan 08</Typography></td>
                                <td> <CircularProgressWithLabel strokewidth="100" value={progress} sx={{ color: 'red' }} /></td>
                                <td> <CircularProgressWithLabel value={progress} /></td>
                                <td>  <CircularProgressWithLabel value={progress} /></td>
                                <td></td>
                            </tr>
                            <tr  >
                                <td>
                                    1.
                                </td>
                                <td colSpan={2} ><Typography sx={{ fontSize: '14px', fontWeight: '500', alignItems: 'center' }}>Overall % completion of Cerner upgrade</Typography></td>
                                <td ><Typography px={4} sx={{
                                    fontSize: '13px', fontWeight: '300', border: '2px solid red', borderRadius: 2
                                }}>New Task</Typography></td>
                                <td></td>
                                <td><Typography p={1} sx={{ fontSize: '13px', fontWeight: '400', border: '1px solid black' }}>Currently no files</Typography></td>
                                <td><Typography p={1} sx={{ fontSize: '13px', fontWeight: '400' }}>Sep 09 - Jan 08</Typography></td>
                                <td> <CircularProgressWithLabel strokewidth="100" value={progress} sx={{ color: 'red' }} /></td>
                                <td> <CircularProgressWithLabel value={progress} /></td>
                                <td>  <CircularProgressWithLabel value={progress} /></td>
                                <td></td>
                            </tr>
                            <tr  >
                                <td>
                                    1.
                                </td>
                                <td colSpan={2} ><Typography sx={{ fontSize: '14px', fontWeight: '500', alignItems: 'center' }}>Overall % completion of Cerner upgrade</Typography></td>
                                <td ><Typography px={4} sx={{
                                    fontSize: '13px', fontWeight: '300', border: '2px solid red', borderRadius: 2
                                }}>New Task</Typography></td>
                                <td></td>
                                <td><Typography p={1} sx={{ fontSize: '13px', fontWeight: '400', border: '1px solid black' }}>Currently no files</Typography></td>
                                <td><Typography p={1} sx={{ fontSize: '13px', fontWeight: '400' }}>Sep 09 - Jan 08</Typography></td>
                                <td> <CircularProgressWithLabel strokewidth="100" value={progress} sx={{ color: 'red' }} /></td>
                                <td> <CircularProgressWithLabel value={progress} /></td>
                                <td>  <CircularProgressWithLabel value={progress} /></td>
                                <td></td>
                            </tr>
                            <tr  >
                                <td>
                                    1.
                                </td>
                                <td colSpan={2} ><Typography sx={{ fontSize: '14px', fontWeight: '500', alignItems: 'center' }}>Overall % completion of Cerner upgrade</Typography></td>
                                <td ><Typography px={4} sx={{
                                    fontSize: '13px', fontWeight: '300', border: '2px solid red', borderRadius: 2
                                }}>New Task</Typography></td>
                                <td></td>
                                <td><Typography p={1} sx={{ fontSize: '13px', fontWeight: '400', border: '1px solid black' }}>Currently no files</Typography></td>
                                <td><Typography p={1} sx={{ fontSize: '13px', fontWeight: '400' }}>Sep 09 - Jan 08</Typography></td>
                                <td> <CircularProgressWithLabel strokewidth="100" value={progress} sx={{ color: 'red' }} /></td>
                                <td> <CircularProgressWithLabel value={progress} /></td>
                                <td>  <CircularProgressWithLabel value={progress} /></td>
                                <td></td>
                            </tr><tr  >
                                <td>
                                    1.
                                </td>
                                <td colSpan={2} ><Typography sx={{ fontSize: '14px', fontWeight: '500', alignItems: 'center' }}>Overall % completion of Cerner upgrade</Typography></td>
                                <td ><Typography px={4} sx={{
                                    fontSize: '13px', fontWeight: '300', border: '2px solid red', borderRadius: 2
                                }}>New Task</Typography></td>
                                <td></td>
                                <td><Typography p={1} sx={{ fontSize: '13px', fontWeight: '400', border: '1px solid black' }}>Currently no files</Typography></td>
                                <td><Typography p={1} sx={{ fontSize: '13px', fontWeight: '400' }}>Sep 09 - Jan 08</Typography></td>
                                <td> <CircularProgressWithLabel strokewidth="100" value={progress} sx={{ color: 'red' }} /></td>
                                <td> <CircularProgressWithLabel value={progress} /></td>
                                <td>  <CircularProgressWithLabel value={progress} /></td>
                                <td></td>
                            </tr>

                        </tbody>
                        <Divider />
                    </Table>
                </Box>
            </Container>
        </div >
    )
}

export default Index