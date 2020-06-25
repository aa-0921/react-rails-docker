require('dotenv').config();

import React, { useState, useEffect } from 'react';
import { Modal, Button } from '@zeit-ui/react';

export const modal = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const modalOpenHandler = () => setModalOpen(true);
  const closeHandler = () => {
    setModalOpen(false);
    console.log('modal-closed');
  };
  return (
    <div>
      <Button auto onClick={modalOpenHandler}>
        Show Modal
      </Button>
      <Modal open={modalOpen} onClose={closeHandler}>
        <Modal.Title>Modal</Modal.Title>
        <Modal.Subtitle>This is a modal</Modal.Subtitle>
        <Modal.Content>
          <p>Some content contained within the modal.</p>
        </Modal.Content>
        <Modal.Action passive onClick={() => setModalOpen(false)}>
          Cancel
        </Modal.Action>
        {/* <Modal.Action>Submit</Modal.Action> */}
      </Modal>
    </div>
  );
};
