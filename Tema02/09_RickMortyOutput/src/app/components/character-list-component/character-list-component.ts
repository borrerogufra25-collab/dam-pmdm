import { Component } from '@angular/core';
import { CharacterItemComponent } from '../character-item-component/character-item-component';

@Component({
  imports: [CharacterItemComponent],
  selector: 'app-character-list-component',
  styleUrl: './character-list-component.css',
  templateUrl: './character-list-component.html',
})
export class CharacterListComponent {}
