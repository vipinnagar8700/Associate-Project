import React from 'react'
import { Container, FormControl, OutlinedInput, InputLabel, Divider, Box, Stack, Button, Typography } from '@mui/material'
import TextField from '@mui/material/TextField';
import Autocomplete, { createFilterOptions } from '@mui/material/Autocomplete';
import ClearIcon from '@mui/icons-material/Clear';
import TextareaAutosize from '@mui/base/TextareaAutosize';
import Form from 'react-bootstrap/Form'
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import Modal from '@mui/material/Modal'



const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
   zIndex:999,
};





const ProjectTime = (props) => {

    const { settimeline } = props
    return (
        <div>
            <Container>

                <Box sx={style}>

                    <Box p={1} sx={{ backgroundColor: '#E7E9EC', border: '1px solid black', borderRadius: 4 }}>
                        <Stack direction='row' m={2} sx={{ alignItems: 'center' }}>
                            <InputLabel m={9} htmlFor="component-simple"> Start Date </InputLabel>
                            <Form.Group controlId="formdatesm" >
                                <Form.Control type="date" size="sm" />
                            </Form.Group>
                        </Stack>
                        <Stack m={1} direction='row' sx={{ alignItems: 'center' }}>
                            <InputLabel m={9} htmlFor="component-simple"> Finish Date </InputLabel>
                            <Form.Group controlId="formdatesm" >
                                <Form.Control type="date" size="sm" />
                            </Form.Group>
                        </Stack>
                        <Stack m={1} direction='row' sx={{ alignItems: 'center' }}>
                            <InputLabel m={9} htmlFor="component-simple"> Project Status</InputLabel>
                            <Form.Select sx={{ width: '100px' }} aria-label="Default select example">
                                <option >Complete </option>
                                <option value="1"  >New </option>
                                <option value="2">Start</option>
                                <option value="3">Complete</option>
                                <option value="4">Process</option>
                                <option value="5">Hold</option>
                            </Form.Select>
                        </Stack>
                        <Stack direction='row' m={2} gap={4} sx={{ justifyContent: 'center' }}>
                            <Button variant="outlined" size="small">Submit</Button>
                            <Button variant="outlined" size="small" onClick={() => {
                                settimeline(false);
                            }}>Cancel</Button>

                        </Stack>
                    </Box>
                </Box>
            </Container>
        </div>

    )
}

export default ProjectTime