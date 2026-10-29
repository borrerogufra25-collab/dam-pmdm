import { Component, inject, OnInit, signal } from '@angular/core';
import { EpisodeService } from '../../service/episode-service';
import { EpisodeItemComponent } from '../episode-item-component/episode-item-component';
import { Episode } from '../../interfaces/episodeResponse';

@Component({
  imports: [EpisodeItemComponent],
  selector: 'app-episode-list-component',
  styleUrl: './episode-list-component.css',
  templateUrl: './episode-list-component.html',
})
// OnInit es un método que se lanza automaticamente al cargar, sin boton
export class EpisodeListComponent implements OnInit{
  

  episodeService = inject(EpisodeService);
  episodeList: Episode[] = [];

  ngOnInit(): void {
    this.episodeService.getEpisodes().subscribe(resp => {
    this.episodeList = resp.results;
    });
  }
}
