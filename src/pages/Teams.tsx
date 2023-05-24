import { useParams, useNavigate } from 'react-router-dom';
import ITeam from '../interfaces/ITeam'
import useFetch from '../hooks/useFetchWithParams';
import TeamsCard from '../components/TeamCard';
// import { teams } from '../components/teamMock';
import styles from './Teams.module.css'

function Teams() {
  const navigate = useNavigate()
    const returnHome = () => {
    navigate('/home')
  }
  const TEAMS_URL = 'https://v3.football.api-sports.io/teams'
    const { id, season } = useParams();
  const params = {
    league: Number(id),
    season: Number(season)
  }

  const { data: teams, isLoading, errorMessage } = useFetch<ITeam[]>(TEAMS_URL, params)
  return (
    <div className={styles.teamsContainer}>
      <button onClick={ returnHome }>Home</button>
      {
        teams?.map((card) => {
          return (
          <TeamsCard  key={card.team.id} { ...card }/>
          )
        })
      }
    { errorMessage && <h5>{ errorMessage }</h5> }
    { isLoading && <p>Loading...</p> }
    </div>
  )
}

export default Teams