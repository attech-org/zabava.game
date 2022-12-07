import React, { useState, Dispatch, ReactNode } from "react";
import styled, { css } from "styled-components";

interface StyledModalProps {
  active: boolean;
}

const StyledModal = styled.div<StyledModalProps>`
  height: 100vh;
  width: 100vw;
  background-color: rgba(0, 0, 0, 0.4);
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  /* align-items: center; */

  ${(props) =>
    props.active
      ? css`
          transform: scale(1);
          opacity: 1;
          transition: opacity 0.3s;
          pointer-events: auto;
        `
      : css`
          transform: scale(0);
          opacity: 0;
          transition: opacity 0.3s;
          pointer-events: none; //чтобы элементы не перекрывали окно
        `};
`;

interface ModalProps {
  // active: boolean;
  // setActive: Dispatch<React.SetStateAction<boolean>>;
  children?: ReactNode;
  modalButton?: JSX.Element | string;
}

const ModalUniversal: React.FC<ModalProps> = ({
  // active,
  // setActive,
  children,
  modalButton,
}) => {
  const [active, setActive] = useState<boolean>(false);

  return (
    <>
      {/* {modalButton} */}

      <wired-button onClick={() => setActive(true)}>{modalButton}</wired-button>

      <StyledModal active={active} onClick={() => setActive(false)}>
        <div onClick={(e) => e.stopPropagation()}>{children}</div>
      </StyledModal>
    </>
  );
};

export default ModalUniversal;
