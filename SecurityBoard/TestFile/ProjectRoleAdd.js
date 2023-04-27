import React from 'react'
import { Container, FormControl, OutlinedInput, InputLabel, Divider, Box, Stack, Button, Typography } from '@mui/material'
import TextField from '@mui/material/TextField';
import Autocomplete, { createFilterOptions } from '@mui/material/Autocomplete';
import ClearIcon from '@mui/icons-material/Clear';
import TextareaAutosize from '@mui/base/TextareaAutosize';
import Form from 'react-bootstrap/Form'
import Modal from '@mui/material/Modal'

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    zIndex: 999,
};



const ProjectRoleAdd = (props) => {

    const { setcon } = props
    return (
        <div>
            <Container maxWidth="xs">
                <Box sx={style}>

                    <Box p={1} boxShadow={18} sx={{ backgroundColor: '#ffff', border: '0px solid black', borderRadius: 4 }}>

                        <Stack direction='row' sx={{ justifyContent: 'end', alignItem: 'center' }}>
                            <Button sx={{ color: '#000000' }} onClick={() => { setcon(false); }}><span   >X</span>
                            </Button>
                        </Stack>
                        <Divider color="#000000" />
                        <Stack direction='row' gap={4} m={2} sx={{ alignItems: 'center', justifyContent: 'space-between' }}>
                            <InputLabel m={9} htmlFor="component-simple"> Add Contact Info  </InputLabel>
                            <TextField size='small' placeholder='search' required />
                        </Stack>
                        <Stack m={1} direction='row' gap={4} sx={{ alignItems: 'start', justifyContent: 'space-between' }}>
                            <InputLabel htmlFor="component-simple" > Add Name </InputLabel>
                            <InputLabel htmlFor="component-simple"> Add Contact Info </InputLabel>
                            <Typography></Typography>
                        </Stack>
                        <Stack m={1} direction='row' gap={4} sx={{ alignItems: 'start', justifyContent: 'start' }}>
                            <TextField size='small' required />

                            <TextareaAutosize
                                aria-label="minimum height"
                                minRows={4}
                                p={3}
                                style={{ width: '280px' }}
                                required />
                        </Stack>
                        <Stack direction='row' m={2} gap={4} sx={{ justifyContent: 'space-evenly' }}>
                            <Button variant="contained" sx={{ color: '#000000', borderColor: '#000000' }} size='small' >Save</Button>
                            <Button variant="outlined" sx={{ color: '#000000', borderColor: '#000000' }} size='small' >Add More</Button>
                        </Stack>
                    </Box>
                </Box></Container></div>
    )
}

export default ProjectRoleAdd