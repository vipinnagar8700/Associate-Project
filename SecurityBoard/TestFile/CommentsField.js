import React from 'react'
import { Container, FormControl, OutlinedInput, InputLabel, Divider, Box, Stack, Button, Typography } from '@mui/material'
import TextField from '@mui/material/TextField';
import Autocomplete, { createFilterOptions } from '@mui/material/Autocomplete';
import ClearIcon from '@mui/icons-material/Clear';
import TextareaAutosize from '@mui/base/TextareaAutosize';
import Form from 'react-bootstrap/Form'


const style = {
    width: 430,
};


const CommentsField = () => {
    return (

        <div>
            <Box sx={style}>

                <Box p={1} sx={{ backgroundColor: '#E7E9EC', border: '0px solid black', borderRadius: 4 }}>
                    <Stack m={1} direction='row' sx={{ alignItems: 'start' }}>
                        <TextareaAutosize
                            aria-label="minimum height"
                            minRows={2}
                            // placeholder="Comments"
                            p={3}
                            style={{ width: '500px', borderRadius: '8px' }}
                        />
                    </Stack>
                    <Stack direction='row' m={2} gap={4} sx={{ justifyContent: 'center' }}>
                        <Button variant="outlined" size="small">Submit</Button>

                    </Stack>
                </Box>
            </Box>
        </div>

    )
}

export default CommentsField