import { Routes } from '@angular/router';
import { VehiclesListPageComponent } from './components/vehicles-list-page-component/vehicles-list-page-component';

export const routes: Routes = [
  { path: 'vehicles-list', component: VehiclesListPageComponent },
  { path: '', pathMatch: 'full', redirectTo: 'vehicles-list' },
];
