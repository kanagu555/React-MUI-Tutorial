import React, { useState } from 'react';
import { Stack, TextField, InputAdornment } from '@mui/material';
import VisibilityIcon from '@mui/icons-material/Visibility';

const MuiTextField = () => {
  const [value, setValue] = useState('');

  return (
    <Stack spacing={4}>
      <Stack spacing={2} direction="row">
        <TextField label="Name" variant="outlined" />
        <TextField label="Name" variant="filled" />
        <TextField label="Name" variant="standard" />
      </Stack>
      <Stack spacing={2} direction="row">
        <TextField label="Small Secondary" size="small" color="secondary" />
        <TextField label="Small Secondary" size="medium" color="secondary" />
        <TextField label="Small Secondary" size="large" color="secondary" />
      </Stack>
      <Stack spacing={2} direction="row">
        <TextField label="Form Input" required />
        <TextField label="Disabled" disabled />
        <TextField
          label="Password"
          type="password"
          helperText="Dont share the password"
        />
        <TextField label="ReadOnly" InputProps={{ readOnly: true }} />
      </Stack>
      <Stack spacing={2} direction="row">
        <TextField
          label="Amount"
          InputProps={{ startAdornment: <InputAdornment>$</InputAdornment> }}
        />
        <TextField
          label="Weight"
          InputProps={{ endAdornment: <InputAdornment>Kg</InputAdornment> }}
        />
        <TextField
          label="Password"
          InputProps={{
            endAdornment: (
              <InputAdornment>
                <VisibilityIcon />
              </InputAdornment>
            ),
          }}
        />
      </Stack>
      <Stack spacing={2} direction="row">
        <TextField
          label="Password"
          required
          value={value}
          onChange={(e) => setValue(e.target.value)}
          error={!value}
          helperText={!value ? 'Required' : 'Dont share the password'}
        />
      </Stack>
    </Stack>
  );
};

export default MuiTextField;
