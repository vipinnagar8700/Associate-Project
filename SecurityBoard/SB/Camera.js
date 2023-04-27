import { Container, Box, Stack, Input, span } from '@mui/material'
import React from 'react'
import Form from 'react-bootstrap/Form'
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import CancelIcon from '@mui/icons-material/Cancel';
 

const style = {
    zIndex:999,
    position: 'absolute',
    top: '52%',
    left: '41%',
    width:920,
    transform: 'translate(-50%, -50%)',
}

const Camera = (props) => {
    const { setcam } = props
    return (
        <div>
            <Container maxWidth="lg">
                <Box m={3} sx={style} >
                    <Stack p={1}  direction='row'  sx={{ justifyContent: 'space-between', backgroundColor: '#ffff',border:'0px solid red',borderRadius:3,height:600 }}>
                        <Form>
                            <Form.Group className="position-relative ">
                                <Form.Control 
                                    type="file"
                                    required
                                    name="file"
                                   
                                />
                                </Form.Group>
                        </Form>

                        <CancelIcon onClick={() => { setcam(false); }}/>
                    </Stack>
                </Box>

            </Container>
        </div>
    )
}

export default Camera