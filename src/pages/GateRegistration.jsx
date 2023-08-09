import React from 'react';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { StyledRoot, StyledBox, StyledInputField, StyledLabel, StyledTextField, StyledButtonBox } from './LoginStyles';


const GateRegistration = () => {
  return (
    <StyledRoot>
      <StyledBox>
        <Typography variant="h5" sx={{ color: '#198754', fontWeight: 700, marginBottom: '20px' }}>
          Gate Registration
        </Typography>
        <StyledInputField>
          <StyledLabel variant="body1">Gate ID</StyledLabel>
          <StyledTextField variant="outlined" />
        </StyledInputField>
        <StyledInputField>
          <StyledLabel variant="body1">Description</StyledLabel>
          <StyledTextField variant="outlined" multiline maxRows={4} />
        </StyledInputField>
        <StyledButtonBox>
          <Button variant="contained" sx={{ bgcolor: '#4154F1', '&:hover': { backgroundColor: '#3249C9' }, padding: '8px 25px', fontSize: '16px' }}>
            Register
          </Button>
          <Button variant="contained" sx={{ bgcolor: '#DC3545', '&:hover': { backgroundColor: '#C02942' }, padding: '8px 25px', fontSize: '16px' }}>
            Cancel
          </Button>
        </StyledButtonBox>
      </StyledBox>
    </StyledRoot>
  );
};

export default GateRegistration;
