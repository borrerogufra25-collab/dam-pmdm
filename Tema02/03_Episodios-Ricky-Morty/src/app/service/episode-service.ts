import { inject, Service } from '@angular/core';
import { EpisodeResponse } from '../interfaces/episodeResponse';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Service()
export class EpisodeService {
private  http = inject(HttpClient);

    getEpisodes(): Observable<EpisodeResponse> {
        return this.http.get<EpisodeResponse>('https://rickandmortyapi.com/api/episode');
}
}
