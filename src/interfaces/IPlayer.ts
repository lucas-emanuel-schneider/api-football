export interface IPlayer {
  id: number;
  name: string;
  age: number | null;
  number: number | null;
  position: string;
  photo: string;
}

interface Team {
  id: number;
  name: string;
  logo: string;
}

export interface ITeamData {
  team: Team,
  players: IPlayer[]
}