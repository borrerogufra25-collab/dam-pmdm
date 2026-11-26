import { Component, inject, input } from '@angular/core';
import { Result } from '../../interfaces/movie-responese';
import { PeliculaService } from '../../service/pelicula-service';

@Component({
  imports: [],
  selector: 'app-pelicula-item-component',
  styleUrl: './pelicula-item-component.css',
  templateUrl: './pelicula-item-component.html',
})
export class PeliculaItemComponent {
  private readonly peliculaService = inject(PeliculaService);
  pelicula = input<Result>();

  get posterUrl(): string | null {
    return this.peliculaService.getPosterUrl(this.pelicula()?.poster_path ?? null);
  }
}
