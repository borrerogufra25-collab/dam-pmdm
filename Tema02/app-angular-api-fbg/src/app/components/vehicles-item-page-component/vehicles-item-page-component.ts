import { Component, input, output } from '@angular/core';
import { Result } from '../../interfaces/vehicle-list-response';

@Component({
  imports: [],
  selector: 'app-vehicles-item-page-component',
  styleUrl: './vehicles-item-page-component.css',
  templateUrl: './vehicles-item-page-component.html',
})
export class VehiclesItemPageComponent {
  vehicle = input<Result>();
  vehicleClicked = output<string>();
  id: string = '';

  getVehicleId() {
    this.id = this.vehicle()?.url.split('/')[6]!;
    return this.id;
  }

  emitVehicleClicked() {
    const id = this.getVehicleId();
    this.vehicleClicked.emit(id);
  }
}
