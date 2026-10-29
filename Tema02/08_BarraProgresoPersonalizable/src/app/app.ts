import { Component, signal } from '@angular/core';
import { CustomProgressBarComponent } from './components/custom-progress-bar-component/custom-progress-bar-component';

@Component({
  imports: [CustomProgressBarComponent],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('08BarraProgresoPersonalizable');
}
