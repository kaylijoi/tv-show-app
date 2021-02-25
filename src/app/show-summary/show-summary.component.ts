import { IShowInfo } from './../ishow-info';
import { ShowInfoService } from './../show-info.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-show-summary',
  templateUrl: './show-summary.component.html',
  styleUrls: ['./show-summary.component.css']
})
export class ShowSummaryComponent implements OnInit {
  current: IShowInfo;
  constructor(private showInfoService:ShowInfoService) { 
    this.current = {
      id: 1,
      name: '',
      summary: '',
      image: '',
      rating: 0,
      status: '',
      runtime: 0,
      premier: new Date,
      time: '',
      days: '',
      Network: '',
      Genres: '',
      OfficialSite: ''
    }
  }

  ngOnInit(): void {
    this.showInfoService.getShowInfo('Lost').subscribe
    (data => this.current = data)
  }

}
