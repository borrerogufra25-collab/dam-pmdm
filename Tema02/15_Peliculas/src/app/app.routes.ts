import { Routes } from '@angular/router';
import { ListaPeliculasPage } from './page/lista-peliculas-page/lista-peliculas-page';
import { PageNoFound } from './page/page-no-found/page-no-found';

export const routes: Routes = [
  { path: 'lista', component: ListaPeliculasPage },
  { path: '', pathMatch: 'full', redirectTo: 'lista' },
  { path: '**', component: PageNoFound },
];
