import React, { useState, useEffect } from 'react';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import MenuItem from '@mui/material/MenuItem';
import { StyledRoot, StyledBox, StyledInputField, StyledLabel, StyledSelect, StyledButtonBox } from './DeviceSetupStyles';
import { getGates, saveGate } from '../services/gateService';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router';


const DeviceSetup = () => {


  const [gates, setGates] = useState([]);
  
  const [selectedGate, setSelectedGate] = useState("");
  const [isProcessDisabled, setProcessDisabled] = useState(true);

  const navigate = useNavigate()

  useEffect(() => {
      const getGateEntries = async () => {
        const gates = await getGates();
        setGates(gates.data.gates);
      }
      getGateEntries()
  }, []);


  useEffect(() => {
    if (selectedGate) {
      setProcessDisabled(false);
    } else {
      setProcessDisabled(true);
    }
  }, [selectedGate]);

  const handleGateChange = (event) => {
    setSelectedGate(event.target.value);
  }

  const handleProceed = () => {
    console.log('Selected Gate: ', selectedGate);
    saveGate(selectedGate)

    toast.success('Successfully Saved', {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      draggable: true,
      progress: undefined,
    })

    navigate('/home')
  }

  return (
    <StyledRoot>
      <StyledBox>
        <Typography variant="h5" sx={{ color: '#012970', fontWeight: 700, marginBottom: '10px' }}>
          Gate Selection
        </Typography>
        <StyledInputField>
          <StyledLabel variant="body1">
            Gate
          </StyledLabel>
          <StyledSelect variant="outlined" value={selectedGate} onChange={handleGateChange}>
            {gates.map((gate) => (
              <MenuItem key={gate.id} value={gate}>{gate.name}</MenuItem>
            ))}
          </StyledSelect>
        </StyledInputField>
        <StyledButtonBox>
          <Button
            variant="contained"
            sx={{ bgcolor: '#012970', '&:hover': { backgroundColor: '#011538' }, padding: '8px 25px', fontSize: '16px' }}
            disabled={isProcessDisabled}
            onClick={handleProceed}
          >
            Proceed
          </Button>
        </StyledButtonBox>
      </StyledBox>
    </StyledRoot>
  );
};

export default DeviceSetup;
