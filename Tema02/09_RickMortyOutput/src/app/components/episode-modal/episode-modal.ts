import { Component, inject, input, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { EpisodeDetailResponse } from '../../interfaces/episode-detail-response';
import { Result } from '../../interfaces/episode-list-response';

@Component({
  imports: [],
  selector: 'app-episode-modal',
  styleUrl: './episode-modal.css',
  templateUrl: './episode-modal.html',
})
export class EpisodeModal {
  activeModal = inject(NgbActiveModal);

  @Input() episodeDetail: EpisodeDetailResponse | undefined;

  getAvatar(characterUrl: string): string {
    const id = characterUrl.split('/').pop();
    return `https://rickandmortyapi.com/api/character/avatar/${id}.jpeg`;
  }
}
