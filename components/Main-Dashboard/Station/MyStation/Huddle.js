import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";

import Tooltip from "@mui/material/Tooltip";
import AddPost from "./HuddlePages/AddPost";
import { Box } from "@mui/system";
import AddEasel from "./HuddlePages/AddEasel";
import AddPoll from "./HuddlePages/AddPoll";
import { gethuddle } from "../../../../Api/Huddle/Addpost";
import { createGlobalStyle } from "styled-components";


const Styledd = createGlobalStyle
`
.search_box{
  position: relative !important;
}
.huddle_search_btn{
  position: absolute !important;
    right: 0;
    top: 5%;
}
.huddle_search_btn input:focus {
  border-color: #66afe9;
  outline: 0;
  -webkit-box-shadow: inset 0 1px 1px rgba(0,0,0,.075), 0 0 8px rgba(102, 175, 233, .6);
  box-shadow: inset 0 1px 1px rgba(0,0,0,.075), 0 0 8px rgba(102, 175, 233, .6);
  border-radius:0.25rem;
}
`;

const Huddle = () => {
  const [currentstation, setCurrentStation] = useState(false);
  const [Easel, setAddEasel]=useState(false);
  const [pollshow , setPollShow]=useState(false)
  const [search , setSearch]=useState(false)
   const[text,settext]=useState('')
   const[nHandleData,nsetHandleData]=useState([])
const[HandleData,setHandleData]=useState([])
  useEffect(()=>{
gethuddle().then((hdata)=>{
  console.log(hdata)
  setHandleData(hdata)
})
  },[])
  console.log(text.toLowerCase());

  const handlesearch=(e)=>{
settext(e.target.value)

  }


  let nhandle=HandleData.filter((data)=>{

 return data.textbox.toLowerCase().includes(text.toLowerCase())
    })
  console.log(nHandleData);
  if(!HandleData){
    return <h1>Loading....</h1>
  }
  console.log(nhandle);
  return (
    <>
    <Container>
      <Styledd/>
      <Row className="search_box">
        <div className="py-2 handdle-head bg-white d-flex" >
          <Col md={3}>
            <div className="d-flex gap-1 align-items-center">
              <div>
                <p
                  className="fs-12 blue fw-bold cr"
                  onClick={() => {
                    setCurrentStation(!currentstation);
                    setAddEasel(false);
                    setPollShow(false);
                  }}
                >
                  Add
                </p>
              </div>
              <div className="hundle-icon lh-0">
                <Tooltip title="Post">
                  <img src="./img/huddle1.png" />
                </Tooltip>
              </div>
            </div>
          </Col>
          <Col md={3}>
            <div className="d-flex gap-1 align-items-center justify-content-center">
              <div>
                <p
                  className="fs-12 blue fw-bold cr"
                  onClick={() => {
                    setCurrentStation(false);
                    setAddEasel(!Easel);
                    setPollShow(false);
                  }}
                >
                  Add
                </p>
              </div>
              <div className="hundle-icon lh-0">
                <Tooltip title="Easel">
                  <img src="./img/huddle2.png" />
                </Tooltip>
              </div>
            </div>
          </Col>
          <Col md={3}>
            <div className="d-flex gap-1 align-items-center justify-content-center">
            
              <div>
                <p
                  className="fs-12 blue fw-bold cr"
                  onClick={() => {
                    setCurrentStation(false);
                    setAddEasel(false);
                    setPollShow(!pollshow);
                  }}
                >
                  Add
                </p>
              </div>
              <div className="lh-0">
                <Tooltip title="Poll">
                  <img src="./img/huddle3.png" />
                </Tooltip>
              </div>
            </div>
          </Col>
          <Col md={3}  >
            <div >
            <div className="d-flex gap-1 align-items-center justify-content-end" >
              <div className="lh-0">
                <img src="./img/huddle4.png" onClick={()=>{setSearch(!search)
              
                }} />
              </div>
           
            </div>
            </div>
          </Col>
          {search &&
            <div className="huddle_search_btn p-1"><input type="search"  value={text}placeholder="Search..." 
            onChange={handlesearch} className="px-2 fs-12"/></div>
          }
        </div>
        {currentstation && (
          <Col md={12} className="p-0 bg-white mb-1">
            <Box className="huddle_add">
              <AddPost setCurrentStation={setCurrentStation} />
            </Box>
          </Col>
        )}
        {Easel &&(
          <Col md={12} className="p-0 bg-white mb-1">
            <Box className="huddle_add">
          <AddEasel setAddEasel={setAddEasel}/>
          </Box>
          </Col>
        )}
        {pollshow &&(
          <Col md={12} className="p-0 bg-white mb-1">
            <Box className="huddle_add">
          <AddPoll setPollShow={setPollShow}/>
          </Box>
          </Col>
        )}
        <div className="bg-white huddle-box">
          {nhandle.length >0 && nhandle.map((handledata)=>{
            const { id,  textbox, file } = handledata;
       let s=`${textbox} `
       let tdata=s.slice(3,s.length-5)
            return (
              <div key={id}>
                <Row className="my-2">
                  <Col md={2}>
                    <div className="handle-user-img">
                      <img src="./img/john.jpg"  alt="nice"/>
                    </div>
                  </Col>
                  <Col md={10} className="ps-0">
                    <div className="handle-user-name">
                      <p className="blue fw-bold fs-15">John S Smith</p>
                      <p className="fs-12 fw-500 grey">10 Mar 2023 @ 03:34 am</p>
                    </div>
                  </Col>
                </Row>
                <Row className="mb-3">
                  <Col md={12}>
                    <div className="handle-user-content">
                      {`${tdata}`}
                    </div>
                  </Col>
                </Row>
                <Row className="mb-1">
                  <Col md={12}>
                    <div className="handle-user-post">
                      <img src={`https://assoc.studiomyraa.com/public/uploads/images/${file}`} className="img-fluid" />
                    </div>
                  </Col>
                </Row>
                <Row>
                  <Col md={6}>
                    <div className="handle-user-feedback">
                      <p className="fs-13">
                        Show Comments <strong>(2)</strong>
                      </p>
                    </div>
                  </Col>
                  <Col md={6}>
                    <div className="handle-user-feedback">
                      <p className="fs-13">
                        Like <i className="fa fa-thumbs-o-up"></i>
                      </p>
                    </div>
                  </Col>
                </Row>
              </div>
            );
          })}
        </div>
      </Row>
    </Container>
    </>
  );
};

export default Huddle;
