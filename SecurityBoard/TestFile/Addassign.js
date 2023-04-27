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
    zIndex:999,
};



const Addassign = (props) => {
    const { setassi } = props
    return (
        <div>
            <Container>
                <Box sx={style}>

                    <Box p={1} sx={{ backgroundColor: '#ffff', border: '1px solid black', borderRadius: 2 }}>

                        <Stack direction='row' sx={{ justifyContent: 'space-between', alignItem: 'center' }}>
                            <Typography>Add Assignments</Typography>
                            <Button sx={{ color: '#000000' }} onClick={() => { setassi(false); }} > <span sx={{ color: '#000000', borderColor: '#000000' }}>X</span>
                            </Button>
                        </Stack>
                        <Divider color="#000000" />
                        <Stack direction='row' m={2} gap={2} sx={{ alignItems: 'center' }} >
                            <InputLabel htmlFor="component-simple"> John S Smith </InputLabel>
                            <FormControl sx={{ width: {lg:'340px'} }}>
                            <OutlinedInput placeholder='Add Video' size='small' />
                        </FormControl>
                        </Stack>

                        <Stack direction='row' m={2} gap={4} sx={{ justifyContent: 'center' }}>
                            <Button variant="contained" size="small">Save</Button>

                        </Stack>
                    </Box>
                </Box>
            </Container>
        </div>

    )
}

export default Addassign