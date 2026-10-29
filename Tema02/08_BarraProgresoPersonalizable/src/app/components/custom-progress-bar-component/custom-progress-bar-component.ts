import { Component, input } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-custom-progress-bar-component',
  styleUrl: './custom-progress-bar-component.css',
  templateUrl: './custom-progress-bar-component.html',
})
export class CustomProgressBarComponent {
  value = input(50);
  color = input('warning');
}
