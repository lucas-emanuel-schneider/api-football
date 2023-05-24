import { useState, ChangeEvent, MouseEvent, FormEvent } from 'react'
import { useNavigate } from 'react-router-dom'
import styles from './LoginForm.module.css'

function LoginForm() {
  const BASE_URL = 'https://v3.football.api-sports.io/status'

  const [loginKey, setLoginKey] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState(undefined);

  const navigate = useNavigate();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    if (name === 'key') setLoginKey(value)
  }

  const requestHandler = () => {
  fetch(BASE_URL, {
    headers: {
      'x-rapidapi-key': loginKey
    }
  })
    .then(response => response.json())
    .then(data => {
      setIsLoading(false);
      if (!data.results) setErrorMessage(data.errors.token)
      if (data.results) {
        localStorage.setItem('user_key', loginKey);
        navigate('/home')
        }
    })
    .catch(() => setIsLoading(false));
  }

  const handleSubmit = (e: MouseEvent<HTMLButtonElement> | FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    setErrorMessage(undefined)
    requestHandler();
  }

  const disabled = !loginKey || loginKey.length < 10;
  return (
    <form className={styles.loginForm} onSubmit={ handleSubmit }>
      <input
      type="text"
      name="key"
      placeholder="Enter your FootBall Key"
      value={loginKey}
      onChange={ handleChange }
      required
      />
      <button
      type="submit"
      onClick={ handleSubmit }
      disabled={disabled}
      >Enter Using Key
      </button>
      { isLoading && <p>Loading...</p> }
      { errorMessage && <h5>{ errorMessage }</h5> }
    </form>
  )
}

export default LoginForm