// Estructura de la respuesta detallada de un Pokemon.
export interface PokemonDetailResponse {
  id: number;
  name: string;
  height: number;
  weight: number;
  // Sprites y otras imagenes disponibles para el Pokemon.
  sprites: {
    front_default: string | null;
    back_default: string | null;
    front_shiny: string | null;
    other?: {
      'official-artwork'?: {
        front_default: string | null;
      };
    };
  };
  // Tipos del Pokemon y la posicion de cada tipo.
  types: Array<{
    slot: number;
    type: { name: string; url: string };
  }>;
  // Habilidades del Pokemon, indicando si son ocultas y su posicion.
  abilities: Array<{
    ability: { name: string; url: string };
    is_hidden: boolean;
    slot: number;
  }>;
  // Valores base y esfuerzo asociado a cada estadistica.
  stats: Array<{
    base_stat: number;
    effort: number;
    stat: { name: string; url: string };
  }>;
}
