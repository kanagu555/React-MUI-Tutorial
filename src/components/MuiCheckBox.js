import React from 'react'
import {Box, FormControlLabel, Checkbox} from '@mui/material';

const MuiCheckBox = () => {
  return (
    <Box>
      <Box>
        <FormControlLabel label='Accept the terms and conditions' control={<Checkbox/>}/>
        </Box>
      </Box>
  )
}

export default MuiCheckBox