import ITeam from "../interfaces/ITeam"

function TeamsCard(props: ITeam) {
  const { team, venue } = props;
  return (
    <div>
      <h5>{team.name}</h5>
      <img src={ team.logo } alt={ team.name } />
      <p>Venue: {venue.name}</p>
      <p>City: {venue.city}</p>
      {team.id}
    </div>
  )
}

export default TeamsCard