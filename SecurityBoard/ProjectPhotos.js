import React from 'react'
import { Grid, Container, Stack, Typography, Box, Avatar, IconButton, } from '@mui/material'
// import { DashboardBoard } from './DashboardBoard'
import ArrowDropDownCircleIcon from '@mui/icons-material/ArrowDropDown'
import ProjectAssociate from './ProjectAssociate'
// import AddDiscussion from '../Station_Discussion/AddDiscussion'


const ProjectPhotos = () => {
    return (
        < Box >
            <Grid container sx={{ justifyContent: 'end', backgroundColor: '#f6f6f6', alignItems: 'center' }}>
                <Grid item xs={5}>

                </Grid>
                <Grid item xs={6}>
                    <Typography variant='h6' sx={{ fontSize: 16 }} > Photos</Typography>
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
                    <Box height="330px"
                        sx={{
                            mx: 'auto',
                            p: 2,
                        }}
                    >
                        <Stack spacing={3} direction="row"  alignBoxs="start" sx={{ justifyContent: 'center' }}>

                            <Typography sx={{fontSize:14}} >Currently No Photos</Typography>
                        </Stack>

                    </Box>

                </Box>

            </Box>
            {/* Comments */}
            <Grid container sx={{ justifyContent: 'end', backgroundColor: '#f6f6f6', alignItems: 'center' }}>
                <Grid item xs={5}>

                </Grid>
                <Grid item xs={6}>
                    <Typography variant='h6' sx={{ fontSize: 16 }} > Comments</Typography>
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
                    <Box height="258px"
                        sx={{
                            mx: 'auto',
                            p: 2,
                        }}
                    >
                        <Stack spacing={3} direction="row" p={15} alignBoxs="start" sx={{ justifyContent: 'center' }}>

                            <Typography ></Typography>
                        </Stack>

                    </Box>

                </Box>

            </Box>
        </Box >
    )
}

export default ProjectPhotos