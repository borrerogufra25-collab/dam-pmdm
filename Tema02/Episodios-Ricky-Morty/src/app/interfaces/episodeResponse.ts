export interface EpisodeResponse {
    

  info: Info
  results: EpisodeListComponent[]
}

export interface Info {
  count: number
  pages: number
  next: string
  prev: any
}

export interface EpisodeListComponent {
  id: number
  name: string
  air_date: string
  episode: string
  characters: string[]
  url: string
  created: string
}
