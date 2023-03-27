import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/material';

export default function Commentlist({comments}) {
    var currentdate = new Date();
  var datetime =  currentdate.getDay() + "/" + currentdate.getMonth() 
  + "/" + currentdate.getFullYear() + " @ " 
  + currentdate.getHours() + ":" 
  + currentdate.getMinutes() + ":" + currentdate.getSeconds();
 
  
  return (
    <List sx={{ width: '100%', maxWidth: 360 }}>
    
        {
           comments.length>0 &&  comments.map((comment,index)=>{
           let date={...comment,datetime }
                return(
                    <ListItem alignItems="flex-start" key={index}
                    sx={{borderBottom:'1px solid #fff',margin:'',}}
                    >
                        
        <ListItemAvatar>
          <Avatar alt="Remy Sharp" src="./img/puja1.png" />
        </ListItemAvatar>
        <ListItemText
        sx={{color:'#fff'}}
          primary=  {comment.text}
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' ,color:'#fff'}}
                component="span"
                variant="body2"
                color="text.primary"
              >
               {date.datetime}
              </Typography>
           
            </React.Fragment>
          }
        />
        
                     </ListItem>
                )

            })
        }
       
       
  
       
        </List>
  );
}