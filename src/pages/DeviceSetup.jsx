import React, { useState, useEffect } from 'react';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import MenuItem from '@mui/material/MenuItem';
import { StyledRoot, StyledBox, StyledInputField, StyledLabel, StyledSelect, StyledButtonBox } from './DeviceSetupStyles';

const DeviceSetup = () => {

  const [devices, setDevices] = useState(["Device 1", "Device 2", "Device 3"]);
  const [gates, setGates] = useState(["Gate 1", "Gate 2", "Gate 3"]);

  // const [devices, setDevices] = useState([]);
  // const [gates, setGates] = useState([]);
  
  const [selectedDevice, setSelectedDevice] = useState("");
  const [selectedGate, setSelectedGate] = useState("");
  const [isProcessDisabled, setProcessDisabled] = useState(true);

  // useEffect(() => {
  //     fetch('api endpoint/devices')
  //       .then(response => response.json())
  //       .then(data => setDevices(data))
  //       .catch(error => console.error(error));

  //     fetch('api endpoint/gates')
  //       .then(response => response.json())
  //       .then(data => setGates(data))
  //       .catch(error => console.error(error));
  // }, []);


  useEffect(() => {
    if (selectedGate.trim() && selectedDevice.trim()) {
      setProcessDisabled(false);
    } else {
      setProcessDisabled(true);
    }
  }, [selectedGate, selectedDevice]);


  const handleDeviceChange = (event) => {
    setSelectedDevice(event.target.value);
  }

  const handleGateChange = (event) => {
    setSelectedGate(event.target.value);
  }

  const handleProceed = () => {
    // api call
    console.log({ selectedGate, selectedDevice });
  }

  return (
    <StyledRoot>
      <StyledBox>
        <Typography variant="h5" sx={{ color: '#012970', fontWeight: 700, marginBottom: '10px' }}>
          Device Setup
        </Typography>
        <StyledInputField>
          <StyledLabel variant="body1">Gate</StyledLabel>
          <StyledSelect variant="outlined" value={selectedGate} onChange={handleGateChange}>
            {gates.map((gate, index) => (
              <MenuItem key={index} value={gate}>{gate}</MenuItem>
            ))}
          </StyledSelect>
        </StyledInputField>
        <StyledInputField>
          <StyledLabel variant="body1">Device</StyledLabel>
          <StyledSelect variant="outlined" value={selectedDevice} onChange={handleDeviceChange}>
            {devices.map((device, index) => (
              <MenuItem key={index} value={device}>{device}</MenuItem>
            ))}
          </StyledSelect>
        </StyledInputField>
        <StyledButtonBox>
          <Button
            variant="contained"
            sx={{ bgcolor: '#012970', '&:hover': { backgroundColor: '#3249C9' }, padding: '8px 25px', fontSize: '16px' }}
            disabled={isProcessDisabled}
            onClick={handleProceed}
          >
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
