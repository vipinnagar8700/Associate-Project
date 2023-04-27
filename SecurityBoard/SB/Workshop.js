import React from 'react'
import { Container, Box, Stack, Input, span, Typography, TextField, Link } from '@mui/material'
import Form from 'react-bootstrap/Form'
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import CancelIcon from '@mui/icons-material/Cancel';

const style = {
    zIndex: 999,
    position: 'absolute',
    top: '47%',
    left: '75%',
    width: 460,
    transform: 'translate(-50%, -50%)',
}

const Workshop = (props) => {

    const { setworks } = props
    return (
        <div>
            <Container maxWidth="md" sx={style}>
                <Box m={3} sx={{ backgroundColor: '#ffff', border: '1px solid blue',overflow:'scroll' }} height="400px" >
                    <Stack p={1} direction='row' sx={{ justifyContent: 'space-between', bgcolor: '#f3f3f3' }}>
                        <Box>

                        </Box>
                        <Box>
                            <Typography>
                                Workshop Projects
                            </Typography>
                        </Box>
                        <Box>
                            <CancelIcon onClick={() => { setworks(false); }} />
                        </Box>




                    </Stack>
                    <Stack direction='row' sx={{ justifyContent: 'flex-end' }}>
                        <Box></Box>
                        <Box></Box>
                        <Box><TextField size="small"  sx={{margin:1}} /></Box>
                    </Stack>
                    <Stack p={1} direction='row' sx={{ justifyContent: 'space-between', bgcolor: '#f3f3f3', fontWeight: '400' }}>
                        <Box>
                            S.NO
                        </Box>
                        <Box>
                            TITTLE OF PROJECT BOARD
                        </Box>

                        <Box>
                            VISITS
                        </Box>
                    </Stack>
                    <Stack p={1} direction='row' sx={{
                        justifyContent: 'space-between', bgcolor: '#ffff', fontWeight: '400', overflow: 'hidden', "&:hover": {
                            border: "0px solid #00FF00", bgcolor: 'aliceblue'
                        }
                    }}>
                        <Box>
                            1
                        </Box>
                        <Box>
                            <Link>A</Link>
                        </Box>

                        <Box>
                            4
                        </Box>
                    </Stack>
                    <Stack p={1} direction='row' sx={{
                        justifyContent: 'space-between', bgcolor: '#ffff', fontWeight: '400', overflow: 'hidden', "&:hover": {
                            border: "0px solid #00FF00", bgcolor: 'aliceblue'
                        }
                    }}>
                        <Box>
                            1
                        </Box>
                        <Box>
                            <Link>A</Link>
                        </Box>

                        <Box>
                            4
                        </Box>
                    </Stack>
                    <Stack p={1} direction='row' sx={{
                        justifyContent: 'space-between', bgcolor: '#ffff', fontWeight: '400', overflow: 'hidden', "&:hover": {
                            border: "0px solid #00FF00", bgcolor: 'aliceblue'
                        }
                    }}>
                        <Box>
                            1
                        </Box>
                        <Box>
                            <Link>A</Link>
                        </Box>

                        <Box>
                            4
                        </Box>
                    </Stack>
                    <Stack p={1} direction='row' sx={{
                        justifyContent: 'space-between', bgcolor: '#ffff', fontWeight: '400', overflow: 'hidden', "&:hover": {
                            border: "0px solid #00FF00", bgcolor: 'aliceblue'
                        }
                    }}>
                        <Box>
                            1
                        </Box>
                        <Box>
                            <Link>A</Link>
                        </Box>

                        <Box>
                            4
                        </Box>
                    </Stack>
                    <Stack p={1} direction='row' sx={{
                        justifyContent: 'space-between', bgcolor: '#ffff', fontWeight: '400', overflow: 'hidden', "&:hover": {
                            border: "0px solid #00FF00", bgcolor: 'aliceblue'
                        }
                    }}>
                        <Box>
                            1
                        </Box>
                        <Box>
                            <Link>A</Link>
                        </Box>

                        <Box>
                            4
                        </Box>
                    </Stack>
                    <Stack p={1} direction='row' sx={{
                        justifyContent: 'space-between', bgcolor: '#ffff', fontWeight: '400', overflow: 'hidden', "&:hover": {
                            border: "0px solid #00FF00", bgcolor: 'aliceblue'
                        }
                    }}>
                        <Box>
                            1
                        </Box>
                        <Box>
                            <Link>A</Link>
                        </Box>

                        <Box>
                            4
                        </Box>
                    </Stack>
                    <Stack p={1} direction='row' sx={{
                        justifyContent: 'space-between', bgcolor: '#ffff', fontWeight: '400', overflow: 'hidden', "&:hover": {
                            border: "0px solid #00FF00", bgcolor: 'aliceblue'
                        }
                    }}>
                        <Box>
                            1
                        </Box>
                        <Box>
                            <Link>A</Link>
                        </Box>

                        <Box>
                            4
                        </Box>
                    </Stack>
                    <Stack p={1} direction='row' sx={{
                        justifyContent: 'space-between', bgcolor: '#ffff', fontWeight: '400', overflow: 'hidden', "&:hover": {
                            border: "0px solid #00FF00", bgcolor: 'aliceblue'
                        }
                    }}>
                        <Box>
                            1
                        </Box>
                        <Box>
                            <Link>A</Link>
                        </Box>

                        <Box>
                            4
                        </Box>
                    </Stack>
                    <Stack p={1} direction='row' sx={{
                        justifyContent: 'space-between', bgcolor: '#ffff', fontWeight: '400', overflow: 'hidden', "&:hover": {
                            border: "0px solid #00FF00", bgcolor: 'aliceblue'
                        }
                    }}>
                        <Box>
                            1
                        </Box>
                        <Box>
                            <Link>A</Link>
                        </Box>

                        <Box>
                            4
                        </Box>
                    </Stack>
                    <Stack p={1} direction='row' sx={{
                        justifyContent: 'space-between', bgcolor: '#ffff', fontWeight: '400', overflow: 'hidden', "&:hover": {
                            border: "0px solid #00FF00", bgcolor: 'aliceblue'
                        }
                    }}>
                        <Box>
                            1
                        </Box>
                        <Box>
                            <Link>A</Link>
                        </Box>

                        <Box>
                            4
                        </Box>
                    </Stack>

                </Box>
            </Container>
        </div>
    )
}

export default Workshop