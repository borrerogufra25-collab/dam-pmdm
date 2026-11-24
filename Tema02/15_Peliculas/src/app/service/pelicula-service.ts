import { HttpClient } from '@angular/common/http';
import { inject, Service } from '@angular/core';
import { Observable } from 'rxjs';
import { MovieResponese } from '../interfaces/movie-responese';

@Service()
export class PeliculaService {
  private http = inject(HttpClient);

  getPopularPelicula(): Observable<MovieResponese> {
    return this.http.get<MovieResponese>(
      'https://api.themoviedb.org/3/movie/popular?api_key=fe2f9b5d94a0a7a5c264548906fc3a7d',
    );
  }
}
