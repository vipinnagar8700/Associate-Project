import React, { useEffect, useState } from 'react'
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import SearchIcon from '@mui/icons-material/Search';

import CircularProgress from '@mui/material/CircularProgress';
import Stack from '@mui/material/Stack';
import MenuIcon from '@mui/icons-material/Menu';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import EditIcon from '@mui/icons-material/Edit';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import './Pages.css';
import DeleteIcon from '@mui/icons-material/Delete';
import Menul from  './LongMenu.js';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import { addpage, deletepage, getpage } from '../../Api/Pages/Page';
import BottomAppBar from '../navbar/BottomAppBar.js';
import { Link, Navigate } from 'react-router-dom';
import { useNavigate } from "react-router-dom";

  
  
   
 

const Pages = () => {
  const navigate = useNavigate();
  const[row,setrow]=useState(null)
  const[pagetext,setpagetext]=useState('')

console.log(pagetext);
useEffect(()=>{
getpage().then((data)=>{
  setrow(data)
  
})

},[])
if(!row ){
return <Stack sx={{ color: 'grey.500', height:'100vh' ,justifyContent:'center',alignItems:'center' }} spacing={2} direction="row">
<CircularProgress color="secondary" />
<CircularProgress color="success" />
<CircularProgress color="inherit" />
</Stack>
}

  const handledelete=(id)=>{
   
  deletepage(+(id)).then((data)=>{
    if(data){
     navigate("/admin/pages");
    }
  })
  }

 const newrow= row.length>0 && row.filter((r)=>{
  const{title}=r
   let k=title.toLowerCase()
    return k.includes(pagetext.toLowerCase())
 })

 console.log(newrow);
  return (
    <div><h1>
          
      <Container maxWidth="lg" id="pagek" sx={{position:'relative'}} >
  
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
    <Box sx={{display:'flex',justifyContent:'space-between' ,margin:'10px'}}> <h3 sm={{color:'#337ab7'}}>Pages</h3><Link to='/admin/pages/add'><Button variant="contained">ADD </Button></Link> </Box>
        <AppBar position="static" sx={{backgroundColor:"#337ab7", boxShadow: 0}}>
        <Grid container spacing={2}>
  <Grid item xs={8}>
    <h6>List of pages</h6>

  </Grid>
  <Grid item xs={4}>
  <TextField
              value={pagetext}
              onChange={(e)=>{
                     setpagetext(e.target.value)
              }}
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
      
         {row? <>
          { row.length>0 && newrow.map((r)=>{

return(
  <TableBody>
<TableRow
  key={r.id}
  sx={{ '&:last-child td, &:last-child th': { border: 0, backgroundColor:'#eeeeee', } }}
>
 
  <TableCell align="right">{r.id}</TableCell>
  <TableCell align="right">{r.title}</TableCell>
  <TableCell align="right">
  <Stack direction='row' spacing={2} justifyContent='center'><Link to={`/admin/pages/edit/${r.id}`}><EditIcon/></Link>< DeleteIcon onClick={()=>handledelete(r.id)}/></Stack>
  </TableCell>
 
 
</TableRow>
 </TableBody>
)
})}
         </> : <div>shdeuih</div>}
       
      </Table>
    </TableContainer>
        
                  </Box>
                  
      </Container>
         
        
        </h1></div>
  )
}

export default Pages
