import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormControlComponent } from './components/form-control-component/form-control-component';

@Component({
  imports: [FormControlComponent],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('11_ReactiveForms');
}
