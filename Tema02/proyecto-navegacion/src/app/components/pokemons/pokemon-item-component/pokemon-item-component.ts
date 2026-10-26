import { Component, computed, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Pokemon } from '../../../interfaces/pokemons/pokemon-list-response';

@Component({
  imports: [RouterLink],
  selector: 'app-pokemon-item-component',
  styleUrl: './pokemon-item-component.css',
  templateUrl: './pokemon-item-component.html',
})
export class PokemonItemComponent {
  // Recibe del listado los datos del Pokemon que representa esta tarjeta.
  pokemon = input<Pokemon>();

  // Los sprites del repositorio se nombran por id (1.png, 2.png...), que está en la url del recurso
  imageUrl = computed(() => {
    const id = this.pokemon()?.url.split('/').filter(Boolean).pop();
    return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;
  });
}
