import { Component } from '@angular/core';
import { PokemonItem } from '../pokemon-item/pokemon-item';

const POKEMON: Pokemon[]=[
  {
    id: 1,
    nombre: "pikachu",
    descripcion: "Hace cosas de pokemon",
    tipo: 'Eléctrico',
    foto: "https://picsum.photos/200/300"
  },
  {
    id: 1,
    nombre: "pikachu2",
    descripcion: "Hace cosas de pokemon",
    tipo: 'Eléctrico',
    foto: "https://picsum.photos/200/300"
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
