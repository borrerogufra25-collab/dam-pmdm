import { Component, inject, OnInit, signal } from '@angular/core';
import { VehiclesItemPageComponent } from '../vehicles-item-page-component/vehicles-item-page-component';
import { VehicleService } from '../../services/vehicle-service';
import { Result } from '../../interfaces/vehicle-list-response';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { VehiclesDetailPageComponent } from '../vehicles-detail-page-component/vehicles-detail-page-component';

@Component({
  imports: [VehiclesItemPageComponent],
  selector: 'app-vehicles-list-page-component',
  styleUrl: './vehicles-list-page-component.css',
  templateUrl: './vehicles-list-page-component.html',
})
export class VehiclesListPageComponent implements OnInit {
  vehicleService = inject(VehicleService);
  vehicleList = signal<Result[]>([]);
  private modalService = inject(NgbModal);

  ngOnInit(): void {
    this.vehicleService.getAll().subscribe((resp) => {
      this.vehicleList.set(resp.results);
    });
  }
  openVehicleModal(id: string) {
    this.vehicleService.getOne(id).subscribe((resp) => {
      const modalRef = this.modalService.open(VehiclesDetailPageComponent);
      modalRef.componentInstance.VehicleDetailResponse = resp;
    });
  }
}
