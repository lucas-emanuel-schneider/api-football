import LeagueCard from "../components/LeagueCard";
import useFetch from "../hooks/useFetch"
import ILeague from "../interfaces/ILeague"
import { useParams, useNavigate } from 'react-router-dom';
import styles from './Leagues.module.css'


function Leagues() {
  const { data: leagues, isLoading, errorMessage } = useFetch<ILeague[]>('https://v3.football.api-sports.io/leagues')
  const { country, season } = useParams();
  const navigate = useNavigate()

  const returnHome = () => {
    navigate('/home')
  }

  const resultFiltered = leagues?.filter((league) => league.country.name === country)
  .filter((league) => league.seasons
  .some((item) => item.year === Number(season)))

  if (resultFiltered && resultFiltered.length === 0) return (<p>League not Found</p>)

  return (
    <div className={styles.leaguesContainer}>
      <button onClick={ returnHome }>Home</button>
      {
        resultFiltered?.map((card) => {
          return (
          <LeagueCard  key={card.league.id} { ...card }/>
          )
        })
      }
      { errorMessage && <h5>{ errorMessage }</h5> }
      { isLoading && <p>Loading...</p> }
    </div>
  )
}

export default Leagues