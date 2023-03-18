import React, { useState } from "react";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import { Box } from "@mui/system";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import CancelIcon from "@mui/icons-material/Cancel";
import { InputLabel, MenuItem, Typography, Select } from "@mui/material";
import { FormControl } from "react-bootstrap";
import TextField from "@mui/material/TextField";
import Checkbox from "@mui/material/Checkbox";
import { pink } from "@mui/material/colors";
import Form from "react-bootstrap/Form";




const OptionalPhoto = () => {
  const [style, setstyle] = useState({
    Font: "",
    Color: "",
    Background: "",
    Fsize: "",
    TextPosition:""
  });
const stylesave=(e)=>{
  e.preventDefault();
  console.log("this is checking",style);
  alert("ebhfiu")
}
  const [styleopen , SetStyleOpen] = useState(false);



  const label = { inputProps: { "aria-label": "Checkbox demo" } };
  const handlechanged = (e) => {
    e.preventDefault();
    const { value, name } = e.target;

    setstyle({ ...style, [name]: value });
    console.log(style);
  };

  return (
    <Container>
      <Row className="justify-content-start optionalPhoto_Box">
        <Col md={8}>
          <Box className="optionalPhoto mb-2">
            <Box className="" >
              <AddCircleOutlineIcon onClick={()=>SetStyleOpen(true)} />
              {
                styleopen && 
                <Box className="text_style">
                <Box className="border-bottom head">
                  <Box></Box>
                  <Box onClick={()=>SetStyleOpen(false)}>
                    <CancelIcon   />
                  </Box>
                </Box>
                <Box>
                  <Container className="my-3">
                    <Row className="justify-content-start">
                      <Col md={8} className="text-left">
                        <Typography>Text Style</Typography>

                        {/* font  */}
                        <Box
                          className="mb-3 d-flex justify-content-between align-items-center"
                          component="form"
                          sx={{
                            "& .MuiTextField-root": { m: 1, width: "25ch" },
                          }}
                          noValidate
                          autoComplete="off"
                        >
                          <Box>
                            <Typography className="fs-13">Font</Typography>
                          </Box>
                          <Box className="text_style_option">
                            <Form.Select
                              aria-label="Default select example"
                              name="Font"
                              Value={style.Font}
                              onChange={handlechanged}
                            >
                              <option  value="Select Font ">Select Font</option>
                              <option  value="Aclonica">Aclonica</option>
                              <option  value="Allan">Allan</option>

                              <option  value="Anonymous Pro">
                                Anonymous Pro
                              </option>
                              <option  value="Allerta Stencil">
                                Allerta Stencil
                              </option>
                              <option  value="Allerta">Allerta</option>
                              <option  value="Amaranth">Amaranth</option>
                              <option  value="Anton">Anton</option>
                              <option  value="Arimo">Arimo</option>
                              <option  value="Bevan">Bevan</option>
                              <option  value="Cabin">Cabin</option>
                              <option  value="Droid Sans">Droid Sans</option>
                            </Form.Select>
                          </Box>
                        </Box>
                        {/* color  */}
                        <Box
                          className="mb-3 d-flex justify-content-between align-items-center"
                          component="form"
                          sx={{
                            "& .MuiTextField-root": { m: 1, width: "25ch" },
                          }}
                          noValidate
                          autoComplete="off"
                        >
                          <Box>
                            <Typography className="fs-13">Color</Typography>
                          </Box>
                          <Box className="text_style_option">
                            <Form.Select
                              aria-label="Default select example"
                              name="Color"
                              Value={style.Color}
                              onChange={handlechanged}
                            >
                              <option value="Select Color">Select Color</option>
                              <option value="#fff">#fff</option>
                              <option value="#DDDD">#DDDD</option>
                              <option value="#000000">#000000</option>
                              <option value="#f0f8ff">#f0f8ff</option>
                              <option value="#faebd7">#faebd7</option>
                              <option value="#00ffff">#00ffff</option>
                              <option value="#f0f8ff">#f0f8ff</option>
                            </Form.Select>
                          </Box>
                        </Box>
                        {/* background  */}
                        <Box
                          className="mb-3 d-flex justify-content-between align-items-center"
                          component="form"
                          sx={{
                            "& .MuiTextField-root": { m: 1, width: "25ch" },
                          }}
                          noValidate
                          autoComplete="off"
                        >
                          <Box>
                            <Typography className="fs-13">Background</Typography>
                          </Box>
                          <Box className="text_style_option">
                            <Form.Select
                              aria-label="Default select example"
                              name="Background"
                              onChange={handlechanged}
                              Value={style.Background}
                            >
                              <option>Select Background</option>
                              <option value="#fff">#fff</option>
                              <option value="#000000">#000000</option>
                              <option value="#f0f8ff">#f0f8ff</option>
                              <option value="#faebd7">#faebd7</option>
                              <option value="#00ffff">#00ffff</option>
                              <option value="#f0f8ff">#f0f8ff</option>
                            </Form.Select>
                          </Box>
                        </Box>
                        {/* fontsize  */}
                        <Box
                          className="mb-3 d-flex justify-content-between align-items-center"
                          component="form"
                          sx={{
                            "& .MuiTextField-root": { m: 1, width: "25ch" },
                          }}
                          noValidate
                          autoComplete="off"
                        >
                          <Box>
                            <Typography className="fs-13">Font size</Typography>
                          </Box>
                          <Box className="text_style_option">
                            <Form.Select
                              aria-label="Default select example"
                              name="Fsize"
                              Value={style.Fsize}
                              onChange={handlechanged}
                            >
                              <option>Select Font Size</option>
                              <option value="12">12</option>
                              <option value="13">13</option>
                              <option value="14">14</option>
                              <option value="15">15</option>
                              <option value="16">16</option>
                              <option value="17">17</option>
                              <option value="18">18</option>
                            </Form.Select>
                          </Box>
                        </Box>
                        {/* end  */}
                        <Typography className="fs-13 effect">Apply Text Effect <input type="checkbox"/></Typography>
                      </Col>

                      <Col md={4} className="">
                        <Typography>Text Position</Typography>
                        <Checkbox
                        onChange={handlechanged}
                        name="TextPosition"
                          value="topleft "
                          inputProps={{ "aria-label": "controlled" }}
                        />
                        <Checkbox
                        onChange={handlechanged}
                        name="TextPosition"
                          value="topcenter "
                          inputProps={{ "aria-label": "controlled" }}
                        />
                        <Checkbox
                        onChange={handlechanged}
                        name="TextPosition"
                          value="topright "
                          inputProps={{ "aria-label": "controlled" }}
                        />
                        <Checkbox
                        onChange={handlechanged}
                        name="TextPosition"
                          value="middleleft "
                          inputProps={{ "aria-label": "controlled" }}
                        />
                        <Checkbox
                        onChange={handlechanged}
                        name="TextPosition"
                          value="middlecenter"
                          inputProps={{ "aria-label": "controlled" }}
                        />
                        <Checkbox
                        name="TextPosition"
                          value="middleright "
                          inputProps={{ "aria-label": "controlled" }}
                        />
                      </Col>
                    </Row>
                    <Row>
                      <Col md={12}>
                        <button className="btn-primary border rounded" onClick={stylesave}>Save</button>
                      </Col>
                    </Row>
                  </Container>
                </Box>
              </Box>
              }
            </Box>
            <Box>
              <p>Optional: Add Station name overlaid on photo</p>
            </Box>
          </Box>
        </Col>
      </Row>
    </Container>
  );
};

export default OptionalPhoto;
