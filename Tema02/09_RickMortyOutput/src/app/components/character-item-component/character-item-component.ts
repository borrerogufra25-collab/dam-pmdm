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

  emitCharacterClicked() {
    const id = this.character()?.id;
    if (id) {
      this.characterClicked.emit(id);
    } else {
      alert('Personaje no existe');
    }
  }
}
