
import React, { useState } from 'react';
import StudentModal from '../components/studentModal';

const StudentCard = () => {
  const [modalOpen, setModalOpen] = useState(false);

  const handleModalOpen = () => {
    setModalOpen(true);
  };

  const handleModalClose = () => {
    setModalOpen(false);
  };

  return (
    <div>
      <button onClick={handleModalOpen}>Open Modal</button>
      <StudentModal open={modalOpen} onClose={handleModalClose} />
    </div>
  );
};

export default StudentCard;