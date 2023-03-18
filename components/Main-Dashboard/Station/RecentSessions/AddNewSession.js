import React, { useState, useRef,useContext } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { Row, Col } from "react-bootstrap";
import JoditEditor from "jodit-react";
import Form from "react-bootstrap/Form";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";
import Table from "react-bootstrap/Table";
import { Sessionform } from "../../../Context/Session";
import CancelIcon from '@mui/icons-material/Cancel';
import {Box} from '@mui/material'
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';



//this is add new session rich tex editor code start
const AddNewSessionEditor = () => {
 


  return (
    <>
     
    </>
  );
};
//this is add new session rich tex editor code end



function AddNewSessionModal(props) {
  // const [content, setContent] = useState('');

  function handleContentChange(value) {
    setContent(value);
  }
  const editor = useRef(null);
  const [content, setContent] = useState("");
  const {sessionform,setsessionform} = useContext( Sessionform);
  const{ modalShow,id}=sessionform
  
                
  console.log(sessionform);
  const [selectbox, setselectbox] = useState(false);
  const [file, setfile] = useState(false);
  const [systemfile, setsytemfile] = useState(false);
  const [inputtype, setinputtype] = useState([]);

  const[addsession,setaddsession]=useState({
    textbox:'',
    filedata:null,
   
  })
  console.log(addsession);
  
  const Handlesubmit=(e)=>{
    e.preventDefault()
    
 if(addsession){
  const{textbox,filedata}=addsession
  
  var formdata = new FormData();
  formdata.append("textbox", textbox);
  formdata.append("file", filedata);
  if(id){
    const{associates,stationname
    }=id
    formdata.append("station", stationname);
    associates.map((res,index)=>{
      formdata.append(`name[${index}]`, res.name)
      formdata.append(`mail[${index}]`, res.mail)
    })
  }
  
  var requestOptions = {
    method: 'POST',
    body: formdata,
    redirect: 'follow'
  };
  
  fetch("https://studiomyraa.com/assoc/api/add_session", requestOptions)
    .then(response => response.text())
    .then(result => console.log(result))
    .catch(error => console.log('error', error));

 
 }

  }
  const{textbox,filedata}=addsession
 
  return (
    <div>
    
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
       
      <div className="p-2">
      <Box className="d-flex justify-content-between pb-2">
        <div></div>
          <div><p className="mb-0 fs-18">Add New Session</p></div>
          <div><p onClick={()=>setsessionform({...sessionStorage,modalShow:false})}><CancelIcon/></p></div>
        </Box>
        <Box>
        <ReactQuill
      value={content}
      onChange={handleContentChange}
      modules={{ toolbar: true }}
    />
        </Box>
      <textarea className="w-100" id="w3review" name="w3review" rows="4" cols="50" value={addsession.textbox} onChange={(e)=>setaddsession({...addsession,textbox:e.target.value})}> obdfr</textarea>
      <Modal.Body>
        <div className="ans_modal">
          <div className="mb-3">{<AddNewSessionEditor />}</div>

          <Row className="add_new_session_editor_action">
            <Col md={4}>
            {inputtype.map((s) => {
                  return <div key={s.id}>{s}</div>;
                })}
              <div className="d-flex align-items-center">
                <div className="pe-2">
                  <OverlayTrigger
                    delay={{ show: 250, hide: 300 }}
                    overlay={(props) => (
                      <Tooltip {...props} className="mytooltip">
                        Add file from your computer
                      </Tooltip>
                    )}
                    placement="bottom"
                  >
                    <img
                      src="img/file.png"
                      alt=""
                      className="global_icon_size"
                      onClick={() => setfile(!file)}
                    />
                  </OverlayTrigger>
                </div>

                <div className="pe-2">
                  <Form.Check type="radio" aria-label="radio 1" />
                </div>

                <div className="d-flex align-items-center">
                  <div>
                    <OverlayTrigger
                      delay={{ show: 250, hide: 300 }}
                      overlay={(props) => (
                        <Tooltip {...props} className="mytooltip">
                          Add more files
                        </Tooltip>
                      )}
                      placement="bottom"
                    >
                      <img
                        src="img/down-transparent.png"
                        alt=""
                        className="global_icon_size"
                      />
                    </OverlayTrigger>
                  </div>
                </div>
              </div>

              {/* name of file or photo  */}
              {file && (
                <div className="name_of_file">
                  <div class="station_dropdown_title">
                    Name of File or Photo
                  </div>
                  <div className="session_file_group">
                    <Form>
                      <Form.Group className="" controlId="formBasicEmail">
                        <Form.Control
                          type="text"
                          placeholder=""
                          className="mb-2"
                        />
                        <Form.Control type="file" />
                      </Form.Group>
                    </Form>
                  </div>
                </div>
              )}
            </Col>

            {/* <Col md={4}>
              <div className="d-flex align-items-center justify-content-center">
                <div className="pe-2">
                  <OverlayTrigger
                    delay={{ show: 250, hide: 300 }}
                    overlay={(props) => (
                      <Tooltip {...props} className="mytooltip">
                        Select for system file
                      </Tooltip>
                    )}
                    placement="bottom"
                  >
                    <img
                      src="img/fileupload.png"
                      alt=""
                      className="global_icon_size"
                      onClick={() => setsytemfile(true)}
                    />
                  </OverlayTrigger>
                </div>

                <div className="pe-2">
                  <Form.Check type="radio" aria-label="radio 1" />
                </div>
              </div>
            </Col> */}

            <Col md={4}>
              <div className="d-flex align-items-center justify-content-end">
                <div className="pe-2">
                  <img
                    src="img/save_session.png"
                    alt=""
                    className="global_icon_size"
                  />
                </div>
              </div>
            </Col>
          </Row>
        </div>

        <div className="select_station mb-3">
          <Row>
            <Col md={12} className="text-center">
              <div
                className="select_station_icon"
                onClick={() => setselectbox(!selectbox)}
              >
                <img src="img/plus.png" className="global_icon_size" alt="" />
              </div>
              <p className="mb-0 fs-20 light_purple_title fw-bold">
               {id ?<p>{id.stationname}</p>: <p>Select Station or add Direct Session</p>}
              </p>
            </Col>
          </Row>
        </div>

        <div className="search_session_associate">
          <Row className="align-items-center mb-3">
            <Col md={3}>
              <Form.Label>
                Search By Name:{" "}
                <h1
                  onClick={() => {
                    setinputtype([
                      ...inputtype,
                      <div class="d-flex align-items-center">
                        <input type="file" class="me-2 form-control" />
                        <input
                          placeholder="Name of your file"
                          type="text"
                          class="me-2 form-control"
                          fdprocessedid="q18f8f"
                        />
                        <button
                          type="button"
                          class="btn btn-danger"
                          fdprocessedid="ag8mtn"
                        >
                          -
                        </button>
                      </div>,
                    ]);
                  }}
                >
              
                </h1>
              </Form.Label>
            </Col>
            <Col md={4}>
              <Form>
                <Form.Group className="" controlId="formBasicEmail">
                  <Form.Control type="text" placeholder="Search Associates" />
                </Form.Group>
              </Form>
            </Col>
          </Row>
        </div>

        {selectbox && (
          <div>
            <div className="station_dropdown">
              <div className="station_dropdown_title">Stations</div>
              <ul className="ps-0 mb-0">
                <li>BioMedical</li>
                <li>Community</li>
                <li>Employee Engagement</li>
                <li>Finance</li>
                <li>Hospital Safety</li>
                <li>Hospital Security</li>
                <li>Human Resources</li>
                <li>Infection Control</li>
                <li>Information Technology</li>
                <li>Laboratory</li>
                <li>Leadership</li>
                <li>Marketing</li>
                <li>Materials Management</li>
                <li>Nnv</li>
                <li>Process Improvement</li>
                <li>Productivity</li>
                <li>Project Management</li>
              </ul>
            </div>
          </div>
        )}

        <Row>
          <Col md={6}>
            <div className="add_more_files">
              <div className="d-flex align-items-center">
                <Form.Control type="file" className="me-2" onChange={(e)=>setaddsession({...addsession,filedata:e.target.files[0]})}/>
                <Form.Control
                  type="text"
                  placeholder="Name of your file"
                  className="me-2"
                />
                <Button variant="danger">-</Button>
              </div>
            </div>
          </Col>
        </Row>

        <Row>
          <Col md={12}>
            {systemfile && (
              <div className="session_system_file">
                <div className="session_system_file_title mb-2">
                  <p className="mb-0 fw-bold white">System Files</p>
                  <div
                    className="cross_system_fies"
                    onClick={() => setsytemfile(false)}
                  >
                    X
                  </div>
                </div>

                <div className="text-end w-25 ms-auto mb-2">
                  <Form.Control type="text" className="" />
                </div>

                <div className="sesseion_file_table">
                  <Table bordered responsive>
                    <thead>
                      <tr>
                        <th>S.NO</th>
                        <th>ADD</th>
                        <th>DOCUMENT</th>
                        <th>DATE</th>
                        <th>DUE DATE</th>
                        <th>TYPE</th>
                        <th>SIZE</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>1</td>
                        <td>
                          <Form.Check aria-label="option 1" />
                        </td>
                        <td>
                          <a href="" className="text-decoration-none">
                            Dec 14.02.1
                          </a>
                        </td>
                        <td>2023-02-13 22:44:03</td>
                        <td className="green">02-28-2023</td>
                        <td>
                          <img src="img/pdf.png" alt="" className="" />
                        </td>
                        <td>408.29 KB</td>
                      </tr>
                      <tr>
                        <td>1</td>
                        <td>
                          <Form.Check aria-label="option 1" />
                        </td>
                        <td>
                          <a href="" className="text-decoration-none">
                            Dec 14.02.1
                          </a>
                        </td>
                        <td>2023-02-13 22:44:03</td>
                        <td className="green">02-28-2023</td>
                        <td>
                          <img src="img/pdf.png" alt="" className="" />
                        </td>
                        <td>408.29 KB</td>
                      </tr>
                    </tbody>
                  </Table>
                </div>

           
              </div>
            )}
          </Col>
        </Row>
        <Row className="mt-4">
          <Col md={12} className="text-center">
          <button onClick={Handlesubmit} className="btn btn-primary">submit</button>
          </Col>
        </Row>
      </Modal.Body>
      </div>
    </Modal>
    </div>
  );
}

//add new session modal function code start
function DisplayAddNewSessionModal() {
  const {sessionform,setsessionform} = useContext( Sessionform);
const{ modalShow}=sessionform
console.log(sessionform);
  //const [modalShow, setModalShow] = React.useState(false);

  return (
    <>
      <p onClick={() =>setsessionform({...sessionform,modalShow:true})}>+</p>

     <AddNewSessionModal show={modalShow} />
    </>
  );
}
//add new session modal function code end

export default DisplayAddNewSessionModal;
