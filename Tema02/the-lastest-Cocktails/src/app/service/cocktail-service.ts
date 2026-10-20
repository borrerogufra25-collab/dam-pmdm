import { HttpClient } from '@angular/common/http';
import { inject, Service } from '@angular/core';
import { DrinkResponse } from '../interfaces/drink-response ';
import { Observable } from 'rxjs';
import { CocktailListComponent } from '../components/cocktail-list-component/cocktail-list-component';

@Service()
export class CocktailService {
    private http = inject(HttpClient);

   getCocktails(): Observable<DrinkResponse>{
    return this.http.get<DrinkResponse>('https://www.thecocktaildb.com/api/json/v1/1/latest.php');
   }

}
