import { Routes } from '@angular/router';
import { BerryDetailComponent } from './components/berrys/berry-detail-component/berry-detail-component';
import { BerryListComponent } from './components/berrys/berry-list-component/berry-list-component';
import { ItemDetailComponent } from './components/items/item-detail-component/item-detail-component';
import { ItemListComponent } from './components/items/item-list-component/item-list-component';
import { PokemonDetailComponent } from './components/pokemons/pokemon-detail-component/pokemon-detail-component';
import { PokemonListComponent } from './components/pokemons/pokemon-list-component/pokemon-list-component';

// Mapea las URL de la aplicacion con los componentes que deben mostrarse.
export const routes: Routes = [
  // Paginas de listado y detalle para cada tipo de recurso.
  { path: 'pokemon-list', component: PokemonListComponent },
  { path: 'pokemon-detail/:name', component: PokemonDetailComponent },
  { path: 'berry-list', component: BerryListComponent },
  { path: 'berry-detail/:name', component: BerryDetailComponent },
  { path: 'item-list', component: ItemListComponent },
  { path: 'item-detail/:name', component: ItemDetailComponent },
  // Al entrar sin una ruta, abre el listado de Pokemon.
  { path: '', redirectTo: 'pokemon-list', pathMatch: 'full' },
];
