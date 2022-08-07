import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpService } from '../http.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-tv-detils',
  templateUrl: './tv-detils.component.html',
  styleUrls: ['./tv-detils.component.scss']
})
export class TvDetilsComponent implements OnInit {

  id:any;
  tvs:any;
  tvNetwork:any[]= [];
  tvlastEpisode:any;
  tvProductionCompanies:any[]= [];
  tvSeasons:any[]= [];
  tvRecommend:any[]= [];

  imgs ='https://image.tmdb.org/t/p/w500';
  openpage:boolean = false
  private _router: any;
  constructor(public _ActivatedRoute:ActivatedRoute , public _HttpService:HttpService , public _Router:Router)
  {
    this.id = _ActivatedRoute.snapshot.paramMap.get('id');
    _HttpService.getTvDetils(this.id).subscribe(data =>
      {
        this.tvs= data ;
        this.tvNetwork = data.networks ;
        this.tvlastEpisode = data.last_episode_to_air ;
        this.tvProductionCompanies = data.production_companies ;
        this.tvSeasons = data.seasons;
        this.openpage = true ;
      })
    _HttpService.tvRecommend(this.id).subscribe(data =>
      {
        for(let i = 0 ; i < 6 ; i++)
        {
          this.tvRecommend.push(data.results[i])
        }
      })

  }



  ngOnInit(): void {

    this._Router.routeReuseStrategy.shouldReuseRoute = () => false;

  }

}
