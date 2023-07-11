import { styled } from '@mui/system';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';

export const StyledRoot = styled('div')({
    height: '100vh',
    backgroundImage: 'url(/images/bg.jpg)',
    backgroundSize: 'cover',
    backgroundOpacity: 0.5,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  });
  
export const StyledBox = styled(Box)(({ theme }) => ({
    backgroundColor: '#CDCDCD',
    borderRadius: 10,
    padding: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    width: 700,
    height: 300,
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
      alignItems: 'flex-start'
    },
  }));
  
export const StyledLabel = styled(Typography)(({ theme }) => ({
    width: 100,
    marginRight: theme.spacing(2),
    fontSize: 20,
  }));
  
export const StyledTextField = styled(TextField)(({ theme }) => ({
    '& .MuiInputBase-input': {
      color: 'black',
    },
    '& .MuiInputBase-root': {
      backgroundColor: 'white',
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