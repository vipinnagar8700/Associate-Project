import React from 'react'
import { Container, FormControl, OutlinedInput, InputLabel, Divider, Box, Stack, Button, Typography, Input } from '@mui/material'
import TextField from '@mui/material/TextField';
import Autocomplete, { createFilterOptions } from '@mui/material/Autocomplete';
import ClearIcon from '@mui/icons-material/Clear';
import TextareaAutosize from '@mui/base/TextareaAutosize';
import Form from 'react-bootstrap/Form'


const style = {
    position: 'absolute',
    top: '90%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    zIndex: 999,
};

const ProjectAssignments = (props) => {

    const { setassigns } = props
    return (
        <div>
            <Container maxWidth="sm">
                <Box sx={style}>
                    <Box p={1} boxShadow={18} sx={{ backgroundColor: '#ffff', border: '0px solid black', borderRadius: 2 }}>

                        <Stack direction='row' sx={{ justifyContent: 'end', alignItem: 'center' }}>

                            <Button sx={{ color: '#000000' }} onClick={() => { setassigns(false); }} > <span sx={{ color: '#000000', borderColor: '#000000' }}>X</span>
                            </Button>
                        </Stack>
                        <Divider color="#000000" />
                        <Stack direction='row' m={2} gap={2} sx={{ justifyContent: 'space-between', alignItems: 'center' }} >
                            <Typography> Add Project Task </Typography>
                            <Button variant="contained" size="small">Save</Button>
                        </Stack>

                        <Stack direction='row' m={2} gap={3} sx={{ justifyContent: 'space-between' }}>
                            <InputLabel htmlFor="component-simple"> Legend Color </InputLabel>
                            <InputLabel htmlFor="component-simple"> Legent Name </InputLabel>
                            <InputLabel htmlFor="component-simple"> Task Name </InputLabel>
                            <InputLabel htmlFor="component-simple"> Search By Name </InputLabel>
                            <InputLabel htmlFor="component-simple"> Add Milestone </InputLabel>
                            <InputLabel htmlFor="component-simple"> Delete </InputLabel>

                        </Stack>
                        <Divider />
                        <Stack direction='row'
                            component="form"
                            gap={4}
                            noValidate
                            autoComplete="off"
                        >
                            <TextField id="outlined-basic" variant="outlined" sx={{ '& > :not(style)': { m: '0', width: '10ch' }, }} size="small" />
                            <TextField id="filled-basic" variant="outlined" sx={{ '& > :not(style)': { m: '0', width: '15ch' }, }} size="small" />
                            <TextField id="standard-basic" variant="outlined" sx={{ '& > :not(style)': { m: '0', width: '20ch' }, }} size="small" />
                            <TextField id="outlined-basic" variant="outlined" placeholder='Search By Name' sx={{ '& > :not(style)': { m: '0', width: '20ch' }, }} size="small" />
                            <TextField id="filled-basic" variant="outlined" sx={{ '& > :not(style)': { m: '0', width: '15ch' }, }} size="small" />
                            <TextField id="filled-basic" variant="outlined" sx={{ '& > :not(style)': { m: '0', width: '10ch' }, }} size="small" />
                            <Button variant='contained' size="small">Save</Button>
                        </Stack>
                    </Box>
                </Box>
            </Container>

        </div>

    )
}

export default ProjectAssignments