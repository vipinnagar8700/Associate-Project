import React, { useState } from 'react'
import { Grid, Container, Stack, Typography, Box, Avatar, IconButton, Link } from '@mui/material'
// import { DashboardBoard } from './DashboardBoard'
import ArrowDropDownCircleIcon from '@mui/icons-material/ArrowDropDown'
import AssociateSearch from './TestFile/AssociateSearch';
import Filetittle from './TestFile/Filetittle';
// import AddDiscussion from '../Station_Discussion/AddDiscussion'
import Actionlist from './TestFile/Actionlist';
import ProjectTime from './TestFile/ProjectTime';

const ProjectAssociate = () => {
    // search
    const [search, setSearch] = useState(false);
    const handleOpen = () => {
        setSearch(true);
    };


    // filesonc setsk({...sk,file:false,act})
    const [sk, setsk] = useState(false
    )


    // Action List

    const [action, setActions] = useState(false)

    //project Timeline & status

    const [timeline, settimeline] = useState(false)


    return (
        <Box>
            {/* Project Associate */}
            <Grid container sx={{ backgroundColor: '#f6f6f6', alignItems: 'center' }}>
                <Grid item xs={12} sx={{ textAlign: "center" }}>
                    <Stack direction={"row"} sx={{ justifyContent: "space-between", alignItems: "center" }}>
                        <Box></Box>
                        <Box><Typography variant='h6' my={1} sx={{
                            fontSize: 16, "&:hover": {
                                border: "1px solid #00FF00",
                            }
                        }} > Project Associate</Typography></Box>
                        <Box>
                            <ArrowDropDownCircleIcon onClick={() => setSearch(true)} />
                            {
                                search &&
                                <AssociateSearch search={search} setSearch={setSearch} />
                            }
                        </Box>
                    </Stack>

                </Grid>

            </Grid>
            {/* Data  */}
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

                            <Avatar alt='John s smith' sx={{ width: 55, height: 55 }} src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQPQmH3gZw6BGda2FbR4lpxXr09NZsI_axIg&usqp=CAU' />
                           


                        </Stack>

                    </Box>

                </Box>

            </Box>
            {/* Files */}
            <Grid container sx={{ backgroundColor: '#f6f6f6', justifyContent: 'center', alignItems: 'center' }}>

                <Grid item >
                    <Typography variant='h6' my={1} sx={{
                        fontSize: 16, "&:hover": {
                            border: "1px solid #00FF00",
                        }
                    }} onClick={(handleOpenfile) => setsk(!sk)} > Files</Typography>
                    {
                        sk && <Filetittle setsk={setsk} />
                    }
                </Grid>

            </Grid>
            {/* Data */}
            <Box >

                <Box height="204px" sx={{
                    flexGrow: 1, backgroundColor: 'white',

                }}>
                    <Box
                        sx={{
                            mx: 'auto',
                            p: 2,
                        }}
                    >
                        <Stack spacing={3} direction="row" alignBoxs="center" sx={{ justifyContent: 'center' }}>

                            <Typography sx={{ fontSize: 14 }}>No Files Present</Typography>
                        </Stack>

                    </Box>

                </Box>

            </Box>
            {/* Action ListS */}
            <Grid container sx={{ backgroundColor: '#f6f6f6', alignItems: 'center' }}>
                <Grid item xs={12} sx={{ textAlign: "center" }}>
                    <Stack direction={"row"} sx={{ justifyContent: "space-between", alignItems: "center" }}>
                        <Box><Link href="/profile"><Avatar alt='John s smith' sx={{ width: 30, height: 30 }} src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQPQmH3gZw6BGda2FbR4lpxXr09NZsI_axIg&usqp=CAU' /></Link></Box>
                        <Box><Typography variant='h6' sx={{
                            fontSize: 16, "&:hover": {
                                border: "1px solid #00FF00",
                            }
                        }} onClick={(handleOpenAction) => setActions(!action)}> Action List</Typography>
                            {
                                action && <Actionlist setActions={setActions} />
                            }</Box>
                        <Box>
                        <IconButton>
                        <ArrowDropDownCircleIcon type="button" />
                    </IconButton>

                        </Box>
                    </Stack>

                </Grid>
                
            </Grid>
            {/* Data */}
            <Box >

                <Box sx={{
                    flexGrow: 1, backgroundColor: 'white',

                }}>
                    <Box height="160px"
                        sx={{
                            mx: 'auto',
                            p: 2,
                        }}
                    >
                        <Stack spacing={3} direction="row" alignBoxs="center" sx={{ justifyContent: 'center' }}>

                            <Typography></Typography>
                        </Stack>

                    </Box>

                </Box>

            </Box>
            {/* Project Timeline And Status */}
            <Grid container sx={{ justifyContent: 'center', backgroundColor: '#f6f6f6', alignItems: 'center' }}>

                <Grid item m={1} >
                    <Typography variant='h6' sx={{
                        fontSize: 16, "&:hover": {
                            border: "1px solid #00FF00",
                        }
                    }} onClick={(handleOpenAction) => settimeline(!timeline)}> Project Timeline & Status</Typography>
                    {
                        timeline && <ProjectTime settimeline={settimeline} />
                    }
                </Grid>

            </Grid>
            {/* Data */}
            <Box >

                <Box sx={{
                    flexGrow: 1,

                }}>
                    <Box
                        sx={{
                            mx: 'auto',

                        }}
                    >
                        <Stack spacing={3} direction="row" p={1} alignBoxs="center" sx={{ justifyContent: 'start', alignItems: 'center', paddingLeft: 3 }}>
                            <Typography sx={{ border: '0px solid red', padding: 1.3, backgroundColor: '#fff', fontSize: 13 }}> Finish Date </Typography>
                            <Typography sx={{ border: '0px solid red', padding: 1.3, backgroundColor: '#fff', fontSize: 13 }}> Start Date </Typography>
                            <Avatar sx={{ height: 20, width: 20, backgroundColor: 'red', color: 'red' }}></Avatar>
                        </Stack>
                    </Box>
                </Box>

            </Box>


        </Box>
    )
}

export default ProjectAssociate