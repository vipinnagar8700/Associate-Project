import { Container, Stack, Typography, Avatar } from '@mui/material'
import React from 'react'
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import ArrowDropDownCircleIcon from '@mui/icons-material/ArrowDropDownCircle';
import AddAPhotoIcon from '@mui/icons-material/AddAPhoto';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import IconButton from '@mui/material/IconButton';
import CardActionArea from '@mui/material/CardActionArea';
import CardMedia from '@mui/material/CardMedia';
import ProjectAssociate from './ProjectAssociate';
import ProjectPhotos from './ProjectPhotos';
import ProjectDescription from './ProjectDescription';
import Assignments from './Assignments';
import LinkAssociate from './LinkAssociate';


const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
}));


export const DashboardBoard = () => {
    return (
        <div>
            <Container maxWidth="lg">
                <Stack>
                    <Box m={5} sx={{ backgroundColor: "#E7E9EC" }}>
                        <Stack>

                            {/* Hospotal security */}
                            <Box m={0.5} p={1}
                                sx={{
                                    backgroundColor: "#ffff",
                                    color: "black",
                                    display: "flex",
                                    justifyContent: "space-between",
                                    alignItems: "center",
                                    flexWrap: "wrap",

                                }}
                            >

                                <Box sx={{ justifyContent: "flex-start", alignItems: "center" }}><Typography sx={{ color: "#337AB7",display:'flex', fontSize: 18 }}>Hospital Security Project Board - <Typography sx={{color:'#000000', fontSize: 18}} >Active Shooter Training</Typography>< ArrowDropDownCircleIcon sx={{color:'#000000'}} /></Typography></Box>
                                <Box sx={{ display: 'flex', justifyContent: "flex-end", alignItems: "center" }} gap={1}>
                                    <Avatar sx={{ height: 20, width: 20, bgcolor: 'black' }} ><Typography variant='caption'>EB</Typography></Avatar>
                                    <Avatar sx={{ height: 20, width: 20, bgcolor: 'black' }} ><Typography variant='caption'>SB</Typography></Avatar>
                                    <Avatar sx={{ height: 20, width: 20, bgcolor: 'black' }} ><Typography variant='caption'>BD</Typography></Avatar>
                                    <CameraAltIcon />
                                    <Avatar sx={{ height: 20, width: 20, bgcolor: 'black' }} ><Typography variant='caption'>S</Typography></Avatar>
                                    <Avatar sx={{ height: 20, width: 20, bgcolor: 'black' }} ><Typography variant='caption'>AB</Typography></Avatar>
                                    <Avatar sx={{ height: 20, width: 20, bgcolor: 'black' }} ><Typography variant='caption'>E</Typography></Avatar>
                                    <Avatar sx={{ height: 20, width: 20, bgcolor: 'black' }} ><Typography variant='caption'>T</Typography></Avatar>
                                    <Avatar sx={{ height: 20, width: 20, bgcolor: 'black' }} ><Typography variant='caption'>B</Typography></Avatar>
                                </Box>


                            </Box>
                            {/* Container of Project Associate And Photos And project Description */}
                            <Grid container  gap={0.5}>
                                <Grid item lg={3.5} md={6} sm={12} xs={12}>
                                    <ProjectAssociate/>
                                </Grid>
                                <Grid item lg={4.5} md={5.9} sm={12} xs={12}>
                                    <ProjectPhotos/>
                                </Grid>
                                <Grid item lg={3.9}  md={6} sm={11.9} xs={12}>
                                    <ProjectDescription/>
                                </Grid>
                            </Grid>
                            <Grid container  gap={0.5}>
                                <Grid item lg={3.5} md={6} sm={12} xs={12}>
                                    <LinkAssociate/>
                                </Grid>
                                <Grid item lg={8.4} md={12} sm={12} xs={12}>
                                    <Assignments/>
                                </Grid>
                                
                            </Grid>
                        </Stack>
                    </Box>
                </Stack>
            </Container >
        </div >
    )
}
