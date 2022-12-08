import React, { useState } from "react";
import styled from "styled-components";

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
  const [room, setRoom] = useState("atlantida");
  const [game, setGame] = useState(["alias","crocodile"]);

  return (
    <CardBoard>
      <h2>Game config</h2>
      <wired-card>
        <div>
          <h2>room name:</h2>
          <wired-input placeholder="Enter room name" />
        </div>
        <div>
          <h2>Select game:</h2>
          <wired-combo>
            {game.map((game, index) => {
              return (
                <wired-item
                  key={index}
                  value={(index + 1).toString()}
                  onClick={() => { alert("You choose game") }}
                >
                  {game}
                </wired-item>
              )
            })}
          </wired-combo>
        </div>
        <div>
          <wired-button elevation={2} onClick={() =>{alert("Click start")}}>
            start game
          </wired-button>
        </div>
      </wired-card>
    </CardBoard>
  )
}

export default GameConfigCard;