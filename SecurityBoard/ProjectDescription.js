import React from 'react'
import { Grid, Container, Stack, Typography, Box, Avatar, IconButton, Divider, CardActionArea, CardActions, CardMedia } from '@mui/material'
// import { DashboardBoard } from './DashboardBoard'
import ArrowDropDownCircleIcon from '@mui/icons-material/ArrowDropDown'
// import AddDiscussion from '../Station_Discussion/AddDiscussion'


const ProjectDescription = () => {
    return (
        <Box>
            {/* Project Description */}
            <Grid container sx={{ justifyContent: 'end', backgroundColor: '#f6f6f6', alignItems: 'center' }}>
                <Grid item xs={4}>

                </Grid>
                <Grid item xs={7}>
                    <Typography variant='h6' sx={{ fontSize: 16 }} > Project Description</Typography>
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
                    <Box
                        sx={{
                            mx: 'auto',
                            p: 2,
                        }}
                    >
                        <Stack spacing={3} direction="row" alignBoxs="center">

                            <Typography sx={{fontSize:14}}>Add Description</Typography>
                        </Stack>

                    </Box>

                </Box>

            </Box>
            {/* Project Roles And Contact Info */}
            <Grid container sx={{ justifyContent: 'end', backgroundColor: '#f6f6f6', alignItems: 'center' }}>
                <Grid item xs={3}>

                </Grid>
                <Grid item xs={8}>
                    <Typography  sx={{ fontSize: 15 }} > Project Roles And Contact Info</Typography>
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
                    <Box height="235px"
                        sx={{
                            mx: 'auto',
                            p: 2,
                        }}
                    >
                        <Stack spacing={3} direction="row"  alignBoxs="center">

                            <Typography>John S Smith</Typography>
                            
                        </Stack>
                        <Divider  sx={{backgroundColor: '#000000',height:'1px'}}/>

                    </Box>

                </Box>

            </Box>
            {/* Video */}
            <Grid container sx={{ justifyContent: 'end', backgroundColor: '#f6f6f6', alignItems: 'center' }}>
                <Grid item xs={6}>

                </Grid>
                <Grid item xs={5}>
                    <Typography variant='h6' sx={{ fontSize: 16 }} > Video</Typography>
                </Grid>
                <Grid item xs={1}>
                    <IconButton>
                        <ArrowDropDownCircleIcon type="button" />
                    </IconButton>


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
        </Box>
    )
}

export default ProjectDescription