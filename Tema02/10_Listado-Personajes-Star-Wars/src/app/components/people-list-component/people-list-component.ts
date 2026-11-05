import { Component, inject, signal } from '@angular/core';
import { PeopleItemComponent } from '../people-item-component/people-item-component';
import { PeopleService } from '../../services/people-service';
import { PersonasList } from '../../interfaces/people-list-response';
import { PeopleModalComponent } from '../people-modal-component/people-modal-component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  imports: [PeopleItemComponent],
  selector: 'app-people-list-component',
  styleUrl: './people-list-component.css',
  templateUrl: './people-list-component.html',
})
export class PeopleListComponent {
  peopleService = inject(PeopleService);
  peopleList = signal<PersonasList[]>([]);
  private modalService = inject(NgbModal);

  ngOnInit(): void {
    this.peopleService.getAll().subscribe((resp) => {
      this.peopleList.set(resp.results);
    });
  }

  openPeopleModal(id: number) {
    this.peopleService.getOne(id).subscribe((resp) => {
      const modalRef = this.modalService.open(PeopleModalComponent);
      modalRef.componentInstance.characterDetail = resp;
    });
  }
}
