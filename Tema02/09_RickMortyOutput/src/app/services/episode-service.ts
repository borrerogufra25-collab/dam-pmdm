import { HttpClient } from '@angular/common/http';
import { inject, Service } from '@angular/core';
import { Observable } from 'rxjs';
import { EpisodeListResponse } from '../interfaces/episode-list-response';
import { EpisodeDetailResponse } from '../interfaces/episode-detail-response';

@Service()
export class EpisodeService {
  http = inject(HttpClient);

  getAll(): Observable<EpisodeListResponse> {
    return this.http.get<EpisodeListResponse>('https://rickandmortyapi.com/api/episode');
  }

  getOne(id: number): Observable<EpisodeDetailResponse> {
    return this.http.get<EpisodeDetailResponse>(`https://rickandmortyapi.com/api/episode/${id}`);
  }
}
