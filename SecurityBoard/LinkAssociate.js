import { Container, Box, Grid, Typography, IconButton, Avatar, Stack, Button,Link } from '@mui/material'
import React from 'react'
import ArrowDropDownCircleIcon from '@mui/icons-material/ArrowDropDown'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';




const LinkAssociate = () => {
    return (
        <Box sx={{marginTop:'3px'}}  >
            {/* Link */}
            <Grid container sx={{ backgroundColor: '#f6f6f6', alignItems: 'center' }}>
                <Grid item xs={5}>

                </Grid>
                <Grid item xs={6}>
                    <Typography variant='h6' sx={{ fontSize: 16 }} > Link</Typography>
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
                    <Box height="80px"
                        sx={{
                            mx: 'auto',
                            p: 2,
                        }}
                    >
                        <Stack spacing={3} direction="row" alignBoxs="center" sx={{ justifyContent: 'start' }}>
                            <Link href="#" sx={{fontSize:14}} >Add Link Copy / paste Link</Link>
                        </Stack>

                    </Box>

                </Box>

            </Box>
            {/* Associate NoteBook */}
            <Grid container sx={{ backgroundColor: '#f6f6f6', alignItems: 'center' }}>
                <Grid item xs={4}>

                </Grid>
                <Grid item xs={7}>
                    <Typography variant='h6' sx={{ fontSize: 16 }} > Associate NoteBook</Typography>
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
                    <Box height="80px"
                        sx={{
                            mx: 'auto',
                            p: 2,
                        }}
                    >
                        <Stack spacing={3} direction="row" alignBoxs="center" sx={{ justifyContent: 'start' }}>
                        </Stack>

                    </Box>

                </Box>

            </Box>
            {/* Associate Albums */}
            <Grid container sx={{ backgroundColor: '#f6f6f6', alignItems: 'center' }}>
                <Grid item xs={4}>

                </Grid>
                <Grid item xs={7}>
                    <Typography variant='h6' sx={{ fontSize: 16 }} > Associate Albums</Typography>
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
                    <Box height="80px"
                        sx={{
                            mx: 'auto',
                            p: 2,
                        }}
                    >
                        <Stack spacing={3} direction="row" alignBoxs="center" sx={{ justifyContent: 'start' }}>
                        </Stack>

                    </Box>

                </Box>

            </Box>
        </Box>
    )
}

export default LinkAssociate