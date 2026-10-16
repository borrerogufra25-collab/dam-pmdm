import { Component } from '@angular/core';
import { PokemonItem } from '../pokemon-item/pokemon-item';

const POKEMON: Pokemon[]=[

  {
    id: 3,
    nombre: "charmander",
    descripcion: "La llama en su cola indica su estado de ánimo y salud; si se apaga, se extingue su vida.",
    tipo: 'Fuego',
    foto: "https://picsum.photos/200/301"
  },
  {
    id: 4,
    nombre: "bulbasaur",
    descripcion: "Lleva una semilla en su lomo desde que nace, la cual crece absorbiendo la luz del sol.",
    tipo: 'Planta / Veneno',
    foto: "https://picsum.photos/200/302"
  },
  {
    id: 5,
    nombre: "squirtle",
    descripcion: "Dispara agua a alta presión por la boca y se refugia en su resistente caparazón.",
    tipo: 'Agua',
    foto: "https://picsum.photos/200/303"
  },
  {
    id: 6,
    nombre: "gengar",
    descripcion: "Se esconde en las sombras por las noches para robar el calor corporal de sus víctimas.",
    tipo: 'Fantasma / Veneno',
    foto: "https://picsum.photos/200/304"
  },
  {
    id: 7,
    nombre: "snorlax",
    descripcion: "Pasa la mayor parte del día durmiendo y solo se despierta para ingerir 400 kg de comida.",
    tipo: 'Normal',
    foto: "https://picsum.photos/200/305"
  },
  {
    id: 8,
    nombre: "eevee",
    descripcion: "Posee una estructura genética inestable que le permite evolucionar en múltiples formas.",
    tipo: 'Normal',
    foto: "https://picsum.photos/200/306"
  },
  {
    id: 9,
    nombre: "lucario",
    descripcion: "Puede leer el aura de sus oponentes para anticipar sus movimientos y emociones.",
    tipo: 'Lucha / Acero',
    foto: "https://picsum.photos/200/307"
  },
  {
    id: 10,
    nombre: "mewtwo",
    descripcion: "Creado por manipulación genética, es considerado uno de los Pokémon más poderosos.",
    tipo: 'Psíquico',
    foto: "https://picsum.photos/200/308"
  }

];

@Component({
  imports: [PokemonItem],
  selector: 'app-pokemon-list',
  styleUrl: './pokemon-list.css',
  templateUrl: './pokemon-list.html',
})
export class PokemonList {
  pokemonList = POKEMON;
}
