import styled from "styled-components";
import GameConfigCard from "../components/GameConfigCard";
import JoinedPlayersCard from "../components/JoinedPlayersCard";
import { Main } from "../styles";

const Rooms: React.FunctionComponent = () => {

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  h2{
    font-size: 1.5rem;
    line-height: 1.5;
  };
`;
  
const Section = styled(Main)`
  height: inherit;
`;

  return (
    <Main>
      <Wrapper>
        <h2>Room</h2>
        <Section>
          <JoinedPlayersCard />
          <GameConfigCard />
        </Section>
      </Wrapper>
    </Main>
  )
}

export default Rooms