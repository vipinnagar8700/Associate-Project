import React from 'react'
import { Container, FormControl, OutlinedInput, InputLabel, Box, Stack, Button,Grid } from '@mui/material'
import TextField from '@mui/material/TextField';
import Autocomplete, { createFilterOptions } from '@mui/material/Autocomplete';
import Modal from '@mui/material/Modal'
import { createGlobalStyle } from 'styled-components';


// const Cus_Style = createGlobalStyle`
// @media(max-width:662px){
//   .vvvv{
//     width:300px;
//   }
// }

// `

const style = {
  position: 'absolute',
  top: '55%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  zIndex: 999,
};

// const filterOptions = createFilterOptions({
//   matchFrom: 'start',
//   stringify: (option: FilmOptionType) => option.title,
// });


const AssociateSearch = ({ search, setSearch }) => {

  const handleClose = () => {
    setSearch(false);
  };

  return (
    <div  >
      <Container maxWidth="sm" >

        <Box sx={style}  >
          {/* <Cus_Style/>className="vvvv" */}

          <Box p={4} sx={{ backgroundColor: '#E7E9EC', border: '1px solid black', borderRadius: 4 }}>
            <Grid container  sx={{ alignItems: 'center' }}>
              <Grid items   lg="4" md="4" sm="12" sx={4}>
                <InputLabel htmlFor="component-simple"> Search By Name: </InputLabel>
              </Grid>
              <Grid items  lg="6" md="6" sm="12" sx={6}>
                <Autocomplete  
                  id="filter-demo"
                  options={top100Films}
                  getOptionLabel={(option) => option.title}
                  // filterOptions={filterOptions}

                  renderInput={(params) => <TextField {...params} sx={{width:'280px'}} value="Search Associate" size="small" />}
                ></Autocomplete>
              </Grid>
            </Grid>
            {/* <Stack direction='row' sx={{ alignItems: 'center' }}>
              <InputLabel m={5} htmlFor="component-simple"> Search By Name: </InputLabel>
              <FormControl >
                <Autocomplete sx={{width:{lg:'280px'}}}
                  id="filter-demo"
                  options={top100Films}
                  getOptionLabel={(option) => option.title}
                  // filterOptions={filterOptions}
                  
                  renderInput={(params) => <TextField {...params} value="Search Associate" size="small" />}
                ></Autocomplete>
              </FormControl>
            </Stack> */}
            <Stack direction='row' m={2} gap={4} sx={{ justifyContent: 'center' }}>
              <Button variant="outlined" sx={{ color: '#000000', borderColor: '#000000' }} size='small' > Submit</Button>
              <Button variant="outlined" sx={{ color: '#000000', borderColor: '#000000' }} size='small' onClick={handleClose}>Cancel</Button>
            </Stack>
          </Box>
        </Box>
      </Container>

    </div>
  )
}
// interface FilmOptionType {
//   title: string;
//   year: number;
// }

// Top 100 films as rated by IMDb users. http://www.imdb.com/chart/top
const top100Films = [

  { title: 'The Shawshank Redemption', year: 1994 },
  { title: 'The Godfather', year: 1972 },
  { title: 'The Godfather: Part II', year: 1974 },
  { title: 'The Dark Knight', year: 2008 },
  { title: '12 Angry Men', year: 1957 },
  { title: "Schindler's List", year: 1993 },
  { title: 'Pulp Fiction', year: 1994 },
  {
    title: 'The Lord of the Rings: The Return of the King',
    year: 2003,
  },
  { title: 'The Good, the Bad and the Ugly', year: 1966 },
  { title: 'Fight Club', year: 1999 },
  {
    title: 'The Lord of the Rings: The Fellowship of the Ring',
    year: 2001,
  },



];

export default AssociateSearch