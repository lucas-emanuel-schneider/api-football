interface SimpleTeam {
  id: number,
  name: string,
  logo: string,
  country: string,
  code: string,
  founded: number,
  national: boolean
}

interface IVenue {
        id: number,
        name: string,
        address: string,
        city: string,
        capacity: number,
        surface: string,
        image: string
}

export default interface ITeam {
      team: SimpleTeam,
      venue: IVenue
}
