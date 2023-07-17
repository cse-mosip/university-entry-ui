import React, { useState, useEffect } from 'react';
import Typography from '@mui/material/Typography';
import { StyledRoot, StyledBox, StyledInputField, StyledLabel, StyledTextField, StyledButtonBox, StyledButton, StyledTypography } from './LoginStyles';

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
        <StyledTypography variant="h5">
          Login to Your Account
        </StyledTypography>
        <StyledInputField>
          <StyledLabel variant="body1">
            Username
          </StyledLabel>
          <StyledTextField 
            variant="outlined" 
            value={username}
            onChange={handleUsernameChange}
          />
        </StyledInputField>
        <StyledInputField>
          <StyledLabel variant="body1">
            Password
          </StyledLabel>
          <StyledTextField 
            variant="outlined" 
            type="password" 
            value={password}
            onChange={handlePasswordChange}
          />
        </StyledInputField>
        <StyledButtonBox>
          <StyledButton 
            variant="contained" 
            sx={{ bgcolor: '#012970', '&:hover': { bgcolor: '#011538' }}}
            disabled={isLoginDisabled}
            // onClick={handleLogin}
            onSubmit={handleLogin}
          >
            Login
          </StyledButton>
        </StyledButtonBox>
      </StyledBox>
    </StyledRoot>
  );
};

export default Login;
