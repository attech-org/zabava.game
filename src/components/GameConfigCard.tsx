import React, { useState } from "react";
import styled from "styled-components";
import { CardBoard } from "../containers/Home";

const Button = styled.button`
  background: green;
`;

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;

  h2{
    font-size: 1.5rem;
    line-height: 1.5;
  };
`;

const GameConfigCard: React.FunctionComponent = () => {
  const [room, setRoom] = useState("atlantida");
  const [game, setGame] = useState(["alias","crocodile"]);

  return (
    <CardBoard>
      <h2>Game config</h2>
      <wired-card>
        <Wrapper>
        <h2>{`room name: ${room}`}</h2>
        <h2>Game:</h2>
        <ol>
          {game.map((game, index) => {
            return (
              <li key={index}>{game}</li>
            )
          })}
        </ol>
        <Button as="wired-button" elevation={2} onClick={() =>{alert("Click start")}}>
          start game
          </Button>
          </Wrapper>
      </wired-card>
    </CardBoard>
  )
}

export default GameConfigCard;