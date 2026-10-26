// Respuesta paginada con el total, los enlaces de pagina y las bayas.
export interface BerryListResponse {
  count: number;
  next: string | null;
  previous: string | null;
  results: Berry[];
}

// Datos basicos de cada baya, usados en el listado.
export interface Berry {
  name: string;
  url: string;
}
