import { Component, input } from '@angular/core';
import { Episode } from '../../interfaces/episodeResponse';

@Component({
  imports: [],
  selector: 'app-episode-item-component',
  styleUrl: './episode-item-component.css',
  templateUrl: './episode-item-component.html',
})
export class EpisodeItemComponent {
  episode = input.required<Episode>();
}