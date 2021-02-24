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

    getShowInfo(search: string) {
      let uriParams = '';
      if (typeof search === 'string') {
        uriParams = `q=${search}`
      }

      return this.httpClient.get<IShowInfoData>(`http://api.tvmaze.com/singlesearch/shows?${uriParams}`).pipe(
        map(data => this.transformToIShowInfo(data))
      )
    }
  
    private transformToIShowInfo(data: IShowInfoData): IShowInfo {
      let summ_len = data.summary.length;

      return {
        
        id: data.id,
        //title
        name: data.name,
        summary: data.summary.substring(3,summ_len-4),
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

