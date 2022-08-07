import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

declare let $: any;
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  topRated:any = [] ;
  upComing:any = [] ;
  upComing2:any = [] ;
  satDataMovie:any=[] ;
  satDataMovie2:any=[] ;
  satDataTv:any=[] ;
  satDataTv2:any=[] ;
  imgs ='https://image.tmdb.org/t/p/w500';
  constructor(public _HttpService:HttpService)
  {
      _HttpService.getMovieTrend().subscribe((data:any) =>
        {
          for( let i = 0 ; i < 3 ; i++)
          {
            this.satDataMovie.push(data.results[i])
          }
        } , (err:any) => {console.log(err);});
        _HttpService.getMovieTrend2().subscribe((data) =>
        {
          for( let i = 3 ; i < data.results.length ; i++)
          {
            this.satDataMovie2.push(data.results[i])
          }
        } , (err) => {console.log(err);});
        _HttpService.getTvTrend().subscribe(data =>
        {
            for(let i = 0; i < 3 ; i++)
            {
              this.satDataTv.push(data.results[i])
            }
        } , (err) => {console.log(err)});

        _HttpService.getTvTrend2().subscribe(data =>
        {
            for(let i = 3; i < data.results.length ; i++)
            {
              this.satDataTv2.push(data.results[i])
            }
        } , (err) => {console.log(err)});
        _HttpService.getUpComingMovie().subscribe( data =>
        {
            for(let i = 0 ; i < 4 ; i++)
            {
              this.upComing.push(data.results[i])
            }

            for(let i = 4 ; i < 7 ; i++)
            {
              this.upComing2.push(data.results[i])
            }
        })
        _HttpService.getTopRated().subscribe(data =>
        {
          for(let i = 4 ; i < 8 ; i ++)
          {
            this.topRated.push(data.results[i])
          }
          // this.topRated= data.results
        })
  }
  ngOnInit(): void {





  $('#show-cntrol').click(function()
  {
    $('.hold-hind').slideToggle(600).css('display' , 'flex')
  })
  $('#show-cntrol2').click(function()
  {
    $('.hold-hind2').slideToggle(600).css('display' , 'flex')
  })

  //////
  ///////////////////////////////////////////////////


}}
