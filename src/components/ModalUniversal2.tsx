import React, { useState } from "react";
import { Modal } from "react-bootstrap";
import styled from "styled-components";

const ModalWrapper = styled.div`
  height: 100vh;
  width: 100vw;

  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalUniversal = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <wired-button onClick={handleShow}>join game</wired-button>
      <ModalWrapper>
        <Modal show={show} onHide={handleClose}>
          <wired-card>
            <wired-button onClick={handleClose}>Close</wired-button>
            <wired-button onClick={handleClose}>Save Changes</wired-button>
          </wired-card>
        </Modal>
      </ModalWrapper>
    </>
  );
};

export default ModalUniversal;
