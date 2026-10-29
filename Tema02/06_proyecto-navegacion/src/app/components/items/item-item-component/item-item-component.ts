import { Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Item } from '../../../interfaces/items/item-list-response';

@Component({
  imports: [RouterLink],
  selector: 'app-item-item-component',
  styleUrl: './item-item-component.css',
  templateUrl: './item-item-component.html',
})
export class ItemItemComponent {
  // Recibe los datos del objeto que representa esta tarjeta.
  item = input<Item>();

  // Genera la URL de la imagen del objeto usando su nombre.
  getItemImage(name: string): string {
    return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/${name}.png`;
  }
}
