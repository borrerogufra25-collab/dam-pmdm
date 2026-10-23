import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BerryListResponse } from '../interfaces/berrys/berry-list-response';
import { BerryDetailResponse } from '../interfaces/berrys/berry-detail-response';

@Injectable({ providedIn: 'root' })
export class BerryService {
  private http = inject(HttpClient);

  getAllBerrys(): Observable<BerryListResponse> {
    return this.http.get<BerryListResponse>('https://pokeapi.co/api/v2/berry/?limit=20');
  }

  getOneBerry(name: string): Observable<BerryDetailResponse> {
    return this.http.get<BerryDetailResponse>(
      `https://pokeapi.co/api/v2/berry/${encodeURIComponent(name)}/`,
    );
  }
}
