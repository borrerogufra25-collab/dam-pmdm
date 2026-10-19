import { Component, inject, signal } from '@angular/core';
import { EpisodeService } from '../../service/episode-service';
import { EpisodeItemComponent } from '../episode-item-component/episode-item-component';
import { Episode } from '../../interfaces/episodeResponse';

@Component({
  imports: [EpisodeItemComponent],
  selector: 'app-episode-list-component',
  styleUrl: './episode-list-component.css',
  templateUrl: './episode-list-component.html',
})
export class EpisodeListComponent {
  private episodeService = inject(EpisodeService);

  episodeList = signal<Episode[]>([]);
  loading = signal(false);
  error = signal<string | null>(null);

  loadEpisodes(): void {
    this.loading.set(true);
    this.error.set(null);

    this.episodeService.getEpisodes().subscribe({
      next: (response) => {
        this.episodeList.set(response.results);
        this.loading.set(false);
      },
      error: () => {
        this.error.set('No se pudieron cargar los episodios.');
        this.loading.set(false);
      },
    });
  }
}
