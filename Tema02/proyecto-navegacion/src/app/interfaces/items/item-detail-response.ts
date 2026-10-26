// Estructura de la respuesta detallada de un objeto.
export interface ItemDetailResponse {
  id: number;
  name: string;
  cost: number;
  fling_power: number | null;
  // Imagen predeterminada disponible para el objeto.
  sprites: {
    default: string | null;
  };
  // Categoria a la que pertenece el objeto.
  category: {
    name: string;
    url: string;
  };
  // Atributos descriptivos del objeto.
  attributes: Array<{
    name: string;
    url: string;
  }>;
}
