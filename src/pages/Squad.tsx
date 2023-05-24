import { useParams } from "react-router-dom"
// import { squad } from "../components/mockSquad";
import PlayerCard from "../components/PlayerCard";
import useFetch from "../hooks/useFetchWithParams";
import { IPlayer, ITeamData } from "../interfaces/IPlayer";

function Squad() {
  const PLAYERS_URL = 'https://v3.football.api-sports.io/squads'
  const { teamid } = useParams();
  const params = {
    team: Number(teamid),
  }

  const { data: squad, isLoading, errorMessage } = useFetch<ITeamData[]>(PLAYERS_URL, params)

  return (
    <div>{  squad && squad[0].players.map((player: IPlayer) => {
      return (<PlayerCard key={player.id} { ...player }/>)
    })}
    { errorMessage && <h5>{ errorMessage }</h5> }
    { isLoading && <p>Loading...</p> }
    </div>
  )
}

export default Squad