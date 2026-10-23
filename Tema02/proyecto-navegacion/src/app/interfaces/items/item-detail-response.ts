export interface ItemDetailResponse {
  id: number;
  name: string;
  cost: number;
  fling_power: number | null;
  sprites: {
    default: string | null;
  };
  category: {
    name: string;
    url: string;
  };
  attributes: Array<{
    name: string;
    url: string;
  }>;
}
