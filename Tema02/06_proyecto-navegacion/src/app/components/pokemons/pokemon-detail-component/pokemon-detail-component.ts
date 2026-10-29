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
  // Permite leer el nombre de la URL y consultar los datos del Pokemon.
  private readonly route = inject(ActivatedRoute);
  private readonly pokemonService = inject(PokemonService);

  // Datos del Pokemon seleccionado; null indica que aun se estan cargando.
  protected readonly pokemon = signal<PokemonDetailResponse | null>(null);

  // Obtiene el nombre de la ruta y pide a la API la ficha correspondiente.
  ngOnInit(): void {
    const pokemonName = this.route.snapshot.paramMap.get('name');

    if (!pokemonName) {
      return;
    }

    this.pokemonService.getOnePokemon(pokemonName).subscribe((resp) => {
      this.pokemon.set(resp);
    });
  }

  // Prioriza la ilustracion oficial y usa el sprite frontal como alternativa.
  getImageUrl(pokemon: PokemonDetailResponse | null): string {
    if (!pokemon) {
      return '';
    }

    return (
      pokemon.sprites.other?.['official-artwork']?.front_default ??
      pokemon.sprites.front_default ??
      ''
    );
  }
}
