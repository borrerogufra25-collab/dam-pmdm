import { Component, inject, Input } from '@angular/core';
import { VehicleDetailResponse } from '../../interfaces/vehicle-detail-response';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  imports: [],
  selector: 'app-vehicles-detail-page-component',
  styleUrl: './vehicles-detail-page-component.css',
  templateUrl: './vehicles-detail-page-component.html',
})
export class VehiclesDetailPageComponent {
  activeModal = inject(NgbActiveModal);

  @Input() vehicleDetail: VehicleDetailResponse | undefined;
}
