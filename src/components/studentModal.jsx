import React from 'react';
import { styled } from '@mui/material/styles';
import { Modal, Paper, Typography, Button } from '@mui/material';

const Box = styled(Paper)(({ theme }) => ({
  backgroundColor: '#AAB1F0',
  width: 500,
  height: 100,
  padding: theme.spacing(2),
  borderRadius: 10,
  display: 'flex',
  alignItems: 'center',
  marginLeft: 'auto',
  marginRight: 25,
  marginTop: 20,
}));

const Image = styled('img')({
  width: 100,
  height: 100,
  borderRadius: '50%',
  marginRight: 40,
});

const TextContainer = styled('div')({
  display: 'flex',
  flexDirection: 'column',
});

const NameLabel = styled(Typography)({
  color: '#012970',
  marginBottom: 10,
  marginRight: 20,
});

const IndexLabel = styled(Typography)({
  color: '#012970',
});

const CustomButton = styled(Button)({
  width: 80,
  height: 40,
  borderRadius: 20,
  backgroundColor: '#0B7630',
  color: '#FFFFFF',
  marginLeft: 'auto',
  marginRight: 20,
});

const StudentModal = ({ open, onClose, userData }) => {
  const handleButtonClick = () => {
    onClose();
  };
  return (
    <Modal open={open} onClose={onClose}>
      <Box>
        <Image
          src= "https://www.idcardstore.com.au/wp-content/uploads/2020/07/portrait-for-photo-id-card-scaled-e1613635059727.jpg"
          alt="Student"
        />
        <TextContainer>
          <NameLabel variant="h6">
            {userData?.name}
          </NameLabel>
          <IndexLabel variant="body2">
            {userData?.index}
          </IndexLabel>
        </TextContainer>
        <CustomButton variant="contained" onClick={handleButtonClick}>
          IN
        </CustomButton>
      </Box>
    </Modal>
  );
};

export default StudentModal;

