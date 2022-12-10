import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Main } from "../styles";

const CardBoard = styled.section`
  display: flex;
  flex-direction: column;
  padding: 1rem;
  wired-card {
    width: 300px;
    height: 400px;
    padding: 1rem 2.5rem;
    h2 {
      font-size: 1.5rem;
      line-height: 1.5;
    }
    li {
      list-style-type: decimal;
    }
  }
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: black;
`;

const About = () => {
  return (
    <Main>
      <CardBoard>
        <h1>v1</h1>
        <wired-card elevation={3} onClick={() => {}}>
          <h2>User Flow:</h2>
          <ol>
            <li>Open website</li>
            <li>Create Room</li>
            <li>Invite Players</li>
            <li>Select Game</li>
            <li>Start Game</li>
          </ol>
          <h2>Games List:</h2>
          <ol>
            <li>Alias</li>
            <li>Crocodile</li>
          </ol>
          <h2>Key Features:</h2>
          <ol>
            <li>Embedded Audio/Video Calls</li>
            <li>Simple Games</li>
            <li>Multi Language</li>
            <li>Works in Browser</li>
          </ol>
          <StyledLink to="/">
            <wired-button>Back</wired-button>
          </StyledLink>
        </wired-card>
      </CardBoard>
    </Main>
  );
};

export default About;
