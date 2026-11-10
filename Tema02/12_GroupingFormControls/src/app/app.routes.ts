import { Routes } from '@angular/router';
import { FormControlComponent } from './components/form-control-component/form-control-component';

export const routes: Routes = [
  { path: 'form-control', component: FormControlComponent },
  { path: '', pathMatch: 'full', redirectTo: 'fom-control' },
  { path: '**' },
];
