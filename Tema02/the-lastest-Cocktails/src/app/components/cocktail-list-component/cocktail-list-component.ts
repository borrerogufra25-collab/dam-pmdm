import { Component, inject, OnInit, signal, Signal } from '@angular/core';
import { CocktailItemComponent } from '../cocktail-item-component/cocktail-item-component';
import { CocktailService } from '../../service/cocktail-service';
import { Drink } from '../../interfaces/drink-response ';

@Component({
  imports: [CocktailItemComponent],
  selector: 'app-cocktail-list-component',
  styleUrl: './cocktail-list-component.css',
  templateUrl: './cocktail-list-component.html',
})
export class CocktailListComponent implements OnInit {
  
  cocktailService = inject(CocktailService);
  cocktailList = signal<Drink[]>([]);

  
  ngOnInit(): void {
   this.cocktailService.getCocktails().subscribe(resp => {
    this.cocktailList.set(resp.drinks);
   })
  }

}
