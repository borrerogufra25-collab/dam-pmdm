import { Component, input, output } from '@angular/core';
import { Result } from '../../interfaces/episode-list-response';

@Component({
  imports: [],
  selector: 'app-episode-item-component',
  styleUrl: './episode-item-component.css',
  templateUrl: './episode-item-component.html',
})
export class EpisodeItemComponent {
  episode = input<Result>();
  episodeClicked = output<number>();

  emitEpisodeClicked() {
    const id = this.episode()?.id;
    if (id) {
      this.episodeClicked.emit(id);
    } else {
      alert('Episodio no encontrado');
    }
  }
}
