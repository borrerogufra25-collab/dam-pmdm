import { Component, signal } from '@angular/core';
import { EpisodeListComponent } from './components/episode-list-component/episode-list-component';

@Component({
  imports: [EpisodeListComponent],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {}
