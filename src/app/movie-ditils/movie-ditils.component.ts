import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpService } from '../http.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-movie-ditils',
  templateUrl: './movie-ditils.component.html',
  styleUrls: ['./movie-ditils.component.scss']
})
export class MovieDitilsComponent implements OnInit {

  id:any;
  movies:any;
  productionCompanies:any[] =[];
  productionCountries:any[] =[];
  recommendMoive:any[] =[];
  openpage:boolean = false;
  imgs ='https://image.tmdb.org/t/p/w500';
  constructor(public _ActivatedRoute:ActivatedRoute , public _HttpService:HttpService , public _Router:Router)
  {

    this.id = _ActivatedRoute.snapshot.paramMap.get('id')
    _HttpService.getMovieDetails(this.id).subscribe((data) =>
      {
        this.movies= data ;
        this.productionCompanies = data.production_companies ;
      })
    _HttpService.moviesRecommend(this.id).subscribe(data =>
      {
          for(let i = 0 ; i < 6  ; i++)
          {
            this.recommendMoive.push(data.results[i])
          }
      })
      this.openpage = true;
  }

  ngOnInit(): void {
    this._Router.routeReuseStrategy.shouldReuseRoute = () => false;

  }

}


