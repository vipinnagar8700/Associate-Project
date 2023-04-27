import * as React from 'react';
import Box from '@mui/material/Box';
import {Modal,Grid,ImageList,ImageListItem} from '@mui/material';
import Button from '@mui/material/Button';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import DangerousIcon from "@mui/icons-material/Dangerous";

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  pt: 2,
  px: 4,
  pb: 3,
};

function ChildModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
      <Button onClick={handleOpen}>Open Child Modal</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="child-modal-title"
        aria-describedby="child-modal-description"
      >
        <Box sx={{ ...style, width: 200 }}>
          <h2 id="child-modal-title">Text in a child modal</h2>
          <p id="child-modal-description">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          </p>
          <Button onClick={handleClose}>Close Child Modal</Button>
        </Box>
      </Modal>
    </React.Fragment>
  );
}

export default function ImageZoom() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button onClick={handleOpen}>Open modal</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="parent-modal-title"
        aria-describedby="parent-modal-description"
      >
        <Grid container sx={{justifyContent:"center",height:"100%"}}>
        <Grid item xs={8} sx={{height:"100%",display:"flex" , justifyContent:"center",alignItems:"center"}}>
          <Box>
            <ImageList cols={1} sx={{ borderRadius: "15px", margin: "5px 0",position:"relative" }}>
              <ImageListItem>
                <img src="./img/station_867.png" />
              </ImageListItem>
              <Box sx={{position:"absolute" , left:"5px",top:"5px",color:"#fff"}}>
              <AddCircleOutlineIcon />
              </Box>
              <Box sx={{position:"absolute" , right:"5px",top:"5px",color:"#fff"}}>
              <DangerousIcon />
              </Box>
            </ImageList>
          </Box>
        </Grid>
        </Grid>
      </Modal>
    </div>
  );
}