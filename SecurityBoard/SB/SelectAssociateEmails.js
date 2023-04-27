import React,{useState} from 'react'
import { Container, FormControl, OutlinedInput, InputLabel, Divider, Box, Stack, Button, Typography,Paper,Checkbox } from '@mui/material'
import TextField from '@mui/material/TextField';
import Autocomplete, { createFilterOptions } from '@mui/material/Autocomplete';
import ClearIcon from '@mui/icons-material/Clear';
import TextareaAutosize from '@mui/base/TextareaAutosize';
import Form from 'react-bootstrap/Form'
import Modal from '@mui/material/Modal'
import { Grid, Avatar, IconButton, Link } from '@mui/material'
// import { DashboardBoard } from './DashboardBoard'
import ArrowDropDownCircleIcon from '@mui/icons-material/ArrowDropDown'
import { List, ListItem, ListItemText } from '@mui/material';
import ListItemIcon from '@mui/icons-material/ListItem';
import { ArrowRightAlt, ArrowLeft } from '@mui/icons-material';



const TransferList = (props) => {
    const classes = useStyles();
    const { left, setLeft, right, setRight } = props;

    const [checked, setChecked] = useState([]);

    const handleToggle = (value) => () => {
        const currentIndex = checked.indexOf(value);
        const newChecked = [...checked];

        if (currentIndex === -1) {
            newChecked.push(value);
        } else {
            newChecked.splice(currentIndex, 1);
        }

        setChecked(newChecked);
    };

    const handleCheckedRight = () => {
        setRight(right.concat(left.filter((value) => checked.indexOf(value) !== -1)));
        setLeft(left.filter((value) => checked.indexOf(value) === -1));
        setChecked([]);
    };

    const handleCheckedLeft = () => {
        setLeft(left.concat(right.filter((value) => checked.indexOf(value) !== -1)));
        setRight(right.filter((value) => checked.indexOf(value) === -1));
        setChecked([]);
    };

    const customList = (title, items) => (
        <Paper className={classes.paper}>
            <List dense component="div" role="list">
                {items.map((value) => {
                    const labelId = `transfer-list-all-item-${value}-label`;

                    return (
                        <ListItem key={value} role="listitem" button onClick={handleToggle(value)}>
                            <ListItemIcon>
                                <Checkbox
                                    checked={checked.indexOf(value) !== -1}
                                    tabIndex={-1}
                                    disableRipple
                                    inputProps={{ 'aria-labelledby': labelId }}
                                />
                            </ListItemIcon>
                            <ListItemText id={labelId} primary={`List item ${value + 1}`} />
                        </ListItem>
                    );
                })}
                <ListItem />
            </List>
        </Paper>
    );



    const SelectAssociateEmails = () => {
        return (
            <div>
                <Container maxWidth="md">
                    <Box m={3}>
                        <Stack direction='row' sx={{
                            backgroundColor: '#f6f6f6', justifyContent: 'space-around'
                            , alignItems: 'center'
                        }}>
                            <Typography variant='h6'
                            > Project Associate</Typography>
                            <Typography></Typography>
                            <Typography></Typography>
                            <Typography></Typography>
                            <Typography></Typography>
                            <Typography></Typography>
                            <Typography><span>X</span></Typography>

                        </Stack>
                        {/* Data  */}
                        <Box >

                            <Box sx={{
                                flexGrow: 1, backgroundColor: 'white',

                            }}>
                                <Grid container spacing={2} justifyContent="center" alignItems="center" className={classes.root}>
                                    <Grid item>{customList('Choices', left)}</Grid>
                                    <Grid item>
                                        <Grid container direction="column" alignItems="center">
                                            <Button
                                                variant="outlined"
                                                size="small"
                                                className={classes.button}
                                                onClick={handleCheckedRight}
                                                disabled={checked.length === 0}
                                                aria-label="move selected right"
                                            >
                                                <ArrowRightAlt />
                                            </Button>
                                            <Button
                                                variant="outlined"
                                                size="small"
                                                className={classes.button}
                                                onClick={handleCheckedLeft}
                                                disabled={checked.length === 0}
                                                aria-label="move selected left"
                                            >
                                                <ArrowLeft />
                                            </Button>
                                        </Grid>
                                    </Grid>
                                    <Grid item>{customList('Chosen', right)}</Grid>
                                </Grid>

                            </Box>

                        </Box>
                    </Box>

                </Container>
            </div>
        )
    }
};
