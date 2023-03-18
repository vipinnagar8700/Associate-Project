import React, { useState,useContext } from "react";
import { Form } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Toast from "react-bootstrap/Toast";
import AddStation from "./FormPages/AddStation";
import AddAssociates from "./FormPages/AddAssociates";
import SelectPP from "./FormPages/SelectPP";
import OptionalLogo from "./FormPages/OptionalLogo";
import AddWYSD from "./FormPages/AddWYSD";
import OptionalPhoto from "./FormPages/OptionalPhoto";
import ChooseColor from "./FormPages/ChooseColor";
import {Stationform } from '../../../Context/Stationform'
import axios from 'axios';
import { stationform } from "../../../../Api/Mystationform";
function StationForm() {
  const {formvalue , setformvalue} = useContext(Stationform);
 
  const [showA, setShowA] = useState(true);
 
  const toggleShowA = () => setShowA(!showA);
  const [slider, setSlider] = useState([
    <AddStation />,
    <AddAssociates />,
    <SelectPP />,
    <OptionalLogo />,
    <AddWYSD />,
    <OptionalPhoto />,
    <ChooseColor />,
  ]);
  
  const handlesubmit=(e)=>{
    e.preventDefault()
    alert("eu")
    const config = {
      headers: {
        'Content-Type': 'application/json'
      }
    };
    let dataofform=stationform (formvalue)
  dataofform.then((s)=>{
   
alert(`${s.messege} was saved`)

  })

  }
  const [value, setValue] = useState(0);

  const [htext, sethtext] = useState([
    "Admin Dashboard",
    "Add Associates",
    "Select Private or Public For Your Station",
    "Optional: Add a Logo or Badge Image for your Station",
    "Add What your Station Does",
    "Optional: Add Station Name overlaid on your Station Badge/Photo",
    "Choose color for the badge if no photo is used",
  ]);
  
  return (
    <div container className="stationform w-100">
      <Row className="justify-content-center">
        <Col md={6} className="mb-2 text-center p-2">
          <Toast
            show={showA}
            onClose={toggleShowA}
            className="w-100 bg-white text-white addStationForm"
          >
            <Toast.Header className="stationName bg-blue text-white">
              <img
                src="holder.js/20x20?text=%20"
                className="rounded me-2"
                alt=""
              />
              <strong className="me-auto fs-17">{htext[value]}</strong>
            </Toast.Header>
            <Toast.Body>
              <Form>
                {slider[value]}
                {value > 0 && value <= 6 && (
                  <Button
                    variant="primary"
                    type="submit"
                    onClick={(e) => {
                      e.preventDefault();
                      setValue(() => value - 1);
                    }}
                  >
                    Previous
                  </Button>
                )}
                {value <= 6 && (
                  <Button
                    onClick={(e) => {
                      e.preventDefault();
                      setValue(() => value + 1);
                    }}
                    variant="primary"
                    type="submit"
                    className="mx-2"
                  >
                    Next
                  </Button>
                )}
                {value > 2 && value <= 6 && value != 4 && (
                  <Button variant="primary" type="submit" className="me-2">
                    skip
                  </Button>
                )}
                {value > 6 && (
                  <Button variant="primary" type="submit" className="me-2" onClick={handlesubmit}>
                    Save
                  </Button>
                )}
              </Form>
            </Toast.Body>
          </Toast>
        </Col>
      </Row>
    </div>
  );
}

export default StationForm;
