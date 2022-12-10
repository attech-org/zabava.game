import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import CreateGameForm from "../components/CreateGameForm";
import JoinGameForm from "../components/JoinGameForm";

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
          <CreateGameForm />

          <JoinGameForm />

          <wired-button>
            <Link to="/about">about</Link>
          </wired-button>
        </wired-card>
      </StartMenu>
    </>
  );
};

export default Start;
