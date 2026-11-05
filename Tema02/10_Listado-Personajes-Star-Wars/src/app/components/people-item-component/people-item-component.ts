import { Component, input, output } from '@angular/core';
import { PersonasList } from '../../interfaces/people-list-response';

@Component({
  imports: [],
  selector: 'app-people-item-component',
  styleUrl: './people-item-component.css',
  templateUrl: './people-item-component.html',
})
export class PeopleItemComponent {
  people = input<PersonasList>();
  poeopleClicked = output<string>();
  id: string = '';

  getPeopleId() {
    this.id = this.people()?.url.split('/')[5]!;
    return this.id;
  }

  emitPeopleClicked() {
    const id = this.getPeopleId();
    if (id) {
      this.poeopleClicked.emit(id);
    } else {
      alert('Personaje no encontrado');
    }
  }
}
