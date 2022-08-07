import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MovieDitilsComponent } from './movie-ditils/movie-ditils.component';
import { PageRoudComponent } from './page-roud/page-roud.component';
import { PageroundTvComponent } from './pageround-tv/pageround-tv.component';
import { TvDetilsComponent } from './tv-detils/tv-detils.component';

const routes: Routes =
[
  {path:'' , redirectTo:'home' , pathMatch:'full'},
  {path:'home' , component: HomeComponent},
  {path: 'movedetails/:id' , component: MovieDitilsComponent},
  {path:'trindingmovie' , component:PageRoudComponent},
  {path:'tvshowdetails/:id' , component:TvDetilsComponent},
  {path:'trindingtvshow' , component: PageroundTvComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
