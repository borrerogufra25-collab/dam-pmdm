export interface BerryListResponse {
  count: number;
  next: string | null;
  previous: string | null;
  results: Berry[];
}

export interface Berry {
  name: string;
  url: string;
}
