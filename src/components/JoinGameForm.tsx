import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const FormWrapper = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  /* background-color: red; */
  /* width: 200px; */
  height: 300px;

  wired-card {
    background-color: white;
  }
`;

const JoinGameForm = () => {
  const [roomName, setRoomName] = useState<string>("");

  const inputTextHandler = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setRoomName(e.target.value);
    console.log(roomName);
  };

  return (
    <>
      <FormWrapper>
        <wired-card>
          <h1>Join game</h1>
          <div>
            <wired-input
              onChange={inputTextHandler}
              placeholder="enter room name"
            ></wired-input>
            <wired-button>
              <Link to={"/room?name=" + roomName}>join</Link>
            </wired-button>
          </div>
        </wired-card>
      </FormWrapper>
    </>
  );
};

export default JoinGameForm;
