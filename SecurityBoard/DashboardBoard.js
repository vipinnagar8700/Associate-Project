import { Container, Stack, Typography, Avatar, Link } from '@mui/material'
import React, { useState } from 'react'
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
import ProjectForm from './TestFile/ProjectForm';
import EB from './TestFile/EB'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import BoardDetails from './SB/BoardDetails';
import Camera from './SB/Camera';
import Collapse from '@mui/material/Collapse';
import Workshop from './SB/Workshop';


const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
}));


export const DashboardBoard = () => {
    const [open, setOpen] = useState(false);
    const handleOpen = () => {
        setOpen(true);
    };

    // EB

    const [eb, seteb] = useState(false)

    // Set Cover Color
    const [Boardc, setBoardc] = useState(false)

// Camera Icon
    const [camera, setcam] = useState(false)
    // S
    const [works, setworks] = useState(false)
    return (
        <div>
            <Container maxWidth="lg" sx={{ mt: 5 }} >
                <Box sx={{ backgroundColor: "#E7E9EC" }}>
                    <Grid p={1} container sx={{ bgcolor: "#fff", py: 1 }}>
                        <Grid items xs={12} sm={12} md={9}>
                            <Stack sx={{ justifyContent: { lg: "start", sm: "center" }, alignItems: "center" }}>
                                <Typography sx={{ color: "#337AB7", textAlign: "center", fontSize: 18 }}>Hospital Security Project Board -Active Shooter Training

                                    <ArrowDropDownIcon onClick={() => setOpen(true)} />
                                    {open &&
                                        <ProjectForm open={open} setOpen={setOpen} />
                                    }

                                </Typography>
                            </Stack>
                        </Grid>
                        <Grid items xs={12} sm={12} md={3}>
                            <Box sx={{ display: 'flex', flexWrap: "wrap", justifyContent: { sm: "flex-end", xs: "center" }, alignItems: "center" }} gap={1}>
                                <Avatar sx={{ height: 20, width: 20, bgcolor: 'black' }} ><Typography variant='caption' onClick={() => seteb(true)}>EB</Typography>
                                </Avatar>{
                                    eb &&
                                    <EB eb={eb} seteb={eb} />
                                }
                                
                                <Link href="/Sendboard"><Avatar sx={{ height: 20, width: 20, bgcolor: 'black' }}  ><Typography variant='caption' >SB</Typography></Avatar></Link>
                                <Avatar sx={{ height: 20, width: 20, bgcolor: 'black' }} ><Typography variant='caption' onClick={() => setBoardc(true)}>BD</Typography></Avatar>
                                {
                                    Boardc &&
                                    <BoardDetails Boardc={Boardc} setBoardc={setBoardc} />
                                }
                                <CameraAltIcon onClick={() => setcam(true)}  />
                                {
                                    camera &&
                                    <Camera camera={camera} setcam={setcam}/>
                                }
                                <Avatar sx={{ height: 20, width: 20, bgcolor: 'black' }} ><Typography variant='caption' onClick={() => setworks(true)}>S</Typography></Avatar>
                                {
                                    works && 
                                    <Workshop works={works} setworks={setworks}/>
                                }

                                <Avatar sx={{ height: 20, width: 20, bgcolor: 'black' }} ><Typography variant='caption'>AB</Typography></Avatar>
                                <Avatar sx={{ height: 20, width: 20, bgcolor: 'black' }} ><Typography variant='caption'>E</Typography></Avatar>
                                <Avatar sx={{ height: 20, width: 20, bgcolor: 'black' }} ><Typography variant='caption'>T</Typography></Avatar>
                                <Avatar sx={{ height: 20, width: 20, bgcolor: 'black' }} ><Typography variant='caption'>B</Typography></Avatar>
                            </Box>
                        </Grid>
                    </Grid>
                    <Box >
                        <Stack>

                            {/* Hospotal security */}
                            <Box
                                sx={{
                                    backgroundColor: "#ffff",
                                    color: "black",
                                    display: "flex",
                                    justifyContent: { sm: "space-between", xs: "center" },
                                    alignItems: "center",


                                }}
                            >
                            </Box>
                            {/* Container of Project Associate And Photos And project Description */}
                            <Grid container gap={0.5} >
                                <Grid item lg={3.5} xs={12}  >
                                    <ProjectAssociate />
                                </Grid>
                                <Grid item lg={4.5} xs={12} >
                                    <ProjectPhotos />
                                </Grid>
                                <Grid item lg={3.9} xs={12}>
                                    <ProjectDescription />
                                </Grid>
                            </Grid>
                            <Grid container gap={0.5}>
                                <Grid item xl={3.5} lg={12} xs={12} md={12} sm={12} >
                                    <LinkAssociate />
                                </Grid>
                                <Grid item lg={8.4} md={12} sm={12} xs={12}>
                                    <Assignments />
                                </Grid>

                            </Grid>
                        </Stack>
                    </Box>
                </Box>
            </Container >
        </div >
    )
}
