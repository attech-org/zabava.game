import { useContext } from "react";
import styled from "styled-components";
import { AliasContext } from ".";

const Main = styled.main`
  margin: 0 auto;
  max-width: 1200px;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

interface AliasTeamsPageProps {}

const AliasTeamsPage: React.FunctionComponent<AliasTeamsPageProps> = () => {
  const { players, role } = useContext(AliasContext);
  const isHost = role === 'admin'; // enable team edit if true, and disable if false

  return (
    <Main>
      {isHost && <wired-button>Generate team name</wired-button>}
      {players.map(el => el.username)}
    </Main>
  );
};

export default AliasTeamsPage;
