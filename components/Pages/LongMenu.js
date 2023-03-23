import * as React from 'react';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import CloseIcon from '@mui/icons-material/Close';
// import MoreVertIcon from '@mui/icons-material/MoreVert';
import MenuIcon from '@mui/icons-material/Menu';

const options = [
   'Dashboard',
  'Pages',
  'Workstations',
  'User Profile',
  'Story Board',
  'Text Messages',
  'Discussion Board',
  'Enable Programs',
  'Tutorial',
  'Idea Board',
  'Add To Planner',
  'Manage Categories',
  'Update Demo PPT',
  'Update Demo Video',
  'Add Video',
  'Add Document',
  'Add Log Entries',
  'Edit/Delete Video',
  'Delete Document',
  'Document Disable',
  'Add Photos',
  'Login Page Photo',
  'Website Hits',
  'Change Username',
  'Change Password',
  'New User Registration',
  'Login History',
  'Login Attempt History',
  'All Profiles',
  'Social Network',
  'Logout',
];

const ITEM_HEIGHT = 150;

export default function LongMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div >
      <IconButton
        aria-label="more"
        id="long-button"
        aria-controls={open ? 'long-menu' : undefined}
        aria-expanded={open ? 'true' : undefined}
        aria-haspopup="true"
        onClick={handleClick}
      >
        {open ? <CloseIcon /> : <MenuIcon />}
        
      </IconButton>
      <Menu
        id="long-menu"
        MenuListProps={{
          'aria-labelledby': 'long-button',
        }}
        anchorEl={anchorEl}
        open={open}
        sx={{position:'absolute', right:'40%',top:'38%'}}
        onClose={handleClose}
        PaperProps={{
          style: {
            maxHeight: ITEM_HEIGHT * 4.5,
            width: '30ch',
          },
        }}
      >
        {options.map((option) => (
          <MenuItem key={option} selected={option === 'Pyxis'} onClick={handleClose}>
            {option}
          </MenuItem>
        ))}
      </Menu>
    </div>
  );
}