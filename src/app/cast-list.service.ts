import { environment } from 'src/app/environments/environment';
import { ICastListData } from './icast-list-data';
import { ICastList } from './icast-list';
import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import {map} from 'rxjs/operators';



@Injectable({
  providedIn: 'root'
})
export class CastListService {

  constructor(private httpClient:HttpClient) { }

  getCastList(showId: number) {

    return this.httpClient.get<ICastList>(`http://api.tvmaze.com/search/shows?q=${showId}/cast`)
    
  }

  private transformtoICastList(data: ICastListData):
  ICastList {
    return {
      id: data.person[0].id,
      name: data.person[0].name,
      characterName: data.character.name,
      image: '',

    }
  }
}
