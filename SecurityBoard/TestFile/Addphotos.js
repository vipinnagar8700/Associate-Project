import React from 'react'
import { Container, FormControl, OutlinedInput, InputLabel, Divider, Box, Stack, Button, Typography, Grid } from '@mui/material'
import TextField from '@mui/material/TextField';
import Autocomplete, { createFilterOptions } from '@mui/material/Autocomplete';
import ClearIcon from '@mui/icons-material/Clear';
import TextareaAutosize from '@mui/base/TextareaAutosize';
import Form from 'react-bootstrap/Form'
import Modal from '@mui/material/Modal'
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';



const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    zIndex: 999,
};



const Addphotos = ({ setph, ph }) => {
    const handleClose = () => {
        setph(false);
    };
    return (
        <div>
            <Container>
                <Box sx={style}>
                    <Box p={1} boxShadow={18} sx={{ backgroundColor: '#ffff', border: '0px solid black', borderRadius: 4,alignItems:'center' }}>

                        <Stack direction='row' sx={{ justifyContent: 'space-between', alignItem: 'center' }}>
                            <Typography>Add Project Photos</Typography>
                            <Button sx={{ color: '#000000' }} onClick={handleClose}><span  >X</span>
                            </Button>
                        </Stack>
                        <Divider color="#000000" />
                        <Form>
                            <Form.Group as={Row} className="m-3" controlId="formPlaintextEmail">
                                <Form.Label column sm="3">
                                Add File:
                                </Form.Label>
                                <Col sm="9">
                                    <Form.Control type="file" size="sm" />
                                </Col>
                            </Form.Group>

                            <Form.Group as={Row} className="m-3" controlId="formPlaintextPassword">
                                <Form.Label column sm="3" >
                                Comment:
                                </Form.Label>
                                <Col sm="9">
                                <TextareaAutosize
                                    aria-label="minimum height"
                                    minRows={2}
                                    placeholder="Comments"
                                    style={{ borderRadius: '8px' }}
                                />
                                </Col>
                            </Form.Group>
                        </Form>
                        
                        

                        <Stack direction='row' m={2} gap={4} sx={{ justifyContent: 'center' }}>
                            <Button variant="outlined" sx={{ color: '#000000', borderColor: '#000000' }} size='small' >Submit</Button>

                        </Stack>
                    </Box>
                </Box>
            </Container>
        </div>

    )
}

export default Addphotos