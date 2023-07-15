import React, { useState } from 'react';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import MenuItem from '@mui/material/MenuItem';
import { StyledRoot, StyledBox, StyledInputField, StyledLabel, StyledSelect, StyledButtonBox } from './DeviceSetupStyles';


const DeviceSetup = () => {

  const [devices, setDevices] = useState(["Device 1", "Device 2", "Device 3"]);
  const [gates, setGates] = useState(["Gate 1", "Gate 2", "Gate 3"]);

  return (
    <StyledRoot>
      <StyledBox>
        <Typography variant="h5" sx={{ color: '#198754', fontWeight: 700, marginBottom: '10px' }}>
          Select System Setup
        </Typography>
        <StyledInputField>
          <StyledLabel variant="body1">Gate</StyledLabel>
          <StyledSelect variant="outlined">
            {gates.map((gate, index) => (
              <MenuItem key={index} value={`user${index+1}`}>{gate}</MenuItem>
            ))}
          </StyledSelect>
        </StyledInputField>
        <StyledInputField>
          <StyledLabel variant="body1">Device</StyledLabel>
          <StyledSelect variant="outlined">
            {devices.map((device, index) => (
              <MenuItem key={index} value={`user${index+1}`}>{device}</MenuItem>
            ))}
          </StyledSelect>
        </StyledInputField>
        <StyledButtonBox>
          <Button variant="contained" sx={{ bgcolor: '#4154F1', '&:hover': { backgroundColor: '#3249C9' }, padding: '8px 25px', fontSize: '16px' }}>
            Proceed
          </Button>
          <Button variant="contained" sx={{ bgcolor: '#DC3545', '&:hover': { backgroundColor: '#C02942' }, padding: '8px 25px', fontSize: '16px' }}>
            Cancel
          </Button>
        </StyledButtonBox>
      </StyledBox>
    </StyledRoot>
  );
};

export default DeviceSetup;
