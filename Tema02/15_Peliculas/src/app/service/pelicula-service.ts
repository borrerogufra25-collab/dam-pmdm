import { HttpClient, HttpParams } from '@angular/common/http';
import { inject, Service } from '@angular/core';
import { Observable } from 'rxjs';
import { MovieResponese } from '../interfaces/movie-responese';
import { environment } from '../../environments/environment';

@Service()
export class PeliculaService {
  private readonly http = inject(HttpClient);
  private readonly baseUrl = environment.tmdbBaseUrl;

  getPeliculaPopular(page = 1): Observable<MovieResponese> {
    const params = new HttpParams().set('page', page.toString());

    return this.http.get<MovieResponese>(`${this.baseUrl}/movie/popular`, { params });
  }

  getPosterUrl(posterPath: string | null): string | null {
    return posterPath ? `${environment.tmdbImageBaseUrl}${posterPath}` : null;
  }
}
