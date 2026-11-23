import { Routes } from '@angular/router';
import { RegisterForm } from './pages/register-form/register-form';
import { PageNoFound } from './pages/page-no-found/page-no-found';

export const routes: Routes = [
  { path: 'inscripcion', component: RegisterForm },
  { path: '', pathMatch: 'full', redirectTo: '/inscripcion' },
  { path: '**', component: PageNoFound },
];
