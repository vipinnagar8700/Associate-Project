import React, { useState } from 'react'
import { Grid, Container, Stack, Typography, Box, Avatar, IconButton, Divider, CardActionArea, CardActions, CardMedia } from '@mui/material'
// import { DashboardBoard } from './DashboardBoard'
import ArrowDropDownCircleIcon from '@mui/icons-material/ArrowDropDown'
// import AddDiscussion from '../Station_Discussion/AddDiscussion'
import ArrowRightOutlinedIcon from '@mui/icons-material/ArrowRightOutlined';
import ProjectDes from './TestFile/ProjectDes';
import Addassign from './TestFile/Addassign';
import Video from './TestFile/Video';
import ProjectRoleAdd from './TestFile/ProjectRoleAdd';


const ProjectDescription = () => {

    const [des, setdes] = useState(false);
    const handleOpen = () => {
        setdes(true);
    };

    // filesonc setsk({...sk,file:false,act})
    const [assi, setassi] = useState(false
    )

    // filesonc setsk({...sk,file:false,act})
    const [vid, setvid] = useState(false
    )


    // add New Contact
    const [con, setcon] = useState(false
    )


    return (
        <Box>
            {/* Project Description */}
            <Grid container sx={{ justifyContent: 'center', backgroundColor: '#f6f6f6', alignItems: 'center' }}>

                <Grid item m={1}>
                    <Typography variant='h6' sx={{
                        fontSize: 16, "&:hover": {
                            border: "1px solid #00FF00",
                        }
                    }} onClick={() => setdes(true)} > Project Description</Typography>
                    {
                        des &&
                        <ProjectDes des={des} setdes={setdes} />
                    }
                </Grid>

            </Grid>
            {/* Data */}
            <Box >

                <Box sx={{
                    flexGrow: 1, backgroundColor: 'white',

                }}>
                    <Box
                        sx={{
                            mx: 'auto',
                            p: 2,
                        }}
                    >
                        <Stack spacing={3} direction="row" alignBoxs="center">

                            <Typography sx={{ fontSize: 14 }}>Add Description</Typography>
                        </Stack>

                    </Box>

                </Box>

            </Box>
            {/* Project Roles And Contact Info */}
            <Grid container sx={{ justifyContent: 'center', backgroundColor: '#f6f6f6', alignItems: 'center' }}>
                <Grid item xs={12} sx={{ textAlign: "center" }}>
                    <Stack direction={"row"} sx={{ justifyContent: "space-between", alignItems: "center" }}>
                        <Box></Box>
                        <Box><Typography my={1} sx={{
                            fontSize: 16, "&:hover": {
                                border: "1px solid #00FF00",
                            }
                        }} onClick={(handleOpenAction) => setassi(!assi)} > Project Roles And Contact Info</Typography>
                            {
                                assi && <Addassign setassi={setassi} />
                            }</Box>
                        <Box>
                            <ArrowDropDownCircleIcon onClick={() => setcon(!con)} />
                            {
                                con &&
                                <ProjectRoleAdd setcon={setcon} />
                            }
                            <ArrowDropDownCircleIcon type="button" />
                        </Box>
                    </Stack>

                </Grid>




            </Grid>
            {/* Data */}
            <Box >

                <Box sx={{
                    flexGrow: 1, backgroundColor: 'white',

                }}>
                    <Box height="235px"
                        sx={{
                            mx: 'auto',
                            p: 2,
                        }}
                    >
                        <Stack spacing={3} direction="row" alignBoxs="center">

                            <Typography>John S Smith <IconButton>
                                <ArrowRightOutlinedIcon type="button" />
                            </IconButton></Typography>

                        </Stack>
                        <Divider sx={{ backgroundColor: '#000000', height: '1px' }} />

                    </Box>

                </Box>

            </Box>
            {/* Video */}
            <Grid container sx={{ justifyContent: 'center', backgroundColor: '#f6f6f6', alignItems: 'center' }}>

                <Grid item m={1}>
                    <Typography variant='h6' sx={{
                        fontSize: 16, "&:hover": {
                            border: "1px solid #00FF00",
                        }
                    }} onClick={() => setvid(!vid)} > Video</Typography>
                    {
                        vid && <Video setvid={setvid} />
                    }
                </Grid>

            </Grid>
            {/* Data */}
            <Box >

                <Box height="260px" sx={{
                    flexGrow: 1, backgroundColor: 'white',

                }}>
                    <Box p={0.5}
                        sx={{
                            mx: 'auto',
                        }}
                    >
                        <Stack spacing={2} sx={{ backgroundColor: '#DFF7F9' }} direction="row" alignBoxs="center">

                            <Typography m={0.5}>Test</Typography>

                        </Stack>
                        <CardActionArea  >
                            <CardMedia
                                component="video"
                                height="200"
                                autoPlay
                                controls
                                src="https://www.google.com/search?q=youtube+nature+video+clip&sxsrf=APwXEddi_27xxEsO55kAAnJ_b9C9_eV__Q%3A1681664572679&ei=PCo8ZP-HKbfl2roPq96K-AI&ved=0ahUKEwj_lfHb8K7-AhW3slYBHSuvAi8Q4dUDCA8&uact=5&oq=youtube+nature+video+clip&gs_lcp=Cgxnd3Mtd2l6LXNlcnAQAzIGCAAQFhAeMggIABCKBRCGAzIICAAQigUQhgM6BQgAEIAEOgcIIRCgARAKOggIIRAWEB4QHUoECEEYAFAAWKYPYPgTaABwAXgAgAHoAogBgQySAQcwLjIuMi4ymAEAoAEBwAEB&sclient=gws-wiz-serp#fpstate=ive&vld=cid:8a5f9b11,vid:nqye02H_H6I"

                            />
                        </CardActionArea>

                    </Box>

                </Box>

            </Box>
        </Box >
    )
}

export default ProjectDescription