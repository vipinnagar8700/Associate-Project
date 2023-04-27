import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Tooltip from "@mui/material/Tooltip";
import MyFilesData from "../../../src/components/Main-Dashboard/Station/MyStation/MyFilesData";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import SearchIcon from '@mui/icons-material/Search';
import Typography from '@mui/material/Typography'



const StationFiles = () => {
  const [currentstation, currentStation] = useState(false);
  return (
    <div className="mb-2 staionFiles p-2">
      <Row className="mb-2">
        <Col md={12}>
          <Tabs
            defaultActiveKey="home"
            transition={false}
            id="noanim-tab-example"
            className="mb-lg-3 mb-1 gap-1 d-flex justify-content-between"

          >
            <Tab eventKey="All Files" title={<Typography variant="body2" color="initial">All Files</Typography>}>
              
            </Tab>
            <Tab eventKey="My Files" title={<Typography variant="body2" color="initial">My Files</Typography>}>
              
            </Tab>
            <Tab eventKey="This Station" title={<Typography variant="body2" color="initial">This Station</Typography>}>
              <div className="stationFilesBox"></div>
            </Tab>
            <Tab
              eventKey="search"
              title={<SearchIcon/>
                
              }
              className="m-0"
            >
              <div className="stationFilesBox"><input
                  type="text"
                  placeholder="Search...."
                  className="w-100 fs-12"
                /></div>
            </Tab>
          </Tabs>
        </Col>
      </Row>

      <div style={{maxHeight:"300px",overflowY:"scroll"}}>
        {MyFilesData.map((SFData) => {
          const { id, img, title, time, filename, stationname } = SFData;
          return (
            <Row className="mb-3 w-100" key={id}>
              <Col xs={2} className="pright-0">
                <div>
                  <img src={img} className="img-fluid" />
                </div>
              </Col>
              <Col xs={10}>
                <div>
                  <p className="myfiles_title fs-13">
                    <strong>{title}</strong>
                  </p>
                  <p className="myfiles_time grey fs-12">{time}</p>
                  <p className="myfiles_filenae blue fs-14">
                    <strong>{filename}</strong>
                  </p>
                  <p className="myfiles_stationname blue fs-14">
                    {stationname}
                  </p>
                </div>
              </Col>
            </Row>
          );
        })}
      </div>
    </div>
  );
};

export default StationFiles;
