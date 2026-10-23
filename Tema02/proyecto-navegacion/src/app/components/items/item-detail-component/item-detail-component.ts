import { Component, inject, OnInit, signal } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { ItemDetailResponse } from '../../../interfaces/items/item-detail-response';
import { ItemService } from '../../../services/item-service';

@Component({
  imports: [RouterLink],
  selector: 'app-item-detail-component',
  styleUrl: './item-detail-component.css',
  templateUrl: './item-detail-component.html',
})
export class ItemDetailComponent implements OnInit {
  private readonly route = inject(ActivatedRoute);
  private readonly itemService = inject(ItemService);

  protected readonly item = signal<ItemDetailResponse | null>(null);

  ngOnInit(): void {
    const itemName = this.route.snapshot.paramMap.get('name');

    if (!itemName) {
      return;
    }

    this.itemService.getOneItem(itemName).subscribe((resp) => {
      this.item.set(resp);
    });
  }

  getImageUrl(item: ItemDetailResponse | null): string {
    if (!item) {
      return '';
    }

    return item.sprites.default ?? '';
  }
}
