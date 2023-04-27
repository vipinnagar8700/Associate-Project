import { Container, Box, Grid, Typography, IconButton, Avatar, Stack, Button, Link } from '@mui/material'
import React, { useState } from 'react'
import ArrowDropDownCircleIcon from '@mui/icons-material/ArrowDropDown'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Linktittle from './TestFile/Linktittle';

import SelectAlbum from './TestFile/SelectAlbum';


const LinkAssociate = () => {

    // link
    const [lik, setLik] = useState(false);
    const handleOpen = () => {
        setLik(true);
    };

    //project album

    const [alb, setalb] = useState(false)


    return (
        <Box   >
          
            {/* Link */}
            <Grid container sx={{ justifyContent: 'center', backgroundColor: '#f6f6f6', alignItems: 'center' }}>

                <Grid item m={1}>
                    <Typography variant='h6' sx={{
                        fontSize: 16, "&:hover": {
                            border: "1px solid #00FF00",
                        }
                    }} onClick={() => setLik(true)}  > Link</Typography>
                    {
                        lik &&
                        <Linktittle lik={lik} setLik={setLik} />
                    }
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
                            <Link href="#" sx={{ fontSize: 14 }} >Add Link Copy / paste Link</Link>
                        </Stack>

                    </Box>

                </Box>

            </Box>
            {/* Associate NoteBook */}
            <Grid container sx={{ justifyContent: 'center', backgroundColor: '#f6f6f6', alignItems: 'center' }}>

                <Grid item m={1} >
                    <Typography variant='h6' sx={{
                        fontSize: 16, "&:hover": {
                            border: "1px solid #00FF00",
                        }
                    }} > Associate NoteBook</Typography>
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
            <Grid container sx={{ justifyContent: 'center', backgroundColor: '#f6f6f6', alignItems: 'center' }}>

                <Grid item m={1} >
                    <Typography variant='h6' sx={{
                        fontSize: 16, "&:hover": {
                            border: "1px solid #00FF00",
                        }
                    }} onClick={(handleOpenAction) => setalb(!alb)}> Associate Albums</Typography>
                    {
                        alb &&
                        <SelectAlbum setalb={setalb} />
                    }
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