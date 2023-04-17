import * as React from 'react';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import { green } from '@mui/material/colors';
import { cyan } from '@mui/material/colors';

function Checkybox () {
  return (
    <FormControlLabel
      control={<Checkbox sx={{
        color: cyan[600],
    '&.Mui-checked': {
      color: green[600],
      },
    }} />}
    label="Task in progress"/>
  );
};

export default Checkybox;

