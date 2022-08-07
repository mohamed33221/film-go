import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { MovieDitilsComponent } from './movie-ditils/movie-ditils.component';
import { PageRoudComponent } from './page-roud/page-roud.component';
import { PageroundTvComponent } from './pageround-tv/pageround-tv.component';
import { TvDetilsComponent } from './tv-detils/tv-detils.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MovieDitilsComponent,
    PageRoudComponent,
    PageroundTvComponent,
    TvDetilsComponent,
    NavBarComponent,
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
