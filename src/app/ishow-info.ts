export interface IShowInfo {

  id: number
  //title
  name: string
  summary: string
  image: string
  rating: number

  //Status
  status: string
  runtime: number
  premier: Date

  //Schedule
  time: string
  days: string

  //Show Details Data
  platform: string
  genres: string
  // numberOfEpisodes: number
  createdBy: string

}
