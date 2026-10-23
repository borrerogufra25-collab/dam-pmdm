import { Component, inject, OnInit, signal } from '@angular/core';
import { Item } from '../../../interfaces/items/item-list-response';
import { ItemService } from '../../../services/item-service';
import { ItemItemComponent } from '../item-item-component/item-item-component';

@Component({
  imports: [ItemItemComponent],
  selector: 'app-item-list-component',
  styleUrl: './item-list-component.css',
  templateUrl: './item-list-component.html',
})
export class ItemListComponent implements OnInit {
  itemService = inject(ItemService);
  itemList = signal<Item[]>([]);

  ngOnInit(): void {
    this.itemService.getAllItems().subscribe((resp) => {
      this.itemList.set(resp.results);
    });
  }
}
