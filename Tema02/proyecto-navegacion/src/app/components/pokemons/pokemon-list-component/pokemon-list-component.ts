import { Component, inject, OnInit, signal } from '@angular/core';
import { PokemonItemComponent } from '../pokemon-item-component/pokemon-item-component';
import { Pokemon } from '../../../interfaces/pokemons/pokemon-list-response';
import { PokemonService } from '../../../services/pokemon-service';

@Component({
  imports: [PokemonItemComponent],
  selector: 'app-pokemon-list-component',
  styleUrl: './pokemon-list-component.css',
  templateUrl: './pokemon-list-component.html',
})
export class PokemonListComponent implements OnInit {
  pokemonService = inject(PokemonService);
  pokemonList = signal<Pokemon[]>([]);

  ngOnInit(): void {
    this.pokemonService.getAllPokemons().subscribe((resp) => {
      this.pokemonList.set(resp.results);
    });
  }
}
