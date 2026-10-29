import { Component, inject, OnInit, signal } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { BerryDetailResponse } from '../../../interfaces/berrys/berry-detail-response';
import { BerryService } from '../../../services/berry-service';

@Component({
  imports: [RouterLink],
  selector: 'app-berry-detail-component',
  styleUrl: './berry-detail-component.css',
  templateUrl: './berry-detail-component.html',
})
export class BerryDetailComponent implements OnInit {
  // Acceso a la ruta actual y al servicio que consulta la PokeAPI.
  private readonly route = inject(ActivatedRoute);
  private readonly berryService = inject(BerryService);

  // Guarda los datos recibidos para que la vista se actualice al cargarlos.
  protected readonly berry = signal<BerryDetailResponse | null>(null);

  // Lee el nombre de la baya de la URL y solicita su informacion.
  ngOnInit(): void {
    const berryName = this.route.snapshot.paramMap.get('name');

    if (!berryName) {
      return;
    }

    this.berryService.getOneBerry(berryName).subscribe((resp) => {
      this.berry.set(resp);
    });
  }

  // Construye la direccion de la imagen de la baya a partir de su item asociado.
  getImageUrl(berry: BerryDetailResponse): string {
    return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/berries/${berry.item.name}.png`;
  }
}
