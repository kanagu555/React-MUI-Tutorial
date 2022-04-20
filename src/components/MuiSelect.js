import React, { useState } from 'react';
import { Box, TextField, MenuItem } from '@mui/material';

const MuiSelect = () => {
  const [country, setCountry] = useState('');
  console.log({country})

  const handleChange = (event) => {
      setCountry(event.target.value)
  }

  return (
    <Box width="250px">
      <TextField label="Select Country" fullWidth select value={country} onChange={handleChange}>
        <MenuItem value="IN">India</MenuItem>
        <MenuItem value="US">America</MenuItem>
        <MenuItem value="AU">Australia</MenuItem>
      </TextField>
    </Box>
  );
};

export default MuiSelect;
