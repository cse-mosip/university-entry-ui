import React from 'react';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import MenuItem from '@mui/material/MenuItem';
import { StyledRoot, StyledBox, StyledInputField, StyledLabel, StyledSelect, StyledButtonBox } from './DeviceSetupStyles';


const DeviceSetup = () => {
  return (
    <StyledRoot>
      <StyledBox>
        <Typography variant="h5" sx={{ color: '#198754', fontWeight: 700, marginBottom: '30px' }}>
          Select System Setup
        </Typography>
        <StyledInputField>
          <StyledLabel variant="body1">Device</StyledLabel>
          <StyledSelect variant="outlined">
            <MenuItem value="user1">User 1</MenuItem>
            <MenuItem value="user2">User 2</MenuItem>
            <MenuItem value="user3">User 3</MenuItem>
          </StyledSelect>
        </StyledInputField>
        <StyledButtonBox>
          <Button variant="contained" sx={{ bgcolor: '#4154F1', '&:hover': { backgroundColor: '#3249C9' }, padding: '8px 25px', fontSize: '16px' }}>
            Login
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
