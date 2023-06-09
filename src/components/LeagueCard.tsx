import { Link, useParams } from "react-router-dom"
import ILeague from "../interfaces/ILeague"
import styles from './LeagueCard.module.css'


function LeagueCard(props: ILeague) {
  const { season } = useParams();
  const { league } = props
  return (
    <div className={styles.leagueCard}>
      <Link to={`/teams/${league.id}/${season}`}>
      <img src={ league.logo } alt={ league.name } />
      <h5>{league.name}</h5>
      </Link>
    </div>
  )
}

export default LeagueCard