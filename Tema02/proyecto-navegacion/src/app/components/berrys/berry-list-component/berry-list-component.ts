import { Component, inject, OnInit, signal } from '@angular/core';
import { BerryItemComponent } from '../berry-item-component/berry-item-component';
import { BerryService } from '../../../services/berry-service';
import { Berry } from '../../../interfaces/berrys/berry-list-response';

@Component({
  imports: [BerryItemComponent],
  selector: 'app-berry-list-component',
  styleUrl: './berry-list-component.css',
  templateUrl: './berry-list-component.html',
})
export class BerryListComponent implements OnInit {
  berryService = inject(BerryService);
  berryList = signal<Berry[]>([]);

  ngOnInit(): void {
    this.berryService.getAllBerrys().subscribe((resp) => {
      this.berryList.set(resp.results);
    });
  }
}
