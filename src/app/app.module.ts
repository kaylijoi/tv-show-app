import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CastComponent } from './cast/cast.component';
import {HttpClientModule} from '@angular/common/http';
import { EpisodeListComponent } from './episode-list/episode-list.component';


@NgModule({
  declarations: [
    AppComponent,
    CastComponent,
    EpisodeListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
