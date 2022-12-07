import { CardBoard } from "../containers/Home";
import styled from "styled-components"

const Player = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
`;

const Checkbox = styled.input`
  // background-color: green;
  // color: red;
  // border-color: blue;

  // .checked {
  //   --wired-radio-icon-color: red;
  // };

  // &:desable {
  //   background-color: green;
  //   color: red;
  //   border-color: blue;
  // };
`;

const DeletePlayer = styled.h1`
  color: red;
  font-weight: 700;
`;

const JoinedPlayersCard: React.FunctionComponent = () => {

  //temporary mock data
  const players = [
    {nickname: "Maks", ready: true},
    {nickname: "Nikola", ready: false},
    {nickname: "Lora", ready: true},
  ]

  return (
    <CardBoard>
        <h2>{`Joined players: ${players.length}`}</h2>
        <wired-card>
          {
          players
            .sort((a, b) => +a.ready - +b.ready)
            .map((player, index) => {
              return (
                <Player key={index}>
                  {player.ready ?
                    <Checkbox as='wired-radio' checked disabled /> :
                    <Checkbox as='wired-radio' disabled />
                  }
                  <h3>{player.nickname}</h3>
                  <DeletePlayer>X</DeletePlayer>
                </Player>
            )})
          }
        </wired-card>
      </CardBoard>
  )
}

export default JoinedPlayersCard;