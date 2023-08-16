import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { styled } from '@mui/system';
import FingerprintIcon from '@mui/icons-material/Fingerprint';
import Button from '@mui/material/Button';
import { useLocation } from 'react-router';
import authServices from '../services/authServices';


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

const FingerprintButton = (props) => {
  return (
    <Button
      style={{ justifyContent: 'center', alignItems: 'center', display: 'flex' }}
      variant="contained"
      color="primary"
      onClick={props.requestFingerprint}
    >
      <FingerprintIcon />
    </Button>
  );
};

const role = authServices.getUserRole();


export default function TopBar(props) {

  const location = useLocation().pathname;
  const fptAvalablePaths = ['/home', '/guest-registration']
  const fptAvalableRoles = ['SECURITY']

  return (
    <StyledAppBar position="static">
      <Toolbar>
        <Box display="flex" justifyContent="space-between" sx={{width: "100%"}}>
          <Box display="flex" alignItems="center" >
            <Logo src={`${process.env.PUBLIC_URL}/images/logo.png`} alt="logo" />
            <Typography variant="h6">
              University Entrance Identity Verification
            </Typography>
          </Box>
          {fptAvalablePaths.includes(location) && fptAvalableRoles.includes(role) && <FingerprintButton requestFingerprint={props.requestFingerprint}/>}
        </Box>
      </Toolbar>
    </StyledAppBar>
  );
}
