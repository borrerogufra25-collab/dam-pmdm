import { Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Berry } from '../../../interfaces/berrys/berry-list-response';

@Component({
  imports: [RouterLink],
  selector: 'app-berry-item-component',
  styleUrl: './berry-item-component.css',
  templateUrl: './berry-item-component.html',
})
export class BerryItemComponent {
  // Recibe desde el componente de listado los datos de una baya.
  berry = input<Berry>();

  // En los sprites, las imagenes de bayas usan la ruta berries/<nombre>-berry.png.
  getBerryImage(name: string | undefined): string {
    return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/berries/${name}-berry.png`;
  }
}
