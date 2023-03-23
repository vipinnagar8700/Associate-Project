import { List, ListItem, ListItemButton, ListItemIcon } from '@mui/material'
import{createGlobalStyle} from 'styled-components'
import React,{useContext, useState} from 'react'
import { Icon } from '../../../Context/Sideicon';
import { Sessionform } from '../../../Context/Session';

const Iconstyle = createGlobalStyle`
.profile_icon{
    position: absolute !important;
    left: 1.6rem;
}
`;



const IconList = () => {
    let global=true;
    const[cvalue,setcvalue]=useState(0)
    const {sessionform,setsessionform} = useContext( Sessionform);
    const{ modalShow,id}=sessionform
    const { iconaction,seticonaction } = useContext(Icon)
    const{aeditstation,  stationfile,search,  actionsearch, messageoption,event,countvalue,editstation}=iconaction
    console.log(stationfile,"stattion file");
  console.log(aeditstation,"aaaaaaaaaaaaaaaaaaaa","wjebrfkgut3,",event,"event",iconaction.station,search,"dhf","messaheoption", messageoption);
  return (
    <div>
        <List className='profile_icon' sx={{backgroundColor:'#fff',mt:1}}>
            <Iconstyle/>
            
            <ListItem sx={{padding:'0'}}>
                <ListItemButton>
                    <img src='./img/associate_icon1.png' onClick={(e)=>{
                        setcvalue((value)=>{
                          return value+1;
                        })
                    
                      
                   seticonaction({...iconaction,countvalue:cvalue})   
                   iconaction.addstation((value)=>{
                    if(value===true) {
                        return false
                    }
                    return true
                   })
                   }   }/>
                </ListItemButton>
            </ListItem>
            <ListItem sx={{padding:'0'}}>
                <ListItemButton>
                <img src='./img/associate_icon2.png' onClick={(e)=>{
                       setcvalue((value)=>{
                        return value+1;
                      })
                    
                      seticonaction({...iconaction,countvalue:cvalue})   
                  
                        iconaction.aeditstation(!editstation)
                    
                 
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
                <img src='./img/associate_icon6.png' onClick={(e)=>{iconaction.actionstationfile(true)
                   seticonaction({...iconaction,event:e}) 
                }}/>
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
                <img src='./img/associate_icon10.png'onClick={(e)=>{ 
                     seticonaction({...iconaction,event:e}) 
                    actionsearch( (search)=>{
                        if(search){
                            console.log(search,"inside the search");
                            return false;
                        }else{
                            return true
                        }
                    })
                
                }}/>
                </ListItemButton>
            </ListItem>
            <ListItem sx={{padding:'0'}}>
                <ListItemButton>
                <img src='./img/associate_icon11.png'onClick={()=>alert("Please check off Priority Box on Station")}/>
                </ListItemButton>
            </ListItem>
            <ListItem sx={{padding:'0'}}>
                <ListItemButton>
                <img src='./img/associate_icon11.png' onClick={()=>seticonaction((iconaction)=>{
                if(iconaction.messageoption ===true){
                  return{...iconaction,messageoption:false}
                }
                return{...iconaction,messageoption:true}
                })}/>
                </ListItemButton>
            </ListItem>
        </List>
    </div>
  )
}

export default IconList