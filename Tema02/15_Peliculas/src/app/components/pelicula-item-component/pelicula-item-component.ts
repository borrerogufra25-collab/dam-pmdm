import { Component, input } from '@angular/core';
import { Result } from '../../interfaces/movie-responese';

@Component({
  imports: [],
  selector: 'app-pelicula-item-component',
  styleUrl: './pelicula-item-component.css',
  templateUrl: './pelicula-item-component.html',
})
export class PeliculaItemComponent {
  pelicula = input<Result>();

  
}
