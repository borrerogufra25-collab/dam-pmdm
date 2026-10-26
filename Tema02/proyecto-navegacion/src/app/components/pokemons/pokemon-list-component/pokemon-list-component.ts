import { Component, inject, OnInit, signal } from '@angular/core';
import { PokemonItemComponent } from '../pokemon-item-component/pokemon-item-component';
import { Pokemon } from '../../../interfaces/pokemons/pokemon-list-response';
import { PokemonService } from '../../../services/pokemon-service';

@Component({
  imports: [PokemonItemComponent],
  selector: 'app-pokemon-list-component',
  styleUrl: './pokemon-list-component.css',
  templateUrl: './pokemon-list-component.html',
})
export class PokemonListComponent implements OnInit {
  // Servicio de consulta y senal que conserva los Pokemon del listado.
  pokemonService = inject(PokemonService);
  pokemonList = signal<Pokemon[]>([]);

  // Carga los Pokemon al iniciar la pagina y actualiza la senal.
  ngOnInit(): void {
    this.pokemonService.getAllPokemons().subscribe((resp) => {
      this.pokemonList.set(resp.results);
    });
  }
}
