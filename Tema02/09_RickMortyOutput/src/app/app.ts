import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CharacterItemComponent } from './components/character-item-component/character-item-component';

@Component({
  imports: [RouterOutlet, CharacterItemComponent],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('09_RickMortyOutput');
}
