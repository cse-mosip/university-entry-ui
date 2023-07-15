
import React, { useEffect, useState } from 'react';
import StudentModal from '../components/studentModal';

const StudentCard = (props) => {
  const [modalOpen, setModalOpen] = useState(false);

  // const handleModalOpen = () => {
  //   setModalOpen(true);
  // };

  const handleModalClose = () => {
    console.log('calling close')
    setTimeout(() => {
      setModalOpen(false);
    }, 2000);
  
  };

  useEffect(() => {
    setModalOpen(props.isOpen);
    handleModalClose();
  }, []);

  return (
    <div>
      <StudentModal open={modalOpen}  onClose={() => setModalOpen(false)}/>
    </div>
  );
};

export default StudentCard;