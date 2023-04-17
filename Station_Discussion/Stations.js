import { Box, Stack, Button, Slider, Link, Divider, Container } from '@mui/material'
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import Tooltip from '@mui/material/Tooltip';
import IconButton from '@mui/material/IconButton';
import ArrowDropDownCircleIcon from '@mui/icons-material/ArrowDropDownCircle';
import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft';
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import AccessTimeOutlinedIcon from '@mui/icons-material/AccessTimeOutlined';
import FileDownloadOutlinedIcon from '@mui/icons-material/FileDownloadOutlined';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import { Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
import SignalCellularAltIcon from '@mui/icons-material/SignalCellularAlt';
import MapsUgcIcon from '@mui/icons-material/MapsUgc';
import MailOutlinedIcon from '@mui/icons-material/MailOutlined';
import MicOutlinedIcon from '@mui/icons-material/MicOutlined';
import Grid from "@mui/material/Grid";
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';

const Stations = () => {
    return (
        <div>
            <Container maxWidth="lg">
                <Stack>
                    <Box m={5} overflow={'hidden'}>

                        <Grid container spacing={1} gap={1} sx={{justifyContent:'center'}}>
                            {/* First column */}

                            <Grid item xs={7} sx={{ backgroundColor: '#ffff',justifyContent: 'center' }}   >
                                {/* BioMedical heading */}
                                <Box>

                                    <Grid container sx={{ justifyContent: 'center', backgroundColor: '#DDD7FF', alignItems: 'center' }}>
                                        <Grid item xs={5}
                                        >
                                            <IconButton>
                                                <Avatar sx={{ width: 25, height: 25, bgcolor: 'black' }} >ss</Avatar>
                                            </IconButton>
                                        </Grid>
                                        <Grid item xs={3.5} >
                                            <Typography variant='h6' sx={{ fontSize: 17 }} > BioMedical</Typography></Grid>
                                        <Grid item xs={3.5}
                                        >
                                            <IconButton>
                                                <ArrowCircleLeftIcon type="button" />
                                            </IconButton>
                                            <IconButton>
                                                <ArrowCircleRightIcon type="button" />
                                            </IconButton>
                                            <IconButton>
                                                <ArrowDropDownCircleIcon /></IconButton>
                                            <IconButton>
                                                <ArrowDropDownCircleIcon /></IconButton>
                                        </Grid>
                                    </Grid>
                                </Box>
                                {/* Station Statement heading */}
                                <Box>
                                    <Stack direction='row' sx={{ justifyContent: 'center', backgroundColor: '#D2DEE8', alignItems: 'center', }}>

                                        <Typography variant='h6' sx={{ fontSize: 16 }}  > Station Statement</Typography>

                                    </Stack>
                                </Box>
                                {/* Station statement content */}
                                <Box >
                                    <Stack direction='row' sx={{ justifyContent: 'center', backgroundColor: '#ffff', alignItems: 'center' }}>

                                        <Typography variant='body2' m={2} >This team reviews clinical equipment operations for the hospital. We evaluate<br /> equipment preventative maintenance and completion of all critical equipment </Typography>

                                    </Stack>
                                </Box>
                                {/* Station Associate heading */}
                                <Box >
                                    <Grid container sx={{ justifyContent: 'end', backgroundColor: '#D2DEE8', alignItems: 'center' }}>
                                        <Grid item xs={5}>
                                            <IconButton>
                                                <Avatar sx={{ width: 25, height: 25, bgcolor: 'black' }} >ss</Avatar>
                                            </IconButton>
                                        </Grid>
                                        <Grid item xs={6}>
                                            <Typography variant='h6' sx={{ fontSize: 16 }} > Station Associates</Typography>
                                        </Grid>
                                        <Grid item xs={1}>
                                            <IconButton>
                                                <CameraAltIcon type="button" />
                                            </IconButton>


                                        </Grid>
                                    </Grid>

                                </Box>
                                {/* Station Associate 1 */}
                                <Box >

                                    <Box sx={{
                                        flexGrow: 1, backgroundColor: 'white',

                                    }}>
                                        <Box
                                            sx={{
                                                mx: 'auto',
                                                p: 2,
                                            }}
                                        >
                                            <Stack spacing={3} direction="row" alignBoxs="center">

                                                <Avatar alt='John s smith' sx={{ width: 55, height: 55 }} src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQPQmH3gZw6BGda2FbR4lpxXr09NZsI_axIg&usqp=CAU' />
                                                <Avatar alt='John s smith' sx={{ width: 55, height: 55 }} src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQPQmH3gZw6BGda2FbR4lpxXr09NZsI_axIg&usqp=CAU' />


                                            </Stack>

                                        </Box>

                                    </Box>

                                </Box>
                                {/* Station session heading */}
                                <Box >
                                    <Grid container sx={{ justifyContent: 'end', backgroundColor: '#D2DEE8', alignItems: 'center' }}>
                                        <Grid item xs={6}>

                                            <Typography variant='h6' sx={{ fontSize: 16 }} >Station  Sessions</Typography></Grid>
                                        <Grid item xs={1}>
                                            <IconButton>
                                                <AccessTimeOutlinedIcon type="button" />
                                            </IconButton>
                                        </Grid>


                                            
                                    </Grid>
                                </Box>
                                <Box sx={{ height: 450, overflow: 'scroll' }}>
                                    {/* Station session 1 */}
                                    <Box >

                                        <Grid container sx={{
                                            backgroundColor: 'white', '&:hover': {
                                                backgroundColor: '#E8F0F8',
                                                opacity: [0.9, 0.8, 0.7],
                                            },
                                        }}>
                                            <Grid item xs={12}
                                                sx={{
                                                    mx: 'auto',
                                                    p: 2,
                                                }}
                                            >
                                                <Grid container spacing={1} gap={2} alignBoxs="center">
                                                    <Grid item xs={1}>
                                                        <Tooltip
                                                            title="John S Smith 555-555-5555 Facility Manager"
                                                            placement="right"
                                                            arrow
                                                        >
                                                            <Avatar alt='John s smith' sx={{ width: 55, height: 55 }} src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQPQmH3gZw6BGda2FbR4lpxXr09NZsI_axIg&usqp=CAU' /></Tooltip>
                                                    </Grid>
                                                    <Grid item xs={7} alignBoxs="center">
                                                        <Typography noWrap variant='body2'>John S Smith</Typography>
                                                        <Typography variant='caption'>04/04 2:25 AM  4  <IconButton>
                                                            <ArrowDropDownCircleIcon /></IconButton>  </Typography>
                                                    </Grid>
                                                    <Grid item xs={2}>
                                                        <Typography variant='caption' >Bi-Plane</Typography>
                                                    </Grid>
                                                    <Grid item xs={1}>
                                                        <FileDownloadOutlinedIcon />
                                                    </Grid>
                                                </Grid>


                                            </Grid>
                                            <Grid item m={1}>
                                                <Typography variant='caption'>Our new Bi-plane Imaging suite is completed. It is state of the art. We received donations for most of this cost. This will greatly improved imaging services and enhance patient care. Thanks</Typography>
                                            </Grid>
                                        </Grid>

                                    </Box>
                                    <Box >

                                        <Grid container sx={{
                                            backgroundColor: 'white', '&:hover': {
                                                backgroundColor: '#E8F0F8',
                                                opacity: [0.9, 0.8, 0.7],
                                            },
                                        }}>
                                            <Grid item xs={12}
                                                sx={{
                                                    mx: 'auto',
                                                    p: 2,
                                                }}
                                            >
                                                <Grid container spacing={1} gap={2} alignBoxs="center">
                                                    <Grid item xs={1}>
                                                        <Tooltip
                                                            title="John S Smith 555-555-5555 Facility Manager"
                                                            placement="right"
                                                            arrow
                                                        >
                                                            <Avatar alt='John s smith' sx={{ width: 55, height: 55 }} src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQPQmH3gZw6BGda2FbR4lpxXr09NZsI_axIg&usqp=CAU' /></Tooltip>
                                                    </Grid>
                                                    <Grid item xs={8} alignBoxs="center">
                                                        <Typography noWrap variant='body2'>John S Smith</Typography>
                                                        <Typography variant='caption'> 2:25 AM
                                                        </Typography>
                                                    </Grid>
                                                    <Grid item xs={1}><Button variant='outlined' size='small'>
                                                        <Typography variant='caption' >reply</Typography></Button>
                                                    </Grid>
                                                    <Grid item xs={1}>
                                                        <ArrowCircleRightIcon />
                                                    </Grid>
                                                </Grid>


                                            </Grid>
                                            <Grid item m={1}>
                                                <Typography variant='caption'>Our new Bi-plane Imaging suite is completed. It is state of the art. We received donations for most of this cost. This will greatly improved imaging services and enhance patient care. Thanks</Typography>
                                            </Grid>
                                        </Grid>

                                    </Box>
                                    <Box >

                                        <Grid container sx={{
                                            backgroundColor: 'white', '&:hover': {
                                                backgroundColor: '#E8F0F8',
                                                opacity: [0.9, 0.8, 0.7],
                                            },
                                        }}>
                                            <Grid item xs={12}
                                                sx={{
                                                    mx: 'auto',
                                                    p: 2,
                                                }}
                                            >
                                                <Grid container spacing={1} gap={2} alignBoxs="center">
                                                    <Grid item xs={1}>
                                                        <Tooltip
                                                            title="John S Smith 555-555-5555 Facility Manager"
                                                            placement="right"
                                                            arrow
                                                        >
                                                            <Avatar alt='John s smith' sx={{ width: 55, height: 55 }} src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQPQmH3gZw6BGda2FbR4lpxXr09NZsI_axIg&usqp=CAU' /></Tooltip>
                                                    </Grid>
                                                    <Grid item xs={8} alignBoxs="center">
                                                        <Typography noWrap variant='body2'>John S Smith</Typography>
                                                        <Typography variant='caption'> 2:25 AM    </Typography>
                                                    </Grid>
                                                    <Grid item xs={1}>
                                                        <Button variant='outlined' size='small'>
                                                            <Typography variant='caption' >reply</Typography></Button>
                                                    </Grid>
                                                    <Grid item xs={1}>
                                                        <ArrowCircleRightIcon />
                                                    </Grid>
                                                </Grid>


                                            </Grid>
                                            <Grid item m={1}>
                                                <Typography variant='caption'>Our new Bi-plane Imaging suite is completed. It is state of the art. We received donations for most of this cost. This will greatly improved imaging services and enhance patient care. Thanks</Typography>
                                            </Grid>
                                        </Grid>

                                    </Box>
                                    <Box >

                                        <Grid container sx={{
                                            backgroundColor: 'white', '&:hover': {
                                                backgroundColor: '#E8F0F8',
                                                opacity: [0.9, 0.8, 0.7],
                                            },
                                        }}>
                                            <Grid item xs={12}
                                                sx={{
                                                    mx: 'auto',
                                                    p: 2,
                                                }}
                                            >
                                                <Grid container spacing={1} gap={2} alignBoxs="center">
                                                    <Grid item xs={1}>
                                                        <Tooltip
                                                            title="John S Smith 555-555-5555 Facility Manager"
                                                            placement="right"
                                                            arrow
                                                        >
                                                            <Avatar alt='John s smith' sx={{ width: 55, height: 55 }} src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQPQmH3gZw6BGda2FbR4lpxXr09NZsI_axIg&usqp=CAU' /></Tooltip>
                                                    </Grid>
                                                    <Grid item xs={8} alignBoxs="center">
                                                        <Typography noWrap variant='body2'>John S Smith</Typography>
                                                        <Typography variant='caption'> 2:25 AM    </Typography>
                                                    </Grid>
                                                    <Grid item xs={1}>
                                                        <Button variant='outlined' size='small'>
                                                            <Typography variant='caption' >reply</Typography></Button>
                                                    </Grid>
                                                    <Grid item xs={1}>
                                                        <ArrowCircleRightIcon />
                                                    </Grid>
                                                </Grid>


                                            </Grid>
                                            <Grid item m={1}>
                                                <Typography variant='caption'>Our new Bi-plane Imaging suite is completed. It is state of the art. We received donations for most of this cost. This will greatly improved imaging services and enhance patient care. Thanks</Typography>
                                            </Grid>
                                        </Grid>

                                    </Box>
                                </Box>

                                {/* Station update */}
                                <Box >
                                    <Stack >
                                        <Accordion direction='row' sx={{ justifyContent: 'center', mb: 1, backgroundColor: '#D2DEE8', alignItems: 'center' }}>
                                            <AccordionSummary id='panel1-header' aria-controls='panel1-content' expandIcon={<AddCircleIcon />}>
                                                <Typography variant='h6' sx={{ paddingLeft: 32, fontSize: 16 }} >Station  Updates</Typography>
                                            </AccordionSummary>
                                            <AccordionDetails sx={{ height: '100px', bgcolor: '#ffff' }}>
                                                <Typography></Typography>
                                            </AccordionDetails>
                                        </Accordion>
                                        {/* <Typography   >Station  Updates</Typography>
                                <Box sx={{ paddingLeft: 32 }}>
                                    <IconButton>
                                        <AddCircleIcon type="button" />
                                    </IconButton>


                                </Box> */}
                                    </Stack>

                                </Box>
                                {/* Recognize */}
                                <Box >
                                    <Stack >
                                        <Accordion direction='row' sx={{ justifyContent: 'end', mb: 1, backgroundColor: '#D2DEE8', alignItems: 'end' }}>
                                            <AccordionSummary id='panel1-header' aria-controls='panel1-content' expandIcon={<AddCircleIcon />}>
                                                <Typography variant='h6' sx={{ paddingLeft: 28, fontSize: 16 }} >Recognize Your Associate</Typography>
                                            </AccordionSummary>
                                            <AccordionDetails sx={{ height: '100px', bgcolor: '#ffff' }}>
                                                <Typography></Typography>
                                            </AccordionDetails>
                                        </Accordion>
                                        {/* <Typography   >Station  Updates</Typography>
                                <Box sx={{ paddingLeft: 32 }}>
                                    <IconButton>
                                        <AddCircleIcon type="button" />
                                    </IconButton>


                                </Box> */}
                                    </Stack>

                                </Box>
                                {/* Rate this station */}
                                <Box >
                                    <Stack >
                                        <Accordion direction='row' sx={{ justifyContent: 'end', mb: 1, backgroundColor: '#D2DEE8', alignItems: 'end' }}>
                                            <AccordionSummary id='panel1-header' aria-controls='panel1-content' expandIcon={<AddCircleIcon />}>
                                                <Typography variant='h6' sx={{ paddingLeft: 32, fontSize: 16 }} >Rate this station</Typography>
                                            </AccordionSummary>
                                            <AccordionDetails sx={{ height: '100px', bgcolor: '#ffff' }}>
                                                <Typography></Typography>
                                            </AccordionDetails>
                                        </Accordion>
                                        {/* <Typography   >Station  Updates</Typography>
                                <Box sx={{ paddingLeft: 32 }}>
                                    <IconButton>
                                        <AddCircleIcon type="button" />
                                    </IconButton>


                                </Box> */}
                                    </Stack>

                                </Box>

                            </Grid>
                            {/* Second Column */}
                            <Grid item xs={4.9}>
                                <Box sx={{ backgroundColor: '#ffff' }}  >
                                    {/* Station Photos */}
                                    <Box>
                                        <Grid container sx={{ justifyContent: 'end', backgroundColor: '#DDD7FF', alignItems: 'center' }}>
                                            <Grid item xs={6}>
                                                <Typography variant='h6' sx={{ fontSize: 16 }} >Station Photos</Typography></Grid>
                                            <Grid item xs={1}>
                                                <IconButton>
                                                    <ArrowDropDownCircleIcon /></IconButton>
                                            </Grid>
                                        </Grid>
                                    </Box>
                                    <Box >

                                        <Box sx={{
                                            flexGrow: 1, backgroundColor: 'white'
                                        }}>
                                            <Box
                                                sx={{
                                                    mx: 'auto',
                                                    p: 2,
                                                }}
                                            >
                                                <Grid container spacing={1} sx={{ justifyContent: 'center', p: 1 }}>
                                                    <Grid item >
                                                        <Avatar src='https://th.bing.com/th/id/OIP.iez8AFzNxrjU-tZ0fYGP5wHaDt?w=349&h=174&c=7&r=0&o=5&dpr=1.3&pid=1.7' alt='Bio mediacl' sx={{ borderRadius: '22px', width: 120, height: 120 }} />
                                                    </Grid>
                                                    <Grid item>
                                                        <Avatar src='https://th.bing.com/th/id/OIP.iez8AFzNxrjU-tZ0fYGP5wHaDt?w=349&h=174&c=7&r=0&o=5&dpr=1.3&pid=1.7' alt='Bio mediacl' sx={{ borderRadius: '22px', width: 120, height: 120 }} />
                                                    </Grid>

                                                    <Grid item>
                                                        <Avatar src='https://th.bing.com/th/id/OIP.iez8AFzNxrjU-tZ0fYGP5wHaDt?w=349&h=174&c=7&r=0&o=5&dpr=1.3&pid=1.7' alt='Bio mediacl' sx={{ borderRadius: '22px', width: 120, height: 120 }} />
                                                    </Grid>

                                                </Grid>
                                                <Grid container spacing={1} sx={{ justifyContent: 'center', p: 1 }}>
                                                    <Grid item>
                                                        <Avatar src='https://th.bing.com/th/id/OIP.iez8AFzNxrjU-tZ0fYGP5wHaDt?w=349&h=174&c=7&r=0&o=5&dpr=1.3&pid=1.7' alt='Bio mediacl' sx={{ borderRadius: '22px', width: 120, height: 120 }} />
                                                    </Grid>
                                                    <Grid item>
                                                        <Avatar src='https://th.bing.com/th/id/OIP.iez8AFzNxrjU-tZ0fYGP5wHaDt?w=349&h=174&c=7&r=0&o=5&dpr=1.3&pid=1.7' alt='Bio mediacl' sx={{ borderRadius: '22px', width: 120, height: 120 }} />
                                                    </Grid>

                                                    <Grid item>
                                                        <Avatar src='https://th.bing.com/th/id/OIP.iez8AFzNxrjU-tZ0fYGP5wHaDt?w=349&h=174&c=7&r=0&o=5&dpr=1.3&pid=1.7' alt='Bio mediacl' sx={{ borderRadius: '22px', width: 120, height: 120 }} />
                                                    </Grid>

                                                </Grid>

                                            </Box>

                                        </Box>

                                    </Box>
                                    {/* Station board progress report */}
                                    <Box >
                                        <Grid container sx={{ justifyContent: 'end', backgroundColor: '#D2DEE8', alignItems: 'center' }}>
                                            <Grid item xs={3}>
                                                <IconButton>
                                                    <Avatar sx={{ width: 25, height: 25, bgcolor: 'black' }} >ab</Avatar>
                                                </IconButton>
                                            </Grid>
                                            <Grid item xs={8}>
                                                <Typography variant='h6' sx={{ fontSize: 16 }} > Station Boards Progress Report</Typography>

                                            </Grid>
                                            <Grid item xs={1}>
                                                <IconButton>
                                                    <ArrowDropDownCircleIcon type="button" />
                                                </IconButton>


                                            </Grid>
                                        </Grid>

                                    </Box>
                                    <Box >
                                        <Stack  >
                                            <Box m={1} height="150px" width="auto" sx={{ justifyContent: 'center' }} overflow='scroll'>
                                                <Grid container spacing={1} m={1} width="auto" >
                                                    <Grid item xs={1}>
                                                        <ArrowDropDownCircleIcon size="small" />
                                                    </Grid>
                                                    <Grid item xs={5}>
                                                        <Typography sx={{ fontSize: 13 }}><Link underline="hover">Add Your Project Name</Link></Typography>
                                                    </Grid>
                                                    <Grid item xs={6} >
                                                        <Slider sx={{ color: '#00FFFF' }} defaultValue={50} valueLabelDisplay='auto' />
                                                    </Grid>
                                                </Grid>
                                                <Divider />
                                                <Grid container spacing={1} m={1} width="auto" >
                                                    <Grid item xs={1}>
                                                        <ArrowDropDownCircleIcon size="small" />
                                                    </Grid>
                                                    <Grid item xs={5}>
                                                        <Typography sx={{ fontSize: 13 }}><Link underline="hover">Add Your Project Name</Link></Typography>
                                                    </Grid>
                                                    <Grid item xs={6} >
                                                        <Slider sx={{ color: '#00FFFF' }} defaultValue={50} valueLabelDisplay='auto' />
                                                    </Grid>
                                                </Grid>
                                                <Divider />
                                                <Grid container spacing={1} m={1} width="auto" >
                                                    <Grid item xs={1}>
                                                        <ArrowDropDownCircleIcon size="small" />
                                                    </Grid>
                                                    <Grid item xs={5}>
                                                        <Typography sx={{ fontSize: 13 }}><Link underline="hover">Cerner Upgrade</Link></Typography>
                                                    </Grid>
                                                    <Grid item xs={6} >
                                                        <Slider sx={{ color: '#00FFFF' }} defaultValue={50} valueLabelDisplay='auto' />
                                                    </Grid>
                                                </Grid>
                                                <Divider />
                                                <Grid container spacing={1} m={1} width="auto"  >
                                                    <Grid item xs={1}>
                                                        <ArrowDropDownCircleIcon size="small" />
                                                    </Grid>
                                                    <Grid item xs={5}>
                                                        <Typography sx={{ fontSize: 13 }}><Link underline="hover">Help Desk</Link></Typography>
                                                    </Grid>
                                                    <Grid item xs={6} >
                                                        <Slider sx={{ color: '#00FFFF' }} defaultValue={50} valueLabelDisplay='auto' />
                                                    </Grid>
                                                </Grid>
                                                <Divider />
                                            </Box>
                                        </Stack>
                                    </Box>
                                    {/* Station Files */}
                                    <Box >
                                        <Grid container sx={{ justifyContent: 'end', backgroundColor: '#D2DEE8', alignItems: 'encenter' }}>
                                            <Grid item xs={7}>
                                                <Typography variant='h6' sx={{ fontSize: 16 }} > Station Files</Typography>
                                            </Grid>
                                        </Grid>

                                    </Box>
                                    <Box >

                                        <Stack>
                                            <Box>
                                                <Stack m={1}>
                                                    <Grid container >
                                                        <Grid item xs={8} >
                                                            <Grid container underline="hover" sx={{ backgroundColor: '#E1F8F9', alignItems: 'center' }}>
                                                                <Grid item xs={9}>
                                                                    <Link underline="hover" variant='caption'>PM Complition Report</Link>
                                                                </Grid>
                                                                <Grid item xs={1}>
                                                                    <Link underline="hover">x</Link>
                                                                </Grid>
                                                                <Grid item xs={1}>
                                                                    <PictureAsPdfIcon />
                                                                </Grid>
                                                                <Grid item xs={1}>
                                                                    <Avatar alt='John s smith' sx={{ width: 30, height: 30 }} src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQPQmH3gZw6BGda2FbR4lpxXr09NZsI_axIg&usqp=CAU' />
                                                                </Grid>
                                                            </Grid>
                                                        </Grid>
                                                        <Grid item xs={4} >
                                                            <Grid container underline="hover" sx={{ alignItems: 'center' }}>
                                                                <Grid item >
                                                                    <Typography variant='caption'>12.15.2018 9.34 KB</Typography></Grid>
                                                            </Grid>

                                                        </Grid>

                                                    </Grid>

                                                </Stack>
                                                <Stack m={1}>
                                                    <Grid container >
                                                        <Grid item xs={8} >
                                                            <Grid container underline="hover" sx={{ backgroundColor: '#E1F8F9', alignItems: 'center' }}>
                                                                <Grid item xs={9}>
                                                                    <Link underline="hover" variant='caption'>IT infrastructure</Link>
                                                                </Grid>
                                                                <Grid item xs={1}>
                                                                    <Link underline="hover" >x</Link>
                                                                </Grid>
                                                                <Grid item xs={1}>
                                                                    <PictureAsPdfIcon />
                                                                </Grid>
                                                                <Grid item xs={1}>
                                                                    <Avatar alt='John s smith' sx={{ width: 30, height: 30 }} src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQPQmH3gZw6BGda2FbR4lpxXr09NZsI_axIg&usqp=CAU' />
                                                                </Grid>
                                                            </Grid>
                                                        </Grid>
                                                        <Grid item xs={4} >
                                                            <Grid container underline="hover" sx={{ alignItems: 'center' }}>
                                                                <Grid item >
                                                                    <Typography variant='caption'>12.15.2018  50.14 KB</Typography></Grid>
                                                            </Grid>

                                                        </Grid>

                                                    </Grid>

                                                </Stack>
                                                <Stack m={1}>
                                                    <Grid container >
                                                        <Grid item xs={8} >
                                                            <Grid container sx={{ backgroundColor: '#E1F8F9', alignItems: 'center' }}>
                                                                <Grid item xs={9}>
                                                                    <Link underline="hover" variant='caption'>Projects Updates</Link>
                                                                </Grid>
                                                                <Grid item xs={1}>
                                                                    <Link underline="hover" >x</Link>
                                                                </Grid>
                                                                <Grid item xs={1}>
                                                                    <PictureAsPdfIcon />
                                                                </Grid>
                                                                <Grid item xs={1}>
                                                                    <Avatar alt='John s smith' sx={{ width: 30, height: 30 }} src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQPQmH3gZw6BGda2FbR4lpxXr09NZsI_axIg&usqp=CAU' />
                                                                </Grid>
                                                            </Grid>
                                                        </Grid>
                                                        <Grid item xs={4}  >
                                                            <Grid container underline="hover" sx={{ alignItems: 'center' }}>
                                                                <Grid item xs={12}>
                                                                    <Typography variant='caption'>12.15.2018 50.14 KB</Typography></Grid>
                                                            </Grid>

                                                        </Grid>

                                                    </Grid>

                                                </Stack>
                                            </Box>
                                        </Stack>
                                    </Box>
                                    {/* Task Board */}
                                    <Box >
                                        <Grid container sx={{ justifyContent: 'end', backgroundColor: '#D2DEE8', alignItems: 'center' }}>
                                            <Grid item xs={5}>
                                                <IconButton>
                                                    <MapsUgcIcon />
                                                </IconButton>
                                            </Grid>
                                            <Grid item xs={6}>
                                                <Typography variant='h6' sx={{ fontSize: 16 }} > Task Boards</Typography></Grid>
                                            <Grid item xs={1}>
                                                <IconButton>
                                                    <SignalCellularAltIcon type="button" />
                                                </IconButton>


                                            </Grid>
                                        </Grid>

                                    </Box>
                                    <Box >
                                        <Stack>
                                            <Box m={0.5}>
                                                <Grid container >
                                                    <Grid item xs={3} p={1} sx={{ backgroundColor: '#B6C8F7' }}>
                                                        <Link sx={{ color: 'black', fontSize: 12 }}>Cerner Upgrade</Link>
                                                        <Typography sx={{ fontSize: 13 }} paddingLeft={9}>1</Typography>
                                                    </Grid>
                                                    <Grid item xs={3} p={1} sx={{ backgroundColor: '#F7B6E3' }}>
                                                        <Link underline="hover" variant='caption' sx={{ color: 'black' }}>Single Sign-on</Link>
                                                        <Typography sx={{ fontSize: 13 }} paddingLeft={9}>1</Typography>
                                                    </Grid>
                                                    <Grid item xs={3} p={1} sx={{ backgroundColor: '#B6F7F5' }}>
                                                        <Link underline="hover" variant='caption' sx={{ color: 'black' }}>Bar Codings</Link>
                                                        <Typography sx={{ fontSize: 13 }} paddingLeft={9}>1</Typography>
                                                    </Grid>
                                                    <Grid item xs={3} p={1} sx={{ backgroundColor: '#F7DAB6' }}>
                                                        <Link underline="hover" variant='caption' sx={{ color: 'black' }}>Help Desk</Link>
                                                        <Typography sx={{ fontSize: 13 }} paddingLeft={9}>1</Typography>
                                                    </Grid>
                                                </Grid>
                                            </Box>
                                        </Stack>

                                    </Box>
                                    {/* Add view/station meassgaes */}
                                    <Box >
                                        <Grid container sx={{ justifyContent: 'end', backgroundColor: '#D2DEE8', alignItems: 'center' }}>
                                            <Grid item xs={8}>
                                                <Typography variant='h6' sx={{ fontSize: 16 }} > Add/Views Station Messages</Typography>
                                            </Grid>
                                        </Grid>

                                    </Box>
                                    <Box >
                                        <Stack >
                                            <Box m={1.5}>
                                                <Grid container alignBoxs="center" justifyContent='center' gap={2} >
                                                    <Grid item xs={4} p={2} gap={2} sx={{ backgroundColor: '#CCCCCC', display: 'flex', alignItems: 'center' }}  ><Avatar  ><MailOutlinedIcon /></Avatar><Avatar ><MailOutlinedIcon /></Avatar></Grid>
                                                    <Grid item xs={3} ><Avatar sx={{ width: 105, height: 72 }} variant="rounded" src='https://th.bing.com/th/id/OIP.iez8AFzNxrjU-tZ0fYGP5wHaDt?w=349&h=174&c=7&r=0&o=5&dpr=1.3&pid=1.7' /></Grid>
                                                    <Grid item xs={4} p={2} gap={2} sx={{ backgroundColor: '#CCCCCC', display: 'flex', alignItems: 'center' }} ><Avatar><MicOutlinedIcon /></Avatar><Avatar><MapsUgcIcon /></Avatar></Grid>
                                                </Grid>
                                            </Box>

                                        </Stack>

                                    </Box>

                                </Box>

                            </Grid>
                        </Grid>
                    </Box >
                </Stack>
            </Container>
        </div>

    )
}
export default Stations
