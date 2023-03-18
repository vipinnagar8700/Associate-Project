import React from 'react'
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import { Box } from '@mui/system';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';



const ChooseColor = () => {
  return (
    <Container>
      <Row className='justify-content-start'>
        <Col md={8}>
          <Box className="optionalPhoto mb-2">
            <Box>
              <AddCircleOutlineIcon/>
            </Box>
            <Box>
              <p>Choose color for the badge if no photo is used</p>
            </Box>
          </Box>
        </Col>
      </Row>
    </Container>
  )
}

export default ChooseColor