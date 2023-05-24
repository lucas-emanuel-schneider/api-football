import ITeam from "../interfaces/ITeam"
import { Link } from "react-router-dom"

function TeamsCard(props: ITeam) {
  const { team, venue } = props;
  return (
    <div>
      <Link to={`/teams/squads/${team.id}`}>
      <h5>{team.name}</h5>
      <img src={ team.logo } alt={ team.name } />
      <p>Venue: {venue.name}</p>
      <p>City: {venue.city}</p>
      </Link>
    </div>
  )
}

export default TeamsCard