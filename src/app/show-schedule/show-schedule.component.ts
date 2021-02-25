import { Component, OnInit } from '@angular/core';
import { IShowInfo } from '../ishow-info';
import { ShowInfoService } from '../show-info.service';

@Component({
  selector: 'app-show-schedule',
  templateUrl: './show-schedule.component.html',
  styleUrls: ['./show-schedule.component.css']
})
export class ShowScheduleComponent implements OnInit {
  
  current: IShowInfo
  constructor(private showInfoService: ShowInfoService) { 
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
    };
  }

  ngOnInit(): void {
    this.showInfoService.getShowInfo('Lost').subscribe(data => this.current = data)
  }

}
