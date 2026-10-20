import { Component, input } from '@angular/core';
import { Drink } from '../../interfaces/drink-response ';

@Component({
  imports: [],
  selector: 'app-cocktail-item-component',
  styleUrl: './cocktail-item-component.css',
  templateUrl: './cocktail-item-component.html',
})
export class CocktailItemComponent {
  drink = input<Drink>();
}
