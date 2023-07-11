import React from 'react';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { StyledRoot, StyledBox, StyledInputField, StyledLabel, StyledTextField, StyledButtonBox } from './LoginStyles';


const Login = () => {
  return (
    <StyledRoot>
      <StyledBox>
        <Typography variant="h5" sx={{ color: '#198754', fontWeight: 700, marginBottom: '30px' }}>
          Login to Your Account
        </Typography>
        <StyledInputField>
          <StyledLabel variant="body1">Username</StyledLabel>
          <StyledTextField variant="outlined" />
        </StyledInputField>
        <StyledInputField>
          <StyledLabel variant="body1">Password</StyledLabel>
          <StyledTextField variant="outlined" type="password" />
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

export default Login;
