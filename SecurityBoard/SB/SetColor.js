import { Container, Stack, Box, TextField, colors } from '@mui/material'
import { Form } from 'react-bootstrap'
import Button from 'react-bootstrap/Button';
import React, { useState, useEffect } from 'react'
import Spicker from './Spicker';

const SetColor = () => {
  const [baColor, setbaColor] = useState(false)
  const [colPic, setcolPic] = useState(false)



  // alert(colPic)
  return (
    <div>

      <Container maxWidth="sm">
        <Box m={3}>
          <Stack sx={{ bgcolor: '#ffff', justifyContent: 'center' }}>
            <Form>
              <Form.Group className="m-3" controlId="formBasicEmail">

                <Form.Control type="text" placeholder="Set Color" value={colPic} onClick={() => setbaColor(true)} />
                {
                  baColor &&
                  <Spicker baColor={baColor} setbaColor={setbaColor} setcolPic={setcolPic} />
                }
              </Form.Group>

              <Stack direction='row' gap={3} sx={{justifyContent:'center'}}>
                <Button variant="danger" type="submit" >
                  Submit
                </Button>
                <Button variant="primary" type="submit">
                  Cancel
                </Button>
              </Stack>

            </Form>

          </Stack>
        </Box>

      </Container>

    </div>

  )
}

export default SetColor