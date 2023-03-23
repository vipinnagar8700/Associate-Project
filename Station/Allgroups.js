import React from 'react'
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import AppBar from '@mui/material/AppBar';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircle from '@mui/icons-material/AccountCircle';
import Switch from '@mui/material/Switch';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormGroup from '@mui/material/FormGroup';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import Grid from '@mui/material/Grid';


import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';

 export const Allgroups = () => {
    const itemData = [
        {
          img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
          title: 'Accosiate',
           rows: 2,
          cols: 2,
          featured: true,
        },
        {
          img: 'https://assoc.studiomyraa.com/public/uploads/images/1678854118.png',
          title: 'Accosiate',
         
        },
        {
          img: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
          title: 'Accosiate',
          
        },
        {
          img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
          title: 'Accosiate',
          author: '@nolanissac',
          cols: 2,
        },
        {
          img: 'https://images.unsplash.com/photo-1533827432537-70133748f5c8',
          title: 'Accosiate',
          
          cols: 2,
        },
        {
          img: 'https://images.unsplash.com/photo-1533827432537-70133748f5c8',
          title: 'Accosiate',
          
          cols: 2,
        },
        {
          img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
          title: 'Accosiate',
           rows: 2,
          cols: 2,
          featured: true,
        },
        {
          img: 'https://assoc.studiomyraa.com/public/uploads/images/1678854118.png',
          title: 'Accosiate',
         
        },
      ]
      
  const [auth, setAuth] = React.useState(true);
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleChange = (event) => {
    setAuth(event.target.checked);
  };

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <div>

      <Container maxWidth="md" >
        <Box sx={{ flexGrow: 1 }}>

          <AppBar position="static">
            <Toolbar>
              <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                sx={{ mr: 2 }}
              >
                <MenuIcon />
              </IconButton>
              <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>

              </Typography>
              {auth && (
                <div>
                  <AddCircleIcon
                    size="large"
                    aria-label="account of current user"
                    aria-controls="menu-appbar"
                    aria-haspopup="true"
                    onClick={handleMenu}
                    color="inherit"
                  >
                    <AccountCircle />
                  </AddCircleIcon>
                  <Menu
                    id="menu-appbar"
                    anchorEl={anchorEl}
                    anchorOrigin={{
                      vertical: 'top',
                      horizontal: 'right',
                    }}
                    keepMounted
                    transformOrigin={{
                      vertical: 'top',
                      horizontal: 'right',
                    }}
                    open={Boolean(anchorEl)}
                    onClose={handleClose}
                  >
                    <MenuItem onClick={handleClose}>Profile</MenuItem>
                    <MenuItem onClick={handleClose}>My account</MenuItem>
                  </Menu>
                </div>
              )}
            </Toolbar>
          </AppBar>
        </Box>
        <Box sx={{
          backgroundColor: "#fff", height: "auto", padding: "20px", width: "100%"
        }}>
          <Grid container spacing={4}>
            <Grid item xs={4}>
              <ImageList sx={{ width: 810, height: "auto" }}>
                <ImageListItem key="Subheader" cols={3}>

                </ImageListItem>
                {itemData.map((item) => (
                  <ImageListItem key={item.img}>
                    <img
                      src={`${item.img}?w=248&fit=crop&auto=format`}
                      srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                      alt={item.title}
                      loading="lazy"
                    />
                    <Box className="overlay" />
                    <Box className="Stations-content">
                      <Box>
                        <Box className="add-btn mx-auto mb-1">
                          <i className="fa fa-close" />
                        </Box>
                        <Typography variant='p' className="fs-13 m-0">BioMedical</ Typography>
                        <Typography variant='p' >6 Members </Typography>
                      </Box>
                    </Box>
                    <ImageListItemBar
                    style={{background: "none"}}
                      subtitle=""
                      title="2 New Posts"

                      actionIcon={

                        <IconButton
                          sx={{ color: '#fff' }}
                          aria-label={`info about ${item.title}`}
                        >
                          <AddCircleIcon /> Join
                        </IconButton>
                      }
                    />
                  </ImageListItem>
                ))}
              </ImageList>
            </Grid>


          </Grid>
        </Box>

      </Container>
    </div>
  )
}


