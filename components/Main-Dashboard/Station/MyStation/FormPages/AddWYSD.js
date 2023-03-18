import { Box } from '@mui/material';
import{React, useContext }from 'react'
import { Form, InputGroup } from 'react-bootstrap';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';

import {Stationform } from '../../../../Context/Stationform'
const AddWYSD = () => {
  const {formvalue , setformvalue} = useContext(Stationform);
  const { Statement}=formvalue
 
  return (
    <Container>
      <Row className='justify-content-center mb-2'>
        <Col md={5}>
          <Box className="AddWYSD">
          <Form.Text className='AddWYSD_Title'>
          <p>Add Station Statement</p>
          </Form.Text>
          <InputGroup>
          <Form.Control as="textarea" aria-label="with textarea" value={Statement} onChange={(e)=>setformvalue({...formvalue,Statement:e.target.value})}></Form.Control>
          </InputGroup>
          </Box>
        </Col>
      </Row>
    </Container>
  )
}

export default AddWYSD