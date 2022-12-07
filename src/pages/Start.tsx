import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import CreateGameForm from "../components/CreateGameForm";
import JoinGameForm from "../components/JoinGameForm";
import Modal from "../components/ModalUniversal";
import ModalUniversal2 from "../components/ModalUniversal2";

const StartMenu = styled.section`
  wired-card {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
  wired-button {
    margin: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
`;

const Start = () => {
  // const [modalActive, setModalActive] = useState<boolean>(false);

  return (
    <>
      <StartMenu>
        <h1>Start Menu</h1>
        <wired-card>
          <Modal
            modalButton="create game"
            // active={modalActive}
            // setActive={setModalActive}
            // setActive={
            //   <wired-button onClick={() => setModalActive(true)}>
            //     create game
            //   </wired-button>
            // }
          >
            <CreateGameForm />
          </Modal>

          <Modal modalButton="join game">
            <JoinGameForm />
          </Modal>

          {/* <wired-button>join game</wired-button> */}

          {/* <ModalUniversal2 /> */}

          <wired-button>
            <Link to="/about">about</Link>
          </wired-button>
        </wired-card>
      </StartMenu>
    </>
  );
};

export default Start;
