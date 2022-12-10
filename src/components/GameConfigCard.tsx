import React, { useState } from "react";
import styled from "styled-components";
import { WiredInput } from "wired-elements";

const CardBoard = styled.section`
  display: flex;
  flex-direction: column;
  padding: 1rem;

  wired-card {
    width: 300px;
    height: 400px;
    padding: 1rem 2.5rem;

    div {
      display: flex;
      flex-direction: row;
      align-items: center;
      margin-bottom: 1rem;
    }

    h2 {
      font-size: 1.5rem;
      line-height: 1.5;
      display: inline-block;
    }
  }
`;

const GameConfigCard: React.FunctionComponent = () => {
  const [roomName, setRoomName] = useState<string>("");
  // temporary data
  const gameList = ["alias", "crocodile"];
  
  const handleInputRoomName = (e: React.ChangeEvent<WiredInput>): void => {
    setRoomName(e.target.value);
  };

  const handleClickStart = (): void => {
    setRoomName("");
  }

  const roomNameRegex = /^\w+$/;
  const isValid = roomNameRegex.test(roomName);

  return (
    <CardBoard>
      <h2>Game config</h2>
      <wired-card>
        <div>
          <h2>room name:</h2>
          <wired-input placeholder="room name..." value={roomName} onInput={handleInputRoomName} />
        </div>
        <div>
          <h2>Select game:</h2>
          <wired-combo>
            {gameList.map((game, index) => {
              return (
                <wired-item
                  key={index}
                  value={(index + 1).toString()}
                >
                  {game}
                </wired-item>
              )
            })}
          </wired-combo>
        </div>
        <div>
          <wired-button elevation={2} {...(isValid ? {} : {disabled: true})} onClick={handleClickStart}>
            start game
          </wired-button>
        </div>
      </wired-card>
    </CardBoard>
  )
}

export default GameConfigCard;