import { Component, inject, Input } from '@angular/core';
import { PeopleDetailResponse } from '../../interfaces/people-detail-response';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  imports: [],
  selector: 'app-people-modal-component',
  styleUrl: './people-modal-component.css',
  templateUrl: './people-modal-component.html',
})
export class PeopleModalComponent {
  activeModal = inject(NgbActiveModal);

  @Input() peopleDetailResponse: PeopleDetailResponse | undefined;
}
