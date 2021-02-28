import { Component, Input, OnInit } from '@angular/core';
import { IShowInfo } from '../ishow-info';

@Component({
  selector: 'app-show-schedule',
  templateUrl: './show-schedule.component.html',
  styleUrls: ['./show-schedule.component.css']
})
export class ShowScheduleComponent implements OnInit {
  
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
      Genres: '',
      OfficialSite: ''
    };
  }

  ngOnInit(): void {  }

}
