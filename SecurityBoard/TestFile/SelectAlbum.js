import React from 'react'
import { Container, FormControl, OutlinedInput, InputLabel, Divider, Box, Stack, Button, Typography } from '@mui/material'
import ClearIcon from '@mui/icons-material/Clear';
import Modal from '@mui/material/Modal'


import Checkbox from '@mui/material/Checkbox';

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };



const style = {
    position: 'absolute',
    top: '100%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    zIndex: 999,
};




const SelectAlbum = (props) => {
    const { setalb } = props

    return (
        <div>
            <Container maxWidth="sm">
                <Box sx={style}>
                    <Box boxShadow={18} sx={{ backgroundColor: '#DBDBDB', border: '0px solid black', paddingBottom: '2px' }}>
                        <Box>
                            <Stack direction='row' sx={{ justifyContent: 'space-between', alignItem: 'end' }}>
                                <Typography></Typography>
                                <Typography sx={{ fontWeight: 'bold' }}>SELECT ALBUM</Typography>
                                <Button onClick={() => { setalb(false); }} sx={{ color: '#000000' }}><span>X</span>
                                </Button>
                            </Stack>
                            <Typography sx={{ padding: '8px' }}>Select</Typography>
                        </Box>
                        <Box sx={{ backgroundColor: '#AEAEAE' }}>
                            <Stack direction='row' gap={10} m={1} sx={{ alignItems: 'center' }}>
                                <Checkbox {...label} />
                                <Typography>Healthcare</Typography>
                            </Stack>
                            <Divider color="black" />
                            <Stack direction='row' gap={10} m={1} sx={{ alignItems: 'center' }}>
                                <Checkbox {...label} />
                                <Typography>Maintenance Team</Typography>
                            </Stack>
                            <Divider color="black" />
                            <Stack direction='row' gap={10} m={1} sx={{ alignItems: 'center' }}>
                                <Checkbox {...label} />
                                <Typography>Programs</Typography>
                            </Stack>
                            <Divider color="black" />
                            <Stack direction='row' gap={10} m={1} sx={{ alignItems: 'center' }}>
                                <Checkbox {...label} />
                                <Typography>Skyscrapers</Typography>
                            </Stack>
                            <Divider color="black" />

                        </Box>
                        <Stack direction='row' m={2} gap={4} sx={{ justifyContent: 'center' }}>
                            <Button variant="outlined" sx={{ color: '#000000', borderColor: '#000000' }} size='small'>Add</Button>
                        </Stack>
                    </Box>
                </Box>
            </Container>

        </div>

    )
}

export default SelectAlbum