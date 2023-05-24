import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function useFetch<T = unknown>(url: string, params: object) {
  const navigate = useNavigate();
  const [data, setData] = useState<T | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [errorMessage, setErrorMessage] = useState(null)

useEffect(() => {
  const key = localStorage.getItem('user_key');
  if (!key) navigate('/login')
  const headers = {
  "x-rapidapi-key": key as string,
  "x-rapidapi-host": "v3.football.api-sports.io",
}
  axios.get(url, { headers, params })
    .then(res => {
      setData(res.data.response)
    }).catch((err) => {
      setErrorMessage(err)
    })
    .finally(() => {
      setIsLoading(false)
    })
}, [url, navigate, params])
return { data, isLoading, errorMessage }
}
