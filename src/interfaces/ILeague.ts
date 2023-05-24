interface country {
  name: string
}
interface seasons {
  year: number
}

interface league {
  name: string,
  logo: string,
  id: number,
  type: string
}

export default interface ILeague {
    league: league,
    country: country,
    seasons: seasons[]
}