import { ShowInfoService } from './../show-info.service';
import { Component, OnInit } from '@angular/core';
import { debounceTime } from 'rxjs/operators';
import { FormControl } from '@angular/forms'

@Component({
  selector: 'app-show-search',
  templateUrl: './show-search.component.html',
  styleUrls: ['./show-search.component.css']
})
export class ShowSearchComponent implements OnInit {
  search = new FormControl();
  constructor(private showInfoService: ShowInfoService) { }

  ngOnInit(): void {
    // this.search.valueChanges
    // .pipe(debounceTime(1000))
    // .subscribe((searchValue: string) => {
    //   if(searchValue) {
    //     const userInput = searchValue {
    //       this.CastList.getCastList(
    //         userInput
    //         .subscribe(data => console.log(data))
    //       )
    //     }
      // }
    // })
  }

}
