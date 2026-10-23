import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PokemonDetailResponse } from '../interfaces/pokemons/pokemon-detail-response';
import { PokemonListResponse } from '../interfaces/pokemons/pokemon-list-response';

@Injectable({ providedIn: 'root' })
export class PokemonService {
  private http = inject(HttpClient);

  getAllPokemons(): Observable<PokemonListResponse> {
    return this.http.get<PokemonListResponse>('https://pokeapi.co/api/v2/pokemon/?limit=20');
  }

  getOnePokemon(name: string): Observable<PokemonDetailResponse> {
    return this.http.get<PokemonDetailResponse>(
      `https://pokeapi.co/api/v2/pokemon/${encodeURIComponent(name)}/`,
    );
  }
}
