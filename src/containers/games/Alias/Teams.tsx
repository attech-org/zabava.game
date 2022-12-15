import { useContext, useEffect, useRef, useState } from "react";
import { WiredSlider } from "wired-elements";
import styled from "styled-components";
import { chunk } from "lodash";
import { AliasContext, AliasContextType } from ".";
import teamNamesData from "../../../content/team_names.json";

const Main = styled.main`
  margin: 0 auto;
  max-width: 1200px;
  height: calc(100vh - 5rem * 2);
  padding: 5rem 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
`;

const Config = styled.div`
  wired-card {
    width: 300px;
    display: flex;
    align-items: flex-start;
    justify-content: center;
  }
`;

const Actions = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Teams = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;

  wired-card {
    display: flex;
    align-items: flex-start;
  }
`;

const ctaButton = {
  color: "green",
};

const VerticalList = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
`;

interface AliasTeamsPageProps {}

const AliasTeamsPage: React.FunctionComponent<AliasTeamsPageProps> = () => {
  const sliderRef = useRef<WiredSlider>(null);
  const [teamSize, setTeamSize] = useState<number>(2);
  const [teams, setTeams] = useState<AliasContextType["teams"]>([]);
  const { players } = useContext(AliasContext);
  // const isHost = role === "admin"; // enable team edit if true, and disable if false

  useEffect(() => {
    const generatedTeams = generateTeams(players, teamSize);
    setTeams(generatedTeams);

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
    const teamNames = teamNamesData.sort(() => 0.5 - Math.random());
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
    const size = e.target.value;
    const generatedTeams = generateTeams(players, size);
    setTeamSize(size);
    setTeams(generatedTeams);
  };

  const handleShuffleClick = () => {
    const generatedTeams = generateTeams(players.sort(() => Math.random() - 0.5), teamSize);
    setTeams(generatedTeams);
  };

  // const handleTeamNameChange = (teamId: number) => (e: any) => {
  //   setTeams(
  //     teams.map((el) => {
  //       if (el.id === teamId) {
  //         return {
  //           ...el,
  //           name: e.target.value,
  //         };
  //       }
  //       return el;
  //     })
  //   );
  // };

  return (
    <Main>
      <Config>
        <wired-card>
          Team Size: {teamSize} {teamSize === 2 && "(classic)"}
          <wired-slider ref={sliderRef} min={2} max={4} value={teamSize} />
          <Actions>
            <wired-button onClick={handleShuffleClick}>Shuffle</wired-button>
            <wired-button style={ctaButton}>Confirm teams</wired-button>
          </Actions>
        </wired-card>
      </Config>
      <Teams>
        {teams.map((team) => (
          <wired-card
            key={team.id}
            // style={{ color: stringToColor(team.name)}}
          >
            <h2>{team.name.toUpperCase()}</h2>
            <VerticalList>
              {team.players.map(({ id, username }) => (
                <wired-item key={id}>{username}</wired-item>
              ))}
            </VerticalList>
          </wired-card>
        ))}
      </Teams>
    </Main>
  );
};

export default AliasTeamsPage;
