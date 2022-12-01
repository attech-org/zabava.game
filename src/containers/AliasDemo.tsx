import { useState } from "react";
import styled from "styled-components";
import "wired-elements";

import words from "../content/alias_words.json";

const Main = styled.main`
  margin: 0 auto;
  max-width: 1200px;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const CardBoard = styled.section`
  display: flex;
  flex-direction: column;
  padding: 1rem;

  wired-card {
    width: 300px;
    height: 400px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 3rem;
  }
`;

const CardBoardActions = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 0.5rem 0;
`

const App: React.FunctionComponent = () => {
  const [isGameRunning, setIsGameRunning] = useState(false);
  const [wordIdx, setWordIdx] = useState(0);

  const handleStartGameButtonClick = () => {
    setIsGameRunning(!isGameRunning);
  };

  const handleNextWordClick = () => {
    setWordIdx(Math.min(wordIdx + 1, words.length - 1));
  };

  const handlePrevWordClick = () => {
    setWordIdx(Math.max(wordIdx - 1, 0));
  };

  return (
    <Main>
      {isGameRunning ? (
        <CardBoard>
          <wired-card elevation="3">{words[wordIdx]}</wired-card>
          <CardBoardActions>
            <wired-button elevation={2} onClick={handlePrevWordClick}>
              prev
            </wired-button>
            <wired-button elevation={2} onClick={handleNextWordClick}>
              next
            </wired-button>
          </CardBoardActions>
        </CardBoard>
      ) : (
        <wired-button elevation={2} onClick={handleStartGameButtonClick}>
          start game
        </wired-button>
      )}
    </Main>
  );
};

export default App;
