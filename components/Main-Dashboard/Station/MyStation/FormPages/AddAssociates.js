import React, { useState ,useContext} from "react";
import { Form } from "react-bootstrap";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Box } from "@mui/system";
import CloseIcon from '@mui/icons-material/Close';

import {Stationform } from '../../../../Context/Stationform'
const AddAssociates = () => {
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
    <Form.Group className="mb-3 pks" controlId="formBasicEmail">
      <div className="d-flex justify-content-between align-items-center">
        <Form.Label className="fw-bold text-dark">Search By Name:</Form.Label>

        <div className="add_associates">
          <Form.Control
            type="text"
            placeholder="Search Associate "
            value={search}
            className="py-2 input-btn"
            onChange={(e) => {
              e.preventDefault();
              const { name, value } = e.target;

              setSearchField(value.toLowerCase());
              setsk(!sk);
            }}
          ></Form.Control>

          {sk && (
            <Box className="AssociatesBox">
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
        </div>

        <Form.Text className="fs-14 w-30 text-start text-dark">
          Invite other non - Associate Network Members
        </Form.Text>
        <Form.Text>
          <AddCircleOutlineIcon />
        </Form.Text>
      </div>
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
          {/* <Row >
            <Col md={12} className="addassociates_plus px-5">
            <div>
              <input type="text"/>
              <p> Use commas to separate multiple email addresses to invite Associates. Then click Save</p>
            </div>
            </Col>
          </Row> */}
        </Row>
      </Container>
    </Form.Group>
  );
};

export default AddAssociates;
