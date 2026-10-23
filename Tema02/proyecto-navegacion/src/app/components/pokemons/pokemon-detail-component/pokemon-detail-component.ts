import { Component, inject, OnInit, signal } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { PokemonDetailResponse } from '../../../interfaces/pokemons/pokemon-detail-response';
import { PokemonService } from '../../../services/pokemon-service';

@Component({
  imports: [RouterLink],
  selector: 'app-pokemon-detail-component',
  styleUrl: './pokemon-detail-component.css',
  templateUrl: './pokemon-detail-component.html',
})
export class PokemonDetailComponent implements OnInit {
  private readonly route = inject(ActivatedRoute);
  private readonly pokemonService = inject(PokemonService);

  protected readonly pokemon = signal<PokemonDetailResponse | null>(null);

  ngOnInit(): void {
    const pokemonName = this.route.snapshot.paramMap.get('name');

    if (!pokemonName) {
      return;
    }

    this.pokemonService.getOnePokemon(pokemonName).subscribe((resp) => {
      this.pokemon.set(resp);
    });
  }

  getImageUrl(pokemon: PokemonDetailResponse | null): string {
    if (!pokemon) {
      return '';
    }

    return pokemon.sprites.other?.['official-artwork']?.front_default ?? pokemon.sprites.front_default ?? '';
  }
}
