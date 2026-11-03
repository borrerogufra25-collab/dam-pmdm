import { Component, inject, input, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { EpisodeDetailResponse } from '../../interfaces/episode-detail-response';
import { EpisodeListComponent } from '../episode-list-component/episode-list-component';
import { RouterLink } from '@angular/router';
import { Result } from '../../interfaces/episode-list-response';

@Component({
  imports: [EpisodeListComponent, RouterLink],
  selector: 'app-episode-modal',
  styleUrl: './episode-modal.css',
  templateUrl: './episode-modal.html',
})
export class EpisodeModal {
  episode = input<Result>();
  activeModal = inject(NgbActiveModal);

  @Input() episodeDetail: EpisodeDetailResponse | undefined;
  episodeList: any;

  getId() {
    return this.episode()?.url.split('/')[5];
  }
}
