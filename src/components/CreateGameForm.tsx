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

  h1 {
    padding: 10px;
  }

  wired-button {
    /* margin: 20px; */
    padding: 10px;
  }

  wired-input {
    padding: 10px;
  }
`;

const CreateGameForm = () => {
  const [roomName, setRoomName] = useState<string>("");

  const inputTextHandler = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setRoomName(e.target.value);
    console.log(roomName);
  };

  return (
    <>
      <FormWrapper>
        <wired-card>
          <h1>Create game</h1>
          <div>
            <wired-input
              type="text"
              onChange={inputTextHandler}
              placeholder="enter room name"
            ></wired-input>
            <div>sa{roomName}</div>
            <wired-button>
              <Link to={"/room?name=" + roomName}>create</Link>
            </wired-button>
          </div>
        </wired-card>
      </FormWrapper>
    </>
  );
};

export default CreateGameForm;
