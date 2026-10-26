import { Component, signal } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  // Importa las directivas necesarias para los enlaces y la vista de rutas.
  imports: [RouterLink, RouterOutlet],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  // Nombre interno de la aplicacion, disponible como senal reactiva.
  protected readonly title = signal('proyecto-navegacion');
}
