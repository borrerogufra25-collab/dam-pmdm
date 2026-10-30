import { Component, input, output } from '@angular/core';
import { Result } from '../../interfaces/character-list-response';

@Component({
  imports: [],
  selector: 'app-character-item-component',
  styleUrl: './character-item-component.css',
  templateUrl: './character-item-component.html',
})
export class CharacterItemComponent {
  character = input<Result>();

  characterClicked = output<number>();
  id: number = 0;

  emitCharacterClicked() {
    this.characterClicked.emit(this.id);
  }
}
