import { Component, signal } from '@angular/core';
import { RegisterFormComponent } from './components/register-form-component/register-form-component';

@Component({
  imports: [RegisterFormComponent],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('FormularioAngular');
}
