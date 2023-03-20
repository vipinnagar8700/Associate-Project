import React from 'react'
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import AppBar from '@mui/material/AppBar';
import { styled } from '@mui/material/styles';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import SearchIcon from '@mui/icons-material/Search';
import MenuIcon from '@mui/icons-material/Menu';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import './Pages.css';
import Menul from  './LongMenu.js';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';

  const rows = [
   {
    name:1,
    calories:"dej",
    fat:'dj'
   }
  
   
  ];

const Pages = () => {
  return (
    <div><h1>
          
      <Container maxWidth="lg" >
  
  <Toolbar variant="dense">
    <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
     
     <Menul></Menul>
    </IconButton>
    <Typography variant="h6" color="inherit" component="div">
      Menu
    </Typography>
  </Toolbar>

        <Box sx={{backgroundColor:"#fff", borderRadius: 3, height:"700px", padding:"20px", width:"100%"
   }}>
    <h3 sm={{color:'#337ab7'}}>Pages</h3>
        <AppBar position="static" sx={{backgroundColor:"#337ab7", boxShadow: 0}}>
        <Grid container spacing={2}>
  <Grid item xs={8}>
    <h6>List of pages</h6>

  </Grid>
  <Grid item xs={4}>
  <TextField
              
                id="standard-bare"
                height="10px"
            placeholder='Filter Page List...'
                InputProps={{
                  endAdornment: (
                    <IconButton>
                <SearchIcon />
                    </IconButton>
                  ),
                }}
              />
  </Grid>

</Grid>
    
      
        </AppBar>
        <TableContainer component={Paper} sx={{ border: 1, borderColor:'#337ab7', }}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table" >
        <TableHead sm={{backgroundColor:'#fff'}}>
          <TableRow>
            <TableCell>Id</TableCell>
            <TableCell align="right">Page Name</TableCell>
            <TableCell align="right">Action</TableCell>
           
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0, backgroundColor:'#eeeeee', } }}
            >
             
              <TableCell align="right">{row.name}</TableCell>
              <TableCell align="right">{row.calories}</TableCell>
              <TableCell align="right">{row.fat}</TableCell>
             
             
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
        
                  </Box>
                  
      </Container>
         
        
        </h1></div>
  )
}

export default Pages
