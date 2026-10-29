// Respuesta paginada con los objetos disponibles.
export interface ItemListResponse {
  count: number;
  next: string | null;
  previous: string | null;
  results: Item[];
}

// Nombre y URL de un objeto del catalogo.
export interface Item {
  name: string;
  url: string;
}
