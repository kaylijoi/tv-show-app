import { Component, Input, OnInit } from '@angular/core';
import { IShowInfo } from '../ishow-info';

@Component({
  selector: 'app-status',
  templateUrl: './status.component.html',
  styleUrls: ['./status.component.css']
})
export class StatusComponent implements OnInit {

  @Input() current:IShowInfo
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

  ngOnInit(): void {
  }

}
