import React,{useState} from 'react'
import { Container, FormControl, OutlinedInput, InputLabel, Divider, Box, Stack, Button, Typography, Link } from '@mui/material'
import ClearIcon from '@mui/icons-material/Clear';
import Modal from '@mui/material/Modal'


import Checkbox from '@mui/material/Checkbox';
import SetColor from '../SB/SetColor';

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };



const style = {
  position: 'absolute',
  top: '25%',
  left: '65%',
  transform: 'translate(-50%, -50%)',
  zIndex: 999,
};



const EB = () => {
  const [coll, setcoll] = useState(false)
  return (
    <div>
      <Box sx={style}>
        <Box boxShadow={18} sx={{ backgroundColor: '#DBDBDB', border: '1px solid black', }}>
          <Stack p={1} sx={{ justifyContent: 'center', alignItem: 'end' }}>
            <Link  sx={{ underline:'hover',color:'black',
              "&:hover": {
                backgroundColor: '#7EB1AD',color:'black'
              }
            }} onClick={() => setcoll(true)} > Select cover color</Link>
            {
              coll &&
              <SetColor coll={coll} setcoll={setcoll}/>
            }
            <Link sx={{color:'black',
              "&:hover": {
                backgroundColor: '#7EB1AD',color:'black'
              }
            }}> Add/Change Name</Link>
            <Link sx={{color:'black',
              "&:hover": {
                backgroundColor: '#7EB1AD',color:'black'
              }
            }}> Add/Edit Description</Link>
            <Link sx={{color:'black',
              "&:hover": {
                backgroundColor: '#7EB1AD',color:'black'
              }
            }}> Add Cover Photo</Link>
            <Link sx={{color:'black',
              "&:hover": {
                backgroundColor: '#7EB1AD',color:'black'
              }
            }}> Add/Edit Associate</Link>
          </Stack>

          <Stack direction='row' m={1} gap={4} sx={{ justifyContent: 'center' }}>
            <Button variant="outlined" sx={{ color: '#000000', borderColor: '#000000' }} size='small'>Save</Button>
          </Stack>
        </Box>
      </Box>
    </div>
  )
}

export default EB