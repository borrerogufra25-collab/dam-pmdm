import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PokemonDetailResponse } from '../interfaces/pokemons/pokemon-detail-response';
import { PokemonListResponse } from '../interfaces/pokemons/pokemon-list-response';

@Injectable({ providedIn: 'root' })
export class PokemonService {
  // Cliente HTTP de Angular para consultar la PokeAPI.
  private http = inject(HttpClient);

  // Obtiene los primeros 20 Pokemon del catalogo.
  getAllPokemons(): Observable<PokemonListResponse> {
    return this.http.get<PokemonListResponse>('https://pokeapi.co/api/v2/pokemon/?limit=20');
  }

  // Obtiene los datos completos de un Pokemon identificado por su nombre.
  getOnePokemon(name: string): Observable<PokemonDetailResponse> {
    return this.http.get<PokemonDetailResponse>(
      `https://pokeapi.co/api/v2/pokemon/${encodeURIComponent(name)}/`,
    );
  }
}
