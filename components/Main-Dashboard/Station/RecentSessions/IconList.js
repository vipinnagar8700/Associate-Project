import { List, ListItem, ListItemButton, ListItemIcon } from '@mui/material'
import{createGlobalStyle} from 'styled-components'
import React,{useContext} from 'react'
import { Icon } from '../../../Context/Sideicon';
import { Sessionform } from '../../../Context/Session';

const Iconstyle = createGlobalStyle`
.profile_icon{
    position: absolute !important;
    left: 1.6rem;
}
`;



const IconList = () => {
    const {sessionform,setsessionform} = useContext( Sessionform);
    const{ modalShow,id}=sessionform
    const { iconaction,seticonaction } = useContext(Icon)
    const{aeditstation}=iconaction
  console.log(iconaction.addstation,"wjebrfkgut3,",iconaction.station);
  return (
    <div>
        <List className='profile_icon' sx={{backgroundColor:'#fff',mt:1}}>
            <Iconstyle/>
            
            <ListItem sx={{padding:'0'}}>
                <ListItemButton>
                    <img src='./img/associate_icon1.png' onClick={(e)=>{iconaction.addstation(!iconaction.station)
                   seticonaction({...iconaction,event:e})    }   }/>
                </ListItemButton>
            </ListItem>
            <ListItem sx={{padding:'0'}}>
                <ListItemButton>
                <img src='./img/associate_icon2.png' onClick={(e)=>{
                    iconaction.editstation(!aeditstation)
                    seticonaction({...iconaction,event:e}) 
                }}/>
                </ListItemButton>
            </ListItem>
            <ListItem sx={{padding:'0'}}>
                <ListItemButton>
                <img src='./img/associate_icon3.png'  onClick={()=>setsessionform({...sessionform,modalShow:true})}/>
                </ListItemButton>
            </ListItem>
            <ListItem sx={{padding:'0'}}>
                <ListItemButton>
                <img src='./img/associate_icon4.png'/>
                </ListItemButton>
            </ListItem>
            <ListItem sx={{padding:'0'}}>
                <ListItemButton>
                <img src='./img/associate_icon5.png'/>
                </ListItemButton>
            </ListItem>
            <ListItem sx={{padding:'0'}}>
                <ListItemButton>
                <img src='./img/associate_icon6.png'/>
                </ListItemButton>
            </ListItem>
            <ListItem sx={{padding:'0'}}>
                <ListItemButton>
                <img src='./img/associate_icon7.png'/>
                </ListItemButton>
            </ListItem>
            <ListItem sx={{padding:'0'}}>
                <ListItemButton>
                <img src='./img/associate_icon8.png'/>
                </ListItemButton>
            </ListItem>
            <ListItem sx={{padding:'0'}}>
                <ListItemButton>
                <img src='./img/associate_icon9.png'/>
                </ListItemButton>
            </ListItem>
            <ListItem sx={{padding:'0'}}>
                <ListItemButton>
                <img src='./img/associate_icon10.png'/>
                </ListItemButton>
            </ListItem>
            <ListItem sx={{padding:'0'}}>
                <ListItemButton>
                <img src='./img/associate_icon11.png'/>
                </ListItemButton>
            </ListItem>
            <ListItem sx={{padding:'0'}}>
                <ListItemButton>
                <img src='./img/associate_icon11.png'/>
                </ListItemButton>
            </ListItem>
        </List>
    </div>
  )
}

export default IconList