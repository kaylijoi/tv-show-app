import { Component } from '@angular/core';
import { IShowInfo } from './ishow-info';
import { ShowInfoService } from './show-info.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'tv-show-app';

  showInfo: IShowInfo

  constructor(private showInfoService: ShowInfoService) {
    this.showInfo = {
      id: 0,
      name: '',
      summary: '',
      image: '',
      rating: 0,
      status: '',
      runtime: 0,
      premier: new Date(),
      time: '',
      days: '',
      Genres: [],
      OfficialSite: '',
      Network: ''
    }
  }

  doSearch(searchValue: string) {
    const userInput = searchValue 
    this.showInfoService.getShowInfo(
      userInput)
      .subscribe(data => this.showInfo = data)
  }
}
