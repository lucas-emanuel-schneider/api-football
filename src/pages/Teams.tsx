// import { useParams } from 'react-router-dom';
// import ITeam from '../interfaces/ITeam'
// import useFetch from '../hooks/useFetchWithParams';
import TeamsCard from '../components/TeamCard';
import { teams } from '../components/teamMock';

function Teams() {
  // const TEAMS_URL = 'https://v3.football.api-sports.io/teams'
  //   const { id, season } = useParams();
  // const params = {
  //   league: Number(id),
  //   season: Number(season)
  // }

  // const { data: teams, isLoading, errorMessage } = useFetch<ITeam[]>(TEAMS_URL, params)
  return (
    <div>
      {
        teams?.map((card) => {
          return (
          <TeamsCard  key={card.team.id} { ...card }/>
          )
        })
      }
    {/* { errorMessage && <h5>{ errorMessage }</h5> }
    { isLoading && <p>Loading...</p> } */}
    </div>
  )
}

export default Teams