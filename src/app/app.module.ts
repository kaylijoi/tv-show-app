import { CastListService } from './cast-list.service';
import { EpisodesService } from './episodes.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CastComponent } from './cast/cast.component';
import {HttpClientModule} from '@angular/common/http';
import { EpisodeListComponent } from './episode-list/episode-list.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule} from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ShowSearchComponent } from './show-search/show-search.component';


@NgModule({
  declarations: [
    AppComponent,
    CastComponent,
    EpisodeListComponent,
    ShowSearchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    EpisodesService,
    CastListService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
