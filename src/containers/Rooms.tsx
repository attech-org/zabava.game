import GameConfigCard from "../components/GameConfigCard";
import JoinedPlayersCard from "../components/JoinedPlayersCard";
import { Main } from "./Home";

const Rooms: React.FunctionComponent = () => {

  return (
    <Main>
      <JoinedPlayersCard />
      <GameConfigCard />
    </Main>
  )
}

export default Rooms