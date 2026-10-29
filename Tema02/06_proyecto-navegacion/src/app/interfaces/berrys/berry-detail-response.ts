// Estructura de la respuesta detallada de una baya.
export interface BerryDetailResponse {
  id: number;
  name: string;
  growth_time: number;
  max_harvest: number;
  natural_gift_power: number;
  size: number;
  smoothness: number;
  soil_dryness: number;
  firmness: Firmness;
  flavors: Flavor[];
  item: Item;
  natural_gift_type: NaturalGiftType;
}

// Nombre y URL de la categoria de firmeza de la baya.
export interface Firmness {
  name: string;
  url: string;
}

// Potencia de un sabor y referencia al tipo de sabor.
export interface Flavor {
  potency: number;
  flavor: Flavor2;
}

// Identificador y URL de un sabor.
export interface Flavor2 {
  name: string;
  url: string;
}

// Nombre y URL del objeto relacionado con la baya.
export interface Item {
  name: string;
  url: string;
}

// Nombre y URL del tipo de regalo natural de la baya.
export interface NaturalGiftType {
  name: string;
  url: string;
}
