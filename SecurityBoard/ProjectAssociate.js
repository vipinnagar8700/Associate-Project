import React from 'react'
import { Grid, Container, Stack, Typography, Box, Avatar, IconButton, Link } from '@mui/material'
// import { DashboardBoard } from './DashboardBoard'
import ArrowDropDownCircleIcon from '@mui/icons-material/ArrowDropDown'
// import AddDiscussion from '../Station_Discussion/AddDiscussion'


const ProjectAssociate = () => {
    return (
        <Box>
            {/* Project Associate */}
            <Grid container sx={{ backgroundColor: '#f6f6f6', alignItems: 'center' }}>
                <Grid item xs={4}>

                </Grid>
                <Grid item xs={7}>
                    <Typography variant='h6' sx={{ fontSize: 16 }} > Project Associate</Typography>
                </Grid>
                <Grid item xs={1}>
                    <IconButton>
                        <ArrowDropDownCircleIcon type="button" />
                    </IconButton>
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
                            <Avatar alt='John s smith' sx={{ width: 55, height: 55 }} src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQPQmH3gZw6BGda2FbR4lpxXr09NZsI_axIg&usqp=CAU' />


                        </Stack>

                    </Box>

                </Box>

            </Box>
            {/* Files */}
            <Grid container sx={{ backgroundColor: '#f6f6f6', alignItems: 'center' }}>
                <Grid item xs={5}>

                </Grid>
                <Grid item xs={6}>
                    <Typography variant='h6' sx={{ fontSize: 16 }} > files</Typography>
                </Grid>
                <Grid item xs={1}>
                    <IconButton>
                        <ArrowDropDownCircleIcon type="button" />
                    </IconButton>


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
                <Grid item xs={5}>

                </Grid>
                <Grid item xs={6}>
                    <Typography variant='h6' sx={{ fontSize: 16 }} > Action List</Typography>
                </Grid>
                <Grid item xs={1}>
                    <IconButton>
                        <ArrowDropDownCircleIcon type="button" />
                    </IconButton>


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
            <Grid container sx={{ backgroundColor: '#f6f6f6', alignItems: 'center' }}>
                <Grid item xs={3}>

                </Grid>
                <Grid item xs={8}>
                    <Typography variant='h6' sx={{ fontSize: 16 }} > Project Timeline & Status</Typography>
                </Grid>
                <Grid item xs={1}>
                    <IconButton>
                        <ArrowDropDownCircleIcon type="button" />
                    </IconButton>


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
                            <Typography sx={{ border: '0px solid red', padding: 1.3, backgroundColor: '#fff',fontSize:13 }}> Finish Date </Typography>
                            <Typography sx={{ border: '0px solid red', padding: 1.3, backgroundColor: '#fff',fontSize:13  }}> Start Date </Typography>
                            <Avatar sx={{ height: 20, width: 20, backgroundColor: 'red', color: 'red' }}></Avatar>
                        </Stack>
                    </Box>
                </Box>

            </Box>
           

        </Box>
    )
}

export default ProjectAssociate