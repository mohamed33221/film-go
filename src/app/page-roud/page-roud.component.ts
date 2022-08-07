import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { HttpService } from '../http.service';
@Component({
  selector: 'app-page-roud',
  templateUrl: './page-roud.component.html',
  styleUrls: ['./page-roud.component.scss']
})
export class PageRoudComponent implements OnInit {

  trindingMoviePages:any ;
  trindingMovie:any = [] ;
  imgs ='https://image.tmdb.org/t/p/w500';
  openpage:boolean = false;





  constructor(public _ActivatedRoute:ActivatedRoute ,public _HttpService:HttpService , public _Router:Router )
  {
    _HttpService.getOfficalTrindMovie().subscribe( data =>
    {

      this.trindingMovie = data.results
      this.openpage = true
    })


  }


  ngOnInit(): void {



  }

}


