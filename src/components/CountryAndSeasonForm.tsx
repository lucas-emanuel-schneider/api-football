import { useState, ChangeEvent, MouseEvent, FormEvent } from 'react'
import useFetch from '../hooks/useFetch';
import ICountry from '../interfaces/ICountry';
import { useNavigate } from 'react-router-dom'

function CountryAndSeasonForm() {
  const { data: countries, isLoading, errorMessage } = useFetch<ICountry[]>('https://v3.football.api-sports.io/countries')
  const { data: seasons, isLoading: loading, errorMessage: err } = useFetch<number[]>('https://v3.football.api-sports.io/leagues/seasons')

  const [country, setCountry] = useState('');
  const [season, setSeason] = useState('');

  const navigate = useNavigate()

  const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = e.target
    if (name === 'country') setCountry(value)
    if (name === 'season') setSeason(value)
  };

  const handleSubmit = (e: MouseEvent<HTMLButtonElement> | FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (country && season) navigate(`/${country}/${season}`)
  }
  const seasonDisabled = !country
  const buttonDisabled = !country || !season

  return (
    <div>
    <form onSubmit={ handleSubmit }>
      <label htmlFor="country">Choose Country
      <select
      id="country"
      value={country}
      name="country"
      autoComplete="off"
      onChange={ handleChange }>
        <option>Select</option>
        { countries?.map((country) => {
          return (
            <option key={country.name} value={country.name}>{country.name}</option>
          )
        }) }
      </select>
      </label>

      <label htmlFor="season">Choose Season
      <select
      value={season}
      name="season"
      id="season"
      disabled={ seasonDisabled }
      autoComplete="off"
      onChange={ handleChange }>
        <option>Select</option>
        { seasons?.map((year) => {
          return (<option key={season} value={year}>{year}</option>)
        }) }
      </select>
      </label>

      <button
      type="submit"
      onClick={ handleSubmit }
      disabled={buttonDisabled}
      >Search
      </button>
    </form>
    { errorMessage || err && <h5>{ errorMessage || err }</h5> }
    { isLoading || loading && <p>Loading...</p> }
    </div>
  )
}

export default CountryAndSeasonForm