import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import ExpandCircleDownIcon from '@mui/icons-material/ExpandCircleDown';
import ProgressBar from 'react-bootstrap/ProgressBar';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import Divider from '@mui/material/Divider';
const style = {
    width: '100%',
    maxWidth: 360,
    bgcolor: 'background.paper',
  };
const Leadership = () => {
    const now = 53;
  return (
    <div className='bg-white leadership-box'>
    <div className='head'><span>Station Statement</span></div>
    <div className='content pb-4'><p>Provides leadership strategies and growth to all Management team members</p></div>
    <div className='head'><span>Station Associates</span></div>
    <Stack direction="row" spacing={2} className="py-2 content">
      <Avatar alt="Remy Sharp" src="./img/john.jpg" />
      <Avatar alt="Travis Howard" src="./img/puja1.png" />
      <Avatar alt="Cindy Baker" src="./img/jim1.png" />
      <Avatar alt="Remy Sharp" src="./img/john.jpg" />
    </Stack>
    <div className='head'><span>Station Photos</span></div>
    <div>
       <Stack direction="row" spacing={2} className="py-2 station_photo content">
          <div> <img  className='rounded' src='./img/stationp1.jpg'/></div>
          <div> <img  className='rounded' src='./img/stationp2.jpg'/></div>
          <div> <img  className='rounded' src='./img/stationp3.jpg'/></div>
       </Stack>
    </div>
    <div  className='head justify-content-between align-items-center'>
    <Stack direction="row" spacing={2}>
    <Avatar sx={{width:25, height: 25,backgroundColor:'black',fontSize:'12px' }} >AP</Avatar>
    </Stack>
        <span>Project Board Progress Report</span>
    <div>
        <ExpandCircleDownIcon/>
    </div>
    </div>
    <div className='d-flex justify-content-between align-items-center content py-2'>
        <div><KeyboardArrowDownIcon/></div>
        <div><p className='fs-13 blue'>Leadership Development</p></div>
    <div className='w-50'><ProgressBar now={now} label={`${now}%`} /></div>
    </div>
    <Divider light  sx={{backgroundColor:"grey"}}/>
    <div className='py-5'></div>
    </div>
  )
}

export default Leadership