import React, { useState, useRef, useMemo } from 'react'
import { Container, FormControl, OutlinedInput, InputLabel, Divider, Box, Stack, Button, Typography } from '@mui/material'
import TextField from '@mui/material/TextField';
import Autocomplete, { createFilterOptions } from '@mui/material/Autocomplete';
import ClearIcon from '@mui/icons-material/Clear';
import TextareaAutosize from '@mui/base/TextareaAutosize';
import Form from 'react-bootstrap/Form'
import JoditEditor from 'jodit-react';
import Modal from '@mui/material/Modal'



const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    width:290,
    transform: 'translate(-50%, -50%)',
    zIndex: 999,
};


const Actionlist = (props) => {
    const editor = useRef(null);
    const [content, setContent] = useState('');


    const { setActions } = props

    return (
        <div>
            <Container maxWidth="sm">
                <Box sx={style}>

                    <Box p={1} gap={3} sx={{ backgroundColor: '#E7E9EC', border: '1px solid black', borderRadius: 4 }}>
                        <InputLabel m={9} htmlFor="component-simple"> Action List</InputLabel>
                        <JoditEditor sx={{ backgroundColor: '#ffff' }}
                            ref={editor}
                            value={content}
                            // config={config}
                            tabIndex={1} // tabIndex of textarea
                            onBlur={newContent => setContent(newContent)} // preferred to use only this option to update the content for performance reasons
                            onChange={newContent => { }}
                        />
                        <Stack direction='row' m={2} gap={4} sx={{ justifyContent: 'center' }}>
                            <Button variant="outlined" size="small" sx={{ color: '#000000', borderColor: '#000000' }}>Submit</Button>
                            <Button variant="outlined" size="small" onClick={() => { setActions(false); }} sx={{ color: '#000000', borderColor: '#000000' }}>Cancel</Button>
                        </Stack>
                    </Box>
                </Box>
            </Container>
        </div>
    )
}

export default Actionlist