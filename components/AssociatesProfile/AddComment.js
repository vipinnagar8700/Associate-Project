import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Divider, TextareaAutosize } from '@mui/material';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 600,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 2,
  height: 200,
  borderRadius: 2
};

export default function AddComment({ setOpen, open }) {



  return (
    <div>
      <Modal
        keepMounted
        open={open}
        onClose={() => setOpen(false)}
        aria-labelledby="keep-mounted-modal-title"
        aria-describedby="keep-mounted-modal-description"
      >
        <Box sx={style}>
          <Box>
            <Box className="profile_head" sx={{ display: 'flex', justifyContent: 'space-between' }}>
              <Typography id="keep-mounted-modal-title" variant="h6" component="h2">
                Add Comment
              </Typography>
              <Typography id="keep-mounted-modal-description">
                X
              </Typography>
            </Box>


            {/* <Divider sx={{border:'1px solid gray',mb:2,marginTop:'5px'}}/> */}


            <Box sx={{ mt: 2, width: '100%', marginTop: '25px' }}>
              <TextareaAutosize className='w-100' sx={{ mt: 2, width: '100%', marginTop: '5px' }} minRows={2} />
            </Box>
            <Box sx={{ textAlign: 'center' }}>
              <Button variant="contained" className="btn btn-primary" sx={{ mt: 2 }}>
                Submit
              </Button>
            </Box>
          </Box>

        </Box>
      </Modal>
    </div>
  );
}