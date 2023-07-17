import { styled } from '@mui/system';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

export const StyledRoot = styled('div')({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  position: 'fixed',
  top: '60px',
  left: 0,
  width: '100%',
  height: '100%',
  backgroundImage: `url(${process.env.PUBLIC_URL}/images/uom.png)`,
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'center',
  zIndex: -1,
});
  
export const StyledBox = styled(Box)(({ theme }) => ({
  backgroundColor: '#DEDEDE',
  borderRadius: 10,
  padding: theme.spacing(6),
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  width: 600,
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
  fontSize: 18,
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

export const StyledButton = styled(Button)({
  padding: '8px 25px', 
  fontSize: '16px',
})

export const StyledTypography = styled(Typography)({
  color: '#012970',
  fontWeight: 700,
  marginBottom: '20px'
})