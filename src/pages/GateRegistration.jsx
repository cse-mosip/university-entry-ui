import React, { useState } from 'react';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { StyledRoot, StyledBox, StyledInputField, StyledLabel, StyledTextField, StyledButtonBox } from './LoginStyles';
import { registerGate } from '../services/gateService';
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';


const GateRegistration = () => {
  const [gateId, setGateId] = useState("");
  const [location, setLocation] = useState("");

  const handleSubmit = async () => {
    if (gateId === "" || location === "") {
      toast.warn("Fields are empty");
      return;
    }
    try {
      const response = await registerGate({ name: gateId, location: location });
      console.log('gate', response);
      if (response.status === 200) {
        toast.success("Gate registration successfull");
        setGateId("");
        setLocation("");
      } else {
        toast.error("Gate registration failed");
      }
    } catch (e) {
      toast.error("Gate registration failed");
    }
  }
  return (
    <StyledRoot>
      <StyledBox>
        <Typography variant="h5" sx={{ color: '#198754', fontWeight: 700, marginBottom: '20px' }}>
          Gate Registration
        </Typography>
        <StyledInputField>
          <StyledLabel variant="body1">Gate Name</StyledLabel>
          <StyledTextField variant="outlined" value={gateId}  onChange={(e) => setGateId(e.target.value)}/>
        </StyledInputField>
        <StyledInputField>
          <StyledLabel variant="body1">Location</StyledLabel>
          <StyledTextField variant="outlined" multiline maxRows={4} value={location} onChange={(e) => setLocation(e.target.value)} />
        </StyledInputField>
        <StyledButtonBox>
          <Button onClick={handleSubmit} variant="contained" sx={{ bgcolor: '#4154F1', '&:hover': { backgroundColor: '#3249C9' }, padding: '8px 25px', fontSize: '16px' }}>
            Register
          </Button>
          <Link to={'/home'}>
            <Button variant="contained" sx={{ bgcolor: '#DC3545', '&:hover': { backgroundColor: '#C02942' }, padding: '8px 25px', fontSize: '16px' }}>
              Cancel
            </Button>
          </Link>
        </StyledButtonBox>
      </StyledBox>
    </StyledRoot>
  );
};

export default GateRegistration;
