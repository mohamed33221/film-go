import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-pageround-tv',
  templateUrl: './pageround-tv.component.html',
  styleUrls: ['./pageround-tv.component.scss']
})
export class PageroundTvComponent implements OnInit {


  trindingTV:any = [] ;
  imgs ='https://image.tmdb.org/t/p/w500';
  openpage:boolean = false;

  constructor(public _HttpService:HttpService )
  {
    _HttpService.getOfficalTrindTv().subscribe( data =>
    {

      this.trindingTV = data.results
      this.openpage = true
    })
  }

  ngOnInit(): void {
  }

}
