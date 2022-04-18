import React from 'react';
import { Stack, Button } from '@mui/material';
import PhoneEnabledIcon from '@mui/icons-material/PhoneEnabled';
import PhoneInTalkIcon from '@mui/icons-material/PhoneInTalk';

const MuiButton = () => {
  return (
    <Stack spacing={4}>
      <Stack spacing={2} direction="row">
        <Button variant="text">Text</Button>
        <Button variant="contained" >Contained</Button>
        <Button variant="outlined">Outlined</Button>
      </Stack>
      <Stack spacing={2} direction='row'>
        <Button variant="contained" color="primary">Primary</Button>
        <Button variant="contained" color='secondary'>Secondary</Button>
        <Button variant="contained" color='error'>Error</Button>
        <Button variant="contained" color='warning'>Warning</Button>
        <Button variant="contained" color='info'>info</Button>
        <Button variant="contained" color='success'>Success</Button>
      </Stack>
      <Stack display='block' spacing={2} direction='row'>
        <Button variant='contained' size='small'>Small</Button>
        <Button variant='contained' size='medium'>Medium</Button>
        <Button variant='contained' size='large'>LArge</Button>
      </Stack>
      <Stack spacing={2} direction='row'>
        <Button variant='contained' startIcon={<PhoneEnabledIcon/>} disableElevation disableRipple>call</Button>
        <Button variant='contained' endIcon={<PhoneInTalkIcon/>}>call</Button>
      </Stack>
      <Stack spacing={2} direction='row'>

        <Button variant='contained'>Left</Button>
        <Button variant='contained'>Center</Button>
        <Button variant='contained'>Right</Button>
      </Stack>
    </Stack>
  );
};

export default MuiButton;
