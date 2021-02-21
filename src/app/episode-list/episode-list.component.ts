import { Component, OnInit } from '@angular/core';
import { IEpisodeList } from '../iepisode-list';
import { EpisodesService } from '../episodes.service';

@Component({
  selector: 'app-episode-list',
  templateUrl: './episode-list.component.html',
  styleUrls: ['./episode-list.component.css']
})
export class EpisodeListComponent implements OnInit {

  episodes: IEpisodeList
  constructor(private episodesService: EpisodesService) { 
    this.episodes = {
      number: 1,
      name: '',
      airdate: '',
      summary: 'string'
    }
  }

  ngOnInit(): void {
    this.episodesService.getEpisodeList(1).subscribe(data => this.episodes = data)
  }
}
