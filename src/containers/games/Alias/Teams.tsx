import { useContext, useEffect, useRef, useState } from "react";
import { WiredSlider } from "wired-elements";
import styled from "styled-components";
import { chunk } from "lodash";
import { AliasContext, AliasContextType } from ".";

const Main = styled.main`
  margin: 0 auto;
  max-width: 1200px;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;

  wired-card {
    width: 300px;
    display: flex;
    align-items: center;
  }
`;

const VerticalList = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
`;

interface AliasTeamsPageProps {}

const AliasTeamsPage: React.FunctionComponent<AliasTeamsPageProps> = () => {
  const sliderRef = useRef<WiredSlider>();
  const [teamSize, setTeamSize] = useState<number>(2);
  const [teams, setTeams] = useState<AliasContextType["teams"]>([]);
  const { players, role } = useContext(AliasContext);
  const isHost = role === "admin"; // enable team edit if true, and disable if false

  useEffect(() => {
    const sliderEl = sliderRef.current;
    sliderEl?.addEventListener("change", handleTeamSizeChange);
    return () => {
      sliderEl?.removeEventListener("change", handleTeamSizeChange);
    };
  }, []);

  const handleTeamSizeChange = (e: any) => {
    setTeamSize(e.target.value);
  };

  const handleGenerateTeamsClick = () => {
    const playerChunks = chunk(players, teamSize);
    const result = [];

    for (let i = 0; i < playerChunks.length; i++) {
      result.push({
        id: i,
        name: `Team #${i}`,
        players: playerChunks[i],
      });
    }
    console.log(result);
    setTeams(result);
  };

  return (
    <Main>
      {teams.length ? (
        <VerticalList>
          {teams.map((team) => (
            <wired-card key={team.id} fill="#fffbcd">
              {team.name}
              <VerticalList>
                {team.players.map(({ id, username }) => (
                  <wired-item key={id}>{username}</wired-item>
                ))}
              </VerticalList>
            </wired-card>
          ))}
        </VerticalList>
      ) : (
        <wired-card>
          <VerticalList>
            {players.map(({ id, username }) => (
              <wired-item key={id}>{username}</wired-item>
            ))}
          </VerticalList>
        </wired-card>
      )}
      <wired-card>
        Team Size: {teamSize} {teamSize === 2 && '(classic)'}
        <wired-slider ref={sliderRef} min={2} max={6} value={teamSize} />
        <wired-button onClick={handleGenerateTeamsClick}>
          Generate teams
        </wired-button>
      </wired-card>
    </Main>
  );
};

export default AliasTeamsPage;
