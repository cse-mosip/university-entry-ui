import React, { useState, useEffect } from 'react';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { StyledRoot, StyledBox, StyledInputField, StyledLabel, StyledTextField, StyledButtonBox } from './LoginStyles';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isLoginDisabled, setLoginDisabled] = useState(true);

  useEffect(() => {
    if (username.trim() && password.trim()) {
      setLoginDisabled(false);
    } else {
      setLoginDisabled(true);
    }
  }, [username, password]);

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  }

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  }

  const handleLogin = () => {
    // api call
    console.log({ username, password });
  }

  return (
    <StyledRoot>
      <StyledBox>
        <Typography variant="h5" sx={{ color: '#012970', fontWeight: 700, marginBottom: '20px' }}>
          Login to Your Account
        </Typography>
        <StyledInputField>
          <StyledLabel variant="body1">Username</StyledLabel>
          <StyledTextField 
            variant="outlined" 
            value={username}
            onChange={handleUsernameChange}
          />
        </StyledInputField>
        <StyledInputField>
          <StyledLabel variant="body1">Password</StyledLabel>
          <StyledTextField 
            variant="outlined" 
            type="password" 
            value={password}
            onChange={handlePasswordChange}
          />
        </StyledInputField>
        <StyledButtonBox>
          <Button 
            variant="contained" 
            sx={{ bgcolor: '#4154F1', '&:hover': { backgroundColor: '#012970' }, padding: '8px 25px', fontSize: '16px' }}
            disabled={isLoginDisabled}
            onClick={handleLogin}
          >
            Login
          </Button>
        </StyledButtonBox>
      </StyledBox>
    </StyledRoot>
  );
};

export default Login;
