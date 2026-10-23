export interface ItemListResponse {
  count: number;
  next: string | null;
  previous: string | null;
  results: Item[];
}

export interface Item {
  name: string;
  url: string;
}
