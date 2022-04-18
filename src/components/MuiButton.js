import React, {useState} from 'react';
import {
  Stack,
  Button,
  ButtonGroup,
  ToggleButtonGroup,
  ToggleButton,
} from '@mui/material';
import PhoneEnabledIcon from '@mui/icons-material/PhoneEnabled';
import PhoneInTalkIcon from '@mui/icons-material/PhoneInTalk';
import FormatBoldIcon from '@mui/icons-material/FormatBold';
import FormatItalicIcon from '@mui/icons-material/FormatItalic';
import FormatUnderlinedIcon from '@mui/icons-material/FormatUnderlined';

const MuiButton = () => {

  const [formats, setFormates] = useState([])
  console.log(formats)
  const handleFormatChange = (updatedFormates) => {
    setFormates(updatedFormates)
  }

  return (
    <Stack spacing={4}>
      <Stack spacing={2} direction="row">
        <Button variant="text">Text</Button>
        <Button variant="contained">Contained</Button>
        <Button variant="outlined">Outlined</Button>
      </Stack>
      <Stack spacing={2} direction="row">
        <Button variant="contained" color="primary">
          Primary
        </Button>
        <Button variant="contained" color="secondary">
          Secondary
        </Button>
        <Button variant="contained" color="error">
          Error
        </Button>
        <Button variant="contained" color="warning">
          Warning
        </Button>
        <Button variant="contained" color="info">
          info
        </Button>
        <Button variant="contained" color="success">
          Success
        </Button>
      </Stack>
      <Stack display="block" spacing={2} direction="row">
        <Button variant="contained" size="small">
          Small
        </Button>
        <Button variant="contained" size="medium">
          Medium
        </Button>
        <Button variant="contained" size="large">
          LArge
        </Button>
      </Stack>
      <Stack spacing={2} direction="row">
        <Button
          variant="contained"
          startIcon={<PhoneEnabledIcon />}
          disableElevation
          disableRipple
        >
          call
        </Button>
        <Button variant="contained" endIcon={<PhoneInTalkIcon />}>
          call
        </Button>
      </Stack>
      <Stack direction="row">
        <ButtonGroup
          variant="contained"
          orientation="vertical"
          color="success"
          aria-label="alignment group button"
        >
          <Button>Left</Button>
          <Button>Center</Button>
          <Button>Right</Button>
        </ButtonGroup>
      </Stack>
      <Stack direction="row">
        <ToggleButtonGroup aria-label="text formating" value={formats} onChange={handleFormatChange}>
          <ToggleButton value="bold" aria-label="bold">
            <FormatBoldIcon />
          </ToggleButton>
          <ToggleButton value="italic" aria-label="italic">
            <FormatItalicIcon />
          </ToggleButton>
          <ToggleButton value="underlined" aria-label="underlined">
            <FormatUnderlinedIcon />
          </ToggleButton>
        </ToggleButtonGroup>
      </Stack>
    </Stack>
  );
};

export default MuiButton;
