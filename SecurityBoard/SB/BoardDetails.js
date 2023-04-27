import React from 'react'
import { Box, Grid, Container, Typography, Tooltip, Avatar, IconButton,Stack ,span} from '@mui/material'
import CancelIcon from '@mui/icons-material/Cancel';
import Checkbox from '@mui/material/Checkbox';


const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

const style={
    position: 'absolute',
    top: '40%',
    left: '80%',
    transform: 'translate(-50%, -50%)',
    zIndex:999,
}

const BoardDetails = (props) => {
    const { setBoardc } = props
    return (
        <div>
            <Container maxWidth="sm">
                <Box sx={style} bgcolor="#ffff">
                    <Box >
                        <Grid container sx={{ justifyContent: 'end', backgroundColor: '#D2DEE8', alignItems: 'center' }}>
                            <Grid item xs={10}>

                                <Typography variant='h6'  >Board Details</Typography></Grid>
                            <Grid item xs={1}>
                                <CancelIcon onClick={() => { setBoardc(false); }} />
                            </Grid>



                        </Grid>
                    </Box>
                    <Box sx={{backgroundColor:'#ffff'}}>
                        {/* Station session 1 */}
                        <Stack p={1}>



                            <Typography sx={{fontSize:'18'}}>Membership - 1 Associates </Typography>
                            <Typography sx={{fontSize:'18'}}>Board Creator - John S Smith </Typography>
                            <Typography sx={{fontSize:'18'}}>Date Created: 24 Apr 2023 </Typography>
                            <Stack direction='row' sx={{alignItems:'center',justifyContent:'space-between'}}>
                            <Typography sx={{fontSize:'18'}}>Allow all users to add data </Typography>
                            <Checkbox {...label} />
                            </Stack>
                            <Stack direction='row' sx={{alignItems:'center',justifyContent:'space-between'}}>
                            <Typography sx={{fontSize:'18'}}>Make Board Private </Typography>
                            <Checkbox {...label} />
                            </Stack>
                            <Stack direction='row' sx={{alignItems:'center',justifyContent:'space-between'}}>
                            <Typography sx={{fontSize:'18'}}>Total Board Visits </Typography>
                            <Typography pr={2}>1</Typography>
                            </Stack>

                        </Stack>

                    </Box>


                </Box>
            </Container>
        </div >
    )
}

export default BoardDetails