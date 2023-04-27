import React from "react";
import { TextareaAutosize } from "@mui/base";
import { Container, Grid, Box, Typography } from "@mui/material";

const RecognizeText = () => {
  return (
    <>
      <Container maxWidth="lg">
        <Grid container>
          <Grid item xs={12}>
            <Box sx={{ py: 1 }}>
              <TextareaAutosize
                aria-label="minimum height"
                minRows={2}
                placeholder="Recognize Your Associate"
                style={{
                  width: "100%",
                  padding: "2px 10px",
                  fontSize: "13px",
                  borderRadius: "0.5rem",
                  maxHeight: "35px",
                }}
              />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default RecognizeText;
