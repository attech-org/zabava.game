import { useContext, useEffect, useRef, useState } from "react";
import { WiredSlider } from "wired-elements";
import styled from "styled-components";
import { chunk } from "lodash";
import { AliasContext, AliasContextType } from ".";
import teamNamesData from "../../../content/team_names.json";

const Main = styled.main`
  margin: 0 auto;
  max-width: 1200px;
  padding: 5rem 0;
  height: 100vh;
  display: flex;
  align-items: flex-start;
  justify-content: center;

  wired-card {
    width: 300px;
    display: flex;
    align-items: center;
  }
`;

const Teams = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const VerticalList = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
`;

interface AliasTeamsPageProps {}

const AliasTeamsPage: React.FunctionComponent<AliasTeamsPageProps> = () => {
  const sliderRef = useRef<WiredSlider>(null);
  const [teamSize, setTeamSize] = useState<number>(2);
  const { players, role } = useContext(AliasContext);
  const isHost = role === "admin"; // enable team edit if true, and disable if false

  useEffect(() => {
    const sliderEl = sliderRef.current;
    sliderEl?.addEventListener("change", handleTeamSizeChange);
    return () => {
      sliderEl?.removeEventListener("change", handleTeamSizeChange);
    };
  }, []);

  const generateTeams = (
    playersList: AliasContextType["players"],
    size: number
  ): AliasContextType["teams"] => {
    const playerChunks = chunk(playersList, size);
    const teamNames = teamNamesData.sort(() => 0.5 - Math.random())
    const result = [];

    for (let i = 0; i < playerChunks.length; i++) {
      result.push({
        id: i,
        name: teamNames[i],
        players: playerChunks[i],
      });
    }

    return result;
  };

  const handleTeamSizeChange = (e: any) => {
    setTeamSize(e.target.value);
  };

  return (
    <Main>
      <Teams>
        {generateTeams(players, teamSize).map((team) => (
          <wired-card key={team.id} fill="gold">
            <wired-input
              value={team.name}
              style={{
                fontFamily: "Indie Flower",
              }}
            />
            <VerticalList>
              {team.players.map(({ id, username }) => (
                <wired-item key={id}>{username}</wired-item>
              ))}
            </VerticalList>
          </wired-card>
        ))}
      </Teams>
      <wired-card>
        Team Size: {teamSize} {teamSize === 2 && "(classic)"}
        <wired-slider ref={sliderRef} min={2} max={6} value={teamSize} />
        <wired-button>Confirm teams</wired-button>
      </wired-card>
    </Main>
  );
};

export default AliasTeamsPage;
