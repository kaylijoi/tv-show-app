import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { IEpisodeList } from './iepisode-list';
import { IEpisodeListData } from './iepisode-list-data';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class EpisodesService {

  constructor(private HttpClient: HttpClient) { }

  getEpisodeList(showId: number) {
    return this.HttpClient.get<IEpisodeListData>(`http://api.tvmaze.com/shows/${showId}/episodes`).pipe(
      map(data => this.transformToIEpisodeList(data))
    )
  }

  private transformToIEpisodeList(data: IEpisodeListData): IEpisodeList {
    return {
      number: data[0].number,
      name: data[0].name,
      airdate: data[0].airdate,
      summary: data[0].summary
    }
  }
}
