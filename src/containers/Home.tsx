import { Link } from "react-router-dom";
import styled from "styled-components";
import CreateGameForm from "../components/CreateGameForm";
import JoinGameForm from "../components/JoinGameForm";
import { Main } from "../styles";

const StartMenu = styled.section`
  padding: 1rem;

  wired-card {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 300px;
    height: 400px;
  }

  wired-button {
    display: flex;
    flex-direction: column;
    width: 150px;
  }
`;

const Button = styled.div`
  margin: 40px;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: black;
`;

const Home: React.FunctionComponent = () => {
  return (
    <Main>
      <StartMenu>
        <h1>Start Menu</h1>
        <wired-card elevation={3}>
          <Button>
            <CreateGameForm />
          </Button>

          <Button>
            <JoinGameForm />
          </Button>

          <Button>
            <StyledLink to="/about">
              <wired-button>about</wired-button>
            </StyledLink>
          </Button>
        </wired-card>
      </StartMenu>
    </Main>
  );
};

export default Home;
