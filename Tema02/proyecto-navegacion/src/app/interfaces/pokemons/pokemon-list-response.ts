// Respuesta paginada con los Pokemon devueltos por la API.
export interface PokemonListResponse {
  count: number;
  next: string | null;
  previous: string | null;
  results: Pokemon[];
}

// Datos basicos de un Pokemon utilizados en el listado.
export interface Pokemon {
  name: string;
  url: string;
}
