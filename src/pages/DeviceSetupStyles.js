import { styled } from '@mui/system';
import Box from '@mui/material/Box';
import Select from '@mui/material/Select';
import Typography from '@mui/material/Typography';

export const StyledRoot = styled('div')({
  position: 'relative',
  height: '100vh',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  "&::before": {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundImage: 'url(/images/uom.jpg)',
    backgroundSize: 'cover',
    opacity: 0.7,
    zIndex: -1,
  }
});
  
export const StyledBox = styled(Box)(({ theme }) => ({
  backgroundColor: '#CDCDCD',
  borderRadius: 10,
  padding: theme.spacing(8),
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  width: 700,
  gap: theme.spacing(2),
}));
  
export const StyledInputField = styled(Box)(({ theme }) => ({
  marginBottom: '10px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-start',
  gap: '10px',
  width: '100%',
  [theme.breakpoints.down('md')]: {
    flexDirection: 'column',
    alignItems: 'flex-start',
  },
}));
  
export const StyledLabel = styled(Typography)(({ theme }) => ({
  width: 100,
  marginRight: theme.spacing(2),
  fontSize: 20,
}));
  
export const StyledSelect = styled(Select)(({ theme }) => ({
  '& .MuiSelect-select': {
    color: 'black',
    backgroundColor: 'white',
    paddingLeft: '10px',
  },
  flex: 1,
  [theme.breakpoints.down('md')]: {
    width: '100%',
  },
}));
  
export const StyledButtonBox = styled(Box)({
  display: 'flex',
  justifyContent: 'flex-end',
  gap: '10px',
  marginTop: 'auto',
  width: '100%',
});