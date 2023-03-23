
import { Box } from '@mui/material';
import{React, useState,useRef, useEffect }from 'react'
import Button1 from '@mui/material/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import JoditEditor from "jodit-react";
import { Link, useParams } from 'react-router-dom';
import { editpage } from '../../Api/Pages/Page';
import CircularProgress from '@mui/material/CircularProgress';
import Stack from '@mui/material/Stack';
import { height } from '@mui/system';
export const  Editpage = () => {
const[viewdata,setviewdata]=useState(null)
    let { id } = useParams();
useEffect(()=>{
    editpage(+(id)).then((data)=>{
      setviewdata(data)
    })
},[])
    const editor = useRef(null);
	const [content, setContent] = useState('');
    if(!viewdata){
        return  <Stack sx={{ color: 'grey.500', height:'100vh' ,justifyContent:'center',alignItems:'center' }} spacing={2} direction="row">
        <CircularProgress color="secondary" />
        <CircularProgress color="success" />
        <CircularProgress color="inherit" />
      </Stack>
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
    <input type="text" value={viewdata.content} class="form-control" id="formGroupExampleInput" />
  </div>
  </Col>
  <Col md={6}></Col>

      <Col md={12}>
      <label for="formGroupExampleInput" class="mb-2 mt-2">Page Content</label>
      <JoditEditor
        ref={editor}
        value={viewdata.title} 
        tabIndex={1} // tabIndex of textarea
        onBlur={(newContent) => {}} // preferred to use only this option to update the content for performance reasons
        onChange={(newContent) =>{}}
      />
      </Col>
      <Box sx={{display:'flex',justifyContent:'center' ,marginTop:'30px'}}><Button1 variant="contained">Submit </Button1> </Box>
   
    </Row>
     </Box>
  </Container></div>   
    </div>
  )
}

 