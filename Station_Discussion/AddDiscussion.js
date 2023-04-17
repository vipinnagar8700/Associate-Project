import { Box, Stack, Grid, OutlinedInput, FormControl, Divider, FormControlLabel, Radio } from '@mui/material';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import JoditEditor from 'jodit-react';
import React, { useState, useRef } from 'react';
import MessageIcon from '@mui/icons-material/Message';
import Container from '@mui/material/Container';
import SendIcon from '@mui/icons-material/Send';
import ArrowDropDownCircleIcon from '@mui/icons-material/ArrowDropDownCircle';
import MobileScreenShareIcon from '@mui/icons-material/MobileScreenShare';
import Form from 'react-bootstrap/Form';
import MailOutlinedIcon from '@mui/icons-material/MailOutlined';
import MicOutlinedIcon from '@mui/icons-material/MicOutlined';
import AlternateEmailOutlinedIcon from '@mui/icons-material/AlternateEmailOutlined';
import MarkUnreadChatAltOutlinedIcon from '@mui/icons-material/MarkUnreadChatAltOutlined';

// export const AddDiscussion = () => {

const AddDiscussion = ({ placeholder }) => {

  const editor = useRef(null);
  const [content, setContent] = useState('');

  // const config = useMemo(
  //     {
  //         readonly: false, // all options from https://xdsoft.net/jodit/docs/,
  //         placeholder: placeholder || 'Start typings...'
  //     },
  //     [placeholder]
  // );
  // const [show, setShow] = useState(true)

  const [val, setVal] = useState([]);
  const handleAdd = () => {
    const abc = [...val, []]
    setVal(abc)
  }
  const handleChange = (onChangeValue, i) => {
    const inputdata = [...val]
    inputdata[i] = onChangeValue.target.value;
    setVal(inputdata)
  }

  const handleDelete = (i) => {
    const deleteVal = [...val]
    deleteVal.splice(i)

    setVal(deleteVal)
  }
  console.log(val, "data-")


  return (
    <div>
      <Container maxWidth="lg">


        <Box>
          <Box >
            <Stack>
              <Box m={4}  >
                <Grid container sx={{ justifyContent: 'end', backgroundColor: '#DDD7FF', alignItems: 'center' }}>

                  <Grid item xs={6} sx={{ justifyContent: 'end' }}>
                    <Typography variant='h6' sx={{ fontSize: 17 }} > Add Session</Typography></Grid>
                  <Grid item xs={0.5}
                  >
                    <IconButton>
                      <Avatar sx={{ width: 25, height: 25, bgcolor: 'white', color: 'black' }} >x</Avatar>
                    </IconButton>
                  </Grid>

                </Grid>
                <Stack sx={{ justifyContent: 'center', backgroundColor: '#ffff' }} >
                  <Box m={1}>
                    <Grid container  gap={3} sx={{ justifyContent: 'center'}}>
                      <Grid item xs={6}  >
                        <Box  >
                          <Box  >
                            <Stack  sx={{ backgroundColor: '#DDD7FF', borderRadius: 3 }}>
                              <Box border='1px solid #A6A6A6' m={1} bgcolor='white' minHeight='260px' sx={{overflow:'hidden'}}>
                                <JoditEditor
                                  ref={editor}
                                  value={content}
                                  // config={config}
                                  tabIndex={1} // tabIndex of textarea
                                  onBlur={newContent => setContent(newContent)} // preferred to use only this option to update the content for performance reasons
                                  onChange={newContent => { }}
                                />
                                <Divider />
                              </Box>
                              <Grid container marginLeft={2}>
                                <Grid item  >
                                  <IconButton><MessageIcon /></IconButton>
                                </Grid>
                                <Grid item>

                                  <FormControlLabel value="" control={<Radio />} />
                                </Grid>
                                <Grid item  xs={3}>
                                  <IconButton><ArrowDropDownCircleIcon onClick={() => handleAdd()} /></IconButton>
                                </Grid>
                                <Grid item >
                                  <IconButton><MobileScreenShareIcon /></IconButton>
                                </Grid>
                                <Grid item xs={4}>
                                  <FormControlLabel value="" control={<Radio />} />
                                </Grid>
                                <Grid item xs={1}>
                                  <IconButton><SendIcon color='primary' /></IconButton>
                                </Grid>
                              </Grid>
                              {val.map((data, i) => {
                                return (
                                  <Grid container marginLeft={1} alignItems="center" gap={2}>

                                    <Grid item xs={6}>
                                      <Form.Group controlId="formFile" >
                                        <Form.Control type="file" lable="No file choosen" />
                                        {/* <Form.Label label="Choose a file" ></Form.Label> */}
                                      </Form.Group>
                                    </Grid>
                                    <Grid item xs={3}>

                                      <Form.Group controlId="exampleForm.ControlInput1">
                                        <Form.Control type="text" onClick={e => handleChange(e, i)} placeholder="Name of file" size="small" />
                                      </Form.Group>
                                    </Grid>
                                    <Grid item xs={2} >
                                      <IconButton onClick={() => handleDelete(i)}><Avatar sx={{ backgroundColor: 'red' }} variant="rounded" size="small" >-</Avatar></IconButton>
                                    </Grid>
                                  </Grid>
                                )
                              })}
                            </Stack>
                          </Box>
                        </Box>
                      </Grid>
                      <Grid item xs={5.6}  >
                        <Grid container sx={{ justifyContent: 'end', backgroundColor: '#DDD7FF',alignItems: 'center' }}>
                          <Grid item xs={5}
                          >
                            <IconButton>
                              <AddCircleIcon />
                            </IconButton>
                          </Grid>
                          <Grid item xs={7} sx={{ justifyContent: 'end' }}>
                            <Typography sx={{ fontSize: 15 }} > Add Associates</Typography></Grid>


                        </Grid>
                        <Grid container m={1} spacing={1}>
                          <Grid item>
                            <Typography variant='body'>Search by Name:</Typography>
                          </Grid>
                          <Grid item  >
                            <FormControl    >
                              <OutlinedInput placeholder="Search Associates" size='small' />
                            </FormControl>
                          </Grid>
                        </Grid>
                      </Grid>
                    </Grid>
                  </Box>
                </Stack>

              </Box>


            </Stack>

          </Box>

        </Box>
      </Container>
    </div>

  )



}

export default AddDiscussion