import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BerryListResponse } from '../interfaces/berrys/berry-list-response';
import { BerryDetailResponse } from '../interfaces/berrys/berry-detail-response';

@Injectable({ providedIn: 'root' })
export class BerryService {
  // Cliente HTTP de Angular para consultar la PokeAPI.
  private http = inject(HttpClient);

  // Obtiene las primeras 20 bayas del catalogo.
  getAllBerrys(): Observable<BerryListResponse> {
    return this.http.get<BerryListResponse>('https://pokeapi.co/api/v2/berry/?limit=20');
  }

  // Obtiene los datos completos de una baya identificada por su nombre.
  getOneBerry(name: string): Observable<BerryDetailResponse> {
    return this.http.get<BerryDetailResponse>(
      `https://pokeapi.co/api/v2/berry/${encodeURIComponent(name)}/`,
    );
  }
}
