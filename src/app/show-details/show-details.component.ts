import { Component, OnInit } from '@angular/core';
import { IShowInfo } from '../ishow-info';
import { IShowInfoData } from '../ishow-info-data';
import { ShowInfoService } from '../show-info.service';

@Component({
  selector: 'app-show-details',
  templateUrl: './show-details.component.html',
  styleUrls: ['./show-details.component.css']
})
export class ShowDetailsComponent implements OnInit {

  details : IShowInfo         

  constructor(private showInfoService : ShowInfoService) { 
    this.details ={

     
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
    this.showInfoService.getShowInfo('The Widower').subscribe(data => this.details = data);
  }
}
  
