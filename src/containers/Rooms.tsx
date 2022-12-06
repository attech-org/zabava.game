import styled from "styled-components";
import { CardBoard, Main } from "./Home";

const Checkbox = styled.input`
  // background-color: green;
  // color: red;
  // border-color: blue;

  // &:disabled {
  //   background-color: green;
  //   color: red;
  //   border-color: blue;
  // };
`;

const Player = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
`;

const Rooms: React.FunctionComponent = () => {

  //temporary mock data
  const players = [
    {nickname: "Maks", ready: true},
    {nickname: "Nikola", ready: false},
    {nickname: "Lora", ready: true},
  ]

  return (
    <Main>
      <CardBoard>
        <h2>{`Joined players: ${players.length}`}</h2>
        <wired-card>
          {
            players.map((player, index) => {
              return (
                <Player key={index}>
                  {/* <wired-radio></wired-radio> */}
                  <Checkbox type="checkbox" checked={player.ready} disabled />
                  <h3>{player.nickname}</h3>
                </Player>
            )})
          }
        </wired-card>
      </CardBoard>
      <CardBoard>
        <h2>Game config</h2>
        <wired-card>
          
        </wired-card>
      </CardBoard>
    </Main>
  )
}
export default Rooms