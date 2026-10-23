import { Routes } from '@angular/router';
import { BerryDetailComponent } from './components/berrys/berry-detail-component/berry-detail-component';
import { BerryListComponent } from './components/berrys/berry-list-component/berry-list-component';
import { ItemDetailComponent } from './components/items/item-detail-component/item-detail-component';
import { ItemListComponent } from './components/items/item-list-component/item-list-component';
import { PokemonDetailComponent } from './components/pokemons/pokemon-detail-component/pokemon-detail-component';
import { PokemonListComponent } from './components/pokemons/pokemon-list-component/pokemon-list-component';

export const routes: Routes = [
  { path: 'pokemon-list', component: PokemonListComponent },
  { path: 'pokemon-detail/:name', component: PokemonDetailComponent },
  { path: 'berry-list', component: BerryListComponent },
  { path: 'berry-detail/:name', component: BerryDetailComponent },
  { path: 'item-list', component: ItemListComponent },
  { path: 'item-detail/:name', component: ItemDetailComponent },
  { path: '', redirectTo: 'pokemon-list', pathMatch: 'full' },
];
