import { Container, FormControl, OutlinedInput, InputLabel, Box, Stack, Button } from '@mui/material'
import React from 'react'
import Modal from '@mui/material/Modal'


const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
   
    p: 2,
    zIndex:999,
    borderRadius: 2
};

const ProjectForm = ({ setOpen, open }) => {
    const handleClose = () => {
        setOpen(false);
    };
    return (
        <div >
            <Container
            >
                <Box sx={style}>

                    <Box p={4} sx={{ backgroundColor: '#E7E9EC', border: '1px solid black', borderRadius: 4 }}>
                        <InputLabel m={9} htmlFor="component-simple"> Project Name</InputLabel>
                        <FormControl sx={{ width: '360px' }}>

                            <OutlinedInput placeholder="Add Your Project Name" size="small" />
                        </FormControl>

                        <Stack direction='row' m={2} gap={4} sx={{ justifyContent: 'center' }}>
                            <Button variant="outlined" sx={{ color: '#000000', borderColor: '#000000' }} size='small' > Submit</Button>
                            <Button variant="outlined" sx={{ color: '#000000', borderColor: '#000000' }} size='small' onClick={handleClose}>Cancel</Button>
                        </Stack>
                    </Box>
                </Box>
            </Container>
        </div >
    )
}

export default ProjectForm