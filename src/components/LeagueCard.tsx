import { Link, useParams } from "react-router-dom"
import ILeague from "../interfaces/ILeague"


function LeagueCard(props: ILeague) {
  const { season } = useParams();
  const { league } = props
  return (
    <div>
      <Link to={`/teams/${league.id}/${season}`}>
      <img src={ league.logo } alt={ league.name } />
      <h5>{league.name}</h5>
      </Link>
    </div>
  )
}

export default LeagueCard