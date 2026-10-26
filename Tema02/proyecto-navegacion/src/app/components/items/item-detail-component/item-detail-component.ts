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
  // Acceso al parametro de URL y al servicio de consulta de objetos.
  private readonly route = inject(ActivatedRoute);
  private readonly itemService = inject(ItemService);

  // Conserva los datos del objeto cargado para mostrarlos en la plantilla.
  protected readonly item = signal<ItemDetailResponse | null>(null);

  // Lee el nombre del objeto de la ruta y solicita sus datos detallados.
  ngOnInit(): void {
    const itemName = this.route.snapshot.paramMap.get('name');

    if (!itemName) {
      return;
    }

    this.itemService.getOneItem(itemName).subscribe((resp) => {
      this.item.set(resp);
    });
  }

  // Devuelve la imagen disponible del objeto o una cadena vacia si no existe.
  getImageUrl(item: ItemDetailResponse | null): string {
    if (!item) {
      return '';
    }

    return item.sprites.default ?? '';
  }
}
