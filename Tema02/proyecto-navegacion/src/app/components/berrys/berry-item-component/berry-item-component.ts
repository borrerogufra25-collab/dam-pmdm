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
  berry = input<Berry>();

  // En el repositorio de sprites las bayas son items: berries/<nombre>-berry.png
  getBerryImage(name: string | undefined): string {
    return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/berries/${name}-berry.png`;
  }
}
