import React, { useState } from 'react'
import { Col, Container,Row } from 'react-bootstrap'
import Tooltip from '@mui/material/Tooltip';
import MyFilesData from './MyFilesData';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';



const StationFiles = () => {
    const [currentstation, currentStation] = useState(false);
  return (
    <div className='mb-2 staionFiles p-2'>
        <Row className='mb-2'>
            <Col md={12}>
            <Tabs
      defaultActiveKey="home"
      transition={false}
      id="noanim-tab-example"
      className="mb-3"
    >
        <Tab eventKey="All Files" title="All Files">
        <div className='stationFilesBox'>
        {
            MyFilesData.map((SFData)=>{
                const{id,img,title,time,filename,stationname} = SFData
                return(
                <Row className='mb-3 w-100' key={id}>
                    <Col md={2}>
                        <div>
                        <img src={img} className='img-fluid'/>
                        </div>
                    </Col>
                    <Col md={10}>
                        <div>
                        <p className='myfiles_title fs-13'><strong>{title}</strong></p>
                        <p className='myfiles_time grey fs-12'>{time}</p>
                        <p className='myfiles_filenae blue fs-14'><strong>{filename}</strong></p>
                        <p className='myfiles_stationname blue fs-14'>{stationname}</p>
                        </div>
                    </Col>
                </Row>
                )
            })
        }
        </div>
      </Tab>
      <Tab eventKey="My Files" title="My Files">
      <div className='stationFilesBox'>
        {
            MyFilesData.map((SFData)=>{
                const{id,img,title,time,filename,stationname} = SFData
                return(
                <Row className='mb-2 w-100'  key={id}>
                    <Col md={2}>
                        <div>
                        <img src={img} className='img-fluid'/>
                        </div>
                    </Col>
                    <Col md={10}>
                        <div>
                        <p className='myfiles_title fs-13'><strong>{title}</strong></p>
                        <p className='myfiles_time grey fs-12'>{time}</p>
                        <p className='myfiles_filenae blue fs-14'><strong>{filename}</strong></p>
                        <p className='myfiles_stationname blue fs-14'>{stationname}</p>
                        </div>
                    </Col>
                </Row>
                )
            })
        }
        </div>
      </Tab>
      <Tab eventKey="This Station" title="This Station">
      <div className='stationFilesBox'>
        
        </div>
      </Tab>
      <Tab eventKey="search" title={<input type="text" placeholder='Search....' className='w-100 fs-12' />} className="m-0">
      <div className='stationFilesBox'>
       
        </div>
      </Tab>
      </Tabs>
            </Col>
            
        </Row>

        <div className='stationFilesBox'>
        {
            MyFilesData.map((SFData)=>{
                const{id,img,title,time,filename,stationname} = SFData
                return(
                <Row className='mb-3 w-100'  key={id}>
                    <Col md={2}>
                        <div>
                        <img src={img} className='img-fluid'/>
                        </div>
                    </Col>
                    <Col md={10}>
                        <div>
                        <p className='myfiles_title fs-13'><strong>{title}</strong></p>
                        <p className='myfiles_time grey fs-12'>{time}</p>
                        <p className='myfiles_filenae blue fs-14'><strong>{filename}</strong></p>
                        <p className='myfiles_stationname blue fs-14'>{stationname}</p>
                        </div>
                    </Col>
                </Row>
                )
            })
        }
        </div>
        
       
    </div>
  )
}

export default StationFiles