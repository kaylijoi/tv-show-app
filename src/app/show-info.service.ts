import { map } from 'rxjs/operators';
import { environment } from 'src/app/environments/environment';
import { IShowInfoData } from './ishow-info-data';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IShowInfo } from './ishow-info';


@Injectable({
  providedIn: 'root'
})
export class ShowInfoService {

  constructor(private httpClient:HttpClient) { }

    getShowInfo(show: string) {
      return this.httpClient.get<IShowInfoData>(`http://api.tvmaze.com/shows?q=${show}`).pipe(
        map(data => this.transformToIShowInfo(data))
      )
    }
  
  
    private transformToIShowInfo(data: IShowInfoData): IShowInfo {
      return {
        id: data.id,
        //title
        name: data.name,
        summary: data.summary,
        image: data.image.medium,
        rating: data.rating.average,

        //Status
        status: data.status,
        runtime: data.runtime,
        premier: new Date(data.premiered),

        //Schedule
        time: data.schedule.time,
        days: data.schedule.days,

        //Show Details Data
        platform: data.network.name,
        genres: data.genres,
        createdBy: data.network.name

      }
    }

}

