import { createContext, useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import styled from "styled-components";

// import wordsData from "../../../content/alias_words.json";
import playersData from "../../../content/users.json";
import AliasTeamsPage from "./Teams";

const Main = styled.main`
  margin: 0 auto;
  max-width: 1200px;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

interface Player {
  id: number;
  username: string;
}

interface Team {
  id: number;
  name: string;
  players: Player[];
}

type Role = 'admin' | 'player';


export interface AliasContextType {
  players: Player[];
  setPlayers: (value: Player[]) => void;
  teams: Team[];
  setTeams: (value: Team[]) => void;
  role: Role;
  setRole: (value: Role) => void;
}

const initialAliasContext: AliasContextType = {
  players: [],
  setPlayers: () => {},
  teams: [],
  setTeams: () => {},
  role: 'admin', // 'admin' is for testing purposes, should be 'player' by default
  setRole: () => {},
};

export const AliasContext =
  createContext<AliasContextType>(initialAliasContext);

const Alias: React.FunctionComponent = () => {
  const [players, setPlayers] = useState<AliasContextType["players"]>(initialAliasContext.players);
  const [teams, setTeams] = useState<AliasContextType["teams"]>(initialAliasContext.teams);
  const [role, setRole] = useState<AliasContextType["role"]>(initialAliasContext.role);

  useEffect(() => {
    // fetch players by game session id
    setPlayers(playersData);
  }, [])

  const contextValue: AliasContextType = {
    ...initialAliasContext,
    players,
    teams,
    role,
    setPlayers,
    setTeams,
    setRole
  };

  return (
    <AliasContext.Provider value={contextValue}>
      <Routes>
        <Route path="teams" element={<AliasTeamsPage />} />
      </Routes>
    </AliasContext.Provider>
  );
};

export default Alias;
