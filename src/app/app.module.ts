import { ShowInfoService } from './show-info.service';
import { EpisodesService } from './episodes.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
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
import { ShowDetailsComponent } from './show-details/show-details.component';

import { ShowSummaryComponent } from './show-summary/show-summary.component';
import {MatGridListModule} from '@angular/material/grid-list';
import { ShowScheduleComponent }from './show-schedule/show-schedule.component';
import { StatusComponent} from './status/status.component';
import { MatTabsModule } from '@angular/material/tabs';

@NgModule({
  declarations: [
    AppComponent,
    EpisodeListComponent,
    ShowSearchComponent,
    ShowDetailsComponent,
    ShowSummaryComponent,
    ShowScheduleComponent,
    StatusComponent
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
    ReactiveFormsModule,
    MatGridListModule,
    MatTabsModule
  ],
  providers: [
    EpisodesService,
    ShowInfoService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
