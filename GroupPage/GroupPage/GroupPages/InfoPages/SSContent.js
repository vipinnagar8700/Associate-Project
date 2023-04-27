import {
  Container,
  Grid,
  Typography,
  Box,
  Avatar,
  Stack,
  ImageList,
  ImageListItem,
} from "@mui/material";
import Tooltip, { tooltipClasses } from "@mui/material/Tooltip";
import React from "react";
import { styled } from "@mui/material/styles";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

const HtmlTooltip = styled(({ className, ...props }) => (
  <Tooltip {...props} classes={{ popper: className }} />
))(({ theme }) => ({
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: "#f5f5f9",
    color: "rgba(0, 0, 0, 0.87)",
    maxWidth: 220,
    fontSize: theme.typography.pxToRem(12),
    border: "1px solid #dadde9",
  },
}));

const SSContent = () => {

  // Image zoom
  // const [zoo, setzoo] = useState(false)


  return (
    <Container maxWidth="lg" sx={{ backgroundColor: "#fff", py: 1, maxHeight: "448px", overflowY: "scroll" }}>
      <Grid container>
        <Grid item xs={12}>
          <Box
            className="box_hover"
            sx={{
              padding: "15px 5px 1px 5px",
              marginBottom: "10px",
              ":hover": {
                backgroundColor: "",
              },
            }}
          >
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <Stack
                direction="row"
                spacing={1}
                sx={{
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Avatar
                  alt="Remy Sharp"
                  src="./img/Picture1.png"
                  sx={{
                    border: "1px solid black",
                    width: "50px",
                    height: "50px",
                  }}
                />
                <Box>
                  <Typography sx={{ fontSize: "15px", fontWeight: "bold" }}>
                    Sue Karng
                  </Typography>
                  <Typography sx={{ fontSize: "12px", color: "#655f5f" }}>
                    06/22 7:58 PM
                  </Typography>
                </Box>
              </Stack>
              <Box>
                <Stack
                  direction="row"
                  spacing={1}
                  sx={{
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <HtmlTooltip
                    title={
                      <React.Fragment>
                        <Box
                          sx={{
                            display: "flex",
                            flexDirection: "column",
                          }}
                        >
                          <Typography variant="caption" color="inherit">
                            Added by Pat Link
                          </Typography>
                          <Typography variant="caption" color="inherit">
                            2 years ago
                          </Typography>
                          <Typography variant="caption" color="inherit">
                            225.84 KB size.
                          </Typography>
                          <Typography variant="caption" color="inherit">
                            plans
                          </Typography>
                        </Box>
                      </React.Fragment>
                    }
                  >
                    <Avatar
                      variant="rounded"
                      alt="Remy Sharp"
                      src="./img/pdf.png"
                      sx={{ width: "30px", height: "30px" }}
                    />
                  </HtmlTooltip>
                </Stack>
              </Box>
            </Box>
          </Box>
        </Grid>

        <Grid item xs={12}>
          <Box>
            <Typography variant="subtitle2">
              Hello everyone, we are rolling out our new state of the art
              Electronic Medical Records system.
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12}>
          <Box>
            <ImageList cols={1} sx={{ borderRadius: "15px", margin: "5px 0" }}>
              <ImageListItem>
                <img src="./img/station_867.png"   />
              </ImageListItem>
              {/* {
                zoo && onClick={()=>{setzoo(!newzoo)}}
                <
              } */}
            </ImageList>
          </Box>
        </Grid>
        <Grid item xs={12}>
          <Box
            className="box_hover"
            sx={{
              padding: "15px 5px 1px 5px",
              marginBottom: "10px",
              ":hover": {
                backgroundColor: "",
              },
            }}
          >
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <Stack
                direction="row"
                spacing={1}
                sx={{
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Avatar
                  alt="Remy Sharp"
                  src="./img/Puja1.png"
                  sx={{
                    border: "1px solid black",
                    width: "50px",
                    height: "50px",
                  }}
                />
                <Box>
                  <Typography sx={{ fontSize: "15px", fontWeight: "bold" }}>
                    Jim Smith
                  </Typography>
                  <Typography sx={{ fontSize: "12px", color: "#655f5f" }}>
                    06:14 pm
                  </Typography>
                </Box>
              </Stack>
              <Box>
                <Stack
                  direction="row"
                  spacing={1}
                  sx={{
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <HtmlTooltip
                    title={
                      <React.Fragment>
                        <Box
                          sx={{
                            display: "flex",
                            flexDirection: "column",
                          }}
                        >
                          <Typography variant="caption" color="inherit">
                            Added by Pat Link
                          </Typography>
                          <Typography variant="caption" color="inherit">
                            2 years ago
                          </Typography>
                          <Typography variant="caption" color="inherit">
                            225.84 KB size.
                          </Typography>
                          <Typography variant="caption" color="inherit">
                            plans
                          </Typography>
                        </Box>
                      </React.Fragment>
                    }
                  >
                    <Avatar
                      variant="rounded"
                      alt="Remy Sharp"
                      src="./img/pdf.png"
                      sx={{ width: "30px", height: "30px" }}
                    />
                  </HtmlTooltip>
                </Stack>
              </Box>
            </Box>
          </Box>
        </Grid>

        <Grid item xs={12}>
          <Box>
            <Typography variant="subtitle2">
              Hi team, here is the training manual for this new program. I will
              send out the schedule.
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default SSContent;
