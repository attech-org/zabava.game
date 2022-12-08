import styled from "styled-components";

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
  }
`;

const Player = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const DeletePlayer = styled.h2`
  cursor: pointer;
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
                  <h2>{player.nickname}</h2>
                  {player.ready ?
                    <wired-checkbox checked disabled /> :
                    <wired-checkbox disabled />
                  }
                  <DeletePlayer onClick={()=>{alert("Click start")}}>X</DeletePlayer>
                </Player>
              )
            })
          }
        </wired-card>
      </CardBoard>
  )
}

export default JoinedPlayersCard;