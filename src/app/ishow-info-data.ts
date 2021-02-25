export interface IShowInfoData {

  id: number,
  name: string,
  genres: string[],
  status: string,
  runtime: number,
  premiered: string,
  officialSite: string,
  
  schedule: {
    time: string,
    days: string
  },
  rating: {
    average: number
  },

  network: {
    name: string
  },
  image: {
    medium: string
  },
  summary: string
}
