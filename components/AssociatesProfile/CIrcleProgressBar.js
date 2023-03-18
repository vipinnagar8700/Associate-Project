import * as React from 'react';
import CircularProgress, {
  CircularProgressProps,
} from '@mui/material/CircularProgress';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import MyStation from '../Main-Dashboard/Station/MyStation/MyStation';

function CircularProgressWithLabel(
  props: CircularProgressProps & { value: number },
) {
  return (
    <Box sx={{ position: 'relative', display: 'inline-flex' }}>
      <CircularProgress variant="determinate" {...props}/>
      <Box
        sx={{
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
          position: 'absolute',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        //   border:'5px solid #fff',
        //   borderRadius:'50%',
        }}
      >
        <Typography
          variant="caption"
          component="div"
          color="#fff"
          fontSize="16px"
          fontWeight="bold"
        >{`${Math.round(props.value)}`}</Typography>
      </Box>
    </Box>
  );
}

export default function Progress({data}) {
 let k=   +(data)
  const [progress, setProgress] = React.useState(k);

 

  return <CircularProgressWithLabel value={progress} />;
}