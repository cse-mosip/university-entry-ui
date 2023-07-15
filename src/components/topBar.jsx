import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { styled } from '@mui/system';

const StyledAppBar = styled(AppBar)({
  height: '60%',
  background: 'white',
  boxShadow: '0 2px 2px -2px gray',
  color: '#012970',
  fontWeight: 'bold',
});

const Logo = styled('img')({
  height: '50px',
  marginRight: '16px',
});

export default function TopBar() {
  return (
    <StyledAppBar position="static">
      <Toolbar>
        <Box display="flex" alignItems="center">
          <Logo src={`${process.env.PUBLIC_URL}/images/logo.png`} alt="logo" />
          <Typography variant="h6">
            University Entrance Identity Verification
          </Typography>
        </Box>
      </Toolbar>
    </StyledAppBar>
  );
}
