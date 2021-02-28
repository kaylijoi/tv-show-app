import { Component, Input, OnInit } from '@angular/core';
import { IShowInfo } from '../ishow-info';

@Component({
  selector: 'app-show-details',
  templateUrl: './show-details.component.html',
  styleUrls: ['./show-details.component.css']
})
export class ShowDetailsComponent implements OnInit {


  @Input() details : IShowInfo         

  constructor() { 
    this.details ={

  /* current : IShowInfo         

  constructor(private showInfoService : ShowInfoService) { 
    this.current ={
 */
     

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

  

  /* ngOnInit(): void {
    this.showInfoService.getShowInfo('Lost').subscribe(data => this.current = data);
  } */

}
  
