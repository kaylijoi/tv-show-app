import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ShowInfoService {

  constructor(private httpClient:HttpClient) { }

  getShowInfo(title: string) {
    return this.httpClient.get

    //to be figured out, url doesn't have an api key requirement?
    // (`http://api.tvmaze.com/singlesearch/shows?q=${title}`)
  }
}
