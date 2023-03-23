
import { Box } from '@mui/material';
import{React, useState,useRef }from 'react'
import Button1 from '@mui/material/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import JoditEditor from "jodit-react";
import { Link } from 'react-router-dom';
import { addpage } from '../../Api/Pages/Page';
export const  Addpage = () => {
    const editor = useRef(null);
	const [content, setContent] = useState('');
  const [title, settitle] = useState('');
  console.log(title,content,"rijwfiw");
  const handlesubmit=(e)=>{
e.preventDefault()
addpage(title,content).then(()=>{
  alert("jsfu")
})
  }
  return (
    <div>
      <div> 
         <Container maxWidth="lg">
         <Box sx={{backgroundColor:"#f7f7f7",  height:"700px", padding:"20px", width:"100%"
   }}>
    <Row className='justify-content-center mb-2 mt-2'>
      <Col md={10}>
    
      </Col>
      <Col md={2}>
  <Link to='/admin/pages/' >  <Button variant="danger">Back</Button></Link>  
      </Col>
    </Row>
    <Row className='justify-content-center mb-2 mt-2'>

      <Col md={6}>
      <div class="form-group mb-4 ">
    <label for="formGroupExampleInput">Page Title</label>
    <input type="text"  value={title}   onChange={(e)=>{settitle(e.target.value)}}class="form-control" id="formGroupExampleInput" />
  </div>
  </Col>
  <Col md={6}></Col>

      <Col md={12}>
      <label for="formGroupExampleInput" class="mb-2 mt-2">Page Content</label>
      <JoditEditor
        ref={editor}
        value={content}
        tabIndex={2} // tabIndex of textarea
        onBlur={(newContent) => { }} // preferred to use only this option to update the content for performance reasons
        onChange={(newContent)=>{ 
        
          setContent(newContent)}}
      />
      </Col>
      <Box sx={{display:'flex',justifyContent:'center' ,marginTop:'30px'}}><Button1 variant="contained" onClick={handlesubmit}>Submit </Button1> </Box>
   
    </Row>
     </Box>
  </Container></div>   
    </div>
  )
}

 