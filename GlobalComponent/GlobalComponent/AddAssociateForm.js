import React, { useState ,useContext} from "react";
import { Form } from "react-bootstrap";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import CloseIcon from '@mui/icons-material/Close';
import {Container, Box,Grid,Typography} from '@mui/material'

import {Stationform } from '../components/Context/Stationform'

const AddAssociateForm = ({fontWeight}) => {
  const {formvalue , setformvalue} = useContext(Stationform );
  const { Associate}=formvalue
  console.log(formvalue);
  const [recentAssociateData, setrecent] = useState([
    {
      id: 1,
      img: "./img/john.jpg",
      name: "John",
      mail: "abc@gmail.com",
    },
    {
      id: 2,
      img: "./img/puja1.png",
      name: "Puja",
      mail: "puja@gmail.com",
    },
    {
      id: 3,
      img: "./img/sachin.png",
      name: "Rinki",
      mail: "joy@gmail.com",
    },
    {
      id: 4,
      img: "./img/john.jpg",
      name: "Sachin",
      mail: "abc@gmail.com",
    },
    {
      id: 5,
      img: "./img/puja1.png",
      name: "Prashant",
      mail: "puja@gmail.com",
    },
    {
      id: 6,
      img: "./img/sachin.png",
      name: "Priyanka",
      mail: "joy@gmail.com",
    },
  ]);
  const [sk, setsk] = useState(false);
  const [search, setSearchField] = useState("");
  const [clickdata, setclickdata] = useState([]);
  const fdata = recentAssociateData.filter((data) => {
    return data.name.toLowerCase().includes(search);
  });
  const additem = (id) => {
    let ckdata = fdata.filter((data) => {
      return data.id === id;
    });
    setclickdata([ ...clickdata,...ckdata]);
    setformvalue({...formvalue,Associate:clickdata})
    setsk(!sk);
  };

  const [filterdata, setfilter] = useState([...fdata]);

  const removeitem =(id)=>{
    let fkdata = clickdata.filter((data) => {
      return data.id !== id;
    });
    setclickdata(fkdata);

  }
  console.log("hello");

  

  return (
    <>
  
    <Grid container sx={{bgcolor:"#fff",pt:1}}>
         <Grid item xs={3}className="my-auto">
            <Box>
              <Typography  sx={{fontSize:{xs:"12px",md:"14px"},fontWeight:`${fontWeight}`}}>Search By Name:</Typography>
            </Box>
          </Grid>

          <Grid item xs={6} >
            <Box sx={{position:"relative"}} >
              <input type="text" placeholder="Search Associate" className="form-control py-1" 
              onChange={(e) => {
                e.preventDefault();
                const { name, value } = e.target;
  
                setSearchField(value.toLowerCase());
                setsk(!sk);
              }}
              />
              {sk && (
            <Box sx={{position:"absolute",top:"100%",mt:2,bgcolor:"#fff"}}>
              {fdata.map((data) => {
                const { id } = data;
                return (
                  <Box
                    key={data.id}
                    className="user-member justify-content-start gap-2 align-items-center d-flex mb-2"
                    onClick={() => additem(id)}
                  >
                    <Stack>
                      <Avatar alt="Remy Sharp" src={data.img} />
                    </Stack>
                    <Box>
                      <Form.Text>{data.name}</Form.Text>
                    </Box>
                    <Box>
                      <Form.Text>{data.mail}</Form.Text>
                    </Box>
                  </Box>
                );
              })}
            </Box>
          )}
            </Box>
            
          </Grid>

    </Grid>
    

   
    <Form.Group className="mb-3 pks" controlId="formBasicEmail">
      
      <Container>
        <Row className="justify-content-center mt-3 filter-img">
          <Col md={5} className="text-center d-flex gap-2 pp">
            {clickdata.length > 0 &&
              clickdata.map((s) => {
                const { id } = s;
                return (
                  <>
                    <Box key={s.id} className="member-img" >
                      <Stack>
                        <Box className="pp">
                        <Avatar alt="Remy Sharp" src={s.img}  />
                        <Box className="close-icon" onClick={()=>removeitem(id)}>
                        <CloseIcon/>
                        </Box>
                        </Box>
                      </Stack>
                    </Box>
                  </>
                );
              })}
          </Col>
          
        </Row>
      </Container>
    </Form.Group>
    </>
  );
};

export default AddAssociateForm;
