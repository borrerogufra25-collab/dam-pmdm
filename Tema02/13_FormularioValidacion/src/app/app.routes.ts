import { Routes } from '@angular/router';
import { FormularioPage } from './pages/formulario-page/formulario-page';
import { NoFoundPage } from './pages/no-found-page/no-found-page';

export const routes: Routes = [
  { path: 'formulario', component: FormularioPage },
  { path: '', pathMatch: 'full', redirectTo: 'formulario' },
  { path: '**', component: NoFoundPage },
];
