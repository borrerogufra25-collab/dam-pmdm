import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ListaPeliculasPage } from './page/lista-peliculas-page/lista-peliculas-page';

@Component({
  imports: [RouterOutlet, ListaPeliculasPage],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('15_Peliculas');
}
