import React, { useEffect } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useState,useContext } from "react";
import "./MyStation.css";
import MyStationForm from "./MyStationForm";
import RecentSessions from "../RecentSessions/RecentSessions";
import MyStationData from "./MyStationData";
import AddNewSession from "../RecentSessions/AddNewSession";
import AddEditStation from "../RecentSessions/AddEditStations";
import Huddle  from './Huddle';
import MyStationp from './Mystationp'
import Tooltip from '@mui/material/Tooltip';
import StationFiles from "./StationFiles";
import Leadership from "./Leadership";
import { Icon } from "../../../Context/Sideicon";

const MyStation = () => {
  const { iconaction,seticonaction } = useContext(Icon)
  console.log(iconaction);
  const{event, showiconsubheader,countvalue}=iconaction
  const [show, setIsShown] = useState(false);
  const [option, setOption] = useState(false);
  const [form, setForm] = useState(false);
  const [width,setwidth]=useState(6)
  const [currentstation, currentStation] = useState(false);
  const [value, setValue] = useState(0);
  const [changestation , setchangestation]=useState(false);

  const [stationFile, setStationFile] = useState(false);  
  useEffect(()=>{
    
seticonaction({...iconaction,editstation:currentstation,aeditstation:currentStation})
  },[countvalue])
  useEffect(()=>{
seticonaction({...iconaction, actionstationfile: setchangestation, stationfile:changestation})
  },[iconaction.event])
 
  let datas=[

    {
    id:1,
    title:"hih"
  },
  {
    id:2,title:"ebfgiueg"
  }
]
 const widthadjust =()=>{
  if(width===6){
  
    setwidth(3)
  }else{
    setwidth(6)
  }
console.log(width)
 }
  return (
    <Container className="my-3">
      {form && <MyStationForm setForm={setForm} form={form} />}
      <Row>
        <Col md={6}>
        {currentstation && <AddEditStation currentStation={currentStation} currentstation={!currentstation} /> }
        </Col>
      </Row>
      <Row>
        <Col md={8} >
          <RecentSessions />
        </Col>
        <Col md={4} className="ps-0">
      
          <div>
            <div className="Station-head">
              <div>
                <ul>
                  <li>
                     <Tooltip title="Station File">
                    <a>
                   {  showiconsubheader &&  <img src="./img/StationFiles.svg" onClick={()=>{
                        setchangestation(!changestation)
                        setStationFile(false)
                       }}
                        />}
                    </a>
                  </Tooltip>
                  </li>
                  <li>
                  <Tooltip title="Station Board">
                    <a>
                    { showiconsubheader &&  <img src="./img/StationBoards.svg" />}
                    </a>
                  </Tooltip>
                  </li>
                </ul>
              </div>
              <div>{stationFile?<p>My Station</p>:<p>Huddle</p> && changestation?<p>Station Files</p>:<p>Huddle</p>}</div>
              <div>
                <ul>
                  <li>
                  <Tooltip title="Add/Edit Station">
                    <a>
                      
                 {  showiconsubheader&&  <img src="./img/header-edit-station.png"  style={{width:'15px',height:'15px'}} onClick={()=>{
                        currentStation(!currentstation)
                      }}/>}
                    </a>
                    </Tooltip>
                  </li>
              {   showiconsubheader &&    <li>
                 
                    <a>
                        {  showiconsubheader &&  
                  stationFile?<Tooltip title="Back to Huddle"><img src="./img/MyStations.svg" onClick={()=>{
                    setchangestation(false)
                    setStationFile(!stationFile)
                   }}/></Tooltip>:  <Tooltip title="Back to Station"><img src="./img/Huddle.svg" onClick={()=>{
                    setchangestation(false)
                    setStationFile(!stationFile)
                   }}/></Tooltip>
                }

                    </a>
                  </li>}
                </ul>
              </div>
            </div>
            
              <div>
              
              {
                !changestation && !stationFile
 && <Huddle />
              }

          {
            changestation &&<StationFiles  />
                
            }
           
           
            {
          stationFile &&<MyStationp stationFile={stationFile}/>
            }
           
            {
          // stationFile &&<Leadership stationFile={stationFile}/>
            }
          

               
             
   
              
              </div>
              

            
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default MyStation;
