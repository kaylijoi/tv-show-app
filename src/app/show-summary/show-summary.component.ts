import { IShowInfo } from './../ishow-info';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-show-summary',
  templateUrl: './show-summary.component.html',
  styleUrls: ['./show-summary.component.css']
})
export class ShowSummaryComponent implements OnInit {
  @Input() current: IShowInfo
  constructor() { 
    this.current = {
      id: 1,
      name: '',
      summary: '',
      image: '',
      rating: 0,
      status: '',
      runtime: 0,
      premier: new Date(),
      time: '',
      days: '',
      Network: '',
      Genres: [],
      OfficialSite: ''
    };
  }

  ngOnInit(): void {  }

}
