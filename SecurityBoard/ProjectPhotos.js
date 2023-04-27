import React,{useState} from 'react'
import { Grid, Container, Stack, Typography, Box, Avatar, IconButton, } from '@mui/material'
// import { DashboardBoard } from './DashboardBoard'
import ArrowDropDownCircleIcon from '@mui/icons-material/ArrowDropDown'
import ProjectAssociate from './ProjectAssociate'
import Addphotos from './TestFile/Addphotos'
import CommentsField from './TestFile/CommentsField'
// import AddDiscussion from '../Station_Discussion/AddDiscussion'


const ProjectPhotos = () => {
    const [ph, setph] = useState(false);
    const handleOpen = () => {
        setph(true);
    };

    // filesonc setsk({...sk,file:false,act})
    const [com, setcom] = useState(false
        )

    return (
        < Box >
            <Grid container sx={{ justifyContent: 'end', backgroundColor: '#f6f6f6', alignItems: 'center' }}>
            <Grid item xs={12} sx={{ textAlign: "center" }}>
                    <Stack direction={"row"} sx={{ justifyContent: "space-between", alignItems: "center" }}>
                        <Box></Box>
                        <Box><Typography variant='h6'my={1}  sx={{ fontSize: 16, "&:hover": {
                            border: "1px solid #00FF00",
                        } }} > Photos</Typography></Box>
                        <Box>
                        <ArrowDropDownCircleIcon  onClick={() => setph(true)}/>
                        {
                        ph &&
                        <Addphotos ph={ph} setph={setph} />
                    }

                        </Box>
                    </Stack>

                </Grid>
                
            </Grid>
            {/* Data */}
            <Box >

                <Box sx={{
                    flexGrow: 1, backgroundColor: 'white',

                }}>
                    <Box height="330px"
                        sx={{
                            mx: 'auto',
                            p: 2,
                        }}
                    >
                        <Stack spacing={3} direction="row"  alignBoxs="start" sx={{ justifyContent: 'center' }}>

                            <Typography sx={{fontSize:14}} >Currently No Photos</Typography>
                        </Stack>

                    </Box>

                </Box>

            </Box>
            {/* Comments */}
            <Grid container sx={{ justifyContent: 'center', backgroundColor: '#f6f6f6', alignItems: 'center' }}>
                
                <Grid item  m={1}>
                    <Typography variant='h6' sx={{ fontSize: 16, "&:hover": {
                            border: "1px solid #00FF00",
                        } }}  onClick={() => setcom(true)}> Comments</Typography>
                        
                </Grid>
                
            </Grid>
            {/* Data */}
            <Box >

                <Box sx={{
                    flexGrow: 1, backgroundColor: 'white',

                }}>
                    <Box height="258px"
                        sx={{
                            mx: 'auto',
                            p: 2,
                        }}
                    >
                        <Stack spacing={3} direction="row" p={15} alignBoxs="start" sx={{ justifyContent: 'center' }}>

                            <Typography >{
                            com &&
                            <CommentsField  com={com} setcom={setcom}/>
                        }</Typography>
                        </Stack>

                    </Box>

                </Box>

            </Box>
        </Box >
    )
}

export default ProjectPhotos