import React from 'react'
import {Container,Box, Stack, Typography, Button, Grid, InputLabel, InputBase, OutlinedInput, FormControl, InputAdornment, FormHelperText, TextField} from '@mui/material'

const ShareStation = () => {
  return (
    <Container maxWidth="lg">
      <Box sx={{ padding: "15px" }}>
        <Stack direction="row" sx={{ justifyContent: "space-between", my: 2 }}>
          <Box>
            <Typography variant="h6" color="primary">
              Share Station
            </Typography>
          </Box>
          <Box>
            <Button variant="contained" size="small" href='/GroupPage' sx={{":hover":{color:"#fff"}}}>
              Back
            </Button>
          </Box>
        </Stack>
        <Box sx={{ backgroundColor: "#fff", p: 2 }}>
          <Grid container sx={{ justifyContent: "center" }}>
            <Grid
              item
              xs={6}
              sx={{ border: "1px solid #1688ca", borderRadius: "0.25rem", p: 2 }}
            >
              <Grid container sx={{ mb: 1 }}>
                <Grid item xs={4}>
                  <Box>
                    <InputLabel>
                      <Typography variant="subtitle2">
                        Associates Email:
                      </Typography>
                    </InputLabel>
                  </Box>
                </Grid>
                <Grid item xs={7}>
                  <Box>
                    <TextField
                      sx={{ width: "100%" }}
                      id="outlined-size-small"
                      size="small"
                    />
                  </Box>
                </Grid>
                <Grid item xs={1} sx={{ textAlign: "center" }}>
                  +
                </Grid>
              </Grid>

              <Grid container>
                <Grid item xs={4}>
                  <Box>
                    <InputLabel>
                      <Typography variant="subtitle2">Comment:</Typography>
                    </InputLabel>
                  </Box>
                </Grid>
                <Grid item xs={7}>
                  <Box>
                    <TextField
                      sx={{ width: "100%" }}
                      id="outlined-size-small"
                      size="large"
                    />
                  </Box>
                </Grid>
              </Grid>
              <Grid
                container
                sx={{ justifyContent: "center", alignItems: "center" }}
              >
                <Grid item xs={6} sx={{ textAlign: "center", mt: 2 }}>
                  <Button variant="contained" size="small" color="primary">
                    Email
                  </Button>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
};

export default ShareStation;
