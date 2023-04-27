import { Container, Grid , Box, Typography } from '@mui/material'
import React from 'react'

const GroupContent = ({content}) => {
  
  return (
   <>
    <Container maxWidth="lg">
    <Grid container>
        <Grid item xs={12}>
          <Box>
            <Typography variant='subtitle2' sx={{mb:1}}>{content}</Typography>
          </Box>
        </Grid>
    </Grid>
   </Container>
   </>
  )
}

export default GroupContent