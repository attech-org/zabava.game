import styled from "styled-components";
import "wired-elements";

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

const App: React.FunctionComponent = () => {
  return (
    <Main>
      <CardBoard>
        <h1>v1</h1>
        <wired-card elevation="3">
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
        </wired-card>
      </CardBoard>
    </Main>
  );
};

export default App;
