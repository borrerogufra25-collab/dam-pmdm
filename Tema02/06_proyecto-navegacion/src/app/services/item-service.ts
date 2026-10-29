import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ItemDetailResponse } from '../interfaces/items/item-detail-response';
import { ItemListResponse } from '../interfaces/items/item-list-response';

@Injectable({ providedIn: 'root' })
export class ItemService {
  // Cliente HTTP de Angular para realizar consultas a la PokeAPI.
  private http = inject(HttpClient);

  // Obtiene los primeros 20 objetos del catalogo.
  getAllItems(): Observable<ItemListResponse> {
    return this.http.get<ItemListResponse>('https://pokeapi.co/api/v2/item/?limit=20');
  }

  // Obtiene los datos completos de un objeto identificado por su nombre.
  getOneItem(name: string): Observable<ItemDetailResponse> {
    return this.http.get<ItemDetailResponse>(
      `https://pokeapi.co/api/v2/item/${encodeURIComponent(name)}/`,
    );
  }
}
