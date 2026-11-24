import { Component, inject, OnInit, signal } from '@angular/core';
import { PeliculaService } from '../../service/pelicula-service';
import { Result } from '../../interfaces/movie-responese';
import { PeliculaItemComponent } from '../../components/pelicula-item-component/pelicula-item-component';

@Component({
  imports: [PeliculaItemComponent],
  selector: 'app-lista-peliculas-page',
  styleUrl: './lista-peliculas-page.css',
  templateUrl: './lista-peliculas-page.html',
})
export class ListaPeliculasPage implements OnInit {
  peliculaService = inject(PeliculaService);
  peliculaList = signal<Result[]>([]);

  ngOnInit(): void {
    this.peliculaService.getPopularPelicula().subscribe((resp) => {
      this.peliculaList.set(resp.results);
    });
  }
}
